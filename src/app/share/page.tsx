'use client';

import { createContext, useState } from "react";
import CouterDisplay from '@/components/CounterDisplay';
import CounterButton from "@/components/CounterButton";

export const DataContext = createContext<any>(undefined);

export default function Page() {
    let [counter, setCounter] = useState(0);

    return (
        <DataContext.Provider value={{ counter, setCounter }}>
            <CouterDisplay />
            <CounterButton />
        </DataContext.Provider>
    );
}
