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
            editMode: true
        }
    }

    activateEditMode = () => {
        this.setState({editMode: false});
    }
    
    deactivateEditMode = () => {
        this.setState({editMode: true});
    }

    render() {
        return (
            <div>
                {
                    this.state.editMode ?
                        <div>
                            <span onDoubleClick={this.activateEditMode}>{this.props.status}</span>
                        </div> :
                        <div>
                            <input autoFocus={true} onBlur={this.deactivateEditMode} value={this.props.status} />
                        </div>
                }
            </div>
        );
    }
}