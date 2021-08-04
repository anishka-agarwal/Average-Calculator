var weight = [35,38,42,45,43,34,36,41,48,32];
function average(){
  var sum = 0
  for (let i = 0; i < weight.length; i++) {
    sum= sum + weight[i]    
  }
  var average= sum/weight.length
  console.log(average)
}

function setup() {
  createCanvas(400,400);
  average()
}

function draw() 
{
  background(30);
}

 

