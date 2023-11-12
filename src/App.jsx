import { Navbar } from "./components/Navbar";
// import { Sidebar } from "./components/Sidebar"
// import { ToDoList } from "./components/ToDoList";
// import { CalendarApp } from "./components/CalendarApp";
import GuildMembers from "./components/GuildMembers";

function App() {
  const accountId = '12345678901234567';

  return (
      <>
          <div className="w-full">
              <Navbar />
          </div>
          <div className="w-full h-[100vh] flex">
              <div className="w-1/4 p-4 border border-r-black">
                  <p className="text-gray-700">Left Column Content</p>
              </div>
              <div className="w-1/2 border border-r-black">
                  <div className="flex flex-col">
                        <div className="w-full bg-gray-800 h-[80px]">
                              Navbar here
                        </div>
                        <div className="h-[100vh] bg-teal-700 overflow-auto p-4">
                              <p>hello</p>
                              <p>bye</p>
                        </div>
                  </div>
              </div>
              <div className="w-1/4 p-4 border border-r-black">
                  <GuildMembers accountId={accountId} />
              </div>
          </div>
      </>
  )
}

export default App


      // <Navbar />
      // <div className="flex">
      //   <ToDoList />
      //   <div className="flex-grow">
      //       <CalendarApp />
      //   </div>
      //   
      // </div>
      //  <Sidebar />
