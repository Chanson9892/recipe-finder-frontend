# RecipeFinder

Search for recipes based on a search words. This will give multiple recipes to choose from to look at ingredients, an image of the meal, and a link to the recipe website. You can filter your recipe search to include certain ingredients and will give recipes that include those ingredients. You can also favorite a recipe to save it for later on your profile page. On your profile page, you can add, delete, and edit comments to the recipes.


### Frontend

```sh
# from within this directory:
npm install
npm start
```

### Backend

```sh
# from within this directory:
bundle install
rails db:create db:migrate db:seed
rails s
```
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

### APIs
used Spoonacular API: https://spoonacular.com/food-api 
A free recipe API with more than enough information than you can ask for. Used to grab information on searched recipes.

used Material-UI: https://material-ui.com/
A free css library to help style the app.

### Contributors
Chandler Hanson
