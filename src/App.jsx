import { Navbar } from "./components/Navbar";
import { Sidebar } from "./components/Sidebar"
import { ToDoList } from "./components/ToDoList";

function App() {

  return (
    <div className="main-wrapper">
      <Navbar />
      <main>
        <ToDoList />
      </main>
      <Sidebar />
    </div>
  )
}

export default App
