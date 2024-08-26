import graphene
import authentication.schema
import courses.schema
import students.schema


class Query(
    authentication.schema.Query,
    courses.schema.Query,
    students.schema.Query,
    graphene.ObjectType,
):
    pass


class Mutation(
    authentication.schema.Mutation,
    courses.schema.Mutation,
    students.schema.Mutation,
    graphene.ObjectType,
):
    pass


schema = graphene.Schema(query=Query, mutation=Mutation)
