// const API_KEY = "6716bbd7e07b44498e4287907d91a5ca";

// async function getRecipes(){
//     const response = await fetch(`https://api.spoonacular.com/recipes/random?number=10&apiKey=${API_KEY}`)

//     const data = await response.json()

//     return data.recipes
// }


// async function init(){
//     const recipes = await getRecipes();
//     console.log(recipes);
// }

// init()
const API_KEY = process.env.SPOONACULAR_API_KEY;

async function getRecipes() {
  const response = await fetch(`https://api.spoonacular.com/recipes/random?number=10&apiKey=${API_KEY}`);
  const data = await response.json();
  return data.recipes;
}

async function init() {
  const recipes = await getRecipes();
  console.log(recipes);
}

init();
