

export type LocationType = {
    city: string
    country: string
}

export type UsersType = {
    id: number
    followed: boolean
    fullName: string
    status: string
    location: LocationType
}

export type InitialStateType = {
    users: Array<UsersType>
}

const initialState: InitialStateType= {
    users: [
        {id: 1, followed: true, fullName: "Dmitrii", status: "I am a developer", location: {city: "Moscow", country: "Russia"}},
        {id: 2, followed: true, fullName: "Alex", status: "I am a doctor", location: {city: "Minsk", country: "Belarus"}},
        {id: 3, followed: false, fullName: "Boris", status: "I am a manager", location: {city: "Kiev", country: "Ukraine"}},
        {id: 4, followed: false, fullName: "Masha", status: "I am a student", location: {city: "Moscow", country: "Russia"}},
    ]
}