import { Calendar } from '@fullcalendar/core'
import googleCalendarPlugin from '@fullcalendar/google-calendar'
import dayGridPlugin from '@fullcalendar/daygrid'

const calendarEl = document.getElementById('calendar')
const calendar = new Calendar(calendarEl, {
  plugins: [
    googleCalendarPlugin,
    dayGridPlugin
  ],
  initialView: 'dayGridMonth',
  events: {
    googleCalendarId: '28r7d1prhjr7h0u9pfutsdoac0@group.calendar.google.com'
  }
})

calendar.render()