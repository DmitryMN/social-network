
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
    newPost: string
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

export type profilesPropsType = {
    posts: Array<PostType>
    addPost: (post: string) => void
    newPost: string
    addNewPostText:(text: string) => void
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
            ],
            newPost: ""
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
                {id: 4, message: 'Yes it is'}
            ]
        }
    }
}

export const addPost = (post: string) => {
    let newPost: PostType = {
        id: 6,
        post: post,
        likesCount: 7
    }
    storage.state.profiles.posts.push(newPost);
    renderEntireTree();
}

export const addNewPostText = (text: string) => {
    console.log(text);
    storage.state.profiles.newPost = text;
    renderEntireTree();
}

let renderEntireTree = () => {

}

export const subscribe = (observer: () => void) => {
    renderEntireTree = observer;
}
