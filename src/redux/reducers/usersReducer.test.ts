import usersReducer, {InitialStateType, followUnfolllowAC, arrUsersType, setUsersAC, setCurrentPageAC} from "./usersReducer";

test("correct follow user", () => {
    //data
    const initialState: InitialStateType= {
        users: [
            {id: 1, followed: true, name: "Dmitrii", status: "I am a developer"},
            {id: 2, followed: true, name: "Alex", status: "I am a doctor"},
            {id: 3, followed: false, name: "Boris", status: "I am a manager"},
            {id: 4, followed: false, name: "Masha", status: "I am a student"},
        ],
        pageSize: 10,
        totalUsersCount: 100,
        currentPage: 1
    }
    let result = usersReducer(initialState, followUnfolllowAC(2));
    //expect
    expect(result.users[1].followed).toBe(false);
});

test("correct set new users", () => {
    //data
    const initialState: InitialStateType= {
        users: [
            {id: 1, followed: true, name: "Dmitrii", status: "I am a developer"},
            {id: 2, followed: true, name: "Alex", status: "I am a doctor"},
            {id: 3, followed: false, name: "Boris", status: "I am a manager"},
            {id: 4, followed: false, name: "Masha", status: "I am a student"},
        ],
        pageSize: 10,
        totalUsersCount: 100,
        currentPage: 1
    }

    const newUsers: arrUsersType = [
        {id: 5, followed: true, name: "Ann", status: "I am a engineer"},
        {id: 6, followed: true, name: "Bob", status: "I am a doctor"},
    ];

    // action
    let result = usersReducer(initialState, setUsersAC(newUsers));
    //expect
    expect(result.users.length).toBe(6);
    expect(result.users[5].name).toBe("Bob");
})

test("correct current page", () => {
    //data
    const initialState: InitialStateType= {
        users: [
            {id: 1, followed: true, name: "Dmitrii", status: "I am a developer"},
            {id: 2, followed: true, name: "Alex", status: "I am a doctor"},
            {id: 3, followed: false, name: "Boris", status: "I am a manager"},
            {id: 4, followed: false, name: "Masha", status: "I am a student"},
        ],
        pageSize: 10,
        totalUsersCount: 100,
        currentPage: 1
    }
    let result = usersReducer(initialState, setCurrentPageAC(2));
    //expect
    expect(result.currentPage).toBe(2);
});

