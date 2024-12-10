from django.shortcuts import render, redirect, HttpResponseRedirect
from django.utils import timezone
from django.views.generic import ListView, DetailView
from .models import Visitor, Prog
from contactform.models import Aanvraag
from contactform.forms import AanvraagForm
from datetime import date, datetime
# 9 oktober 2024 toegevoegd, teller aantal bezoekers
from django.views.generic.base import TemplateView
from django.db.models import Count
from datetime import timedelta
from django.http import JsonResponse


# BKAGENDA > JAARPROGRAMMA
class OverzichtProg(ListView):
    model: Prog
    # print("bkagenda / views / OverzichtProg ")
    template_name = 'prog_overzicht.html'

    def get_queryset(self):
        context = Prog.objects.filter(datum__gte=timezone.now()).order_by('datum')
        return context

    def programma_herhaling(request):
        progs = Prog.objects.all()
        prog_list = []
        for prog in progs:
            if prog.herhaling_interval == 'weekly':
                print("true")
                schemas = generate_herhaling(prog)
                prog_list.extend(schemas)
            else:
                prog_list.append({
                "title": prog.title,
                "datum" : prog.datum,
                "start" : prog.start,
                "end" : prog.end,
                "text" : prog.text,
                "website": prog.website,
                "image" :prog.image,
                "image_name" :prog.image_name
            })
        #print("Final events_list:", events_list)
        #print("events_list before extend:", events_list)
        #print("occurrences:", occurrences)
        #events_list.extend(occurrences)
        #print("events_list after extend:", events_list)
        return redirect(prog_list, safe = False)
     
class DetailProg(DetailView):
     model: Prog
     # print("bkagenda / views / DetailProg ")
     template_name = 'prog_detail.html'

     def get_queryset(self):
          context = Prog.objects.all()
          return context  

# BKAGENDA > JAARPROGRAMMA

# BKAGENDA > HERHALINGEN

    
def generate_herhaling(prog):
    schemas = []
    recent_datum = prog.start 
    print("schemas: ", schemas)

    while recent_datum <= prog.herhaling_einde:
        schemas.append({
        "title": prog.title,
        "datum" : prog.datum,
        "start" : prog.start,
        "end" : prog.end,
        "text" : prog.text,
        "image" :prog.image,
        "image_name" :prog.image_name
        })

    recent_datum += timedelta(weeks=1)
    return schemas


               
# BKAGENDA HERHALINGEN

# TELLER aantal bezoekers 
def visitor_statistics(request):
    # Totaal aantal bezoeken
    total_visitors = Visitor.objects.count()

    # Unieke bezoekers op basis van IP-adres
    unique_visitors = Visitor.objects.values('ip_address').distinct().count()

    # Bezoeken in de laatste 24 uur
    last_24_hours = timezone.now() - timedelta(hours=24)
    visitors_last_24_hours = Visitor.objects.filter(timestamp__gte=last_24_hours).count()

    # Laatste 10 bezoekers
    visitors = Visitor.objects.all().order_by('-timestamp')[:10]

    return render(request, 'visitors_list.html', {
        'total_visitors': total_visitors,
        'unique_visitors': unique_visitors,
        'visitors_last_24_hours': visitors_last_24_hours,
        'visitors': visitors ,
    })
# bezoekers aantal teller 
