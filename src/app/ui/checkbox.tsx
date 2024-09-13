'use client';

import { useState } from "react";

export default function Checkbox() {
    const [javaChecked, setJavaChecked] = useState(false);
    const [phpChecked, setPhpChecked] = useState(false);
    const [csChecked, setCsChecked] = useState(false);

    const handleJavaChgecked = (e: any) => {
        console.log(e.target.checked)
        setJavaChecked(e.target.checked);
    };
    const handlePhpChgecked = (e: any) => setPhpChecked(e.target.checked);
    const handleCsChgecked = (e: any) => setCsChecked(e.target.checked);

    return (
        <>
            <input 
                type="checkbox"
                checked={javaChecked}
                onChange={handleJavaChgecked}
            />
            Java
            <input 
                type="checkbox"
                checked={phpChecked}
                onChange={handlePhpChgecked}
            />
            PHP
            <input 
                type="checkbox"
                checked={csChecked}
                onChange={handleCsChgecked}
            />
            C#
            <div>Your selected items</div>
            <div>Java Checked {javaChecked.toString()}</div>
            <div>PHP Checked {phpChecked.toString()}</div>
            <div>C# Checked {csChecked.toString()}</div>
        </>
    );
}
