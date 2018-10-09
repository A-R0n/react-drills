import React, { Component } from 'react';

class Login extends Component {
    constructor() {
        super();

        this.state = {
            password: "",
            username: ""
        }
    }


userName(str){
    return this.setState({username : str});
}

passWord(val){
    return this.setState({password : val});
}

dontLook(){
    alert(`Username: ${this.state.username} Password: ${this.state.password}`);
}


    render() {
        return(
            <div className="Login">
                <input className="Login-username" type="text" onChange={e => this.userName(e.target.value)}></input>
                <input className="Login-username" type="text" onChange={e => this.passWord(e.target.value)}></input>
                <button onClick={this.dontLook}>Login</button>
            
            
            </div>
        )
    }
}

export default Child;