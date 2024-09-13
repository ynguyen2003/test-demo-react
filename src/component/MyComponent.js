import React from "react";
import AddUserInfor from "./AddUserInfor";
import DisplayInfor from "./DisplayInfor";

class MyComponent extends React.Component {
    state = {
        listUserinfor: [
            { id: 1, name: "Nhu Y", age: "21" },
            { id: 2, name: "Zera", age: "23" },
            { id: 3, name: "ZeraNguyenDev", age: "25" },
        ]
    }

    handleAddNewUser = (userOjb) => {

        this.setState({
            listUserinfor: [userOjb, ...this.state.listUserinfor]
        })
    }

    hanldeDeleteUser = (userId) => {
        let listUserClone = this.state.listUserinfor;
        listUserClone = listUserClone.filter(item => item.id !== userId);
        this.setState({
            listUserinfor: listUserClone
        })
    }

    render() {
        return (
            <>
                <AddUserInfor
                    handleAddNewUser={this.handleAddNewUser}
                />
                <br></br>
                <DisplayInfor
                    listUserinfor={this.state.listUserinfor}
                    hanldeDeleteUser={this.hanldeDeleteUser}
                />
            </>
        )
    }
}

export default MyComponent;