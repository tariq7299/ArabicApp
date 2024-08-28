from django import forms
from .models import ContactSubmission


# create a ModelForm
class ContactSubmissionForm(forms.ModelForm):
    # specify the name of model to use
    class Meta:
        model = ContactSubmission
        fields = "__all__"
