import React from 'react';
import './Button1.css';
import { useHistory } from 'react-router-dom';

const Button1 = (props) => {
    const history = useHistory();
    
    const nameDirection = () => {
        history.push(`/${props.destination}`);
    };

    return (
        <div className='button1' onClick={()=> nameDirection()}>
            {props.name}
            
        </div>
    );
};

export default Button1
