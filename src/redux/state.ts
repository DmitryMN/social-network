
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
    addPost: (post: string) => void
    addNewPostText: (text: string) => void
    dispatch: (action: ActionType) => void
    renderEntireTree: () => void
    subscribe: (observer: () => void) => void
    getState: () => StateType
}

export type profilesPropsType = {
    posts: Array<PostType>
    dispatch: (action: ActionType) => void
    newPost: string

}

export type ActionType = ReturnType<typeof addPostAC> | ReturnType<typeof updateNewPostAC>;

export const addPostAC = (post: string) => {
    return  {type: "ADD_POST", post: post} as const;
};

export const updateNewPostAC = (text: string) => {
    return  {type: "UPDATE_NEW_POST", newText: text} as const;
};

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
    },
    addPost(post: string) {
        let newPost: PostType = {
            id: 6,
            post: post,
            likesCount: 7
        }
        this.state.profiles.posts.push(newPost);
        this.renderEntireTree();
    },

    addNewPostText(text: string) {
        this.state.profiles.newPost = text;
        this.renderEntireTree();
    },

    dispatch(action) {
        if(action.type === "ADD_POST") {
            this.addPost(action.post);
        } else if(action.type === "UPDATE_NEW_POST") {
            this.addNewPostText(action.newText);
        }
    },

    renderEntireTree() {

    },

    subscribe(observer){
        this.renderEntireTree = observer;
    },

    getState() {
        return this.state
    }

}

