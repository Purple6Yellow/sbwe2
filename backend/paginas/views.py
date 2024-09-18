from django.shortcuts import render


def index(request):
    return render (request, 'basis/index.html' )

def contact (request):
    return render (request, 'contact.html')

def Over (request):
    return render (request, 'overSBWE.html')

def historie (request):
    return render (request, 'historie.html')

def atelier(request):
    return render (request, 'atelier.html')


#CC
def verhuurBK (request):
    return render (request, 'CC/verhuurBK.html')

def reserveringBK (request):
    return render (request, 'CC/reserveringBK.html' )

def voorwaardenBK (request):
    return render (request, 'CC/CCvoorwaardenBK.html' )

def impressieBK (request):
    return render (request, 'CC/impressieBK.html' )

def inrichtingBK (request):
    return render (request, 'CC/CCinrichting.html' )

def agenda (request):
    return render (request, 'CC/agenda.html' )


#panden
def panden (request):   
    return render (request, 'panden/panden.html')

def gebouwBK (request):
    return render (request, 'panden/barthkapel.html' )

def gebouwLO (request):
    return render (request, 'panden/looyerstr.html' )

def gebouwREM(request):
    return render (request, 'panden/rembrandt.html' )

def gebouwLEP(request):
    return render (request, 'panden/lepelstr.html' )

def gebouwPR(request):
    return render (request, 'panden/prinsegr.html' )

def gebouwTU(request):
    return render (request, 'panden/tuinhuis.html' )



#post/ blog
def post_list (request):
    return render (request, 'post_list.html' )