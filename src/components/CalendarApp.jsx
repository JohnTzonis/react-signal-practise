import { useState } from "react";
import format from "date-fns/format";
import getDay from "date-fns/getDay";
import parse from "date-fns/parse";
import startOfWeek from "date-fns/startOfWeek";
import { Calendar, dateFnsLocalizer } from "react-big-calendar";
import "react-big-calendar/lib/css/react-big-calendar.css";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import TimePicker from 'react-time-picker'
import enUSLocale from "date-fns/locale/en-US";

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

const events = [
    {
        title: "Big Meeting",
        allDay: true,
        start: new Date(2021, 6, 0),
        end: new Date(2021, 6, 0),
    },
    {
        title: "Vacation",
        start: new Date(2021, 6, 7),
        end: new Date(2021, 6, 10),
    },
    {
        title: "Conference",
        start: new Date(2021, 6, 20),
        end: new Date(2021, 6, 23),
    },
];

export function CalendarApp() {
    const [newEvent, setNewEvent] = useState({ title: "", start: null, end: null });
    const [allEvents, setAllEvents] = useState(events);

    function handleAddEvent() {
        // Check if start and end dates are selected
        if (newEvent.start && newEvent.end) {
            // Check for date clash with existing events
            for (let i = 0; i < allEvents.length; i++) {
                const d1 = new Date(allEvents[i].start);
                const d2 = new Date(newEvent.start);
                const d3 = new Date(allEvents[i].end);
                const d4 = new Date(newEvent.end);

                if ((d1 <= d2 && d2 <= d3) || (d1 <= d4 && d4 <= d3)) {
                    alert("CLASH");
                    return; // Exit function if there is a clash
                }
            }

            // Add the new event
            setAllEvents([...allEvents, newEvent]);
            // Reset the newEvent state
            setNewEvent({ title: "", start: null, end: null });
        } else {
            alert("Please select both start and end dates");
        }
    }

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
                    selected={newEvent.start}
                    onChange={(date) => setNewEvent({ ...newEvent, start: date, end: date })}
                    selectsStart
                    startDate={newEvent.start}
                    endDate={newEvent.end}
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
