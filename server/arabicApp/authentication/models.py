from django.db import models

# Later in the Future use User model as the parent model of Tutor, and use Tutor as the proxy model
# from django.contrib.auth.models import User

# class Tutor(models.Model):
#     first_name
#     last_name
#     email
#     username
#     password
    
#     class Meta:
#         proxy = True

#     def __str__(self):
#         return f"{self.first_name} {self.last_name}"


# class Tutor(User):
#     class Meta:
#         proxy = True

#     def __str__(self):
#         return f"{self.first_name} {self.last_name}"

