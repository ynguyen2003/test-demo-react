import React from "react";

class MyComponent extends React.Component {

    state = {
        name: "Nhu Y",
        age: 22,
        address: "HCM"
    }
    render() {
        return (
            <div>
                Toi Ten La {this.state.name} hien dang song o {this.state.address}
            </div>
        )
    }
}

export default MyComponent;