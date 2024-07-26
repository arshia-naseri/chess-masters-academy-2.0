import { IoShareOutline, IoCloseCircle } from "react-icons/io5";

function Desktop({ profilePic, contactFile, shareURL }) {
  return (
    <>
      {/* Desktop */}
      <section className="flex h-screen w-screen items-center justify-center bg-slate-50 font-sans max-sm:hidden">
        <main className="relative h-3/4 w-3/4 max-w-xl rounded-lg border border-black border-opacity-20 bg-[rgba(105,100,100,.7)] shadow-2xl shadow-[rgba(0,0,0,.7)]">
          <section className="border-border flex size-full flex-col gap-16 rounded-lg border p-3">
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
            <section className="grid grid-cols-2 bg-slate-400"></section>
          </section>
        </main>
      </section>
    </>
  );
}

export default Desktop;
