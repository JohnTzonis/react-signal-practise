import { useState } from "react";
import format from "date-fns/format";
import getDay from "date-fns/getDay";
import parse from "date-fns/parse";
import startOfWeek from "date-fns/startOfWeek";
import { Calendar, dateFnsLocalizer } from "react-big-calendar";
import "react-big-calendar/lib/css/react-big-calendar.css";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import enUSLocale from "date-fns/locale/en-US";
import axios from "axios";

const locales = {
    "en-US": enUSLocale,
};

const localizer = dateFnsLocalizer({
    format,
    parse,
    startOfWeek,
    getDay,
    locales,
});


export function CalendarApp() {
    const [newEvent, setNewEvent] = useState({ title: "", date: null });

    async function handleAddEvent() {
        // Check if date and end dates are selected
        if (!newEvent.title || !newEvent.date) {
            alert("Please add a title & select a date");
            return;
        }
    
        try {
            // Send the new event data to the server for insertion into the database
            const response = await axios.post('http://localhost:3000/create-event', newEvent);
    
            // If the event is successfully created in the database, update the calendar
            if (response.data.event) {
                setNewEvent({ title: "", date: null }); // Clear the form
                // You might want to fetch the updated events from the server and update the calendar
                // For simplicity, assuming that the server returns the updated events in the response
                // const updatedEvents = await fetchUpdatedEvents();
                // setAllEvents(updatedEvents);
            }
        } catch (error) {
            console.error('Error adding event:', error);
            console.error('Error response:', error.response); // Log the detailed error response
            alert('Error adding event. Please try again.');
        }
    }

    // Assuming 'allEvents' is a state variable containing the events for the calendar
    const allEvents = []; // Replace this with your actual events

    return (
        <div className="calendar">
            <div className="date-section">
                <input
                    className="m-1 text-gray-700 py-1 px-2 font-semibold min-w-[250px]"
                    type="text"
                    placeholder="Add Title"
                    style={{ width: "20%", marginRight: "10px" }}
                    value={newEvent.title}
                    onChange={(e) => setNewEvent({ ...newEvent, title: e.target.value })}
                />
                <DatePicker
                    className="m-1 text-gray-700 py-1 px-2 font-semibold max-w-[120px]"
                    placeholderText="Select Date"
                    // style={{ padding: "10px" }}
                    selected={newEvent.date}
                    onChange={(date) => setNewEvent({ ...newEvent, date: date })}
                    selectsStart
                    startDate={newEvent.date}
                    dateFormat="MM/dd/yyyy"
                />
                <button style={{ margin: "10px" }} onClick={handleAddEvent}>
                    Add Event
                </button>
            </div>
            <Calendar
                localizer={localizer}
                events={allEvents}
                startAccessor="start"
                endAccessor="end"
                style={{
                    color: "red",
                    backgroundColor: "black",
                    height: 300,
                    margin: "24px",
                    overflow: "auto",
                    zIndex: 0,
                }}
            />
        </div>
    );
}
