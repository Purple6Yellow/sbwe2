from django.conf import settings
from django.db import models
from django.utils import timezone
from django.contrib.auth.models import User
import datetime
from PIL import Image

# jaarprogramma barthkapel CC
class Prog(models.Model):
  title = models.CharField(max_length=200)
  datum = models.DateField(default=timezone.now)
  start = models.TimeField(blank = True, null = True)
  end = models.TimeField(blank = True, null = True)
  text = models.TextField()
  website = models.URLField(default = False)
  image = models.ImageField(upload_to='images/', null = True, blank = True)
  image_name = models.CharField(max_length = 100, blank=True)
  is_herhaling = models.BooleanField(default = False)
  herhaling_interval = models.CharField(
    max_length = 20,
    choices =[
      ('wekelijks', 'Wekelijks'),
      ('wekelijks2', 'Wekelijks2'),
      ('maandelijks', 'Maandelijks')],
      blank = True,
      null = True
  )
  herhaling_einde = models.DateField(blank = True, null = True)

  def publish(self):
    self.datum = timezone.now()
    self.save()

  def __str__(self):
    return str(self.datum) + ' | ' + self.title + ' | ' + self.herhaling_interval + ' | ' + self.image_name or "Unnamed Image"
# jaarprogramma barthkapel CC


# bezoekers aantal teller 
class Visitor(models.Model):
  ip_address = models.GenericIPAddressField() # ip adress van de bezoeker
  page = models.CharField(max_length = 50, blank=False) # pagina die bezocht is
  timestamp= models.DateTimeField(default = timezone.now) # tijdstip van bezoek
  user_agent = models.CharField(max_length = 255, null = True, blank=True) #Browser info
  
  def __str__(self):
    return f"{self.ip_address} bezocht {self.page} om {self.timestamp}"
# bezoekers aantal teller 
