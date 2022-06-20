// Terima props lalu tampilkan dalam Contact component
// Kalian bisa membuat CSS sendiri di src/components/Contact.css
import React from 'react';
import './Contact.css';

const Contact = ({data}) => {
    return (
        <div className='contact'>
            <br></br>
            <img src={data.photo} className="imgProfile" alt='gambarprofile'></img>
            <div className='item'>
                <h3>{data.name}</h3>
                <h3>{data.phone}</h3>
                <h3>{data.email}</h3>
            </div>
        </div>
    )
}

export default Contact;