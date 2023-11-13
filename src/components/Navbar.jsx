// import React, { useState, useEffect } from 'react';
import Register from './Register';

export function Navbar() {
    // const [playerData, setPlayerData] = useState(null);
    // const accountId = "76561198072333063";

    // useEffect(() => {
    //     const fetchPlayerData = async () => {
    //         try {
    //             const response = await fetch(`https://api.opendota.com/api/players/${accountId}`);
    //             const data = await response.json();
    //             setPlayerData(data);
    //         } catch (error) {
    //             console.error('Error fetching player data:', error);
    //         }
    //     };

    //     fetchPlayerData();
    // }, [accountId]);

    // console.log("Navbar rendered");

    return (
        <>
            <nav className="flex w-full p-2 bg-purple-950 items-center h-[80px]">
                <label className="flex-grow p-2.5 text-2xl text-shadow-dark font-semibold">Ol`School Gaming</label>
                <Register />
            </nav>
        </>
    );
}
