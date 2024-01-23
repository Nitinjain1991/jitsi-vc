"use client";
import React, { FC, useEffect } from "react";
import { JitsiMeeting } from "@jitsi/react-sdk";

const generateNewRoomName = () => {

  const randomString = Math.random().toString(33).substring(4);
  return `newRoomName-${randomString}`;
};

type CustomDomainMeetingProps = {
  roomName: string;
  username?: string;
};

const CustomDomainMeeting: FC<CustomDomainMeetingProps> = ({
  roomName,
  username,
}) => {
  return (
    <JitsiMeeting
      domain="meet.jit.si"
      roomName={roomName}
      configOverwrite={{
        startWithAudioMuted: true,
        disableModeratorIndicator: true,
        startScreenSharing: true,
        enableEmailInStats: false,
      }}
      interfaceConfigOverwrite={{
        DISABLE_JOIN_LEAVE_NOTIFICATIONS: true,
      }}
      userInfo={{
        displayName: username || "DefaultUsername",
        email: "",
      }}
      // onApiReady={(externalApi) => {
      //   // Display an alert with username and roomName
      //   alert(`Welcome ${username || "DefaultUsername"} to room ${roomName}`);
      // }}
      getIFrameRef={(iframeRef) => {
        if (iframeRef) {
          iframeRef.style.height = "100vh";
        }
      }}
    />
  );
};


export default CustomDomainMeeting;
