export interface PaginatedJobs {
    current_page: number,
    data: FailedJob[],
    first_page_url: string,
    from: number,
    last_page: number,
    last_page_url: string,
    next_page_url: string,
    path: string,
    per_page: number,
    prev_page_url: string,
    to: number,
    total: number,
}

export interface FailedJob {
    id: number,
    connection: string,
    queue: string,
    payload: {
        displayName: string,
        job: string,
        maxTries: null,
        delay: null,
        timeout: null,
        timeoutAt: null,
        data: {
            commandName: string,
            command: string,
        },
    },
    exception: string,
    // eslint-disable-next-line camelcase
    failed_at: string,
}
