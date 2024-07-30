import {
  IoShareOutline,
  IoCloseCircle,
  IoCopy,
  IoCheckmarkSharp,
} from "react-icons/io5";

function Desktop({
  profilePic,
  contactFile,
  shareURL,
  email,
  LinkedInURL,
  InstagramURL,
  copyText,
  showTooltip,
  notePara,
}) {
  return (
    <>
      {/* Desktop */}
      <section className="flex h-screen w-screen items-center justify-center bg-slate-50 font-sans max-sm:hidden">
        <main className="relative h-3/4 max-h-fit w-3/4 max-w-xl rounded-lg border border-black border-opacity-20 bg-[rgba(105,100,100,.7)] shadow-2xl shadow-[rgba(0,0,0,.7)]">
          <section className="flex size-full max-h-fit flex-col gap-9 rounded-lg border border-border p-3">
            {/* Nav Bar */}
            <nav>
              <ul className="flex items-center justify-end">
                <li className="mr-auto">
                  <IoCloseCircle
                    title="Close"
                    className="size-[25px] cursor-pointer text-primary hover:text-neutral-200"
                  />
                </li>
                <li className="mr-3">
                  <IoShareOutline
                    title="Share"
                    className="size-[25px] cursor-pointer text-primary hover:text-neutral-200"
                    onClick={shareURL}
                  />
                </li>
                <li>
                  <a
                    href={contactFile}
                    download="Chess Masters Academy-Alireza Pakmehr"
                  >
                    <button className="text-md rounded-md border border-border px-1.5 text-primary hover:bg-neutral-400">
                      Add to Contacts
                    </button>
                  </a>
                </li>
              </ul>
            </nav>
            {/* Main Contacts */}
            <section className="ml-auto mr-[40%] flex items-center gap-3">
              <img
                src={profilePic}
                className="size-20 rounded-full"
                alt="Contact Pic"
              />
              <section className="flex flex-col text-primary">
                <div className="text-xl font-medium">Alireza Pakmehr</div>
                <div className="text-base font-light">
                  Chess Masters Academy
                </div>
              </section>
            </section>
            {/* Detailed info */}
            <section className="grid grid-cols-[30%_70%] overflow-x-hidden overflow-y-scroll">
              <div className="cell-attr" dir="rtl">
                mobile
              </div>
              <div className="cell-attr">(437) 220-2743</div>
              <div className="cell-attr" dir="rtl">
                work email
              </div>
              <div className="cell-attr flex items-center gap-2">
                <div className="hide-overflow-text">{email}</div>
                {showTooltip !== "email" ? (
                  <IoCopy
                    size="14px"
                    title="Copy"
                    className="hover:cursor-pointer hover:text-neutral-300"
                    onClick={(e) => copyText(e, email, "email")}
                  />
                ) : (
                  <IoCheckmarkSharp size="18px" />
                )}
              </div>
              <div className="cell-attr" dir="rtl">
                LinkedIn
              </div>
              <div className="cell-attr flex items-center gap-2">
                <a
                  href={LinkedInURL}
                  className="hide-overflow-text hover:underline"
                >
                  {LinkedInURL}
                </a>
                {showTooltip !== "linkedin" ? (
                  <IoCopy
                    size="14px"
                    title="Copy"
                    className="hover:cursor-pointer hover:text-neutral-300"
                    onClick={(e) => copyText(e, LinkedInURL, "linkedin")}
                  />
                ) : (
                  <IoCheckmarkSharp size="18px" />
                )}
              </div>
              <div className="cell-attr" dir="rtl">
                Instagram
              </div>
              <div className="cell-attr flex items-center gap-2">
                <a
                  href={InstagramURL}
                  className="hide-overflow-text hover:underline"
                >
                  {InstagramURL}
                </a>
                {showTooltip !== "instagram" ? (
                  <IoCopy
                    size="14px"
                    title="Copy"
                    className="hover:cursor-pointer hover:text-neutral-300"
                    onClick={(e) => copyText(e, InstagramURL, "instagram")}
                  />
                ) : (
                  <IoCheckmarkSharp size="18px" />
                )}
              </div>
              <div className="cell-attr last-row" dir="rtl">
                note
              </div>
              <div className="cell-attr last-row">
                <p>{notePara}</p>
              </div>
            </section>
          </section>
        </main>
      </section>
    </>
  );
}

export default Desktop;
