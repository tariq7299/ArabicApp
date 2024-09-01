# Kalima (Arabic learning platform)

This is an app that teaches non arabic speakers the language

## How to run the app
### Server side

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

### Client side
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

Project Requirements
This online learning platform is designed to teach the Arabic language to students from all around the world. The app will include the following features:

**Information Page**: A page that provides details about the platform and the tutors who teach the students.
**Contact Page**: A page that displays contact information, allowing interested individuals to reach out for more details.
**Admin Panel**: A page where the admin can view all submissions from the contact form.
**Payment Integration**: Users can pay for courses directly through the web app.
**Language Level Assessment**: Students can take a test to evaluate their Arabic proficiency, helping the platform recommend suitable courses.  

## File and Folder Strucutre
### Server side
├── kalima
│   ├── kalima
│   │   ├── __init__.py
│   │   ├── __pycache__
│   │   ├── asgi.py
│   │   ├── schema.py
│   │   ├── settings.py
│   │   ├── urls.py
│   │   └── wsgi.py
│   ├── authentication
│   │   ├── __init__.py
│   │   ├── __pycache__
│   │   ├── admin.py
│   │   ├── api
│   │   ├── apps.py
│   │   ├── management
│   │   ├── migrations
│   │   ├── models.py
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
│   │   ├── models.py
│   │   ├── schema.py
│   │   ├── tests.py
│   │   └── views.py
│   ├── db.sqlite3
│   ├── manage.py
│   └── students
│       ├── __init__.py
│       ├── __pycache__
│       ├── admin.py
│       ├── apps.py
│       ├── forms.py
│       ├── migrations
│       ├── models.py
│       ├── schema.py
│       ├── tests.py
│       └── views.py
└── requirements.txt

22 directories, 48 files
    **FIle strucute using tree
    ### Client Side
    **FIle strucute of 

    ### Server side
    ### Client side
    ## Distinctiveness and Complexity
    ### I have used new tech and tools that i learn on my own (wasn't taught in the course)
    #### Server side
    **GraphQl**
    I diciede to use a graphql server instead of normal REST server just to learn something new and make it more challanging.
    So I have used the following tools in my django api
        *graphen
    **JWT Auth**

    #### Client side
    **pnpm instead of npm**
    **Apollo client**
    **Material UI**
    **Vite**
    **React Hook Form**
    **React toastify**
    **React Router**
    ### I have used some of the best pratices
    #### Server side
    **Seperated my apps in django server**
    **Seperated graphql files**
    **Used python virtual environment**
    #### Client side
    **Used a dynamic error handling function**
    **Project and file structure**
    **Sass file structure**
    **Used @use @forward instead of @import in sass**
    ### Attractive and nice design
    **Carefully choose the colors**
    **Nice logo**
    **Resopnsive in all screen sizes**


## Colors and fonts iam using

**Colors**  
#ffda6a secondary color (gold)
#41c4ff primary color (light blue)
#23085a primary font color ()

**Font iam using**

<link href="https://fonts.cdnfonts.com/css/british-council-sans" rel="stylesheet">

# Installation

## Backend

### Insall python virtual env

```bash
python3 -m venv <path/to/venvName>
./path/to/python3/intereter/in/virtualenv/ -m pip install -r requirements.txt
./path/to/python3/intereter/in/virtualenv/ -m  pip install requirements--dev.txt
./path/to/python3/intereter/in/virtualenv/ manage.py runserver
```

also to have the best the experience select your python interpreter in vs code, by doing this:

1. command + shift + p
2. type _python interpreter_
3. Choose _Enter Interpreter path_
4. COpy the path of `path/to/venvName/bin/python`
5. past it
6. DONE

**NOTE**: If you face any issues of selecting your python interpreter then try to use `./path/to/python3/intereter/in/virtualenv/` after you activate your virtual env as this the only way so far to use the virtuall environment python interpereter correctly !  
*So for example if i want to run the djhango server:*  

**File structure**
(kaleemVenv) apple@Tariqs-Mac kalima % tree ./.. -L 2
./..
├── kalima
│   ├── __pycache__
│   ├── kalima
│   ├── authentication
│   ├── courses
│   ├── db.sqlite3
│   └── manage.py
├── kaleemVenv
│   ├── bin
│   ├── include
│   ├── lib
│   └── pyvenv.cfg
└── requirements.txt

10 directories, 4 files
```bash
# my location /Users/apple/Documents/LetsGOOOO/kalimaProject/kalima/server/kalima
.././kaleemVenv/bin/python3 manage.py runserver 
```

## Some tips and hacks

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


