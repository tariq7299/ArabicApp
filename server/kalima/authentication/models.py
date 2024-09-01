from django.db import models

# As of now i am using the default User model of django in authentication users

# Later in the Future use User model as the parent model of Tutor, and use Tutor as the proxy model


# from django.contrib.auth.models import User

# class Tutor(User):
#     class Meta:
#         proxy = True

#     def __str__(self):
#         return f"{self.first_name} {self.last_name}"
