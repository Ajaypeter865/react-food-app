import React from "react"

class UserClass extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            userInfo : {
                name : 'Default',
                location : 'Default',
                avatar_url : 'https://dummy' 
            }
        }
    }

    async componentDidMount() {
        const data = await fetch('https://api.github.com/users/ajay865')

        const json = await data.json()

        this.setState({
            userInfo : json
        })
        console.log(json);
        
    }
    render() {

        const { id, login,avatar_url} = this.state.userInfo
        return (
            <div className="user-card">
                {/* <img src={avatar_url} alt="" /> */}

                <h2>Name : {login}</h2>
                <h3>Id : {id}</h3>
                {/* <h3>Contact : {login}</h3> */}
            </div>
        )
    }
}

export default UserClass