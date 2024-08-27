from django.db import models
from django.core.validators import MinValueValidator, MaxValueValidator, RegexValidator


class ContactSubmission(models.Model):

    GENDER_CHOICES = [
        ("M", "Male"),
        ("F", "Female"),
    ]

    ARABIC_LEVEL_CHOICES = [
        ("BEG", "Beginner"),
        ("INT", "Intermediate"),
        ("ADV", "Advanced"),
        ("NAT", "Native"),
    ]

    LANGUAGE_CHOICES = [
        ("EN", "English"),
        ("FR", "French"),
        ("ES", "Spanish"),
        ("DE", "German"),
        ("IT", "Italian"),
        ("PT", "Portuguese"),
        ("RU", "Russian"),
        ("ZH", "Chinese"),
        ("JA", "Japanese"),
        ("KO", "Korean"),
        ("AR", "Arabic"),
        ("HI", "Hindi"),
        ("OT", "Other"),
    ]

    COUNTRY_CHOICES = [
        ("US", "United States"),
        ("GB", "United Kingdom"),
        ("CA", "Canada"),
        ("AU", "Australia"),
        ("FR", "France"),
        ("DE", "Germany"),
        ("IT", "Italy"),
        ("ES", "Spain"),
        ("JP", "Japan"),
        ("CN", "China"),
        ("IN", "India"),
        ("BR", "Brazil"),
        ("OT", "Other"),
    ]

    first_name = models.CharField(
        max_length=50,
        validators=[
            RegexValidator(
                r"^[a-zA-Z]+$", "Only letters are allowed in the first name."
            )
        ],
        null=False,
    )
    last_name = models.CharField(
        max_length=50,
        validators=[
            RegexValidator(r"^[a-zA-Z]+$", "Only letters are allowed in the last name.")
        ],
        null=False,
    )
    email = models.EmailField()
    phone = models.CharField(
        max_length=15,
        validators=[
            RegexValidator(r"^\+?1?\d{9,15}$", "+999999999'. Up to 15 digits allowed.")
        ],
        null=False,
    )
    age = models.IntegerField(
        validators=[
            MinValueValidator(7, "Age must be at least 7."),
            MaxValueValidator(120, "Age must be less than 120."),
        ],
        null=False,
    )
    native_language = models.CharField(
        max_length=2, choices=LANGUAGE_CHOICES, null=False
    )
    origin_country = models.CharField(max_length=2, choices=COUNTRY_CHOICES, null=False)
    gender = models.CharField(max_length=1, choices=GENDER_CHOICES, null=False)
    arabic_level = models.CharField(
        max_length=3, choices=ARABIC_LEVEL_CHOICES, null=False
    )
    message = models.TextField(max_length=1000)

    created_at = models.DateTimeField(auto_now_add=True)

    def __str__(self):
        return f"{self.first_name} {self.last_name} - {self.email}"

    class Meta:
        ordering = ["-created_at"]
