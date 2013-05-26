#pragma strict



var moveSpeed : float = 0.10;
var turnSpeed : float = 0.1;
function Start () {


}

function Update () {


//normal movement controls
if (Input.GetKey(KeyCode.LeftShift || KeyCode.RightShift))
{
	if (Input.GetKey("w"))
	{
		transform.position += transform.forward.normalized*moveSpeed;
	}
	if (Input.GetKey("a"))
	{
		transform.position -= transform.right.normalized*moveSpeed;
	}
	if (Input.GetKey("s"))
	{
		transform.position -= transform.forward.normalized*moveSpeed;
	}
	if (Input.GetKey("d"))
	{
		transform.position += transform.right.normalized*moveSpeed;
	}
	if (Input.GetMouseButton(1))
	{
		transform.position -= transform.forward.normalized*moveSpeed;
	}
	if (Input.GetMouseButton(0))
	{
		transform.position += transform.forward.normalized*moveSpeed;
	}
}
else
{

		if (Input.GetKey("w"))
	{
		transform.position += transform.up.normalized*moveSpeed;
	}
	if (Input.GetKey("a"))
	{
		transform.position -= transform.right.normalized*moveSpeed;
	}
	if (Input.GetKey("s"))
	{
		transform.position -= transform.up.normalized*moveSpeed;
	}
	if (Input.GetKey("d"))
	{
		transform.position += transform.right.normalized*moveSpeed;
	}
	if (Input.GetMouseButton(0))
	{
		transform.position += transform.forward.normalized*moveSpeed;
	}
		if (Input.GetMouseButton(1))
	{
		transform.position -= transform.forward.normalized*moveSpeed;
	}
	
	
	
	
	//
	
}
	


}

