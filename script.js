// var does not respect block scopes {}.
var fruits = 'mango';
{
  var fruits = 'orange';
}
console.log(fruits);

var sports = 'cricket';
function sportmans() {
  var sports = 'football';
  console.log(sports);
}
sportmans();
console.log(sports);
// var respects function scopes. So the var inside the function is limited to the scope of the function, while the var outside the function is in the global namespace.
