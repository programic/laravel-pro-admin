<?php

namespace Programic\ProAdmin\Http\Controllers;

use Illuminate\Contracts\Pagination\LengthAwarePaginator;
use Illuminate\Http\JsonResponse;
use Illuminate\Support\Collection;
use Illuminate\Support\Facades\DB;

class FailedJobsController extends Controller
{
    public function fetchData(): JsonResponse
    {
        return response()->json([
            'failedJobs' => $this->getFailedJobs(),
        ]);
    }

    private function getFailedJobs(): LengthAwarePaginator
    {
        $jobs = DB::table('failed_jobs')->orderByDesc('id')->paginate(3);

        foreach ($jobs as $job) {
            $job->payload = json_decode($job->payload);
        }

        return $jobs;
    }
}
