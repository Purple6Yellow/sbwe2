// import dayGridMonth from '\pakket\node_modules\@fullcalendar\daygrid'; 

//  Boolean, default: true,
// lang:'nl',
// TimeZone: 'UTC',
// Integer, default: 0 (Sunday) 1 = maandag. start van de kalender,



document.addEventListener('DOMContentLoaded', function() {

    var calendarEl = document.getElementById('calendar');
    var calendar = new FullCalendar.Calendar(calendarEl, {
      InitialView: 'dayGridMonth',
    
      headerToolbar: {
        right: 'prev next today',
        center: 'title',
        left: ' '},
    
      titleFormat: {
        month: 'long', 
        year:'numeric',
        weekday: 'short',
        hour:'nummeric',
        minute:'2 digit',
        meridiem: false,
        hour12:true,
        },

      views:{
        Integer: '1',
        locale: 'nl',
        boolean: true,
      },

      events:[
        { title: 'Bezet',
        start: '2024-05-23T15:00:00',
        end: '2024-05-25T23:00:00' },

        { title: 'Beschikbaar',
        start: '2024-05-30T08:00:00',
        end: '2024-05-31T15:00:00' ,
        }],
      
      eventColor: 'yellow',
      eventTextColor: 'black',

  
  });
    calendar.render();
    calendar.setOption('height', 560);
    calendar.updateSize();
  });


