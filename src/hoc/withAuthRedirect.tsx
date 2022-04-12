import React, {ComponentType} from "react";
import { Redirect } from "react-router-dom";
import {connect} from "react-redux";
import { rootReducerType } from "../redux/store/redux_store";


type MapStateToPropsForRedirectType = {
    isAuth: boolean
}

const mapStateToProps = (state: rootReducerType): MapStateToPropsForRedirectType => {
    return {
        isAuth: state.auth.isAuth
    }
}

export function withAuthRedirect <T>(Component: ComponentType<T>) {

    function RedirectComponent(props: MapStateToPropsForRedirectType) {
        let {isAuth, ...restProps} = props;

        if(isAuth) return <Redirect to='/login' />

        return <Component {...restProps as T} />
    }

    return connect(mapStateToProps)(RedirectComponent);

}