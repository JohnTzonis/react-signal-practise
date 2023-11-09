import { Navbar } from "./components/Navbar";
// import { Sidebar } from "./components/Sidebar"
import { ToDoList } from "./components/ToDoList";
import { CalendarApp } from "./components/CalendarApp";
import GuildMembers from "./components/GuildMembers";

function App() {
  const accountId = '12345678901234567';

  return (
    <div className="main-wrapper">
      <Navbar />
      <div className="flex">
        <ToDoList />
        <div className="flex-grow">
            <CalendarApp />
        </div>
        <GuildMembers accountId={accountId} />
      </div>
      {/* <Sidebar /> */}
    </div>
  )
}

export default App
