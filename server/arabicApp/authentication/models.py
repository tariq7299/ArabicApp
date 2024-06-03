from django.db import models

class Tutor(models.Model):
    first_name = models.CharField(max_length=50, blank=False)
    last_name = models.CharField(max_length=50, blank=False)
    phone_number = models.CharField(max_length=50, blank=False)
    email = models.EmailField(blank=False)  # Added the email field
    username = models.CharField(max_length=50, blank=False)  
    password = models.CharField(max_length=128, blank=False)  

    def __str__(self):
        return f"{self.first_name} {self.last_name}"
