<?php

namespace Programic\ProAdmin\Http\Controllers;

use Illuminate\Http\JsonResponse;
use stdClass;

class LogsController extends Controller
{
    public function fetchData(): JsonResponse
    {
        return response()->json([
            'logs' => $this->getLogs(),
        ]);
    }

    /**
     *
     * @return stdClass[]
     */
    private function getLogs(): array
    {
        $path = base_path() . '/storage/logs/';
        $dir = scandir($path);

        $logs = [];

        foreach ($dir as $file) {
            if ($file === ".gitignore") {
                continue;
            }
            $filePath = $path . $file;
            if (is_file($filePath)) {
                $content = file_get_contents($filePath);

                $log = new stdClass();
                $log->name = $file;
                $log->content = $content;

                $logs[] = $log;
            }
        }

        return $logs;
    }
}
