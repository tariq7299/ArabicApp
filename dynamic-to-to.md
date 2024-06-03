- Create register page and login page

  - route is /www/login
  - The wrire frame is the same as login page in camply web app
  -

- Take a quick crach course from gpt on django
- Init your django MVC project
- Create a file called query.py that will contain all graphql queries
-
- Create route to handle register page using GreapghQLRouter form strawberry library
- Create a db shcema of user
- Configure your django admin pages
- Create schema.py at the root of project and it will hold all shcema of you graph ql data
- Create a qyeruy.py this will hold all your qraph ql data qyeries
- create a mutation.py at root also and this will hold all graph ql mutations
- Create a folder called types that will hold all object types in your project
- Use postgres instead of sqlite


# Steps and code


- add mutations to the root of shema
- add the query in your queries
- add verigy token qyeryu
- add refreshToken to obtain a brand new token with renewed expiration time

create you models in model.py
migrate your models python manage.py makemigrations
python manage.py migrate  
Create the admin interface in admin.py add this
add my authintication applicatio to installedApps and also add strawberry in installed apps
- Add authentication to our application urls.py 
- 
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
