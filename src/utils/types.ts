export interface ResponseFuncs {
    GET?: Function
    POST?: Function
    PUT?: Function
    DELETE?: Function
}

export interface Team {
    id: number
    name: string,
    isActive: boolean
}

export interface User {
    id: number,
    teamId: number,
    firstName: string,
    lastName: string,
    username: string,
    password: string,
    isActive: boolean
}