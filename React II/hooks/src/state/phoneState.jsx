import React, { useState } from "react";

// regex to match numbers between 1 and 10 digits long
const validPhoneNumber = /^\d{1,10}$/;

function PhoneNumber() {
    const [phone, setPhone] = useState('');
    
    const handleChange = ({ target })=> {
        const newPhone = target.value;
        const isValid = validPhoneNumber.test(newPhone);
        if (isValid) {
        setPhone(newPhone);
        console.log(phone)
        }
        // just ignore the event, when new value is invalid
        };

    return (
        <div className='phone'>
        <label for='phone-input'>Phone: </label>
        <input value={phone} onChange={handleChange} id='phone-input' />
        </div>
    );
}

export default PhoneNumber