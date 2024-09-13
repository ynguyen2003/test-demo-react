import React from "react";

class MyComponent extends React.Component {

    state = {
        name: "Nhu Y",
        age: 22,
        address: "HCM"
    }

    handleClick() {
        console.log(">>> check me my button")
        console.log(">>> my name is ", this.state.name)
    }

    handleMouseOver(envent) {
        console.log(envent.pageX)
    }

    render() {
        return (
            <div>
                Toi Ten La {this.state.name} hien dang song o {this.state.address}
                <button onMouseOver={this.handleMouseOver}>Hover me</button>
                <button onClick={this.handleClick}>Click me</button>
            </div>
        )
    }
}

export default MyComponent;