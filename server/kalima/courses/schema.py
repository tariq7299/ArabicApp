import graphene
from graphene_django import DjangoObjectType

from .models import Course


class CourseType(DjangoObjectType):
    class Meta:
        model = Course
        fields = "__all__"


class CreateCourse(graphene.Mutation):
    class Arguments:
        name = graphene.String(required=True)
        level = graphene.Int(required=True)

    course = graphene.Field(CourseType)

    def mutate(self, info, name, level):
        """
        The mutate function is the function that will be called when a client
        makes a request to this mutation. It takes in four arguments:
        self, info, name and level. The first two are required by all mutations;
        the last two are the arguments we defined in our CreatePostInput class.

        :param self: Access the object's attributes and methods
        :param info: Access the context of the request
        :param name: Create a new post with the name provided
        :param level: Pass the level of the post
        :return: A CreateCourse object
        """
        course = Course(name=name, level=level)
        course.save()
        return CreateCourse(course=course)


class UpdateCourse(graphene.Mutation):
    class Arguments:
        id = graphene.ID(required=True)
        name = graphene.String()
        level = graphene.String()

    post = graphene.Field(CourseType)

    def mutate(self, info, id, name=None, level=None):
        """
        The mutate function is the function that will be called when a client
        calls this mutation. It takes in five arguments: self, info, id, name and level.
        The first two are required by all mutations and the last three are specific to this mutation.
        The self argument refers to the class itself (UpdateCourse) while info contains information about
        the query context such as authentication credentials or access control lists.

        :param self: Pass the instance of the class
        :param info: Access the context of the request
        :param id: Find the course we want to update
        :param name: Update the name of a course
        :param level: Update the level of a course
        :return: An instance of the UpdateCourse class, which is a subclass of mutation
        """
        try:
            course = Course.objects.get(pk=id)
        except Course.DoesNotExist:
            raise Exception("Post not found")

        if name is not None:
            course.name = name
        if level is not None:
            course.level = level

        course.save()
        return UpdateCourse(course=course)


class DeleteCourse(graphene.Mutation):
    class Arguments:
        id = graphene.ID(required=True)

    success = graphene.Boolean()

    def mutate(self, info, id):
        """
        The mutate function is the function that will be called when a client
        calls this mutation. It takes in three arguments: self, info, id. The first
        argument is the object itself (the class instance). The second argument is
        information about the query context and user making this request. We don't
        need to use it here so we'll just pass it along as-is to our model method.
        The third argument is an ID of a course we want to delete.

        :param self: Represent the instance of the class
        :param info: Access the context of the query
        :param id: Find the course that is to be deleted
        :return: A deletepost object, which is the return type of the mutation
        """
        try:
            course = Course.objects.get(pk=id)
        except Course.DoesNotExist:
            raise Exception("Course not found")

        course.delete()
        return DeleteCourse(success=True)


class Query(graphene.ObjectType):
    courses = graphene.List(CourseType)

    def resolve_courses(self, info):
        """
        The resolve_courses function is a resolver. It’s responsible for retrieving the courses from the database and returning them to GraphQL.

        :param self: Refer to the current instance of a class
        :param info: Pass along the context of the query
        :return: All post objects from the database
        """
        return Course.objects.all()


class Mutation(graphene.ObjectType):
    create_course = CreateCourse.Field()
    update_course = UpdateCourse.Field()
    delete_course = DeleteCourse.Field()


schema = graphene.Schema(query=Query, mutation=Mutation)
