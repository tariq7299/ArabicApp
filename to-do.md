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

# Frontend

## GLOBAL

- Find a better wat to @import \_variables.scss file into your scss fieles, like iam using the full relative path !! and i believe that there is a better way using `vite` or something
- Don't forget about incorberating the arabic language
- Find another font for section titles only
- Find a a better names for color variables
- Integrate typeScript with the frontend code

## NavBar

- Crop logo only form the logo image nested inside the navbar
- Change the burger toggle icon to be black and bolder (You can't style it more you need to change the icon compleetely)
- Create the navbar expanding and collapsing transition to be just like british councel navbar
- Put the correct menue items with the correct font
- Put the logo in mobile navbar

## MyButton

- Add arrow icon to button
- Make get started button at the hero section bigger than the other buttons
- Add the camply hover effect

## HeroSection

- Ask ahmed ali what to replace the videos in the first section in camply website ??
- +Put the logo in mobile navbar
- Add more padddin-bottom to the hero title header

## MyTitle

- Find another bettert way to define the textColor for the title !! like it is very clunky right now

## Subscription plan

- Find some nice pictures for plans and crop them if necessary
- Two main subscription plans (Adult and kids) and inside each one antother three secondary plans

## Subscription plan price

- Make grow with view port using calmp() to be like the price in camply

## Course Card

- Make the hover effect of color of card apply to all card like in camply and not just the meta of card without picture ! and i think they did this using some over lay div/color of some sort !!!

# Backend

## GLOBAL

- Create the software architicure using flow charts and DDD
- We need to create a route for the admin panel of the website (This admin panel will enable the owner to add course/books, see all the people info that submitted, answers of the survies)
- Create a requiremnts.txt and requirements-dev.txt
- Integrate mypy to use static typing in your python project
- Use Strawberry instead of graphen and use mypy with it for static typing useing python
- extedn the User model that is created by default in django instead of creating your own user model (Tutor)
- Create authenticaion page of register and login using graphQL and JWT auth
- Use BLL method to struct your application, BLL is *Business logic layer* like i want the app to be in three main parts

    1. UI part
    3. BLL part 
    4. DATA LAYER part
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