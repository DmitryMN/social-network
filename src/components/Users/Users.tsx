import React from "react";
import {UsersPropsType} from "./UsersContainer";
import User from "./user/User";
import "./users.css";
import axios from "axios";

class Users extends React.Component<UsersPropsType> {

    constructor(props: UsersPropsType) {
        super(props);
    }

    componentDidMount() {
        axios.get(`https://social-network.samuraijs.com/api/1.0/users/?count=${this.props.users.pageSize}&page=${this.props.users.currentPage}`).then(
            response => {
                this.props.setNewUsers(response.data.items);
            }
        );
    }

    setCurrentPageHandler(currentPage: number) {
        this.props.setCurrentPage(currentPage);
    }

    render() {
        let pagesCount = Math.ceil(this.props.users.totalUsersCount / this.props.users.pageSize);
        let pages = [];
        for(let i = 1; i <= pagesCount; i++) {
            pages.push(i)
        }

        return(
            <div className="users_page">
                <p>Users:</p>
                <div className="users_container">
                    <div>
                        {pages.map(page => <span className={this.props.users.currentPage === page ? "selected" : ""}
                                                 onClick={ () => {this.setCurrentPageHandler(page)}}>{page}</span>)}
                    </div>
                    {
                        this.props.users.users.map(user => <User key={user.id} id={user.id}
                                                            followed={user.followed} name={user.name}
                                                            status={user.status}
                                                            onChangeFollowUnfollow={this.props.onChangeFollowUnfollow} />)
                    }
                </div>
            </div>
        );
    }
}

export default Users;