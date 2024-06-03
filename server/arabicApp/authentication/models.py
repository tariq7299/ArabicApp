from django.contrib.auth.models import AbstractUser
from django.db import models

class Tutor(models.Model):

    first_name = models.CharField(max_length=50, blank=False)
    last_name = models.CharField(max_length=50, blank=False)
    phone_number = models.CharField(max_length=50, blank=False)

    def __str__(self):
        return self.first_name + ' ' + self.last_name