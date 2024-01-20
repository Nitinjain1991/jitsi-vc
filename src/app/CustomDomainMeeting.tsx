"use client";
import React, { FC, useEffect } from "react";
import { JitsiMeeting } from "@jitsi/react-sdk";
import { useNavigate, useParams } from "react-router-dom";

const generateNewRoomName = () => {
  const randomString = Math.random().toString(33).substring(4);
  return `newRoomName-${randomString}`;
};

type CustomDomainMeetingProps = {
  username?: string;
};

const CustomDomainMeeting: FC<CustomDomainMeetingProps> = ({ username }) => {
  const navigate = useNavigate();
  const { roomName } = useParams<{ roomName: string }>();

  useEffect(() => {
    const timer = setTimeout(() => {
      const newRoomName = generateNewRoomName();
      console.log("Timer expired. Generating new room name:", newRoomName);
      navigate(`/new-meeting/${newRoomName}`);
    }, 240000);

    return () => {
      clearTimeout(timer);
      console.log("Timer cleared.");
    };
  }, [navigate]);

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
      getIFrameRef={(iframeRef) => {
        if (iframeRef) {
          iframeRef.style.height = "600px";
        }
      }}
    />
  );
};

export default CustomDomainMeeting;
