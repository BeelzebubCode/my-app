'use client';

import axios from "axios";

export default function Page() {
    // เมื่อจะมีการยิงค่าออกไปข้างนอกจะใช้ async await เข้ามาเกี่ยว
    // เช่น getQR 
    const doPost = async () => {
        const payload = {
            id: 100,
            name: 'kob'
        }

        await axios.post('http://localhost:3001', payload);
    }

    const doGet = async () => {
        await axios.get('http://localhost:3001');
    }

    const doPut = async () => {
        const payload = {
            id: 100,
            name: 'kob'
        }

        await axios.put('http://localhost:3001/1', payload)
    }

    const doDelete = async () => {
        await axios.delete('http://localhost:3001/1')
    }

    return (
        <>
            <h2>Http Programming : CRUD</h2>
            <button onClick={doPost}>POST</button>
            <button onClick={doGet}>GET</button>
            <button onClick={doPut}>PUT</button>
            <button onClick={doDelete}>DELETE</button>
        </>
    );
};