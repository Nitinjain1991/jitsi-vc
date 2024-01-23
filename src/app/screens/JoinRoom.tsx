"use client";
import Link from "next/link";
import React, { useState, ChangeEvent } from "react";
import { Inter_Tight } from "next/font/google";
import CustomDomainMeeting from "./CustomDomainMeeting";


const InterTight = Inter_Tight({ subsets: ["latin"] });
const JoinRoom = () => {
  const [roomName, setRoomName] = useState<string | null>(null);
  const [inputRoomName, setInputRoomName] = useState<string>("");
  const [username, setUsername] = useState<string>("");

  const handleNewMeetingClick = () => {
    const randomNumber = Math.floor(100000 + Math.random() * 900000);
    const startRandomAlphabets =
      String.fromCharCode(65 + Math.floor(Math.random() * 26)) +
      String.fromCharCode(65 + Math.floor(Math.random() * 26));
    const lastRandomAlphabet = String.fromCharCode(
      65 + Math.floor(Math.random() * 26)
    );
    const codeWithAlphabets =
      startRandomAlphabets +
      randomNumber.toString().slice(0, 7) +
      lastRandomAlphabet;

    setRoomName(codeWithAlphabets);
  };

  const handleJoinClick = () => {
    setRoomName(inputRoomName);
  };

  return (
    <>
      <section className="bg-white">
      {roomName ? (
        <CustomDomainMeeting roomName={roomName} username={username} />
      ) : (
        <div className="max-w-[1080px] mx-auto min-h-screen py-6 flex flex-col px-3">
          <Link href="/">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="110"
              height="22"
              viewBox="0 0 110 22"
              fill="none"
            >
              <path
                d="M31.717 10.0886C31.2285 9.41126 30.605 8.89023 29.8657 8.53854C29.12 8.18034 28.3036 7.84168 27.4294 7.52907C26.5552 7.21645 25.7324 6.96246 24.9931 6.7801C24.2474 6.59774 23.611 6.36328 23.1096 6.09626C22.5954 5.82272 22.3382 5.51011 22.3382 5.17145C22.3382 4.55274 22.6789 4.0708 23.3539 3.72562C24.016 3.38696 24.7553 3.21762 25.5524 3.21762C26.343 3.21762 27.0823 3.38696 27.7508 3.72562C28.4129 4.05777 28.7536 4.5332 28.7665 5.13889H31.9163C31.9099 3.80377 31.3056 2.60542 30.1293 1.58292C28.94 0.553903 27.4037 0.0263672 25.5588 0.0263672C23.7139 0.0263672 22.1775 0.54739 20.9883 1.58292C19.8055 2.61194 19.2013 3.8168 19.2013 5.17145C19.2013 6.20047 19.5484 7.09272 20.2362 7.83517C20.924 8.57763 21.7726 9.14424 22.7625 9.52198C23.7525 9.89972 24.7488 10.2254 25.7324 10.4989C26.7159 10.7724 27.5644 11.0525 28.2587 11.3456C28.9658 11.6451 29.3193 11.9968 29.3193 12.4006C29.3193 13.0389 28.9208 13.5338 28.1429 13.8595C27.3716 14.1851 26.5037 14.3479 25.5588 14.3479C24.6138 14.3479 23.746 14.1851 22.9746 13.8595C22.2097 13.5338 21.8111 13.0519 21.7983 12.4332H18.6484C18.6613 13.7488 19.3041 14.9406 20.5641 15.9696C21.8368 17.0117 23.5146 17.5392 25.5524 17.5392C27.5901 17.5392 29.2679 17.0117 30.5407 15.9696C31.8135 14.9276 32.4563 13.7292 32.4563 12.4006C32.4499 11.5409 32.1992 10.7659 31.717 10.0886Z"
                fill="#0E0E0E"
              />
              <path
                d="M8.67812 0C6.29967 0 4.23621 0.866196 2.54558 2.57905C0.854954 4.29191 0 6.38251 0 8.79223V21.3944H3.34911V15.7544C4.87903 16.9657 6.66608 17.5845 8.65883 17.5845C11.0437 17.5845 13.1072 16.7183 14.7978 15.0054C16.4884 13.2926 17.3498 11.202 17.3498 8.79223C17.3498 6.38251 16.4949 4.29191 14.8042 2.57905C13.12 0.872709 11.0566 0 8.67812 0ZM14.0071 8.79223C14.0071 10.2902 13.4993 11.5341 12.4451 12.5892C11.3973 13.6508 10.163 14.1653 8.67812 14.1653C7.1932 14.1653 5.95898 13.6508 4.91117 12.5892C3.86337 11.5276 3.34911 10.2902 3.34911 8.79223C3.34911 7.29429 3.85694 6.05036 4.91117 4.99529C5.95898 3.93371 7.1932 3.4192 8.67812 3.4192C10.163 3.4192 11.3973 3.93371 12.4451 4.99529C13.4993 6.05687 14.0071 7.29429 14.0071 8.79223Z"
                fill="#0E0E0E"
              />
              <path
                d="M66.4809 0C64.141 0 62.3346 0.937839 61.1133 2.79398C59.8855 0.944352 58.0856 0 55.7457 0C53.7658 0 52.0752 0.690353 50.7252 2.05152C49.3753 3.41269 48.6875 5.13206 48.6875 7.15753V17.3109H52.0366V7.15753C52.0366 6.11549 52.3902 5.2558 53.123 4.51986C53.8558 3.78392 54.7108 3.42571 55.7393 3.42571C56.7678 3.42571 57.6227 3.78392 58.3556 4.51986C59.0884 5.2558 59.4419 6.122 59.4419 7.15753V17.3109H62.791V7.15753C62.791 6.11549 63.1446 5.2558 63.8774 4.51986C64.6102 3.78392 65.4652 3.42571 66.4937 3.42571C67.5222 3.42571 68.3772 3.78392 69.11 4.51986C69.8428 5.2558 70.1964 6.122 70.1964 7.15753V17.3109H73.5455V7.15753C73.5455 5.12555 72.8641 3.41269 71.5077 2.05152C70.1514 0.690353 68.4608 0 66.4809 0Z"
                fill="#0E0E0E"
              />
              <path
                d="M83.7152 0C81.3368 0 79.2733 0.866196 77.5827 2.57905C75.8921 4.29191 75.0371 6.38251 75.0371 8.79223C75.0371 11.202 75.8985 13.2925 77.5891 15.0054C79.2797 16.7183 81.3496 17.5845 83.7281 17.5845C85.7208 17.5845 87.5079 16.9723 89.0378 15.7544V17.3109H92.3869V8.79223C92.3869 6.38251 91.532 4.29191 89.8413 2.57905C88.1571 0.872708 86.0937 0 83.7152 0ZM89.0442 8.79223C89.0442 10.2902 88.5364 11.5341 87.4822 12.5892C86.4344 13.6508 85.2002 14.1653 83.7152 14.1653C82.2303 14.1653 80.9961 13.6508 79.9483 12.5892C78.9005 11.5276 78.3862 10.2902 78.3862 8.79223C78.3862 7.29429 78.8941 6.05036 79.9483 4.99529C80.9961 3.93371 82.2303 3.4192 83.7152 3.4192C85.2002 3.4192 86.4344 3.93371 87.4822 4.99529C88.5364 6.05687 89.0442 7.29429 89.0442 8.79223Z"
                fill="#0E0E0E"
              />
              <path
                d="M40.7488 11.3578C40.7488 11.3513 40.7424 11.3513 40.7424 11.3447L36.3326 0.461914H32.3535L38.936 15.1352L35.8119 21.9996H39.611L48.9127 0.461914H45.1586L40.7488 11.3578Z"
                fill="#0E0E0E"
              />
              <path
                d="M97.1756 0.273438H92.8301L98.7183 8.81818L100.885 5.65298L97.1756 0.273438Z"
                fill="#0E0E0E"
              />
              <path
                d="M105.654 11.0065L104.144 8.81818L105.654 6.61035L110 0.273438H105.744L99.8945 8.84423L105.776 17.3108H110L105.654 11.0065Z"
                fill="#0E0E0E"
              />
              <path
                d="M92.8301 17.311H97.1756L100.891 11.9705L98.7183 8.81836L92.8301 17.311Z"
                fill="#0E0E0E"
              />
            </svg>
          </Link>

          <div className="m-auto max-w-[420px] md:p-5">
            <h1
              className={`${InterTight.className} font-semibold text-2xl md:text-meettitle text-bitLessBlack text-center leading-none`}
            >
              Videosprechstunde
            </h1>

            <h2
              className={`${InterTight.className} font-medium text-sm md:text-lg text-bitLessBlack text-center leading-none mt-3 md:mt-6 mb-[40px]`}
            >
              Falls Sie noch keinen Zugangscode erhalten haben kontaktieren Sie
              bitte Ihre Behandler:in.
            </h2>

            <form action="">
              <input required 
                type="text"
                value={username}
                placeholder="Wie möchten Sie sich nennen?"
                className={`${InterTight.className} text-bitLessGray font-normal text-base leading-6 capitalize border border-bitGray p-4 rounded w-full  placeholder:${InterTight.className} placeholder:text-bitLessGray placeholder:font-normal placeholder:text-base placeholder:leading-6 placeholder:capitalize `}
                onChange={(e: ChangeEvent<HTMLInputElement>) =>
                  setUsername(e.target.value)
                }
              />
              <input required 
                type="text"
                value={inputRoomName}
                placeholder="Wie lautet Ihr Zugangscode?"
                className={`${InterTight.className} text-bitLessGray font-normal text-base leading-6 capitalize border border-bitGray p-4 rounded w-full mt-4 placeholder:${InterTight.className} placeholder:text-bitLessGray placeholder:font-normal placeholder:text-base placeholder:leading-6 placeholder:capitalize `}
                onChange={(e: ChangeEvent<HTMLInputElement>) =>
                  setInputRoomName(e.target.value)
                }
              />
              <button
                onClick={handleJoinClick}
                type="submit"
                className="${InterTight.className} text-bitLessBlack font-medium text-base leading-[26px] rounded hover:bg-[#eeeeee9d] duration-300 bg-[#EEE] p-4 w-full mt-4"
              >
                Beitreten
              </button>
            </form>

            <div>
              <h4
                className={`${InterTight.className} font-medium text-sm md:text-lg text-bitLessBlack text-center leading-none my-4 capitalize`}
              >
                oder
              </h4>

              <button onClick={handleNewMeetingClick} className="${InterTight.className} text-bitLessBlack font-medium text-base leading-[26px] rounded hover:bg-[#eeeeee9d] duration-300 bg-[#EEE] p-4 w-full capitalize">
                ein neues Meeting starten
              </button>
            </div>
          </div>
        </div>
      )}  
      </section>
    </>
  );
};

export default JoinRoom;
