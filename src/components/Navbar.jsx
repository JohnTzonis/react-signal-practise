import React, { useState, useEffect } from 'react';

export function Navbar() {
    const [playerData, setPlayerData] = useState(null);
    const accountId = "76561198072333063";

    useEffect(() => {
        const fetchPlayerData = async () => {
            try {
                const response = await fetch(`https://api.opendota.com/api/players/${accountId}`);
                const data = await response.json();
                setPlayerData(data);
            } catch (error) {
                console.error('Error fetching player data:', error);
            }
        };

        fetchPlayerData();
    }, [accountId]);

    console.log("Navbar rendered");

    return (
        <>
            <nav className="nav">
                <label>Ol'School Gaming</label>
                <div className="tabs">
                    {playerData && (
                        <a href="/account">{playerData.profile}</a>
                    )}
                    <a href="/">Todos</a>
                </div>
            </nav>
        </>
    );
}
