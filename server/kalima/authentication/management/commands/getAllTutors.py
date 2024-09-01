from django.core.management.base import BaseCommand, CommandError
# from authentication.models import User
from django.contrib.auth.models import User
import pprint


class Command(BaseCommand):
    help = "Gets all User instance and prints them"
    
    def handle(self, *args, **options):

        # List all fields
        print(User._meta.fields)

        # List field names
        # print([field.name for field in User._meta.fields])

        # Get more detailed information about fields
        # for field in User._meta.fields:
            # print(f"Field: {field.name}, Type: {field.__class__.__name__}")

        # Show all attributes and methods
        # print(dir(User))
        
        tutors = User.objects.all()

        # Pretty print each tutor instance
        for tutor in tutors:
            tutor_info = {
                'id': tutor.id,
                'username': tutor.username,
                'first_name': tutor.first_name,
                'last_name': tutor.last_name,
                'email': tutor.email,
                'is_staff': tutor.is_staff,
                'is_active': tutor.is_active,
                'date_joined': tutor.date_joined,
            }
            self.stdout.write(pprint.pformat(tutor_info))
            self.stdout.write("\n" + "="*50 + "\n")  # Separator for readability