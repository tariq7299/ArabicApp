# Questions

- How that test part going to be implemented
-

# TECH TO USE

- **JWT Auth**
  - **Encrypt token before stroing it in localStorage or put it insise a http-only cookie**
- **React Hook Form**
  - **Controller**
- **Graph QL Apollo Client**
- **REACT JS**
  - **Context API**
  - **useMemo and useCallBack**
- **React Bootstrap**
- **React Data Table Component**
- **Inertia.js**

## Fetuers i want to add later

- Blogs with the ability to also share on other social media websites(telegram-whatsapp-face)
- Dash board and learning platform
- Mobile app for all of that
- Accounts for clients/studens

# Frontend

## GLOBAL

- Find a better wat to @import \_variables.scss file into your scss fieles, like iam using the full relative path !! and i believe that there is a better way using `vite` or something
- Don't forget about incorberating the arabic language
- Find another font for section titles only
- Find a a better names for color variables
- Integrate typeScript with the frontend code
- Find better names for the nav bar tabs (like instaead of about us make it (learn more about your tutor))
- Use section-article-nav-footer-header-main- in there approprita html tags
- Change the english font of the app from britich to somethign sexy
- Use `@include media-breakpoint-up(){}` instead of evfy media query
- fix `downloadable font: download failed (font-family: "Alata" style:normal weight:400 stretch:100 src index:0): status=2152398850 source: https://fonts.gstatic.com/s/alata/v10/PbytFmztEwbIoce9zqYzQ1OW.woff2`
- Create courses page
- Add Arabic Alphabit letters in the background
- Fix the hero section bacground (You can just/simply change the background color from blue to like creamy ! with gradient ! and then change the color of the nav bar to like white or green ? or maybe make it primary green at first when user loads the page and then make it creamy !! )

## NavBar

- Crop logo only form the logo image nested inside the navbar
- Change the burger toggle icon to be black and bolder (You can't style it more you need to change the icon compleetely)
- Create the navbar expanding and collapsing transition to be just like british councel navbar
- Put the correct menue items with the correct font
- Put the logo in mobile navbar
- remove slogan from logo in nav bar
- Change the logo to kaleem

## MyButton

- Add arrow icon to button
- Make get started button at the hero section bigger than the other buttons
- Add the camply hover effect

## HeroSection

- Ask ahmed ali what to replace the [v](https://benjamincrozat.com/bun-package-manager)ideos in the first section in camply website ??
- +Put the logo in mobile navbar
- Add more padddin-bottom to the hero title header
- Change the background of hero section using photo shop

## MyTitle

- Find another bettert way to define the textColor for the title !! like it is very clunky right now

## Subscription plan

- Remove this section in the first version of the application
- Find some nice pictures for plans and crop them if necessary
- Two main subscription plans (Adult and kids) and inside each one antother three secondary plans
- Fix the buttons widths

## Subscription plan price

- Make grow with view port using calmp() to be like the price in camply

## Course Card

- Make the hover effect of color of card apply to all card like in camply and not just the meta of card without picture ! and i think they did this using some over lay div/color of some sort !!!

<<<<<<< HEAD

## Testimonials section

- Make the each testimonial be unique
- Add next and previous button to testominals aslo make them draggable using swirper library
-

## Contact us page 
- Add some background patterns in the contact us section information
- Color the inputs and theme them
- add correct fonts to inputs
- Add correct types for inputs
- Check correct validation 
- Create a loading indicator in contact us that will be visisble untill the 
page elemtnst will load
- Wuery for all select options of contact us fields from backckedn (database) when page relaods
- Make the phone field as phone filed with +CountryCode
- Make country as Country with flags
- make the contact us page more dynamic in rendring select choices and fields ! like in bolesa
- Add ablitity to type your language if not dispalyed in the Native language selection
- Populate conact imformation from the data base of the tutor
- add all countries of the world to the choucies
- add only letters are allowecd in the first and last anem inputs validation in the client side validation
-- Add country input field that will show flags

# Backend

## GLOBAL

=======

- Check the correct namings/names for every thing with the help from the domain exepert
- Create the software architicure using flow charts and DDD
- We need to create a route for the admin panel of the website (This admin panel will enable the owner to add course/books, see all the people info that submitted, answers of the survies)
- Create a requiremnts.txt and requirements-dev.txt
- Integrate mypy to use static typing in your python project
- Use Strawberry instead of graphen and use mypy with it for static typing useing python
- extedn the User model that is created by default in django instead of creating your own user model (Tutor)
- Create authenticaion page of register and login using graphQL and JWT auth
- Use BLL method to struct your application, BLL is _Business logic layer_ like i want the app to be in three main parts

  1. UI part
  2. BLL part
  3. DATA LAYER part
     looke
     // Authorization logic lives inside postRepository
     const postRepository = require('postRepository');

  const postType = new GraphQLObjectType({
  name: 'Post',
  fields: {
  body: {
  type: GraphQLString,
  resolve(post, args, context, { rootValue }) {
  return postRepository.getBody(context.user, post)
  }
  }
  }
  })

- Formate the code on save using a formatting and vs code settings
- Use Groups and create groups that will facilitate Authorization
- Chnage the kalima app inside django to become `core` instead
- Use prettier to formate your code
- get some view/template to be rendered at route "/" of my app
- Use faker to fake to insert fake data

## Courses App
d
- Create mutate.py and query.py and populate each instead of writing all in scheme.py

## Authenticaton App

- Create mutate.py and query.py and populate each instead of writing all in scheme.py
- inhereit from User model and

## Sutdents app

### Erorr handling 
- Try to set codes in the bacnend to handle errors better ! look at the following example:
```jsx
 if (graphQLError.extensions?.code === 'BAD_USER_INPUT') {
            // Handle validation errors
            const validationErrors = graphQLError.extensions?.errors || {};
            Object.values(validationErrors).forEach((errorMessage) => {
              toast.error(errorMessage);
            });
```

- Try to use the following in backend:
```python
class CreateContactSubmission(DjangoModelFormMutation):
    contact_submission = Field(ContactSubmissionType)

    class Meta:
        form_class = ContactSubmissionForm

    @classmethod
    def perform_mutate(cls, form, info):
        if not form.is_valid():
            # If the form is not valid, raise a GraphQLError with the validation errors
            raise GraphQLError(form.errors.as_json())
        return super().perform_mutate(form, info)
```

```jsx
const [submitContactSubmission, { data: responseFromSubmission, loading, error }] = useMutation(CREATE_CONTACT_SUBMISSION, {
  onError: (error) => {
    console.error('Mutation error:', error);
    if (error.networkError) {
      toast.error('Network error. Please check your connection and try again.');
    } else if (error.graphQLErrors) {
      error.graphQLErrors.forEach(({ message }) => {
        const errors = JSON.parse(message);
        for (let field in errors) {
          const fieldErrors = errors[field].map(err => err.message).join(", ");
          toast.error(`${field}: ${fieldErrors}`);
        }
      });
    } else {
      toast.error('An unexpected error occurred. Please try again.');
    }
  },
  onCompleted: (data) => {
    console.log("data", data);
    toast.success('Form submitted successfully!');
  },
});
```
So here we can use the native `graphQLErrors` instead of handling the errors like in rest apis with `response.success`