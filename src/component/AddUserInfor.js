import React from "react";

class AddUserInfor extends React.Component {

    state = {
        name: "Nhu Y",
        age: 22,
        address: "HCM"
    }

    handleOnChangeName = (envent) => {
        this.setState({
            name: envent.target.value
        })
    }

    handleOnChangeAge = (envent) => {
        this.setState({
            age: envent.target.value
        })
    }

    handleOnChangeAddress = (envent) => {
        this.setState({
            address: envent.target.value
        })
    }

    handleOnSubmit = (envent) => {
        envent.preventDefault()
        console.log(this.state)
        this.props.handleAddNewUser({
            id: Math.floor((Math.random() * 100) + 1) + '-random',
            name: this.state.name,
            age: this.state.age,
            address: this.state.address
        })
    }

    render() {
        return (
            <>
                <div>Toi ten la {this.state.name} hien tai {this.state.age} tuoi</div>
                <form onSubmit={(envent) => this.handleOnSubmit(envent)}>
                    <div>
                        <input
                            type="text"
                            onChange={(envent) => this.handleOnChangeName(envent)}
                            placeholder="Your Name.."
                        />
                    </div>
                    <div>
                        <input
                            // value={this.state.age}
                            type="text"
                            onChange={(envent) => this.handleOnChangeAge(envent)}
                            placeholder="Your Age..."
                        />
                    </div>
                    <div>
                        <input
                            // value={this.state.address}
                            type="text"
                            onChange={(envent) => this.handleOnChangeAddress(envent)}
                            placeholder="Your Address..."
                        />
                    </div><br />
                    <button type="submit" >Submit</button>
                </form>
            </>
        )
    }

}

export default AddUserInfor