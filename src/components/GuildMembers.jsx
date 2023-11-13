import { useState, useEffect } from 'react';
import axios from 'axios';

const PlayerInfo = () => {
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [playerData, setPlayerData] = useState(null); // State to store player data

  useEffect(() => {
    const fetchStratz = async () => {
      try {
        const API_URL = 'https://api.stratz.com/api/v1/player/112067335'; // Replace YOUR_PLAYER_ID with the actual player's ID

        const response = await axios.get(API_URL, {
          headers: {
            'Authorization': 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJTdWJqZWN0IjoiOGE3MWIwYTMtZTZhYy00YWFmLTg3MTAtMDE2NWZiZmEwNTdiIiwiU3RlYW1JZCI6IjExMjA2NzMzNSIsIm5iZiI6MTY5OTQ5Njc4OCwiZXhwIjoxNzMxMDMyNzg4LCJpYXQiOjE2OTk0OTY3ODgsImlzcyI6Imh0dHBzOi8vYXBpLnN0cmF0ei5jb20ifQ.feFb53G5Kxni9rg4S_pTlUiRl06J86FETgyCp2NEaVI', // Replace YOUR_API_TOKEN with your actual API token
          },
        });

        setPlayerData(response.data);
      } catch (error) {
        console.error('Error fetching player data from Stratz API:', error);
        setError('An error occurred while fetching player data.');
      } finally {
        setLoading(false);
      }
    };

    fetchStratz();
  }, []);

  if (loading) {
    return <p>Loading...</p>;
  }

  if (error) {
    return <p>{error}</p>;
  }
  const playerName = playerData.names[0].name;
  const behaviorScore = playerData.behaviorScore;
  const { avatar } = playerData.steamAccount;

  return (
    <div className="flex flex-col items-center p-2 border-4 border-white bg-purple-900">
      <p className="text-sm text-yellow-200">Player Information</p>
      <p className="text-xs text-yellow-200 px-3">Name:
        <span className="text-lg text-teal-200 p-1">
            {playerName}
        </span>
        </p>
      <img
        className="fit p-1 border-2 border-yellow-300"
        src={avatar}
        alt="Player Avatar"
      />
      <p className="mt-1">Behavior Score: 
        <span className="text-green-500">
            {behaviorScore}
        </span>
      </p>
    </div>
  );
};

export default PlayerInfo;
