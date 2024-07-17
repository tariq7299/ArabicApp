

# authenticaion/schema.py

import graphene
import graphql_jwt
# from django.contrib.auth import get_user_model
from .models import Tutor
from graphene_django import DjangoObjectType
from graphql_jwt.decorators import login_required
from graphql_jwt.shortcuts import create_refresh_token, get_token

class TutorType(DjangoObjectType):
    class Meta:
        model = Tutor

class CreateTutor(graphene.Mutation):
    tutor = graphene.Field(TutorType)
    token = graphene.String()
    refresh_token = graphene.String()
    class Arguments:
        first_name = graphene.String(required=True)
        last_name = graphene.String(required=True)
        username = graphene.String(required=True)
        password = graphene.String(required=True)
        email = graphene.String(required=True)
        
    def mutate(self, info, first_name, last_name, username, password, email):
        
        tutor = Tutor(
            first_name=first_name,
            last_name=last_name,
            username=username,
            email=email,
        )
        tutor.set_password(password)
        tutor.save()
        token = get_token(tutor)
        refresh_token = create_refresh_token(tutor)
        return CreateTutor(first_name=first_name, last_name=last_name, username=username, token=token, refresh_token=refresh_token)

class Query(graphene.ObjectType):
    whoami = graphene.Field(TutorType)
    tutors = graphene.List(TutorType)
    def resolve_whoami(self, info):
        tutor = info.context.tutor
        # Check if tutor is authenticated
        if tutor.is_anonymous:
            raise Exception("Authentication Failure: Your must be signed in")
        return tutor
    # Check if tutor is authenticated using decorator
    @login_required
    def resolve_tutors(self, info):
        return Tutor().objects.all()

class Mutation(graphene.ObjectType):
    token_auth = graphql_jwt.ObtainJSONWebToken.Field()
    refresh_token = graphql_jwt.Refresh.Field()
    verify_token = graphql_jwt.Verify.Field()
    create_tutor = CreateTutor.Field()

schema = graphene.Schema(query=Query, mutation=Mutation)