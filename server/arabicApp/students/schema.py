import graphene
from graphene_django import DjangoObjectType
from .models import ContactSubmission


class ContactSubmissionType(DjangoObjectType):
    class Meta:
        model = ContactSubmission
        fields = "__all__"


class CreateContactSubmission(graphene.Mutation):
    class Arguments:
        first_name = graphene.String(required=True)
        last_name = graphene.String(required=True)
        email = graphene.String(required=True)
        phone = graphene.String(required=True)
        age = graphene.Int(required=True)
        native_language = graphene.String(required=True)
        origin_country = graphene.String(required=True)
        gender = graphene.String(required=True)
        arabic_level = graphene.String(required=True)
        message = graphene.String(required=True)

    contact_submission = graphene.Field(ContactSubmissionType)

    def mutate(
        self,
        info,
        first_name,
        last_name,
        email,
        phone,
        age,
        native_language,
        origin_country,
        gender,
        arabic_level,
        message,
    ):
        contact_submission = ContactSubmission(
            first_name=first_name,
            last_name=last_name,
            email=email,
            phone=phone,
            age=age,
            native_language=native_language,
            origin_country=origin_country,
            gender=gender,
            arabic_level=arabic_level,
            message=message,
        )
        contact_submission.save()
        return CreateContactSubmission(contact_submission=contact_submission)


class Query(graphene.ObjectType):
    all_contact_submissions = graphene.List(ContactSubmissionType)

    def resolve_all_contact_submissions(self, info):
        return ContactSubmission.objects.all()


class Mutation(graphene.ObjectType):
    create_contact_submission = CreateContactSubmission.Field()


schema = graphene.Schema(query=Query, mutation=Mutation)
