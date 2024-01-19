// Import React and necessary types
'use client'
import React, { FC } from 'react';
import { JitsiMeeting } from '@jitsi/react-sdk';

// Define types for the component props
type CustomDomainMeetingProps = {
  roomName: string;
  username?: string;
};

const CustomDomainMeeting: FC<CustomDomainMeetingProps> = ({ roomName, username }) => {
  return (
    <JitsiMeeting
      domain="meet.jit.si"
      roomName={roomName} // Use the roomName from props
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
        displayName: username || 'DefaultUsername',
        email: '', // Provide a default value or an empty string for email
      }}
      onApiReady={(externalApi) => {
        // Attach custom event listeners or store the API locally
      }}
      getIFrameRef={(iframeRef) => {
        if (iframeRef) {
          iframeRef.style.height = '600px'; // Adjust the height based on your layout
        }
      }}
    />
  );
};

export default CustomDomainMeeting;
