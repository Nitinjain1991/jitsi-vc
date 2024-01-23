"use client";
import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import JoinRoom from "./screens/JoinRoom";
import ControlSetups from "./screens/ControlSetups";

const HomePage = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<JoinRoom />} />
        {/* <Route path="/kjgbhjhgbjhgjh" element={<ControlSetups />} /> */}
      </Routes>
    </Router>
    <div>
      {roomName ? (
        <CustomDomainMeeting roomName={roomName} />
      ) : (
        <div style={{ margin: "0px 48px",minHeight: "100vh",
        background: "black", }}>
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
