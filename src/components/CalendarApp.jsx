import { useState, useEffect } from "react";
import startOfWeek from "date-fns/startOfWeek";
import "react-big-calendar/lib/css/react-big-calendar.css";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import axios from "axios";




export function CalendarApp() {
    const [newEvent, setNewEvent] = useState({ title: "", date: null });
    const [allEvents, setAllEvents] = useState([]);

    async function handleAddEvent() {
        if (!newEvent.title || !newEvent.date) {
            alert("Please add a title & select a date");
            return;
        }
    
        try {
            // Send the new event data to the server for insertion into the database
            const response = await axios.post('http://localhost:3000/create-event', newEvent);
    
            // If the event is successfully created in the database, update the calendar
            if (response.data.event) {
                setNewEvent({ title: "", date: null }); // Clearing the form
            }
        } catch (error) {
            // console.error('Error adding event:', error);
            // console.error('Error response:', error.response); // Log the detailed error response
            alert('Error adding event. Please try again.');
        }
    }
    async function getEvents() {
        try {
          const response = await axios.get("http://localhost:3000/get-events");
          setAllEvents(response.data.events);
        } catch (error) {
          console.error("Error fetching all events:", error);
        }
      }
    
      useEffect(() => {
        getEvents();
      }, []);
    
      const weekdays = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
    
      const getWeekdayHeaders = () => {
        return weekdays.map((weekday, index) => (
          <th key={index} className="calendar-header">
            {weekday}
          </th>
        ));
      };
    
      const getEventList = (date) => {
        const eventsOnDate = allEvents.filter(
          (event) =>
            new Date(event.date).toDateString() === new Date(date).toDateString()
        );
    
        return eventsOnDate.map((event, index) => (
          <li key={index}>{event.title}</li>
        ));
      };
    
      const getCalendarCells = () => {
        const startDate = startOfWeek(new Date());
        const rows = [];
    
        for (let i = 0; i < 5; i++) {
          const days = [];
    
          for (let j = 0; j < 7; j++) {
            const currentDate = new Date(
              startDate.getFullYear(),
              startDate.getMonth(),
              startDate.getDate() + i * 7 + j
            );
    
            days.push(
              <td key={j} className="relative border border-white h-[150px] max-h-[150px] w-[100px] min-w-[100px] overflow-y-auto">
                <div className="absolute left-1 top-1 text-teal-200 text-shadow-default">{currentDate.getDate()}</div>
                <ul className="flex flex-col items-center pt-5 overflow-y-auto h-full">{getEventList(currentDate)}</ul>
              </td>
            );
          }
    
          rows.push(<tr key={i}>{days}</tr>);
        }
    
        return rows;
      };
    

    return (
        <div className="container mx-auto">
            <div>
                <div className="wrapper bg-zinc-400 p-2 rounded shadow w-full flex z-1">
                    <div className="bg-inherit">
                        <input
                            className="m-1 text-gray-700 py-1 px-2 border border-black font-semibold min-w-[250px]"
                            type="text"
                            placeholder="Add Title"
                            style={{ width: "20%", marginRight: "10px" }}
                            value={newEvent.title}
                            onChange={(e) => setNewEvent({ ...newEvent, title: e.target.value })}
                        />
                    </div>
                    <DatePicker
                        className="m-1 text-gray-700 py-1 px-2 border border-black font-semibold max-w-[140px]"
                        placeholderText="Select Date"
                        // style={{ padding: "10px" }}
                        selected={newEvent.date}
                        onChange={(date) => setNewEvent({ ...newEvent, date: date })}
                        selectsStart
                        startDate={newEvent.date}
                        dateFormat="MM/dd/yyyy"
                    />
                    <button className="m-2 text-gray-700 font-semibold border border-black" onClick={handleAddEvent}>
                        <span className="px-4 py-2 border-b-4 bg-black border-teal-200 text-teal-200 hover:bg-teal-200 hover:text-black hover:border-black transition-all duration-200">
                            Add Event
                        </span>
                    </button>
                </div>
                    <table className="w-full">
                        <thead className="bg-black">
                            <tr>{getWeekdayHeaders()}</tr>
                        </thead>
                        <tbody>
                            {getCalendarCells()}
                        </tbody>
                    </table>
            </div>
            
        </div>
    );
}
