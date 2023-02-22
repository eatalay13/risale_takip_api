export interface ResponseFuncs {
    GET?: Function
    POST?: Function
    PUT?: Function
    DELETE?: Function
}

export interface Team {
    id: Number
    name: String,
    isActive: Boolean
}

export interface User {
    id: Number,
    teamId: Number,
    firstName: String,
    lastName: String,
    username: String,
    password: String,
    isActive: Boolean
}