#pragma strict


var world: World;


/*
//This is what you have to do in order to find te "World" or Game Script
function Start () {
  world = GameObject.Find("World").GetComponent("World");
	//basically finds the gameobject called "World"
	//then it accesses the component -- .js code -- World.js
}
*/

//world.SendMessage("AddCoin");  It looks like this
//is what sends the message to the "world"
//and the AddCoin is the name of the function I think in the "world"


//Next step is to create a script called "Clickable" 
//this script will detect if an object is clicked and 
//there will be a global variable set (inside the world)
//where it will detect whether something is creating a
//

var held: boolean = false; 

