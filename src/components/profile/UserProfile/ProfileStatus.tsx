import React, { ChangeEvent } from "react";
import { runInThisContext } from "vm";

type ProfileStatusPropsType = {
    status: string
    updateStatus: (status: string) => void
}
type ProfileStatusType = {
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
        this.onChangeStatus = this.onChangeStatus.bind(this);
    }

    activateEditMode = () => {
        this.setState({editMode: false});
    }
    
    deactivateEditMode = () => {
        this.setState({editMode: true});
        this.props.updateStatus(this.state.status);
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
                            <span onDoubleClick={this.activateEditMode}>{this.props.status || "Status empty"}</span>
                        </div> :
                        <div>
                            <input autoFocus={true} onChange={this.onChangeStatus} onBlur={this.deactivateEditMode} value={this.state.status} />
                        </div>
                }
            </div>
        );
    }
}