export default function make(jobSet: JobSet) {
    return reduce(jobSet, jobSet.main)
}

async function reduce(jobSet: JobSet, job: Job): Promise<any> {
    if(job instanceof Array) {
        // @ts-ignore
        for(let j of job) {
            await reduce(jobSet, j)
        }
    }
    else if (typeof(job) === 'string') {
        return reduce(jobSet, jobSet[job])
    }
    else if(job instanceof Function) {
        return await job()
    }
}

export interface JobSet {
    main: Job
    [job: string]: Job
}

export type Job = JobName | JobFunc | Job[]

export type JobName = string

export interface JobFunc {
    (): any | Promise<any>
}
