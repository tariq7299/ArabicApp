from django.db import models
from django.core.validators import MinValueValidator, MaxValueValidator, RegexValidator


class ContactSubmission(models.Model):

    # Here i specify the choices that i only want to include in my database for each field!
    # So if frontend submitted a a value that is not in the list of choices it will raise a validation error
    # ALso i sent those choices to the page that uses them in the "select" elemnts when user load the page, to force him to use the predifined choices i decalred here

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
            RegexValidator(
                r"^(\+\d{1,3}[- ]?)?(?=.{8,15}$)\d+$",
                "Enter a valid phone number with the following format +999999999",
            )
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
    message = models.TextField(max_length=1000, null=True, blank=True)

    created_at = models.DateTimeField(auto_now_add=True)

    def __str__(self):
        return f"{self.first_name} {self.last_name} - {self.email}"

    class Meta:
        ordering = ["-created_at"]
