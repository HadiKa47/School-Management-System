"use client";

import { Calendar, momentLocalizer, Views, View } from "react-big-calendar";
import moment from "moment";
import { calendarEvents } from "@/lib/data";
import "react-big-calendar/lib/css/react-big-calendar.css";
import { useState } from "react";

const localizer = momentLocalizer(moment);

export default function BigCalendar() {
  const [view, setView] = useState<View>(Views.WORK_WEEK);

  const handleOnChangeView = (selectedView: View) => {
    setView(selectedView);
  };

  return (
    <div style={{ height: "100vh", padding: "10px" }}>
      <Calendar
        localizer={localizer}
        events={calendarEvents}
        startAccessor="start"
        endAccessor="end"
        views={{ work_week: true, day: true }}
        view={view}
        onView={handleOnChangeView}
        style={{ height: "100%" }}
        defaultDate={new Date(2024, 7, 12)}
        min={new Date(2024, 7, 12, 8, 0)}
        max={new Date(2024, 7, 12, 18, 0)}
      />
    </div>
  );
}
