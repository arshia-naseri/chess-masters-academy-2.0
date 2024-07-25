import { IoShareOutline, IoCloseCircle } from "react-icons/io5";

function Desktop() {
  return (
    <>
      {/* Desktop */}
      <section className="flex h-screen w-screen items-center justify-center bg-slate-50 font-sans max-sm:hidden">
        <main className="relative h-3/4 w-3/4 max-w-xl rounded-lg border border-black border-opacity-20 bg-[rgba(105,100,100,.7)] shadow-2xl shadow-[rgba(0,0,0,.7)]">
          <section className="border-border size-full rounded-lg border p-3">
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
                  />
                </li>
                <li>
                  <button className="text-primary border-border text-md rounded-md border px-1.5 hover:bg-neutral-400">
                    Add to Contacts
                  </button>
                </li>
              </ul>
            </nav>
          </section>
        </main>
      </section>
    </>
  );
}

export default Desktop;
