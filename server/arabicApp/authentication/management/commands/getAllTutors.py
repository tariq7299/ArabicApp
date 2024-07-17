from django.core.management.base import BaseCommand, CommandError
from authentication.models import Tutor


class Command(BaseCommand):
    help = "Gets all Tutor instance and prints them"
    
    def handle(self, *args, **options):
        all_tutors = Tutor.objects.all()
        
        for tutor in all_tutors:
            print("Tutor", tutor)