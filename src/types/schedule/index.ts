export interface MountainListResponse {
  mntiListNo: string
  mntiName: string
  mntiLevel: string
  potoFile: string | null
  mntiAdd: string
  height: number
}

export interface Sort {
  empty: boolean
  sorted: boolean
  unsorted: boolean
}

export interface Pageable {
  pageNumber: number
  pageSize: number
  sort: Sort
  offset: number
  paged: boolean
  unpaged: boolean
}

export interface courseListType {
  courseNo: string
  courseName: string
}

export interface PathPoint {
  x: number
  y: number
}

export interface Course {
  courseNo: string
  courseName: string
  mntiTime: number
  mntiDist: string
  mntiLevel: string
  paths: PathPoint[][]
}

export interface registerScheduleResponse {
  mntiName: string
  mntiListNo: string
  mntiLevel: string
  mntiHigh: number
  mntiAdd: string
  mntiPeople: number
  course: Course[]
  potoFiles: string[]
}

export interface ScheduleDataPayload {
  mountainId: string
  courseNo: string
  scheduleDate: string
  memberCount: string
}
