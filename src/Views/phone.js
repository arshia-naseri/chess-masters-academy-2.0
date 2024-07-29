import {
  IoShareOutline,
  IoCloseCircle,
  IoCopy,
  IoCheckmarkSharp,
  IoChatbubble,
  IoCall,
  IoLogoInstagram,
  IoMail,
} from "react-icons/io5";

import { useRef } from "react";

const Phone = ({ profilePic, contactFile, shareURL }) => {
  const observer = new IntersectionObserver((entries) => {
    console.log(entries);
  });

  return (
    <>
      <section className="w-screen bg-black font-sans sm:hidden">
        {/* Top Nav */}
        <nav className="fixed top-0 flex h-14 w-full items-center justify-between px-5">
          <div className="btnHeader flex items-center justify-center rounded-full p-2">
            <IoShareOutline className="size-5 text-white" />
          </div>
          <a
            href={contactFile}
            download="Chess Masters Academy-Alireza Pakmehr"
          >
            <button className="btnHeader rounded-xl p-2 text-xs font-medium text-white">
              Add to Contacts
            </button>
          </a>
        </nav>
        {/* Header1: Only Picture */}
        <header className="w-full bg-mobileHeader pt-1">
          <img
            src={profilePic}
            className="ml-auto mr-auto mt-10 max-h-52 w-[30vw] max-w-52 rounded-full"
          />
        </header>
        {/* Header2: details and ctrls */}
        <header className="sticky top-0 flex flex-col items-center bg-mobileHeader pt-6">
          <section className="flex flex-col items-center justify-center text-5xl font-normal text-primary">
            <div className="text-lg font-thin">ALIREZA PAKMEHR</div>
            <div className="">Chess Masters</div>
            <div className="">Academy</div>
          </section>
          <ul className="relative mb-6 mt-10 inline-flex h-fit w-full justify-between gap-2 px-5">
            <li className="btnCtrls">
              <IoChatbubble className="text-primary" />
              <div>message</div>
            </li>
            <li className="btnCtrls">
              <IoCall className="text-primary" />
              <div>call</div>
            </li>
            <li className="btnCtrls">
              <IoLogoInstagram className="text-primary" />
              <div>instagram</div>
            </li>
            <li className="btnCtrls">
              <IoMail className="text-primary" />
              <div>mail</div>
            </li>
          </ul>
        </header>
        <div className="h-[100rem] bg-red-300 text-white">Hello</div>
      </section>
    </>
  );
};

export default Phone;
