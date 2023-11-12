import { useState } from "react";
import { Navbar } from "./components/Navbar";
// import { Sidebar } from "./components/Sidebar"
import { ToDoList } from "./components/ToDoList";
import { CalendarApp } from "./components/CalendarApp";
import GuildMembers from "./components/GuildMembers";
import Tabs from "./components/Tabs";

function App() {
  const accountId = '12345678901234567';

  const tabsData = [
    {
      index: 'calendar',
      label: "calendar"
    },
    {
      index: 'notebook',
      label: "notebook"
    },
    // {
    //   index: 'machine_translation',
    //   label: "MT services"
    // },
    // {
    //   index: 'translation_memory_groups',
    //   label: "TM groups"
    // },
    // {
    //   index: 'issues_categories',
    //   label: "Issues categories"
    // },
    // {
    //   index: 'translation_checks',
    //   label: "Translation checks"
    // },
    // {
    //   index: 'styleguides',
    //   label: "Style guides"
    // },
  ];
  const defaultTab = "calendar";

  // Use state to manage the active tab dynamically
  const [activeTab, setActiveTab] = useState(defaultTab);

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
              <Tabs active={activeTab}>
                <Tabs.List>
                  {tabsData.map((tab) => (
                    <Tabs.Tab
                      key={tab.index}
                      index={tab.index}
                      as={<button>{tab.label}</button>}
                      onClick={() => setActiveTab(tab.index)}
                    />
                  ))}
                </Tabs.List>
              </Tabs>
            </div>
            <div className="h-[100vh] bg-teal-700 overflow-auto p-4">
              {activeTab === "calendar" && 
                  <CalendarApp />
              }
              {activeTab === "notebook" &&
                  <ToDoList />
              }
            </div>
          </div>
        </div>
        <div className="w-1/4 p-4 border border-r-black">
          <GuildMembers accountId={accountId} />
        </div>
      </div>
    </>
  );
}


export default App


      // <Navbar />
      // <div className="flex">
      //   <ToDoList />
      //   <div className="flex-grow">
      //       
      //   </div>
      //   
      // </div>
      //  <Sidebar />
