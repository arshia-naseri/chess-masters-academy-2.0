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
}) {
  return (
    <>
      {/* Desktop */}
      <section className="flex h-screen w-screen items-center justify-center bg-slate-50 font-sans max-sm:hidden">
        <main className="relative h-3/4 w-3/4 max-w-xl rounded-lg border border-black border-opacity-20 bg-[rgba(105,100,100,.7)] shadow-2xl shadow-[rgba(0,0,0,.7)]">
          <section className="border-border flex size-full flex-col gap-9 rounded-lg border p-3">
            {/* Nav Bar */}
            <nav>
              <ul className="flex items-center justify-end">
                <li className="mr-auto">
                  <IoCloseCircle
                    title="Close"
                    className="text-primary size-[25px] cursor-pointer hover:text-neutral-200"
                  />
                </li>
                <li className="mr-3">
                  <IoShareOutline
                    title="Share"
                    className="text-primary size-[25px] cursor-pointer hover:text-neutral-200"
                    onClick={shareURL}
                  />
                </li>
                <li>
                  <a
                    href={contactFile}
                    download="Chess Masters Academy-Alireza Pakmehr"
                  >
                    <button className="text-primary border-border text-md rounded-md border px-1.5 hover:bg-neutral-400">
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
              <section className="text-primary flex flex-col">
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
                <p>
                  Are you looking to improve your chess skills? I can help! I'm
                  a chess instructor with a FIDE rating, which means I've been
                  recognized internationally for my chess expertise. In North
                  America, especially in the United States, most players have
                  CFC (Chess Federation of Canada) ratings. But FIDE ratings are
                  known worldwide for their reliability and prestige. When you
                  choose me as your chess instructor, you're getting top-notch
                  guidance based on my FIDE rating, ensuring you receive
                  high-quality lessons. Join me on a chess journey that's
                  respected all around the world.
                </p>
              </div>
            </section>
          </section>
        </main>
      </section>
    </>
  );
}

export default Desktop;
