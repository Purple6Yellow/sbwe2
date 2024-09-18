from django.conf import settings
from django.db import models
from django.utils import timezone

#object georienteerd programmeren > defnieert objecten. Objecten zijn exemplaren van klasse. Per object dient u dezelfde velden (eigenschappen/gedragingen)
# in te vullen 

# klasse > class = Post 
# eigenschappen:    Datum / Tijdstip (begin en eind) / Omschrijving / Kosten

class Post(models.Model):
   #  author = models.ForeignKey(settings.AUTH_USER_MODEL,on_delete=models.CASCADE)
    title = models.CharField(max_length=200)
    # datum = models.DateField(blank=True, null=True)
    datum = models.DateField(default=timezone.now)
    start_time = models.TimeField(blank = True, null = True)
    end_time = models.TimeField(blank = True, null = True)
    text = models.TextField()
    #published = models.BooleanField(default=False)

    def publish(self):
        self.datum = timezone.now()
        self.save()

    def __str__(self):
        return self.title

