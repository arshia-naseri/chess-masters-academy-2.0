import Desktop from "./Views/desktop";
import profilePic from "./Assets/profile-pic.jpg";
import contactFile from "./Assets/Alireza-Pakmehr.vcf";

function App() {
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

  return (
    <>
      <Desktop
        profilePic={profilePic}
        contactFile={contactFile}
        shareURL={shareURL}
      />
    </>
  );
}

export default App;
