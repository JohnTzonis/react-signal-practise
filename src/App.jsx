import { Navbar } from "./components/Navbar";
// import { Sidebar } from "./components/Sidebar"
import { ToDoList } from "./components/ToDoList";
import { CalendarApp } from "./components/CalendarApp";

function App() {

  return (
    <div className="main-wrapper">
      <Navbar />
      <div className="flex">
        <ToDoList />
        <CalendarApp />
      </div>
      {/* <Sidebar /> */}
    </div>
  )
}

export default App
