# What i want to do
- Create a register and login page that will authenticate a tutor
- Then create a test page that will preview all tutors in regiterd in the app as a test
- Make the admin route of django `/admin` suitable for ahmed ali needs (Like to see all students submittions-test results-students data-studenst contact us submmitssions- courses in our app with its details- add/update/delete any recorde)


## Implemetation and steps
**Create authenticaion page of register and login using graphQL and JWT auth**

    - Read a little bit about django using Mmdn web docs_ django tutorial
    - Read about authentication in django
        - Read this https://developer.mozilla.org/en-US/docs/Learn/Server-side/Django/Authentication
        - Read this ----> https://www.geeksforgeeks.org/user-authentication-system-using-django/
        - Read this ---> https://www.youtube.com/watch?v=WuyKxdLcw3w
        - Read this ----> https://frontegg.com/blog/django-authentication
        - Read this ---> https://medium.com/@devsumitg/django-auth-user-signup-and-login-7b424dae7fab
        <!-- - Read this ---> https://www.smashingmagazine.com/2020/02/django-highlights-user-models-authentication/ -->
    - Read about JWT AUTH
    - Implement JWT auth with GraphQL in django
        - READ THIS ---> https://medium.com/simform-engineering/empowering-your-django-backend-with-graphql-a-powerful-combination-764babd30bb0
        - REad this ----> https://medium.com/simform-engineering/empowering-your-django-backend-with-graphql-a-powerful-combination-part-2-2e9b0e5f17cd
        - Install graphene-django package *DONE*
        - Enable admin page and create a basic super user **DONE** 
        - Extend the Users model with your own tutors model 
        - Import urls of auth app into the main urls.py file  
        - Create schema.py in auth app and then add to it your mutations and queris of register page
        - import your schema.py into your main shcema in arabicApp core in django
        - Creating of JWT auth 
            - First creat an `payload` dict that will hold useId and exp and iat keys
            - second create the token itself by passing payload and 'secret key strige' and algorithm and decode data type
            - Add it to http only cookie
            - then send the response you want
            - Use COrs of djnago
            - Create a test pagge that will return all tutors/users found in db, you need to pass in the generated token when you render the all users page and send it in every request using http cookies and axios
            - In api endpoiitn you want to extract the JWT token from the http only cookies and then decode it and extract its payload 
        - install jwt library pip install django-graphql-jwt
        - add it your code in settings.py
        -
    - Write the frontend of regjster and login pages
    - COnfigure GraphiQL
    - Test my auth and protectd route using Graphinql/postman tool 
    - 
    - Use postgres instead of sqlite
    - Create a serlizer file that will serlize objects from models  (Check how i did it in network project)
    - Use OOP that will extedn the models classes/ojects then add methods and repositories to it that will be sutitbae for each object  
    - 
### Steps with code
