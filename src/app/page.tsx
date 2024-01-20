
"use client";
import React, { useState, ChangeEvent } from "react";
import CustomDomainMeeting from "./CustomDomainMeeting";


const HomePage = () => {
  const [roomName, setRoomName] = useState<string | null>(null);
  const [inputRoomName, setInputRoomName] = useState<string>("");

  const handleNewMeetingClick = () => {
    const randomNumber = Math.floor(100000 + Math.random() * 900000);

    const startRandomAlphabets =
      String.fromCharCode(65 + Math.floor(Math.random() * 26)) +
      String.fromCharCode(65 + Math.floor(Math.random() * 26));

    const lastRandomAlphabet = String.fromCharCode(
      65 + Math.floor(Math.random() * 26)
    );
    const codeWithAlphabets =
      startRandomAlphabets +randomNumber.toString().slice(0, 7)+
      lastRandomAlphabet;

    setRoomName(codeWithAlphabets);
  };
  const btns = {
    color: "white",
    backgroundColor: "black",
    border: "2px solid white",
    padding: "20px 48px",
    margin: "40px 0px",
  };

  const handleJoinClick = () => {
    setRoomName(inputRoomName);
  };

  return (
    <div>
      {roomName ? (
        <CustomDomainMeeting roomName={roomName} />
      ) : (
        <div style={{ margin: "20px 48px" }}>
          <button onClick={handleNewMeetingClick} style={{ ...btns}}>
            New Meeting
          </button>
          <br />
          <br />

          <form action="">
            <label
              style={{
                color: "white",
                display: "block",
                marginBottom: "12px",
              }}
            >
              Room Id :
            </label>
            <input
              type="text"
              value={inputRoomName}
              style={{
                color: "white",
                display: "block",
          
                background: "transparent",
                border: "2px solid white",
                marginBottom: "12px",
                padding: "12px", 
              }}
              onChange={(e: ChangeEvent<HTMLInputElement>) =>
                setInputRoomName(e.target.value)
              }
            />
            <button
              onClick={handleJoinClick}
              style={{ ...btns, margin: "0px" }}
            >
              Join
            </button>
          </form>
        </div>
      )}
    </div>
  );
};

export default HomePage;
