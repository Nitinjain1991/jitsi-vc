// Import React and necessary types
"use client";
import React, { useState, ChangeEvent } from "react";
import CustomDomainMeeting from "./CustomDomainMeeting";

// Define types for the component
const HomePage = () => {
  const [roomName, setRoomName] = useState<string | null>(null);
  const [inputRoomName, setInputRoomName] = useState<string>("");

  const handleNewMeetingClick = () => {
    // Generate a random 9-digit code
    const randomCode = Math.floor(100000000 + Math.random() * 900000000);
    setRoomName(randomCode.toString());
  };

  const handleJoinClick = () => {
    // Use the inputRoomName as the roomName
    setRoomName(inputRoomName);
  };

  return (
    <div>
      {roomName ? (
        <CustomDomainMeeting roomName={roomName} />
      ) : (
        <div>
          <button onClick={handleNewMeetingClick}>New Meeting</button>
          <br />
          <br />
          <label>
            Room Id :
            <input
              type="text"
              value={inputRoomName}
              style={{ color: "black",marginLeft:"10px" }}
              onChange={(e: ChangeEvent<HTMLInputElement>) =>
                setInputRoomName(e.target.value)
              }
            />
          </label>
          <br />
          <br />
          <button onClick={handleJoinClick}>Join</button>
        </div>
      )}
    </div>
  );
};

export default HomePage;
