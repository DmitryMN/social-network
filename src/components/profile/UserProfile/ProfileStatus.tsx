import React, { ChangeEvent } from "react";

type ProfileStatusPropsType = {
    status: string
}

interface ProfileStatusType {
    editMode: boolean
    status: string
}


export class ProfileStatus extends React.Component<ProfileStatusPropsType, ProfileStatusType> {
    constructor(props: ProfileStatusPropsType) {
        super(props);
        this.state = {
            editMode: true,
            status: this.props.status,
        }
    }

    activateEditMode = () => {
        this.setState({editMode: false});
    }
    
    deactivateEditMode = () => {
        this.setState({editMode: true});
    }

    onChangeStatus(e: ChangeEvent<HTMLInputElement>) {
        this.setState({
            status: e.currentTarget.value
        });
    }

    componentDidUpdate(prevProps: ProfileStatusPropsType, prevState: ProfileStatusType) {
        if(prevProps.status !== this.props.status) {
            this.setState({status: this.props.status});
        }
    }

    render() {
        return (
            <div>
                {
                    this.state.editMode ?
                        <div>
                            <span onDoubleClick={this.activateEditMode}>{this.state.status || "Status empty"}</span>
                        </div> :
                        <div>
                            <input autoFocus={true} onChange={this.onChangeStatus.bind(this)} onBlur={this.deactivateEditMode} value={this.state.status} />
                        </div>
                }
            </div>
        );
    }
}