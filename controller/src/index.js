// Name: Harel Yerushalmi
// ID: 203456603

import { initialize } from '@muzilator/sdk';

var midiChannel;
var currentCirclePlaying;
var currentId = 0;
var circleIsDark = false;
var circleIsBright = true;
var circleWasClicked = false;
var musicIsPlaying = false;
var CurrentScale = CMajorPentatonic ;
var NumberOfScales = 4

const CMajorPentatonic = [
  {
    id: 48,
    x: 50,
    y: 120,
    radius: 25,
	r: 100,
	g: 255,
	b: 0,
	isDark: false
  },
  {
    id: 51,
    x: 120,
    y: 120,
    radius: 25,
	r: 255,
	g: 100,
	b: 100,
	isDark: false
  },
  {
    id: 53,
    x: 190,
    y: 120,
    radius: 25,
	r: 200,
	g: 100,
	b: 255,
	isDark: false
  },
  {
    id: 54,
    x: 260,
    y: 120,
    radius: 25,
	r: 0,
	g: 0,
	b: 255,
	isDark: false
  },
  {
    id: 55,
    x: 330,
    y: 120,
    radius: 25,
	r: 100,
	g: 200,
	b: 255,
	isDark: false
  },
  {
    id: 58,
    x: 400,
    y: 120,
    radius: 25,
	r: 100,
	g: 255,
	b: 100,
	isDark: false
  },
  {
    id: 60,
    x: 470,
    y: 120,
    radius: 25,
	r: 255,
	g: 100,
	b: 0,
	isDark: false
  },  
];

const CMinorPentatonic = [
	{
	  id: 48,
	  x: 50,
	  y: 220,
	  radius: 25,
	  r: 255,
	  g: 100,
	  b: 0,
	  isDark: false
	},
	{
		id: 51,
		x: 120,
		y: 220,
		radius: 25,
		r: 57,
		g: 0,
		b: 220,
		isDark: false
	  },
	  {
		id: 53,
		x: 190,
		y: 220,
		radius: 25,
		r: 200,
		g: 100,
		b: 255,
		isDark: false
	  },
	  {
		id: 55,
		x: 260,
		y: 220,
		radius: 25,
		r: 0,
		g: 0,
		b: 255,
		isDark: false
	  },
	  {
		id: 58,
		x: 330,
		y: 220,
		radius: 25,
		r: 100,
		g: 200,
		b: 255,
		isDark: false
	  },
	  {
		id: 60,
		x: 400,
		y: 220,
		radius: 25,
		r: 100,
		g: 255,
		b: 100,
		isDark: false
	  },	
  ];

  const CMixolydian = [ 
	{
		id: 50,
		x: 50,
		y: 320,
		radius: 25,
		r: 102,
		g: 109,
		b: 133,
		isDark: false
	},
	{
		id: 58,
		x: 120,
		y: 320,
		radius: 25,
		r: 200,
		g: 43,
		b: 190,
		isDark: false
	},
	{
		id: 60,
		x: 190,
		y: 320,
		radius: 25,
		r: 50,
		g: 0,
		b: 240,
		isDark: false
	},
		  	  

  ];

  const CDorian = [
	{
	  id: 48,
	  x: 50,
	  y: 420,
	  radius: 25,
	  r: 100,
	  g: 255,
	  b: 0,
	  isDark: false
	},
	{
	  id: 50,
	  x: 120,
	  y: 420,
	  radius: 25,
	  r: 255,
	  g: 100,
	  b: 100,
	  isDark: false
	},
	{
	  id: 51,
	  x: 190,
	  y: 420,
	  radius: 25,
	  r: 200,
	  g: 100,
	  b: 255,
	  isDark: false
	},
	{
	  id: 53,
	  x: 260,
	  y: 420,
	  radius: 25,
	  r: 0,
	  g: 0,
	  b: 255,
	  isDark: false
	},
	{
	  id: 55,
	  x: 330,
	  y: 420,
	  radius: 25,
	  r: 100,
	  g: 200,
	  b: 255,
	  isDark: false
	},
	{
	  id: 57,
	  x: 400,
	  y: 420,
	  radius: 25,
	  r: 100,
	  g: 255,
	  b: 100,
	  isDark: false
	},
	{
	  id: 58,
	  x: 470,
	  y: 420,
	  radius: 25,
	  r: 255,
	  g: 100,
	  b: 0,
	  isDark: false
	},
	{
	  id: 60,
	  x: 540,
	  y: 420,
	  radius: 25,	
	  r: 7,
	  g: 53,
	  b: 30,	
	  isDark: false
	}  
	 
];
const TextBoundingTriangle = [
	{
		x:500,
		y:80,
		height:60,
		width:180
	},
	{
		x:500,
		y:180,
		height:60,
		width:180
	},
	{
		x:500,
		y:280,
		height:60,
		width:180
	},
	{
		x:570,
		y:380,
		height:60,
		width:120
	},
];

const TextButtons = [
	{
		name:'CMajorPentatonic',
		x:510,
		y:120,
		
	},
	{
		name:'CMinorPentatonic',
		x:510,
		y:220,
	},
	{
		name:'CMixolydian',
		x:510,
		y:320,
	},
	{
		name:'CDorian',
		x:570,
		y:420,
	},
];

const Scales = [CMajorPentatonic,CMinorPentatonic,CMixolydian,CDorian]

const commands = {
	NOTE_ON: 'note-on',
	NOTE_OFF: 'note-off',
	MUSIC_ON: 'music-on',
	MUSIC_OFF: 'music-off'
}

window.addEventListener('load', () => {
	async function init() {
		var platform = await initialize()
		midiChannel = await platform.createChannel('midi')
		midiChannel.addEventListener('message', onMidiMessage);
		midiChannel.start()
	}
	init()
	draw()
})

function onMidiMessage(message) {
	switch (message.data.type) {
		case 'show-info':
			showMsgInTextBox(message.data.message);
			break
	}
}

function showMsgInTextBox(message) {
	var canvas = document.getElementById("myCanvas");
	var ctx = canvas.getContext('2d');
	
	ctx.font = '48px serif';
	ctx.fillText(" ", 10, 200);
	ctx.fillText(message, 10, 200);
}

function isIntersect(point, circle) {
	return Math.sqrt((point.x - circle.x) ** 2 + (point.y - circle.y) ** 2) < circle.radius;
}

function playNewNote(circle, type) {

	midiChannel.postMessage({type: commands.NOTE_OFF, pitch: currentId, velocity: 150});
	midiChannel.postMessage({type: type, pitch: circle.id, velocity: 150});	
}

function PlayCircle(i_Circle,i_NoteCommand){
	midiChannel.postMessage({type: i_NoteCommand, pitch: i_Circle.id, velocity: 150});
}

function drawDarker(circle) {
	
	if(!circle.isDark){
	
		if (circle.r >= 20 )
			circle.r -= 20;	
		if (circle.g >= 20)
			circle.g -= 20;
		if (circle.b >= 20)
			circle.b -= 20;
	}
	circle.isDark = true;
	drawCircle(circle);
}

function drawBrihgter(circle) {
	
	if(circle.isDark){
		circle.r += 20;
		circle.g += 20;
		circle.b += 20;
	}
		
	circle.isDark = false;
	drawCircle(circle);
}

function drawCircle(circle) {
	var canvas = document.getElementById("myCanvas");
    var ctx = canvas.getContext('2d');
	ctx.beginPath();
    ctx.arc(circle.x, circle.y, circle.radius, 0, 2 * Math.PI, false);
    ctx.fillStyle = 'rgb' + '(' + circle.r + ',' + circle.g + ',' + circle.b + ')';
    ctx.fill();
}

function draw() {
    var canvas = document.getElementById("myCanvas");
    var ctx = canvas.getContext('2d');

	Scales.forEach(Scale => {

		Scale.forEach(circle => {
			ctx.beginPath();
			ctx.arc(circle.x, circle.y, circle.radius, 0, 2 * Math.PI, false);
			ctx.fillStyle = 'rgb' + '(' + circle.r + ',' + circle.g + ',' + circle.b + ')';
			ctx.fill();
		  });
	})
	
	TextBoundingTriangle.forEach(Triangle => {
		
		ctx.rect(Triangle.x,Triangle.y,Triangle.width,Triangle.height);
		
	});
		
	ctx.font = ' bold 20px ariel';    // Text that showing the scale present as bubbles
	ctx.fillStyle = "black";

	TextButtons.forEach(TextButton =>{
		ctx.fillText(TextButton.name,TextButton.x,TextButton.y)
	});	
}


function ColorTextButton(i_TextButton,i_ColorName){
	var canvas = document.getElementById("myCanvas");
	var ctx = canvas.getContext('2d');

	ctx.fillStyle = "white";
	ctx.fillText(i_TextButton.name,i_TextButton.x,i_TextButton.y)
	ctx.fillStyle = i_ColorName;
	ctx.fillText(i_TextButton.name,i_TextButton.x,i_TextButton.y)


}

function IsIntersecdedWithRectangle(i_xMousePos,i_yMousePos,i_Rectangle){
	
	if ((i_xMousePos >= i_Rectangle.x) && (i_xMousePos <= (i_Rectangle.x + i_Rectangle.width)) &&
	(i_yMousePos>= i_Rectangle.y) && (i_yMousePos <= (i_Rectangle.y + i_Rectangle.height))) {
		
		return true;
	}
	return false;
}


//CMajorPentatonic
 function CMajorPentatonicKeypress(i_Key) {		
  
  var CurrentKey = i_Key.keyCode;
  
  
  switch (CurrentKey) {
	case 65:
		drawDarker(CMajorPentatonic[0]);
		PlayCircle(CMajorPentatonic[0],commands.NOTE_ON);
		setTimeout(function(){PlayCircle(CMajorPentatonic[0],commands.NOTE_OFF)},500);
	 	break;
	case 83:
		drawDarker(CMajorPentatonic[1]);
		PlayCircle(CMajorPentatonic[1],commands.NOTE_ON);
		setTimeout(function(){PlayCircle(CMajorPentatonic[1],commands.NOTE_OFF)},500);
		break;
	case 68:
		drawDarker(CMajorPentatonic[2]);
		PlayCircle(CMajorPentatonic[2],commands.NOTE_ON);
		setTimeout(function(){PlayCircle(CMajorPentatonic[2],commands.NOTE_OFF)},500);
	  	break;
	case 70:
		drawDarker(CMajorPentatonic[3]);
		PlayCircle(CMajorPentatonic[3],commands.NOTE_ON);
		setTimeout(function(){PlayCircle(CMajorPentatonic[3],commands.NOTE_OFF)},500);
		break;	
	case 71:
		drawDarker(CMajorPentatonic[4]);
		PlayCircle(CMajorPentatonic[4],commands.NOTE_ON);
		setTimeout(function(){PlayCircle(CMajorPentatonic[4],commands.NOTE_OFF)},500);
		break;
	case 72:
		drawDarker(CMajorPentatonic[5]);
		PlayCircle(CMajorPentatonic[5],commands.NOTE_ON);
		setTimeout(function(){PlayCircle(CMajorPentatonic[5],commands.NOTE_OFF)},500);
		break;
	case 74:
		drawDarker(CMajorPentatonic[6]);
		PlayCircle(CMajorPentatonic[6],commands.NOTE_ON);
		setTimeout(function(){PlayCircle(CMajorPentatonic[6],commands.NOTE_OFF)},500);
		break;			  
  }  
}


function CMajorPentatonicKeyRelease(i_Key){
	var CurrentKey = i_Key.keyCode;
	switch (CurrentKey) {
		case 65:
		drawBrihgter(CMajorPentatonic[0]);
		PlayCircle(CMajorPentatonic[0],commands.NOTE_OFF);
	 	break;
	case 83:
		drawBrihgter(CMajorPentatonic[1]);
		PlayCircle(CMajorPentatonic[1],commands.NOTE_OFF);
		break;
	case 68:
		drawBrihgter(CMajorPentatonic[2]);
		PlayCircle(CMajorPentatonic[2],commands.NOTE_OFF);
	  	break;
	case 70:
		drawBrihgter(CMajorPentatonic[3]);
		PlayCircle(CMajorPentatonic[3],commands.NOTE_OFF);
		break;	
	case 71:
		drawBrihgter(CMajorPentatonic[4]);
		PlayCircle(CMajorPentatonic[4],commands.NOTE_OFF);
		break;
	case 72:
		drawBrihgter(CMajorPentatonic[5]);
		PlayCircle(CMajorPentatonic[5],commands.NOTE_OFF);
		break;
	case 74:
		drawBrihgter(CMajorPentatonic[6]);
		PlayCircle(CMajorPentatonic[6],commands.NOTE_OFF);
		break;	
	  }  
	
}
//CMinorPentatonic
function CMinorPentatonicKeypress(i_Key) {		
  
	var CurrentKey = i_Key.keyCode;
	
	
	switch (CurrentKey) {
	  case 65:
		  drawDarker(CMinorPentatonic[0]);
		  PlayCircle(CMinorPentatonic[0],commands.NOTE_ON);
		  setTimeout(function(){PlayCircle(CMinorPentatonic[0],commands.NOTE_OFF)},500);
		   break;
	  case 83:
		  drawDarker(CMinorPentatonic[1]);
		  PlayCircle(CMinorPentatonic[1],commands.NOTE_ON);
		  setTimeout(function(){PlayCircle(CMinorPentatonic[1],commands.NOTE_OFF)},500);
		  break;
	  case 68:
		  drawDarker(CMinorPentatonic[2]);
		  PlayCircle(CMinorPentatonic[2],commands.NOTE_ON);
		  setTimeout(function(){PlayCircle(CMinorPentatonic[2],commands.NOTE_OFF)},500);
			break;
	  case 70:
		  drawDarker(CMinorPentatonic[3]);
		  PlayCircle(CMinorPentatonic[3],commands.NOTE_ON);
		  setTimeout(function(){PlayCircle(CMinorPentatonic[3],commands.NOTE_OFF)},500);
		  break;	
	  case 71:
		  drawDarker(CMinorPentatonic[4]);
		  PlayCircle(CMinorPentatonic[4],commands.NOTE_ON);
		  setTimeout(function(){PlayCircle(CMinorPentatonic[4],commands.NOTE_OFF)},500);
		  break;
	  case 72:
		  drawDarker(CMinorPentatonic[5]);
		  PlayCircle(CMinorPentatonic[5],commands.NOTE_ON);
		  setTimeout(function(){PlayCircle(CMinorPentatonic[5],commands.NOTE_OFF)},500);
		  break;  
	}  
}

function CMinorPentatonicKeyRelease(i_Key){
	var CurrentKey = i_Key.keyCode;
	switch (CurrentKey) {
		case 65:
		drawBrihgter(CMinorPentatonic[0]);
		PlayCircle(CMinorPentatonic[0],commands.NOTE_OFF);
	 	break;
	case 83:
		drawBrihgter(CMinorPentatonic[1]);
		PlayCircle(CMinorPentatonic[1],commands.NOTE_OFF);
		break;
	case 68:
		drawBrihgter(CMinorPentatonic[2]);
		PlayCircle(CMinorPentatonic[2],commands.NOTE_OFF);
	  	break;
	case 70:
		drawBrihgter(CMinorPentatonic[3]);
		PlayCircle(CMinorPentatonic[3],commands.NOTE_OFF);
		break;	
	case 71:
		drawBrihgter(CMinorPentatonic[4]);
		PlayCircle(CMinorPentatonic[4],commands.NOTE_OFF);
		break;
	case 72:
		drawBrihgter(CMinorPentatonic[5]);
		PlayCircle(CMinorPentatonic[5],commands.NOTE_OFF);
		break;
	case 74:
		drawBrihgter(CMinorPentatonic[6]);
		PlayCircle(CMinorPentatonic[6],commands.NOTE_OFF);
		break;	
	  }  
	
}
//CMixolydian
function CMixolydianKeypress(i_Key) {		
  
	var CurrentKey = i_Key.keyCode;
	
	
	switch (CurrentKey) {
	  case 65:
		  drawDarker(CMixolydian[0]);
		  PlayCircle(CMixolydian[0],commands.NOTE_ON);
		  setTimeout(function(){PlayCircle(CMixolydian[0],commands.NOTE_OFF)},500);
		   break;
	  case 83:
		  drawDarker(CMixolydian[1]);
		  PlayCircle(CMixolydian[1],commands.NOTE_ON);
		  setTimeout(function(){PlayCircle(CMixolydian[1],commands.NOTE_OFF)},500);
		  break;
	  case 68:
		  drawDarker(CMixolydian[2]);
		  PlayCircle(CMixolydian[2],commands.NOTE_ON);
		  setTimeout(function(){PlayCircle(CMixolydian[2],commands.NOTE_OFF)},500);
		 break;
	}  
}

function CMixolydianKeyRelease(i_Key){
	var CurrentKey = i_Key.keyCode;
	switch (CurrentKey) {
		case 65:
		drawBrihgter(CMixolydian[0]);
		PlayCircle(CMixolydian[0],commands.NOTE_OFF);
	 	break;
	case 83:
		drawBrihgter(CMixolydian[1]);
		PlayCircle(CMixolydian[1],commands.NOTE_OFF);
		break;
	case 68:
		drawBrihgter(CMixolydian[2]);
		PlayCircle(CMixolydian[2],commands.NOTE_OFF);
	  	break;
	
	  }  
	
}
//CDorian
function CDorianKeypress(i_Key) {		
  
	var CurrentKey = i_Key.keyCode;
	
	
	switch (CurrentKey) {
	  case 65:
		  drawDarker(CDorian[0]);
		  PlayCircle(CDorian[0],commands.NOTE_ON);
		  setTimeout(function(){PlayCircle(CDorian[0],commands.NOTE_OFF)},500);
		   break;
	  case 83:
		  drawDarker(CDorian[1]);
		  PlayCircle(CDorian[1],commands.NOTE_ON);
		  setTimeout(function(){PlayCircle(CDorian[1],commands.NOTE_OFF)},500);
		  break;
	  case 68:
		  drawDarker(CDorian[2]);
		  PlayCircle(CDorian[2],commands.NOTE_ON);
		  setTimeout(function(){PlayCircle(CDorian[2],commands.NOTE_OFF)},500);
		  break;
	  case 70:
		  drawDarker(CDorian[3]);
		  PlayCircle(CDorian[3],commands.NOTE_ON);
		  setTimeout(function(){PlayCircle(CDorian[3],commands.NOTE_OFF)},500);
		  break;	
	  case 71:
		  drawDarker(CDorian[4]);
		  PlayCircle(CDorian[4],commands.NOTE_ON);
		  setTimeout(function(){PlayCircle(CDorian[4],commands.NOTE_OFF)},500);
		  break;
	  case 72:
		  drawDarker(CDorian[5]);
		  PlayCircle(CDorian[5],commands.NOTE_ON);
		  setTimeout(function(){PlayCircle(CDorian[5],commands.NOTE_OFF)},500);
		  break;
	  case 74:
		  drawDarker(CDorian[6]);
		  PlayCircle(CDorian[6],commands.NOTE_ON);
		  setTimeout(function(){PlayCircle(CDorian[6],commands.NOTE_OFF)},500);
		  break;
	  case 75:
		  drawDarker(CDorian[7]);
		  PlayCircle(CDorian[7],commands.NOTE_ON);
		  setTimeout(function(){PlayCircle(CDorian[7],commands.NOTE_OFF)},500);
		  break;			  			  
	}  
  }
  
  
  function CDorianKeyRelease(i_Key){
	  var CurrentKey = i_Key.keyCode;
	  switch (CurrentKey) {
		  case 65:
		  drawBrihgter(CDorian[0]);
		  PlayCircle(CDorian[0],commands.NOTE_OFF);
		   break;
	  case 83:
		  drawBrihgter(CDorian[1]);
		  PlayCircle(CDorian[1],commands.NOTE_OFF);
		  break;
	  case 68:
		  drawBrihgter(CDorian[2]);
		  PlayCircle(CDorian[2],commands.NOTE_OFF);
			break;
	  case 70:
		  drawBrihgter(CDorian[3]);
		  PlayCircle(CDorian[3],commands.NOTE_OFF);
		  break;	
	  case 71:
		  drawBrihgter(CDorian[4]);
		  PlayCircle(CDorian[4],commands.NOTE_OFF);
		  break;
	  case 72:
		  drawBrihgter(CDorian[5]);
		  PlayCircle(CDorian[5],commands.NOTE_OFF);
		  break;
	  case 74:
		  drawBrihgter(CDorian[6]);
		  PlayCircle(CDorian[6],commands.NOTE_OFF);
		  break;	
	  case 75:
	      drawBrihgter(CDorian[7]);
		  PlayCircle(CDorian[7],commands.NOTE_OFF);
		  break;
		}	  
	  
  }

window.addEventListener("mousemove",MouseMovement);
var PressListeners = [
	CMajorPentatonicKeypress,
    CMinorPentatonicKeypress,
    CMixolydianKeypress,
    CDorianKeypress
]
var ReleaseListeners = [
    CMajorPentatonicKeyRelease,
    CMinorPentatonicKeyRelease,
    CMixolydianKeyRelease,
    CDorianKeyRelease
]

function MouseMovement(e){
	
	CheckIntersections(e.x,e.y)
          
}


function CheckIntersections(i_xMousePos,i_yMousePos){
	

	
	for (var i = 0; i < NumberOfScales; i++) {

		var IsIntersected = IsIntersecdedWithRectangle(i_xMousePos,i_yMousePos,TextBoundingTriangle[i])
		if(IsIntersected){
			ColorTextButton(TextButtons[i],'brown');
			window.addEventListener("keydown",PressListeners[i])
			window.addEventListener("keyup",ReleaseListeners[i])
		}
		else{
			ColorTextButton(TextButtons[i],'black');
			window.removeEventListener("keydown",PressListeners[i])
			window.removeEventListener("keyup",ReleaseListeners[i])

		}
			  
	}
}	
 
 



  
	


		

