import React, { useEffect, useState } from "react";
import Desktop from "./Views/desktop";
import profilePic from "./Assets/profile-pic.jpg";
import contactFile from "./Assets/Alireza-Pakmehr.vcf";

function App() {
  const [showTooltip, setShowTooltip] = useState("");
  const LinkedInURL = "http://linkedin.com/in/alireza-pak-mehr-411982288";
  const InstagramURL = "https://www.instagram.com/chessmastersacademy/";
  const email = "rhchessmastersacademy@gmail.com";
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
      />
    </>
  );
}

export default App;
