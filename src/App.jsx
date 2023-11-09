import { Navbar } from "./components/Navbar";
// import { Sidebar } from "./components/Sidebar"
import { ToDoList } from "./components/ToDoList";
import { CalendarApp } from "./components/CalendarApp";
import Register from "./components/Register";

function App() {

  return (
    <div className="main-wrapper">
      <Navbar />
      <div className="main-layout">
        <Register />
        <ToDoList />
        <CalendarApp />
      </div>
      {/* <Sidebar /> */}
    </div>
  )
}

export default App
