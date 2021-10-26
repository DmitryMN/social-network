
export type PostType = {
    id: number
    post: string
    likesCount: number
}

export type UserType = {
    id: number
    user: string
}

export type MessageType = {
    id: number
    message: string
}

export type ProfilesType = {
    posts: Array<PostType>
}

export type DialogsType = {
    users: Array<UserType>
    messages: Array<MessageType>
}

export type StateType = {
    profiles: ProfilesType
    dialogs: DialogsType
}

export type StorageType = {
    state: StateType
}

export const storage: StorageType = {

    state: {

        profiles: {
            posts: [
                {id: 1, post: 'Its my first post', likesCount: 12},
                {id: 2, post: 'Hello, how are you', likesCount: 10},
                {id: 3, post: 'I am fine', likesCount: 5},
                {id: 4, post: 'Good', likesCount: 8},
                {id: 5, post: 'See you', likesCount: 3}
            ]
        },

        dialogs: {
            users: [
                {id: 1, user: 'Max Volkov'},
                {id: 2, user: 'Alex Brown'},
                {id: 3, user: 'Ann Kolinz'},
                {id: 4, user: 'Kriss Nollan'}
            ],
            messages: [
                {id: 1, message: 'Hello, how are you'},
                {id: 2, message: 'I am fine'},
                {id: 3, message: 'Are you sleeping?'},
                {id: 4, message: 'No'}
            ]
        }
    }
}
