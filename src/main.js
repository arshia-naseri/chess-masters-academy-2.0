import React, { useEffect, useState } from "react";
import Desktop from "./Views/desktop";
import Phone from "./Views/phone";
import profilePic from "./Assets/profile-pic.jpg";
import contactFile from "./Assets/Alireza-Pakmehr.vcf";

function Main() {
  const [showTooltip, setShowTooltip] = useState("");
  const LinkedInURL = "http://linkedin.com/in/alireza-pak-mehr-411982288";
  const InstagramURL = "https://www.instagram.com/chessmastersacademy/";
  const email = "rhchessmastersacademy@gmail.com";
  const phoneNumber = "4372202743";
  const notePara =
    "Are you looking to improve your chess skills? I can help! I'm a chess instructor with a FIDE rating, which means I've been recognized internationally for my chess expertise. In North America, especially in the United States, most players have CFC (Chess Federation of Canada) ratings. But FIDE ratings are known worldwide for their reliability and prestige. When you choose me as your chess instructor, you're getting top-notch guidance based on my FIDE rating, ensuring you receive high-quality lessons. Join me on a chess journey that's respected all around the world.";

  const shareURL = async (e) => {
    try {
      await navigator.share({
        url: window.location.href,
        title: "Chess Masters Academy",
      });
    } catch (err) {
      if (err.name === "AbortError") {
        return;
      }
      alert("Something went Wrong please Try again");
    }
  };

  const copyText = async (e, text, dscr = "") => {
    try {
      await navigator.clipboard.writeText(text);
      setShowTooltip(dscr);
      // console.log("DONE");
      // alert("Copied!");
    } catch (err) {
      console.log(err);
    }
  };

  const changePhoneNumberFormat = (strPhone) => {
    let digits = strPhone.replace(/\D/g, "");
    return (
      "(" +
      digits.substring(0, 3) +
      ") " +
      digits.substring(3, 6) +
      "-" +
      digits.substring(6)
    );
  };

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowTooltip("");
    }, 1000);

    // Clean up timer
    return () => clearTimeout(timer);
  }, [showTooltip]);

  return (
    <>
      <Desktop
        profilePic={profilePic}
        contactFile={contactFile}
        shareURL={shareURL}
        email={email}
        LinkedInURL={LinkedInURL}
        InstagramURL={InstagramURL}
        copyText={copyText}
        showTooltip={showTooltip}
        notePara={notePara}
      />
      <Phone
        profilePic={profilePic}
        contactFile={contactFile}
        phoneNumber={phoneNumber}
        formatedPhoneNumber={changePhoneNumberFormat(phoneNumber)}
        shareURL={shareURL}
        email={email}
        LinkedInURL={LinkedInURL}
        InstagramURL={InstagramURL}
        notePara={notePara}
      />
    </>
  );
}

export default Main;
