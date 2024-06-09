from django.db import models
from django.contrib.auth.admin import User

class Tutor(User):

    class Meta:
        proxy = True

    # phone_number = models.CharField(max_length=50, blank=False)

    def __str__(self):
        return f"{self.first_name} {self.last_name}"
