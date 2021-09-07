// var does not respect block scopes {}.
var fruits = 'mango';
{
  var fruits = 'orange';
}
console.log(fruits);
// ----------------------
var sports = 'cricket';
function sportmans() {
  var sports = 'football';
  console.log(sports);
}
sportmans();
console.log(sports);
// -----------------------
// var respects function scopes. So the var inside the function is limited to the scope of the function, while the var outside the function is in the global namespace.

let propertyBuild = 'TerraceAppartment';
{
  let propertyBuild = 'RadheAppartment';
  console.log(propertyBuild);
}
console.log(propertyBuild);
// --------------------
// var has a concept of hoisting.

// When you declare something using var, it first initializes the variables with the value of undefined to the top of the scope.
var country = 'india';
var country = 'china';
console.log(country);
// ------------
let state = undefined;
state = 'Bangalore';
state = 'Bangalore';

// -----------
b = 23;
var b;
e = 32;
let e;
console.log(b);
console.log(e);
