import { type } from "os";
import React from "react";

type ProfileStatusPropsType = {
    status: string
}

interface ProfileStatusType {
    editMode: boolean
}


export class ProfileStatus extends React.Component<ProfileStatusPropsType, ProfileStatusType> {
    constructor(props: ProfileStatusPropsType) {
        super(props);
        this.state = {
            editMode: false
        }
    }

    render() {
        return (
            <div>
                {
                    this.state.editMode ?
                        <div>
                            <span>{this.props.status}</span>
                        </div> :
                        <div>
                            <input value={this.props.status} />
                        </div>
                }
            </div>
        );
    }
}