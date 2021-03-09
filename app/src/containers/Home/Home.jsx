import React from 'react'
import Button1 from '../../components/Buttons/Button1'
import './Home.css'


const Home = (props) => {
    return (
        <div className='homeContainer'>
            <Button1 name='Register' destination='register'/>
        </div>
    )
}

export default Home
