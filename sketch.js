var database;
var gameState=0
var playerCount
var form
var player 
var game
var info
var car1,car2,c1,c2,c3,c4,cars,track,ground

function preload(){
    c1=loadImage("images/car1.png")
    c2=loadImage("images/car2.png")
    c3=loadImage("images/car3.png")
    c4=loadImage("images/car4.png")
    track=loadImage("images/track.jpg")
    ground=loadImage("images/ground.png")
}

function setup(){
    createCanvas(displayWidth-30,displayHeight-100);
    database=firebase.database();
    game=new Game()
    game.getState()
    game.start() 
}

function draw(){
    background("white");
    if(playerCount===2){
        game.update(1)
    }
    if(gameState===1){
        clear()
        game.play()
    }
    if(gameState===2){
        game.end()
    }
}