
document.addEventListener('DOMContentLoaded', function() {
     console.log('pagina is geladen')

    var calendarEl = document.getElementById('calendar');
    console.log('deel 2 werkt ook')
    var calendar = new FullCalendar.Calendar(calendarEl, { // FullCalendar of Calendar gebruiken?? 
       initialView: 'dayGridMonth',
       // initialView: 'dayGridFourWeek',
        firstDay: 1, //Maandag
        locale:'nl',
        headerToolbar: {
            right: 'prev today next',
            center: 'title',
            left: 'timeGridWeek dayGridMonth',
            //left: 'dayGridMonth, timeGridWeek, timeGridDay'
            },
        buttonText:{
            today:'vandaag'},
     
        views: 
            {dayGridMonth: {
                //titleFormat: { year: 'numeric', month: '2-digit', day: '2-digit' },
                type: 'dayGrid',
                duration: {weeks:4},
                buttonText:'Maand',
                fixedWeekCount: false,
                showNonCurrentDates: false},

            timeGridWeek: {
                minTime: '10:00:00',
                maxTime: '23:00:00'},
            },

        dayHeaderFormat:{
            weekday:'long',},

        events:[
            
            //Maandagen - ochtend
            {daysOfWeek: ['1'],
            title:'Aanvraag mogelijk',
            startTime:'8:00',
            endTime:'13:00',
            className:'fc-event-beschikbaar', 
            display: 'block'
            },

            //Maandagen - middag
            {daysOfWeek: ['1'],
            title:'Aanvraag mogelijk',
            startTime:'13:00:00',
            endTime:'18:00:00',
            className:'fc-event-beschikbaar', 
            display: 'block',
            displayEventEnd: true
            },

            //Maandagen - avond
            {daysOfWeek: ['1'],
            title:'Verhuurd',
            startTime:'18:00:00',
            endTime:'23::00:00',
            className:'fc-event-bezet', // rood gekleurd
            display: 'block',
            displayEventEnd: true
            },
//---
            //Dinsdagen - ochtend
            {daysOfWeek: ['2'],
            title:'Aanvraag mogelijk',
            startTime:'8:00:00',
            endTime:'13:00:00',
            className:'fc-event-beschikbaar', // groen gekleurd
            display: 'block'},
        
            //Dinsdagen - middag
            {daysOfWeek: ['2'],
            title:'Aanvraag mogelijk',
            startTime:'13:00:00',
            endTime:'18:00:00',
            className:'fc-event-beschikbaar', 
            display: 'block'},

           //Dinsdagen - avond
           {daysOfWeek: ['2'],
            title:'Aanvraag mogelijk',
            startTime:'18:00:00',
            endTime:'23:00:00',
            className:'fc-event-beschikbaar', 
            display: 'block'},
  
//---
        //Woensdagen - ochtend
            {daysOfWeek: ['3'],
            title:'Aanvraag mogelijk',
            startTime:'8:00:00',
            endTime:'13:00:00',
            className:'fc-event-beschikbaar', // groen gekleurd
            display: 'block'},

            //Woensdagen - middag
            {daysOfWeek: ['3'],
            title:'Aanvraag mogelijk',
            startTime:'13:00:00',
            endTime:'18:00:00',
            className:'fc-event-beschikbaar', // groen gekleurd
            display: 'block'},

            //Woensdagen - avond
            {daysOfWeek: ['3'],
            title:'Aanvraag mogelijk',
            startTime:'18:00:00',
            endTime:'23:00:00',
            className:'fc-event-beschikbaar', // groen gekleurd
            display: 'block'},

//---
            //Donderdagen -ochtend
            {daysOfWeek: ['4'],
            title:'Aanvraag mogelijk',
            startTime:'8:00:00',
            endTime:'13:00:00',
            className:'fc-event-beschikbaar', // groen gekleurd
            display: 'block'},

            //Donderdagen - middag
            {daysOfWeek: ['4'],
            title:'Aanvraag mogelijk',
            startTime:'13:00:00',
            endTime:'18:00:00',
            className:'fc-event-beschikbaar', // groen gekleurd
            display: 'block'},

            //Donderdagen -avond
            {daysOfWeek: ['4'],
            title:'Aanvraag mogelijk',
            startTime:'18:00:00',
            endTime:'23:00:00',
            className:'fc-event-beschikbaar', // groen gekleurd
            display: 'block'},
                
//---
            //Vrijdagen -ochtend
            {daysOfWeek: ['5'],
            title:'Aanvraag mogelijk',
            startTime:'8:00:00',
            endTime:'13:00:00',
            className:'fc-event-beschikbaar', // groen gekleurd
            display: 'block'},
            
            //Vrijdagen -middag
            {daysOfWeek: ['5'],
            title:'Aanvraag mogelijk',
            startTime:'13:00:00',
            endTime:'18:00:00',
            className:'fc-event-beschikbaar', // groen gekleurd
            display: 'block'},
                     
            //Vrijdagen -avond
            {daysOfWeek: ['5'],
            title:'Aanvraag mogelijk',
            // startTime:'8:00:00',
            // endTime:'23:00:00',
            className:'fc-event-beschikbaar', // groen gekleurd
            display: 'block'},

 //---               
        //Zondagen - ochtend
        {
                
            daysOfWeek: ['7'],
            title:'verhuurd',
            rrule: {
                freq: 'weekly',
                interval: 2, // Every 2 weeks
            // byweekday: 'ma', // zonderag
                dtstart: '2024-01-01T08:00:00', // Start date and time
                until: '2024-12-31T13:00:00' // End recurrence by this date
            },
            //startTime:'8:00:00',
            //endTime:'13:00:00',
            className:'fc-event-bezet', 
            display: 'block'
            },


            //Zaterdagen
            {daysOfWeek: ['6'],
                title:'Aanvraag mogelijk',
                startTime:'8:00:00',
                endTime:'23:00:00',
                className:'fc-event-beschikbaar', // groen gekleurd
                display: 'block',
                displayEventEnd: true
                },

        ]
    });
    console.log('deel 3 werkt ook')
    calendar.render();
});