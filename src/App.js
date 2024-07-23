import { LuXCircle } from "react-icons/lu";

function App() {
  return (
    <>
      {/* Desktop */}
      <section className=" max-sm:hidden w-screen h-screen bg-slate-50 flex justify-center items-center">
        <main className=" bg-gray-400 max-w-xl w-3/4 h-3/4 border border-black border-opacity-20 rounded-md">
          <nav>
            <ul>
              <li>
                <LuXCircle />
              </li>
            </ul>
          </nav>
        </main>
      </section>
    </>
  );
}

export default App;
