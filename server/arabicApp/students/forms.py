from django import forms
from .models import ContactSubmission


# create a ModelForm
class ContactSubmissionForm(forms.ModelForm):
    # specify the name of model to use
    class Meta:
        model = ContactSubmission
        error_messages = {
            "first_name": {
                "required": "First Name field is required",
            },
            "last_name": {
                "required": "Last Name field is required",
            },
            "email": {
                "required": "Email field is required",
            },
            "phone": {
                "required": "Phone field is required",
            },
            "age": {
                "required": "Age field is required",
            },
            "origin_country": {
                "required": "Origin Country field is required",
            },
            "native_language": {
                "required": "Native Language field is required",
            },
            "arabic_level": {
                "required": "Arabic Level field is required",
            },
            "gender": {
                "required": "Gender field is required",
            },
        }
        fields = "__all__"
