'use client';

import { useState } from "react";

export default function RadioBox() {
    const [gender, setGender] = useState('male')

    const handleChangeGender = (e: any) => {
        setGender(e.target.value)
    }

    return (
        <>
            <input 
                type="radio"
                onChange={handleChangeGender}
                checked={gender === 'male'}
                value="male"
                name="gender"
            />
            ชาย
            <input 
                type="radio"
                onChange={handleChangeGender}
                checked={gender === "female"}
                value="female"
                name="gender"
            />
            หญิง
            <div>สิ่งที่คุณเลือกคือ {gender}</div>
        </>
    );
}