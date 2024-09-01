# Generated by Django 5.0.6 on 2024-08-29 14:39

import django.core.validators
from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('students', '0004_alter_contactsubmission_last_name'),
    ]

    operations = [
        migrations.AlterField(
            model_name='contactsubmission',
            name='last_name',
            field=models.CharField(error_messages={'invalid': 'Enter a valid email address.', 'required': 'Email cannot be blank.'}, max_length=50, validators=[django.core.validators.RegexValidator('^[a-zA-Z]+$', 'Only letters are allowed in the last name.')]),
        ),
    ]