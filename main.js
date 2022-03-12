leftWrist_X =0;
rightWrist_X =0;
difference = 0;

function setup()
 {
 video = createCapture(VIDEO);
 video.size(550,500);
 
 canvas = createCanvas(550,500)
 canvas.position(560,150);

 poseNet = ml5.poseNet(video, modelLoaded);
 poseNet.on('pose', gotPoses)
}

function modelLoaded()
{
  console.log('PoseNet is Initialized!');  
}

function draw()
{
background('#00008B');

document.getElementById("square_side").innerHTML = "Width and Heiught of a Square will be = " +difference+"px";
textSize(difference);
fill('#CBC3E3');
text('Vihaan',50,400);
}

function gotPoses(results)
{
  if(results.length > 0) 
  {
   console.log(results)

  leftWrist_X = results[0].pose.leftWrist.x;
  rightWrist_X = results[0].pose.rightWrist.x;
  difference = floor( leftWrist_X -rightWrist_X);

  console.log("leftWrist_X =" +leftWrist_X+ "rightWrist_X = " +rightWrist_X+ "difference = " +difference); 
  } 
}