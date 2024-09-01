from django.db import models

# Here i will add more fields and models
# This will be the courses that the online platform offers


# Each course have a "name" and "level"
class Course(models.Model):
    name = models.CharField(max_length=100)
    level = models.IntegerField()

    def __str__(self):
        return self.name
