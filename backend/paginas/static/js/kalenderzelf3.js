document.addEventListener('DOMContentLoaded', function() {

    var calendarEl = document.getElementById('calendar');
    var calendar = new FullCalendar.Calendar(calendarEl, {
      InitialView: 'timeGridWeek, dayGridMonth, timeGridDay',
      firstDay: 1, //Maandag
    
      headerToolbar: {
        right: 'prev next today',
        center: 'title',
        left: 'dayGridMonth, timeGridWeek, timeGridDay'},

      locale:'nl',
    
 
      events:[
        {
        title:'Bezet',
        start: '2024-05-24T08:00:00',
        end: '2024-05-24T10:00:00' ,
        className: 'fc.event-bezet'},

        { title: 'Bezet',
        start: '2024-05-30',
        end: '2024-05-31' ,
        className: 'fc.event-bezet'},

        { title: 'Bezet',
        start: '2024-05-2T8:00:00',
        end: '2024-05-2T12:00:00' ,
        className: 'fc.event-bezet'},

          {daysOfWeek: ['3'],
          title:'11:00 - 12:00',
          startTime:'11:00:00',
          endTime:'12:00:00',
          className:'fc-event-beschikbaar'},

        {daysOfWeek: ['3'],
        title: '13:00-22:00 bezet',
        startTime:'13:00:00',
        endTime:'22:00:00',
        className: 'fc-event-bezet'},
      ],
      

  
  });
    calendar.render();
    calendar.setOption();
    calendar.updateSize();
  });


