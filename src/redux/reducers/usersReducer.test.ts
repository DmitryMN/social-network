import usersReducer, {UsersType, InitialStateType, followUnfolllowAC, arrUsersType, setUsersAC} from "./usersReducer";

test("correct follow user", () => {
    //data
    const initialState: InitialStateType= {
        users: [
            {id: 1, followed: true, fullName: "Dmitrii", status: "I am a developer", location: {city: "Moscow", country: "Russia"}},
            {id: 2, followed: true, fullName: "Alex", status: "I am a doctor", location: {city: "Minsk", country: "Belarus"}},
            {id: 3, followed: false, fullName: "Boris", status: "I am a manager", location: {city: "Kiev", country: "Ukraine"}},
            {id: 4, followed: false, fullName: "Masha", status: "I am a student", location: {city: "Moscow", country: "Russia"}},
        ]
    }
    // action
    let result = usersReducer(initialState, followUnfolllowAC(2));
    //expect
    expect(result.users[1].followed).toBe(false);
});

test("correct set new users", () => {
    //data
    const initialState: InitialStateType= {
        users: [
            {id: 1, followed: true, fullName: "Dmitrii", status: "I am a developer", location: {city: "Moscow", country: "Russia"}},
            {id: 2, followed: true, fullName: "Alex", status: "I am a doctor", location: {city: "Minsk", country: "Belarus"}},
            {id: 3, followed: false, fullName: "Boris", status: "I am a manager", location: {city: "Kiev", country: "Ukraine"}},
            {id: 4, followed: false, fullName: "Masha", status: "I am a student", location: {city: "Moscow", country: "Russia"}},
        ]
    }

    const newUsers: arrUsersType = [
        {id: 5, followed: true, fullName: "Ann", status: "I am a engineer", location: {city: "Moscow", country: "Russia"}},
        {id: 6, followed: true, fullName: "Bob", status: "I am a doctor", location: {city: "Minsk", country: "Belarus"}},
    ];

    // action
    let result = usersReducer(initialState, setUsersAC(newUsers));
    //expect
    expect(result.users.length).toBe(6);
    expect(result.users[5].fullName).toBe("Bob");
})

