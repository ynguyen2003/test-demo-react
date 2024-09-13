import React from "react";
import './DisplayInfor.scss'

class DisplayInfor extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            isShowListUser: true
        }
    }

    handleShowHide = () => {
        this.setState({
            isShowListUser: !this.state.isShowListUser
        })
    }
    render() {
        const { listUserinfor } = this.props
        return (
            <div className="content">
                <div>
                    <span onClick={() => { this.handleShowHide() }}>
                        {this.state.isShowListUser === true ? "Hide" : "Show"} List User
                    </span>
                </div>
                {this.state.isShowListUser &&
                    <>
                        {
                            listUserinfor.map((user) => {
                                return (
                                    <div key={user.id} className={+user.age > 18 ? "green" : "red"}>
                                        <div>My name is {user.name}</div>
                                        <div>I'm {user.age}</div>
                                        <div>
                                            <button onClick={() => this.props.hanldeDeleteUser(user.id)}>Delete</button>
                                        </div>
                                        <hr />
                                    </div>
                                )
                            })
                        }
                    </>
                }
            </div>
        )
    }
}

export default DisplayInfor