import React, { useState, useEffect } from 'react';
import axios from 'axios';

const GuildMembers = () => {
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [members, setMembers] = useState([]);

  useEffect(() => {
    const fetchStratz = async () => {
      try {
        const API_URL = 'https://stratz.com/guilds/278866';

        const response = await axios.get(API_URL, {
          headers: {
            'Authorization': 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJTdWJqZWN0IjoiOGE3MWIwYTMtZTZhYy00YWFmLTg3MTAtMDE2NWZiZmEwNTdiIiwiU3RlYW1JZCI6IjExMjA2NzMzNSIsIm5iZiI6MTY5OTQ5Njc4OCwiZXhwIjoxNzMxMDMyNzg4LCJpYXQiOjE2OTk0OTY3ODgsImlzcyI6Imh0dHBzOi8vYXBpLnN0cmF0ei5jb20ifQ.feFb53G5Kxni9rg4S_pTlUiRl06J86FETgyCp2NEaVI',
          },
        });

        console.log('Axios Response:', response.data);
        setMembers(response.data.guild.members);
      } catch (error) {
        console.error('Error:', error);
        setError('An error occurred while fetching member list.');
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

  return (
    <div className="flex flex-col items-center p-2 border-4 border-white bg-blue-900">
      <p className="text-sm text-yellow-200">Guild Members</p>
      <ul className="list-disc text-yellow-200">
        {members.map((member, index) => (
          <li key={index}>{member.name}</li>
        ))}
      </ul>
    </div>
  );
};

export default GuildMembers;
