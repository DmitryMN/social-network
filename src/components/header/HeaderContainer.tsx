import React from "react";
import Header from "./Header";
import {setAuthUserThunk} from "../../redux/reducers/authReducer";
import {connect} from "react-redux";
import {rootReducerType} from "../../redux/store/redux_store";


export type HeaderMapStatePropsType = {
    isAuth: boolean
    login: string
}

type HeaderContainerPropsType = HeaderMapStatePropsType & { setAuthUserThunk: () => void }

class HeaderContainer extends React.Component<HeaderContainerPropsType> {

    componentDidMount() {
        // authApi.authMe().then(data => {
        //     if(data.resultCode === 0) {
        //         const {id, login, email} = data.data;
        //         this.props.setAuthUserData(id, login, email);
        //     }
        // })
        this.props.setAuthUserThunk();
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

export default connect(mapSateToProps,{setAuthUserThunk})(HeaderContainer);
