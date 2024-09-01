from django import forms
from .models import ContactSubmission


class ContactSubmissionForm(forms.ModelForm):
    class Meta:
        model = ContactSubmission
        # Custom error messages
        error_messages = {
            # I am doing this to add field name to the required error message
            # As it the default message is "This field is required"
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
                "max_length": "Phone number cannot exceed 15 digits.",
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
