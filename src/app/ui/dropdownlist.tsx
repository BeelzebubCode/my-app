'use client';

import { useState } from "react";

export default function DropdownList() {
    const [foodList, setFoodList] = useState([
        {name: 'apple'},
        {name: 'mango'},
        {name: 'banana'},
        {name: 'coconut'},
        {name: 'orange'}
    ]);

    const [food, setFood] = useState('apple');

    return (
        <>
            <select onChange={e => setFood(e.target.value)}>
                {foodList.map((item) => (
                    <option value={item.name}>{item.name}</option>
                ))}
            </select>

            <div>Food Selected : {food}</div>
        </>
    );
}













/*
'use client';

import { useState } from "react";

export default function DropdownList() {
    const [food, setFood] = useState('apple')

    return (
        <>
            <select onChange={(e: any) => setFood(e.target.value)}>
                <option value="apple">Apple</option>    
                <option value="mango">Mango</option>    
                <option value="banana">Banana</option>    
            </select>  

            <div>Food Selected: {food}</div>
        </>
    );
}
*/