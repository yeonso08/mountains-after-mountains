export interface Mountain {
  mntiListNo: string
  mntiName: string
  mntiLevel: string
  potoFile: string | null
  mntiAdd: string
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

export interface MountainListResponse {
  content: Mountain[]
  pageable: Pageable
  totalPages: number
  totalElements: number
  last: boolean
  size: number
  number: number
  sort: Sort
  numberOfElements: number
  first: boolean
  empty: boolean
}

export interface courseListType {
  courseNo: string
  courseName: string
}
