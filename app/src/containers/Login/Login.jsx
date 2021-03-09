import React, { Component } from 'react'

export class Login extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
            email: '',
            password: ''
        }
    }

    componentDidMount() {
        //cunado el comopente se monta
    };
    
    componentDidUpdate() {
        //cuando el componente se actualiza
    };

    componentWillUnmount() {
        //cuando el componente se desmonta
    };
    
    render() {
        return (
            <div>
                
            </div>
        )
    }
}

export default Login
