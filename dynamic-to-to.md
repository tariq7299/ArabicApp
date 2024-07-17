# What i want to do now -- Main objectives

1. Create a register and login page that will authenticate a tutor
2. Then create a test page that will preview all tutors in regiterd in the app as a test
3. Make the admin route of django `/admin` suitable for ahmed ali needs (Like to see all students submittions-test results-students data-studenst contact us submmitssions- courses in our app with its details- add/update/delete any recorde)
4. Use PosgresQL

## Implemetation and steps

- **Create Query and Mutation in schema**

- Create Test it using GrapphiQL tool/
  - add first name to schema CreateTutor mutation
    - See what tutor object looks like
      - Create get all tutors in command
        - Create management folder and insie create commands folder and then create allTutors.py
        - Write a handle() method inside Comannd class to get all tutrors and print them
        - Write command steps in README.md
        - Write notes about
  - add lst anme to schema CreateTutor mutation
  -
- Ask GPT to explain the content of schema.py in each app so i can understand better
- Create protectted route and test
- Create a register page frontend/UI
- Create a login page frontend/UI
- Create a protected page called home that will previous names of students
  /UI
- Use postgres instead of sqlite

# Refrences and strenghin my knowledge of django and JWT and Graphiql

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
        - Read this ----> https://medium.com/simform-engineering/empowering-your-django-backend-with-graphql-a-powerful-combination-part-2-2e9b0e5f17cd
