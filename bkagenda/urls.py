from django.urls import path
from . import views
from .views import OverzichtProg, DetailProg

urlpatterns = [
    path('visitors_list.html/', views.visitor_statistics, name='Visitor_List'),
# BKAGENDA JAARPROGRAMMA #
    path('prog_overzicht.html/', OverzichtProg.as_view(), name = 'Prog-Overzicht'),
    path('prog/<int:pk>', DetailProg.as_view(), name = 'Prog-Detail'),
]