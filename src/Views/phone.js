import {
  IoShareOutline,
  IoCloseCircle,
  IoCopy,
  IoCheckmarkSharp,
  IoChatbubble,
} from "react-icons/io5";

const Phone = ({ profilePic, contactFile, shareURL }) => {
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
        <header className="flex flex-col items-center bg-mobileHeader pt-6">
          <section className="flex flex-col items-center justify-center text-5xl font-normal text-primary">
            <div className="text-lg font-thin">ALIREZA PAKMEHR</div>
            <div className="">Chess Masters</div>
            <div className="">Academy</div>
          </section>
          <ul className="inline-flex w-full">
            <li className="btnCtrls">
              <IoChatbubble className="text-primary" />
              <div className="text-white">message</div>
            </li>
            <li></li>
            <li></li>
            <li></li>
          </ul>
        </header>
        <div className="h-[100rem] bg-red-300 text-white">Hello</div>
      </section>
    </>
  );
};

export default Phone;
