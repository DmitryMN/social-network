import React from "react";
import Header from "./Header";
import {setAuthUserData} from "../../redux/reducers/authReducer";
import {connect} from "react-redux";
import {rootReducerType} from "../../redux/store/redux_store";
import {authApi} from "../../api/api";


export type HeaderMapStatePropsType = {
    isAuth: boolean
    login: string
}

type HeaderContainerPropsType = HeaderMapStatePropsType & { setAuthUserData: (id: number, login: string, email: string) => void }

class HeaderContainer extends React.Component<HeaderContainerPropsType> {

    componentDidMount() {
        // axios.get<ResponseDataType>("https://social-network.samuraijs.com/api/1.0/auth/me",
        //     { withCredentials: true}).then((request) => {
        //     if(request.data.resultCode === 0) {
        //         const {id, login, email} = request.data.data;
        //         this.props.setAuthUserData(id, login, email);
        //     }
        // });
        authApi.authMe().then(data => {
            if(data.resultCode === 0) {
                const {id, login, email} = data.data;
                this.props.setAuthUserData(id, login, email);
            }
        })
    }

    render() {
        return(
            <Header isAuth={this.props.isAuth} login={this.props.login}/>
        );
    }
}

const mapSateToProps = (state: rootReducerType): HeaderMapStatePropsType => {
    return {
        isAuth: state.auth.isAuth,
        login: state.auth.login,
    }
}

export default connect(mapSateToProps,{setAuthUserData})(HeaderContainer);
