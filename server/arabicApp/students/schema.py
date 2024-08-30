import graphene
from graphene_django import DjangoObjectType
from .models import ContactSubmission
from .forms import ContactSubmissionForm
from graphene_django.forms.mutation import DjangoModelFormMutation


class ContactSubmissionType(DjangoObjectType):
    success = graphene.Boolean
    class Meta:
        model = ContactSubmission


class ChoicesType(graphene.ObjectType):
    gender_choices = graphene.List(graphene.List(graphene.String))
    arabic_level_choices = graphene.List(graphene.List(graphene.String))
    language_choices = graphene.List(graphene.List(graphene.String))
    country_choices = graphene.List(graphene.List(graphene.String))


class CreateContactSubmission(DjangoModelFormMutation):
    contact_submission = graphene.Field(ContactSubmissionType)
    success = graphene.Boolean()

    class Meta:
        form_class = ContactSubmissionForm
        # You have to write this, in order to be able to access the submitted contact us request
        # return_field_name = "submittedContact"

    @classmethod
    def perform_mutate(cls, form, info):
        if form.is_valid():
            return cls.form_valid(form, info)
        # this is not triggering ! only form.is_valid() is working ?? why
        else:
            return cls.form_invalid(form, info)

    @classmethod
    def form_valid(cls, form, info):
        contact_submission = form.save()
        return cls(contact_submission=contact_submission, success=True, errors=[])

    # NOt working !
    @classmethod
    def form_invalid(cls, form, info):
        errors = []
        for field, messages in form.errors.items():
            errors.append({
                "field": field,
                "messages": messages
            })
        return cls(errors=[], success=False)

class Query(graphene.ObjectType):
    all_contact_submissions = graphene.List(ContactSubmissionType)
    contact_us_select_fields_choices = graphene.Field(ChoicesType)

    def resolve_all_contact_submissions(self, info):
        return ContactSubmission.objects.all()

    # @staticmethod
    def resolve_contact_us_select_fields_choices(self, info):
        return ChoicesType(
            gender_choices=ContactSubmission.GENDER_CHOICES,
            arabic_level_choices=ContactSubmission.ARABIC_LEVEL_CHOICES,
            language_choices=ContactSubmission.LANGUAGE_CHOICES,
            country_choices=ContactSubmission.COUNTRY_CHOICES,
        )


class Mutation(graphene.ObjectType):
    create_contact_submission = CreateContactSubmission.Field()


schema = graphene.Schema(query=Query, mutation=Mutation)
