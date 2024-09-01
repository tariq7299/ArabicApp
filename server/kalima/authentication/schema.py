

# authenticaion/schema.py

import graphene
import graphql_jwt
from django.contrib.auth import get_user_model
# from .models import Tutor
from graphene_django import DjangoObjectType
from graphql_jwt.decorators import login_required
from graphql_jwt.shortcuts import create_refresh_token, get_token

class UserType(DjangoObjectType):
    class Meta:
        model = get_user_model()
        fields = ('id', 'username', 'first_name', 'last_name', 'email') 

class CreateUser(graphene.Mutation):
    user = graphene.Field(UserType)
    token = graphene.String()
    refresh_token = graphene.String()
    class Arguments:
        first_name = graphene.String(required=True)
        last_name = graphene.String(required=True)
        username = graphene.String(required=True)
        password = graphene.String(required=True)
        email = graphene.String(required=True)
    
    def mutate(self, info, username, password, email, first_name=None, last_name=None):
        User = get_user_model()
        user = User(
            first_name=first_name,
            last_name=last_name,
            username=username,
            email=email,
        )
        user.set_password(password)
        user.save()
        token = get_token(user)
        refresh_token = create_refresh_token(user)
        return CreateUser(user=user, token=token, refresh_token=refresh_token)

class Query(graphene.ObjectType):
    whoami = graphene.Field(UserType)
    tutors = graphene.List(UserType)
    @login_required
    def resolve_whoami(self, info):
        # print(f"infoooo: {info}")
        print(f"User: {info.context.user}")
        print(f"Authenticated: {info.context.user.is_authenticated}")
        print(f"User type: {type(info.context.user)}")
        print(f"User Email: {type(info.context.user.email)}")
        print(f"User username: {type(info.context.user.username)}")
        user = info.context.user
        # Check if user is authenticated
        if user.is_anonymous:
            raise Exception("Authentication Failure: Your must be signed in")
        return user
    # Check if user is authenticated using decorator
    @login_required
    def resolve_tutors(self, info):
        User = get_user_model()
        return User.objects.all()

class Mutation(graphene.ObjectType):
    token_auth = graphql_jwt.ObtainJSONWebToken.Field()
    refresh_token = graphql_jwt.Refresh.Field()
    verify_token = graphql_jwt.Verify.Field()
    create_user = CreateUser.Field()

schema = graphene.Schema(query=Query, mutation=Mutation)