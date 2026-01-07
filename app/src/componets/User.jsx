import React from "react"

class UserClass extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            count: 0
        }
    }

    render() {
        const { count } = this.state

        return (
            <div className="user-card">
                <h1>Count : {count}</h1>
                <button onClick={() => {
                    this.setState({
                        count: this.state.count + 1
                    })
                }}>Button Increase</button>
                <h2>Name : Ajay</h2>
                <h3>Location : Kannur</h3>
                <h3>Contact : ajaypeter856</h3>
            </div>
        )
    }
}

export default UserClass