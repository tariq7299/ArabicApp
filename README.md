# Kalima (Arabic learning platform)

This is an app that teaches non arabic speakers the language

## How to run the app

### Backend (Server-side)

**mac users**
1. Install virtual python environment  package if not installed `pip install virtualenv  `
2. Create a python virtual environment  

```bash 
# Head to root dir of the server
cd server
# Create a virtual env
python3 -m venv venv
```  

3. Activate the virtual environment `source ./venv/bin/activate`
4. Install python dependecies `pip install -r requirements.txt`
5. Migrate the database     

```bash
# Head to `kalima` folder
cd kalima
# Run migration (just in case)
python manage.py migrate  

```  
6. Run the server

``` bash
python manage.py runserver
```

### Frontend (Client-side)
1. Install npm dependencies

```bash
# Head to client root dir
cd client
pnpm i

```

2. Run the app in develpment

```bash
pnpm run dev
```


## Description  

This web app is being developed for my friend's Arabic teaching business. The app is still under development, with many features, pages, and services yet to be added. As a result, you may notice new updates appearing regularly as I work towards completing the minimum viable product (MVP) and preparing the application for deployment.

I have submitted the app in its current state to fulfill the requirements for a course certificate, as I believe it meets the necessary criteria for complexity and distinctiveness.

### Project Requirements
This online learning platform is designed to teach the Arabic language to students from all around the world. The app will include the following features:  
**Information Page**: A page that provides details about the platform and the tutors who teach the students.  
**Contact Page**: A page that displays contact information, allowing interested individuals to reach out for more details.  
**Admin Panel**: A page where the admin can view all submissions from the contact form.  
**Payment Integration**: Users can pay for courses directly through the web app.  
**Language Level Assessment**: Students can take a test to evaluate their Arabic proficiency, helping the platform recommend suitable courses.    


## File and Folder Strucutre
### Backend (Server-side)
```bash
├── kalima
    # The core application
│   ├── kalima
│   │   ├── __init__.py
│   │   ├── __pycache__
│   │   ├── asgi.py
        # The core application schema so it contains all the graphQL schemas of all the server side app
│   │   ├── schema.py
│   │   ├── settings.py
        # The core application urls
        # as of now it contains two main routs
        # First route is "graphql/" : It basicly the a default view provided by graphql so it shows all the queries and mutations which you can do to the server
        # Second route is "admin/" : The default admi view of django to see all the tables/models of the app
│   │   ├── urls.py
│   │   └── wsgi.py

    # This app is only responsible fot the authentication of Users
    # Iam usng JWT auth to authenticate users
│   ├── authentication
│   │   ├── __init__.py
│   │   ├── __pycache__
│   │   ├── admin.py
│   │   ├── api
│   │   ├── apps.py
│   │   ├── management
│   │   ├── migrations
│   │   ├── models.py
        # Here is my authentication routes endpoints handlers 
│   │   ├── schema.py
│   │   ├── tests.py
│   │   ├── urls.py
│   │   └── views.py
│   ├── courses
│   │   ├── __init__.py
│   │   ├── __pycache__
│   │   ├── admin.py
│   │   ├── apps.py
│   │   ├── migrations
        # Here is my Course model
│   │   ├── models.py
        # Here is the endpoints handlers to handles: *Creating new course by admin* *Updating a course by admin* *Deleting a course by admin* *Get All courses*
│   │   ├── schema.py
│   │   ├── tests.py
│   │   └── views.py

    # My database
│   ├── db.sqlite3  

│   ├── manage.py

    # This the studensta app that is responsible for managing students related routes and views and models
│   └── students
│       ├── __init__.py
│       ├── __pycache__
│       ├── admin.py
│       ├── apps.py
        # This contains all the ModelForms that users/students can submit to my server
        # It handles the "Validation", and i use it alos in my schema to simplify the mutations and queries of graphQL
│       ├── forms.py
│       ├── migrations
│       ├── models.py
        # Endpoints handlers to handle mutations an queries related to students
│       ├── schema.py
│       ├── tests.py
│       └── views.py
└── requirements.txt
```
### Frontend (Client-side)
```bash

├── package.json
├── pnpm-lock.yaml
├── public
│   └── vite.svg
├── src
    # Main/Parent Component file of the my Frontend (Client-side)
│   ├── App.jsx 
    # Images that I use in my Frontend (Client-side) app
│   ├── assets
│   │   ├── hero-section-image-x1.jpg
│   │   ├── hero-section-image-x2.jpg
│   │   ├── kailma-logo-transparent-bg.svg
│   │   ├── kalima-logo-transparent-bg.png
│   │   ├── kalima-logo.png
│   │   ├── kalima-logo.svg
│   │   ├── navBarLogo.png
│   │   ├── old-phone
│   │   │   ├── old-phone-x1.jpg
│   │   │   └── old-phone-x2.jpg
│   │   ├── react.svg
│   │   └── subscritptionPlanCardAvatar.png
    # React Components that i use in my Frontend (Client-side)
│   ├── components
│   │   ├── ContactUsSection.jsx
│   │   ├── CoursesSection.jsx
│   │   ├── Footer.jsx
│   │   ├── FreeResourcesSection.jsx
│   │   ├── HeroSection.jsx
│   │   ├── LearnAboutTutorSection.jsx
│   │   ├── SubscriptionPlansSection.jsx
│   │   ├── TestimonialsSection.jsx
        # Common Components that I use in my Frontend (Client-side)
│   │   └── common
│   │       ├── CourseCard.jsx
│   │       ├── KalimaLogoSvg.jsx
│   │       ├── Layout.jsx
│   │       ├── MyButton.jsx
│   │       ├── MyTitle.jsx
│   │       ├── NavBar.jsx
│   │       ├── PhoneField.jsx
│   │       ├── SectionMeta.jsx
│   │       ├── SubscriptionPlan.jsx
│   │       ├── SubscriptionPlanCard.jsx
│   │       ├── SubscriptionPlanPrice.jsx
│   │       └── Testimonial.jsx
    # GraphQl mutations and queries i use throughout my whole Frontend (Client-side) app
│   ├── graphql
│   │   ├── mutations
│   │   │   └── contactUs
│   │   └── queries
│   │       └── contactUs
    # This contains some helper functions (for exmple errorHandling funciton)
│   ├── helper
│   │   └── helperFunctions.jsx
│   ├── main.jsx
    # Pages of my frontend application
│   ├── pages
│   │   ├── ContactUs.jsx
│   │   └── Home.jsx
    # css/scss styling
│   └── scss
        # importing bootstrap scss files and styling
│       ├── _custom-bootstrap.scss
        # my scss varialbes
│       ├── abstracts
│       │   ├── _map-amends.scss
│       │   └── _variables.scss
        # Some base and global styles that I want to apply to all of my application
│       ├── base
│       │   ├── _index.scss
│       │   └── _reset.scss
        # Bootstap default styling that i coied from bootstap docs
│       ├── bootstrap
        # My app components styling
        # Each file represnet styling of come common components i use in my app
│       ├── components
│       │   ├── _button.scss
│       │   ├── _course-card.scss
│       │   ├── _icon.scss
│       │   ├── _index.scss
│       │   ├── _subscription-plan-card.scss
│       │   ├── _subscription-plan-price.scss
│       │   └── _testimonial.scss
        # Some stlying that i use in my layout components
│       ├── layout
│       │   ├── _footer.scss
│       │   ├── _index.scss
│       │   ├── _kalima-logo-svg.scss
│       │   └── _nav-bar.scss
        #  The main entry file of my scss files ! and whome which i import in my `main.jsx` ---> import "../src/scss/main.scss";
│       ├── main.scss
│       ├── mixins
        # Syling of pages of my application
│       ├── pages
│       │   ├── _contact-us-page.scss
│       │   └── _index.scss
        # Styling of sections of my app
│       ├── sections
│       │   ├── _contact-us-section.scss
│       │   ├── _courses-section.scss
│       │   ├── _free-resources-section.scss
│       │   ├── _hero-section.scss
│       │   ├── _index.scss
│       │   ├── _subscription-plans-section.scss
│       │   └── _testimonials-section.scss
        # Some utils scss classes
│       └── utils
│           ├── _font-utils.scss
│           ├── _index.scss
│           └── _layout-utils.scss
└── vite.config.js

```

## Distinctiveness and Complexity

This project goes beyond the scope of CS50Web by incorporating advanced technologies and best practices in both frontend and backend development. The application's distinctiveness and complexity are evident in the following aspects:

### Advanced Technologies and Tools

#### Backend (Server-side)
- **GraphQL**: I opted to use a GraphQL server instead of a traditional REST API to challenge myself and learn something new. This choice adds complexity and flexibility to the API, enabling more efficient data fetching and manipulation.    
  **Graphene**: Integrated with Django to implement the GraphQL server.

- **JWT Authentication**: Implemented JSON Web Token authentication for secure, stateless user authentication.

#### Frontend (Client-side)
- **React with Vite**: Leveraged Vite as a build tool for faster development and optimized production builds.
- **Apollo Client**: Integrated Apollo Client for efficient GraphQL query management and caching.
- **Material UI**: Employed a comprehensive UI component library for a polished, responsive design.
- **React Hook Form**: Utilized for efficient, performant form handling with easy validation.
- **React Toastify**: Implemented for user-friendly notifications and feedback.
- **React Router**: Used for seamless, client-side routing in a single-page application architecture.
- **PNPM**: Adopted PNPM as a more efficient alternative to NPM for package management.

### Best Practices and Architecture

#### Backend (Server-side)
- **Modular Django Apps**: Separated functionality into distinct Django apps for better code organization and scalability.
- **Structured GraphQL Schema**: Organized GraphQL types, queries, and mutations into separate files for improved maintainability.
- **Virtual Environment**: Utilized Python virtual environments for isolated, reproducible development setups.

#### Frontend (Client-side)
- **Dynamic Error Handling**: Implemented a robust, reusable error handling function for improved user experience and debugging. --> `client/src/helper/helperFunctions.jsx`
- **Optimized Project Structure**: Organized files and components logically for scalability and ease of navigation.
- **Advanced SASS Usage**: 
  - Implemented a structured SASS file system for efficient styling.
  - Utilized modern SASS features like `@use` and `@forward` instead of the deprecated `@import`.

### User Experience and Design
- **Thoughtful Color Scheme**: Carefully selected colors for aesthetic appeal and optimal readability.
- **Custom Logo**: Designed a unique logo to enhance brand identity.
- **Responsive Design**: Ensured full responsiveness across all device sizes for a seamless user experience.

### Educational Value
This project demonstrates a significant leap beyond the course material, showcasing self-directed learning and the application of advanced web development concepts. It combines multiple complex technologies into a cohesive, full-stack application, reflecting real-world development practices.

The integration of GraphQL with a React frontend, coupled with the implementation of JWT authentication and the use of modern build tools like Vite, presents a level of complexity that challenges and extends the skills developed in CS50Web.  

Also I could have instead build a normal project like those scatterd all over youtube/internet but instead i wanted to solve a real world problem and a project that can actually benefit other people !  

So as I said at the start of this file ! that this is not the final version of my web app and yet there are many features/pages yet to be added.



## Some tips and hacks

### Problem with correct python interpreter used after avtivating the virtual env  

**NOTE**: If you face any issues of selecting your python interpreter then try to use `./path/to/python3/exe/in/virtualenv/` after you activate your virtual env as this the only way so far to use the virtuall environment python interpereter correctly !  
*So for example if i want to run the djhango server:
```bash
# my location ./kalimaProject/kalima/server/kalima
.././kaleemVenv/bin/python3 manage.py runserver 
```
### After you edit models.py

- Head to root of project and then `python manage.py makemigrations <appNameYouChnagedItsModel>`
- `python manage.py migrate` to apply migrations

### Command files in django

Lets say you want to do some custom commands with your models or other parts of your app

[follow this page from Django docs](https://docs.djangoproject.com/en/5.0/howto/custom-management-commands/)

### Orgnaize large terminal outputs

Use `pprint` python package

### Common comands
*From /Users/apple/Documents/LetsGOOOO/kalimaProject/kalima/server/kalima*

**runserver**  

```bash
./../kaleemVenv/bin/python3 manage.py runserver 

```

**Migrations**
```bash
./../kaleemVenv/bin/python3 manage.py makemigrations
./../kaleemVenv/bin/python3 manage.py migrate
```

**Virtual env**

```bash
# Activate virtaul env (WIndows)
./../kaleemVenv/Scripts/activate
# Exeute python venv interpreter (Windows)
./../kaleemVenv/Scripts/python.exe
# Exeute python venv interpreter (Mac)
./../kaleemVenv/bin/python3
```


