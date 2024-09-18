from django.urls import path
from . import views

urlpatterns = [
    path('',views.index),
    path('basis/index.html', views.index),
    path('contact.html', views.contact),
    path('overSBWE.html', views.Over),
    path('historie.html', views.historie),
    path('atelier.html', views.atelier),

    #CC:
    path('CC/verhuurBK.html', views.verhuurBK),
    path('CC/reserveringBK.html', views.reserveringBK),
    path('CC/CCvoorwaardenBK.html', views.voorwaardenBK),
    path('CC/impressieBK.html', views.impressieBK),
    path('CC/CCinrichting.html', views.inrichtingBK),
    path('CC/agenda.html', views.agenda),

    #panden:
    path('panden/panden.html', views.panden),
    path('panden/barthkapel.html', views.gebouwBK),
    path('panden/looyerstr.html', views.gebouwLO),
    path('panden/rembrandt.html', views.gebouwREM),
    path('panden/lepelstr.html', views.gebouwLEP),
    path('panden/prinsegr.html', views.gebouwPR),
    path('panden/tuinhuis.html', views.gebouwTU),


    path('post_list.html/', views.post_list, name = 'post_list'),
    ]

