export default function make(jobSet: JobSet) {
    jobSet.main()
}

export interface JobSet {
    main(): any
    [job: string]: JobFunc
}

export interface JobFunc {
    (): any
}
