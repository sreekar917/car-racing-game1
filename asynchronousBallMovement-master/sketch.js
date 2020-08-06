var form;
var gamestate=0
var playercount
var allplayers
var distance=0
var database
var canvas
var player
var game
function setup(){
    canvas=createCanvas(400,400);
   database=firebase.database();
   game=new Game
   game.getState();
   game.start();
   
}
function draw(){
    form=new Form();
    form.display(); 
}
