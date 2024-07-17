# ArabicApp

This is an app that teaches non arabic speakers the language

## Tools and Tech iam using in this app

- React
- pnpm
- Bootstrap
-

## Colors and fonts iam using

**Colors**  
#ffda6a secondary color (gold)
#41c4ff primary color (light blue)
#23085a primary font color ()

**Font iam using**

<link href="https://fonts.cdnfonts.com/css/british-council-sans" rel="stylesheet">

# Installation

## Backend

```bash
python3 -m venv <path/to/venvName>
pip install requirements.txt
pip install requirements--dev.txt
```

also to have the best the experience select your python interpreter in vs code, by doing this:

1. command + shift + p
2. type _python interpreter_
3. Choose _Enter Interpreter path_
4. COpy the path of `path/to/venvName/bin/python`
5. past it
6. DONE

# Some tips and hacks

## After you edit models.py

- Head to root of project and then `python manage.py makemigrations <appNameYouChnagedItsModel>`
- `python manage.py migrate` to apply migrations

## Command files in django

Lets say you want to do some custom commands with your models or other parts of your app

[follow this page from Django docs](https://docs.djangoproject.com/en/5.0/howto/custom-management-commands/)

## Orgnaize large terminal outputs

Use `pprint` python package
