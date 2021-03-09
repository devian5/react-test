import React, { useState, useEffect } from 'react';//put useEffect
import axios from 'axios'
import Button1 from '../../components/Buttons/Button1';
import './Register.css';


const Register = (props) => {

    const [user,setUser] = useState({
        name: '',
        email: '',
        password: ''
    });


    useEffect(() => {
       if(!user.name === ''){
            console.log(user.name);
       }
    });

    // useEffect(() => {
        
    // }, [])

    // useEffect(() => {
    //     effect
    //     return () => {
    //         cleanup
    //     }
    // }, []);

    

    // const manejaEstado = (ev) => {
    //     setUser({...user, [ev.target.name]: ev.target.type === "number" ? +ev.target.value : ev.target.value});
     
    // }
    const stateHandler = (event) => {
        setUser({...user, 
            [event.target.name]: event.target.type === 'number' ? +event.target.value : event.target.value});

    };

    const sendData = async () => {
        console.log('se ha enviado');

        const body = {
            name: user.name,
            email: user.email,
            password: user.password
        };

        const data = await axios.post('http://localhost:3000/clients', body);
        console.log(data);
    };


    return (
        <div className='viewRegister'>
            <pre>{JSON.stringify(user, null,2)}</pre>
            <div className="formCard">
                <p>Name:</p>
                <input type="text" maxLength="30" placeholder="" name="name" onChange={stateHandler}/>
                <p>Email:</p>
                <input type="email" maxLength="50" placeholder="name@gmail.com" name="email" onChange={stateHandler}/>
                <p>Password:</p>
                <input type="password" maxLength="200" placeholder="" name="" onChange={stateHandler} />
            </div>
            
            <button onClick={()=> sendData()}>Send to Backend</button>
            This is Register
            <Button1 name='Home' destination=''/>
        </div>
    )
}

export default Register
