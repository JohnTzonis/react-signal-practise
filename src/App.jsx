import { useState } from "react";
import { Navbar } from "./components/Navbar";
import { ToDoList } from "./components/ToDoList";
import { CalendarApp } from "./components/CalendarApp";
import Profile from "./components/MemberList";
import Tabs from "./components/Tabs";
// import GuildMembers from "./components/GuildMembers";
import UserProfile from "./components/UserProfile";

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
    {
      index: 'profile',
      label: "profile"
    },
    // ... (other tabs)
  ];

  const defaultTab = "calendar";
  const [activeTab, setActiveTab] = useState(defaultTab);

  return (
    <>
      <div className="w-full">
        <Navbar />
      </div>
      <div className="w-full h-[100vh] flex">
        <div className="w-1/5 p-4 border border-r-black">
          {/* <GuildMembers /> */}
          <span>Under Construction</span>
        </div>
        <div className="w-3/5 border border-r-black">
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
              {activeTab === "calendar" && <CalendarApp />}
              {activeTab === "notebook" && <ToDoList />}
              {activeTab === "profile" && <UserProfile />}
            </div>
          </div>
        </div>
        <div className="w-1/5 p-4 border border-r-black">
          <Profile accountId={accountId} />
        </div>
      </div>
    </>
  );
}

export default App;
