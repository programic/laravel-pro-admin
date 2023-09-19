<?php

namespace Programic\ProAdmin\Http\Controllers;

use Carbon\Carbon;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Foundation\Auth\User;
use Illuminate\Http\JsonResponse;
use Illuminate\Support\Collection;
use ReflectionClass;
use stdClass;

class NotificationsController extends Controller
{
    public function index(): JsonResponse
    {
        return response()->json([
            'notifications' => $this->getNotifications(),
        ]);
    }

    /**
     * This function collects all information about the notifications send by the application.
     *
     * @return object[]
     */
    private function getNotifications(): array
    {
        $path = base_path() . '/app/Notifications/';
        $dir = scandir($path);

        $notifications = [];

        foreach ($dir as $file) {
            $filePath = $path . $file;
            if (is_file($filePath)) {
                $classes = get_declared_classes();
                include $filePath;
                $diff = array_diff(get_declared_classes(), $classes);
                $className = reset($diff);

                $reflect = new ReflectionClass($className);
                $instance = $this->getInstanceMethod($reflect);

                $userInstance = config('auth.providers.users.model');
                $user = (new $userInstance())->first();

                $notification = $this->createNotificationResponse($reflect);
                $notification->channels = $this->runViaMethod($instance, $user);
                $notification->array = null;
                $notification->mail = null;
                $notification->sms = null;
                $notification->fcm = null;

                if (in_array('database', $notification->channels, true)) {
                    $notification->array = $this->runToArray($instance, $user);
                }
                if (in_array('mail', $notification->channels, true)) {
                    $notification->mail = $this->runToMail($instance, $user);
                }
                if (in_array('NotificationChannels\Messagebird\MessagebirdChannel', $notification->channels, true)) {
                    $notification->sms = $this->runToMessagebird($instance, $user);
                }
                if (method_exists($instance, 'toFcm')) {
                    $notification->channels[] = 'Fcm';
                    $notification->fcm = $this->runToFcm($instance, $user);
                }

                $notifications[] = $notification;
            }
        }

        return $notifications;
    }

    /**
     * This function returns an instance of an notification class.
     *
     */
    private function getInstanceMethod(ReflectionClass $class): object
    {
        $bindings = config('pro-admin.bindings');

        $constructor = $class->getMethod('__construct');
        $parameters = $constructor->getParameters();
        $newInstanceParameters = [];

        foreach ($parameters as $parameter) {
            try {
                $parameterNamespace = $parameter->getType()->getName();
                $parameterIndex = $parameter->getPosition();
            } catch (\Throwable $e) {
                throw new \Exception('could not find binding for ' . $parameter . ' in class ' . $class->getFileName());
            }

            $instanceBindings = $bindings['instances'][$class->getName()] ?? null;

            if (isset($bindings['instances'][$class->getName()]) && isset($bindings['instances'][$class->getName()][$parameterIndex])) {
                $parameterInstance = $instanceBindings[$parameterIndex]();
            } elseif ($parameterNamespace === 'string') {
                $parameterInstance = 'random string ';
            } elseif ($parameterNamespace === Collection::class) {
                $parameterInstance = collect();
            } elseif ($parameterNamespace === 'array') {
                $parameterInstance = [];
            } elseif ($parameterNamespace === 'bool') {
                $parameterInstance = true;
            } elseif ($parameterNamespace === 'object') {
                $parameterInstance = new StdClass;
            } else {
                $parameterReflection = new ReflectionClass($parameterNamespace);

                if (isset($bindings['instances'][$class->getName()]) && isset($instanceBindings[$parameterReflection->getName()])) {
                    $parameterInstance = $instanceBindings[$parameterReflection->getName()]();
                } elseif (isset($bindings[$parameterReflection->getName()])) {
                    $parameterInstance = $bindings[$parameterReflection->getName()]();
                } else {
                    try {
                        if ($parameterReflection->getParentClass()->getName() === Model::class) {
                            $parameterInstance = new $parameterNamespace();
                            $parameterInstance = $parameterNamespace::query()->orderByRaw('RAND()')->limit(1)->first();
                        } elseif ($parameterReflection->getParentClass()->getName() === Carbon::class || $parameterReflection->getName() === Carbon::class) {
                            $parameterInstance = Carbon::now();
                        } elseif ($parameterReflection->getParentClass()->getName() === User::class) {
                            $userInstance = config('auth.providers.users.model');
                            $parameterInstance = (new $userInstance())->first();
                        } else {
                            dump('failure');
                            dump($class->getFileName());
                            dump($parameterReflection->getName());
                            dd('end');
                        }
                    } catch (\Throwable $e) {
                        throw new \Exception('could not find binding for ' . $parameterReflection->getFileName() . ' in class ' . $class->getFileName());
                    }
                }
            }

            $newInstanceParameters[] = $parameterInstance;
        }

        $className = $class->getName();
        $instance = new $className(...$newInstanceParameters);

        return $instance;
    }

    /**
     * This function collect the notification information defined in the config file.
     *
     */
    private function createNotificationResponse(ReflectionClass $reflect): object
    {
        $fullName = $reflect->name;
        $namings = config('pro-admin.namings');

        $notification = new stdClass();
        $notification->name = $fullName;
        $notification->description = null;

        if (isset($namings[$fullName])) {
            if (isset($namings[$fullName]['name'])) {
                $notification->name = $namings[$fullName]['name'];
            }
            if (isset($namings[$fullName]['description'])) {
                $notification->description = $namings[$fullName]['description'];
            }
        }

        return $notification;
    }

    /**
     * This function runs the via method of an notification and returns the notification's delivery channels.
     *
     * @return string[]
     */
    private function runViaMethod(object $notification, User $notifiable): array
    {
        $channels = $notification->via($notifiable);

        return $channels;
    }

    /**
     * Runs the notifications ToArray method.
     *
     * @return mixed[]
     */
    private function runToArray(object $notification, User $notifiable): ?array
    {
        if (method_exists($notification, 'toArray')) {
            return $notification->toArray($notifiable);
        }
        return null;
    }

    private function runToMail(object $notification, User $notifiable): ?string
    {
        if (method_exists($notification, 'toMail')) {
            $mail = $notification->toMail($notifiable)->render();
            return (string) $mail;
        }
        return null;
    }

    private function runToMessagebird(object $notification, User $notifiable): ?string
    {
        if (method_exists($notification, 'toMessagebird')) {
            $sms = $notification->toMessagebird($notifiable);
            return $sms->body;
        }
        return null;
    }

    private function runToFcm(object $notification, User $notifiable): object
    {
        $fcm = $notification->toFcm($notifiable);
        $message = new stdClass();
        $message->notification = $fcm->getNotification()->toArray();
        $message->data = $fcm->getData();
        return $message;
    }
}
