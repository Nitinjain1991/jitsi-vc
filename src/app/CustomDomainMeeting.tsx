
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

  useEffect(() => {
    // console.log("Setting up the timer for redirection.");

    const timer = setTimeout(() => {
      const newRoomName = generateNewRoomName();
      console.log("Timer expired. Generating new room name:", newRoomName);
      const redirectionPath = `/new-meeting/${newRoomName}`;
      console.log("Redirecting to:", redirectionPath);
      window.location.href = redirectionPath;
    }, 240000);

    return () => {
      clearTimeout(timer);
      console.log("Timer cleared.");
    };
  }, []);

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
      
      // }}
      getIFrameRef={(iframeRef) => {
        if (iframeRef) {
          iframeRef.style.height = "600px";
        }
      }}
    />
  );
};

export default CustomDomainMeeting;
