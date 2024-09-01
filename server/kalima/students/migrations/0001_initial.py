# Generated by Django 5.0.6 on 2024-08-26 17:49

import django.core.validators
from django.db import migrations, models


class Migration(migrations.Migration):

    initial = True

    dependencies = [
    ]

    operations = [
        migrations.CreateModel(
            name='ContactSubmission',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('firstName', models.CharField(max_length=50, validators=[django.core.validators.RegexValidator('^[a-zA-Z]+$', 'Only letters are allowed in the first name.')])),
                ('lastName', models.CharField(max_length=50, validators=[django.core.validators.RegexValidator('^[a-zA-Z]+$', 'Only letters are allowed in the last name.')])),
                ('email', models.EmailField(max_length=254, unique=True)),
                ('phone', models.CharField(max_length=15, validators=[django.core.validators.RegexValidator('^\\+?1?\\d{9,15}$', "+999999999'. Up to 15 digits allowed.")])),
                ('age', models.IntegerField(validators=[django.core.validators.MinValueValidator(7, 'Age must be at least 7.'), django.core.validators.MaxValueValidator(120, 'Age must be less than 120.')])),
                ('nativeLanguage', models.CharField(choices=[('EN', 'English'), ('FR', 'French'), ('ES', 'Spanish'), ('DE', 'German'), ('IT', 'Italian'), ('PT', 'Portuguese'), ('RU', 'Russian'), ('ZH', 'Chinese'), ('JA', 'Japanese'), ('KO', 'Korean'), ('AR', 'Arabic'), ('HI', 'Hindi'), ('OT', 'Other')], max_length=2)),
                ('originCountry', models.CharField(choices=[('US', 'United States'), ('GB', 'United Kingdom'), ('CA', 'Canada'), ('AU', 'Australia'), ('FR', 'France'), ('DE', 'Germany'), ('IT', 'Italy'), ('ES', 'Spain'), ('JP', 'Japan'), ('CN', 'China'), ('IN', 'India'), ('BR', 'Brazil'), ('OT', 'Other')], max_length=2)),
                ('gender', models.CharField(choices=[('M', 'Male'), ('F', 'Female')], max_length=1)),
                ('arabicLevel', models.CharField(choices=[('BEG', 'Beginner'), ('INT', 'Intermediate'), ('ADV', 'Advanced'), ('NAT', 'Native')], max_length=3)),
                ('message', models.TextField(max_length=1000)),
                ('created_at', models.DateTimeField(auto_now_add=True)),
            ],
            options={
                'ordering': ['-created_at'],
            },
        ),
    ]