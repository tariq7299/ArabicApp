- Read and digest the whole medium project
- Create your shcema
- test app
- apply JWT auth
- Create forntedn 


# Steps and code

-  
- add mutations to the root of shema
- add the query in your queries
- add verigy token qyeryug
- add refreshToken to obtain a brand new token with renewed expiration time
create you models in model.py
migrate your models python manage.py makemigrations
python manage.py migrate  
Create the admin interface in admin.py add this
add my authintication applicatio to installedApps and also add strawberry in installed apps
- Add authentication to our application urls.py 
- Create super user admin 
- Create some tutors
- test my qyeries
- test my mutations
- apply jwt using graphene

```
from django.contrib import admin
from .models import Post

admin.site.register(Post)

```

- python manage.py createsuperuser
- in views define your register view handler
- in url define your path and handler function
- define your admin/ url that will view django admin page
- Check how i hadnled forms and validations in network application
-
