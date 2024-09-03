import {
  IoShareOutline,
  IoChatbubble,
  IoCall,
  IoLogoInstagram,
  IoMail,
} from "react-icons/io5";

import { useRef, useEffect, useState } from "react";

const Phone = ({
  profilePic,
  contactFile,
  phoneNumber,
  formatedPhoneNumber,
  shareURL,
  email,
  LinkedInURL,
  InstagramURL,
  notePara,
}) => {
  const profilePicRef = useRef();
  const phoneNumberRef = useRef();
  const instagaramUrlRef = useRef();
  const emailRef = useRef();
  const [isProfilePicVisible, setIsProfilePicVisible] = useState(true);

  const btnMessageClicked = (e) => {
    var tempLink = document.createElement("a");
    tempLink.href =
      "sms:+1" +
      phoneNumber +
      "?body=Hello%20there!%0AI%20was%20very%20insterested%20in%20your%20program%20and%20was%20hoping%20we%20could%20talk.";

    tempLink.style.display = "none";
    document.body.appendChild(tempLink);
    tempLink.click();
    document.body.removeChild(tempLink);
  };

  // useEffect(() => {
  //   const observer = new IntersectionObserver(([entry]) =>
  //     setIsProfilePicVisible(entry.isIntersecting),
  //   );
  //   observer.observe(profilePicRef.current);
  //   return () => {
  //     observer.disconnect();
  //   };
  // }, [profilePicRef]);

  useEffect(() => {
    const handleScroll = () => {
      // console.log("Scrolled!", window.scrollY);
      if (profilePicRef.current.getBoundingClientRect().bottom <= 0) {
        setIsProfilePicVisible(false);
      } else if (profilePicRef.current.getBoundingClientRect().bottom >= 0) {
        setIsProfilePicVisible(true);
      }
    };

    window.addEventListener("scroll", handleScroll);

    // Cleanup event listener on component unmount
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  return (
    <>
      <section
        className={`${isProfilePicVisible ? "w-screen" : "modifyDetailNav"} font-sans sm:hidden`}
      >
        {/* Top Nav */}
        <nav className="fixed top-0 z-50 flex h-14 w-full items-center justify-between px-5">
          <div
            onClick={shareURL}
            className="btnHeader flex items-center justify-center rounded-full p-2"
          >
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
        <header className="w-full bg-mobileHeader pb-6 pt-1">
          <img
            src={profilePic}
            ref={profilePicRef}
            alt="profile pic"
            className="ml-auto mr-auto mt-10 max-h-52 w-[30vw] max-w-52 rounded-full"
          />
        </header>
        {/* Header2: details and ctrls */}
        <header className="sticky top-0 flex flex-col items-center bg-mobileHeader">
          {!isProfilePicVisible && (
            <img
              src={profilePic}
              alt="profile pic"
              className="ml-auto mr-auto mt-10 max-h-52 w-[10vw] max-w-52 rounded-full"
            />
          )}
          <section
            data-detailsection
            className="flex flex-col items-center justify-center text-5xl font-normal text-primary"
          >
            <div data-name className="text-lg font-thin">
              ALIREZA PAKMEHR
            </div>
            <div>Chess Masters</div>
            <div>Academy</div>
          </section>
          <ul className="relative mb-6 mt-10 inline-flex h-fit w-full justify-between gap-2 px-5">
            <li className="btnCtrls" onClick={btnMessageClicked}>
              <IoChatbubble className="text-primary" />
              <div>message</div>
            </li>
            <li
              className="btnCtrls"
              onClick={() => {
                phoneNumberRef.current.click();
              }}
            >
              <IoCall className="text-primary" />
              <div>call</div>
            </li>
            <li
              className="btnCtrls"
              onClick={() => {
                instagaramUrlRef.current.click();
              }}
            >
              <IoLogoInstagram className="text-primary" />
              <div>instagram</div>
            </li>
            <li
              className="btnCtrls"
              onClick={() => {
                emailRef.current.click();
              }}
            >
              <IoMail className="text-primary" />
              <div>mail</div>
            </li>
          </ul>
        </header>
        <section className="flex flex-col gap-4 bg-black px-2 py-4 text-white">
          <section className="mobileTiles">
            <a ref={phoneNumberRef} href={`tel:+1${phoneNumber}`}>
              <div>phone</div>
              <div>{formatedPhoneNumber}</div>
            </a>
          </section>

          <section className="mobileTiles">
            <a ref={emailRef} href={`mailto:${email}`}>
              <div>work</div>
              <div>{email}</div>
            </a>
          </section>

          <section className="mobileTiles">
            <a href={LinkedInURL}>
              <div>LinkedIn</div>
              <div>{LinkedInURL}</div>
            </a>
          </section>

          <section className="mobileTiles">
            <a ref={instagaramUrlRef} href={InstagramURL}>
              <div>Instagram</div>
              <div>{InstagramURL}</div>
            </a>
          </section>
          <section className="mobileTiles">
            <div>note</div>
            <p>{notePara}</p>
          </section>
        </section>
      </section>
    </>
  );
};

export default Phone;
