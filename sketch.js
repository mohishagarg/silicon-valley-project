var hero,flyingHero,runningHero;
var coin1,coin2,coin3,coin4,coin5,coin6,coin7,coin8,coins;
var ash;
var bomb;
var boy;
var floor,floor1,floor2,floor3,floor4,floor5,floor6,floor7,floor8;

function preload(){
hero=loadImage("images/hero.jpg");
flyingHero=loadImage("images/flyinghero.jpg");
runningHero=loadImage("images/running hero.jpg");
floor1=loadImage("images/floor.png");
floor2=loadImage("images/floor.png");
floor3=loadImage("images/floor.png");
floor4=loadImage("images/floor.png");
floor5=loadImage("images/floor.png");
floor6=loadImage("images/floor.png");
floor7=loadImage("images/floor.png");
floor8=loadImage("images/floor.png");

}

function setup(){
var floor1=createSprite(50,390,20,20);
floor1.addImage("floor1");
floor1.scale=0.3;

var floor2=createSprite(150,390,20,20);
floor2.addImage("floor2");
floor2.scale=0.3;

var floor3=createSprite(350,390,20,20);
floor3.setAnimation("floor3");
floor3.scale=0.3;

var floor4=createSprite(50,250,20,20);
floor4.setAnimation("floor4");
floor4.scale=0.5;

var floor5=createSprite(160,250,20,20);
floor5.setAnimation("floor5");
floor5.scale=0.5;

var floor6=createSprite(350,150,20,20);
floor6.setAnimation("floor6");
floor6.scale=0.5;

var floor7=createSprite(200,150,20,20);
floor7.setAnimation("floor7");
floor7.scale=0.5;

var floor8=createSprite(80,70,20,20);
floor8.setAnimation("floor8");
floor8.scale=0.5;

//floors

var boy=createSprite(250,320);
boy.setAnimation("boy");
boy.scale=0.25;

var bomb =createSprite(330,115);
bomb.setAnimation("team rocket ball");
bomb.scale=0.1;
//obstacles

var coin1=createSprite(40,220);
coin1.setAnimation("coin");
coin1.scale=0.2;

var coin2=createSprite(370,115);
coin2.setAnimation("coin");
coin2.scale=0.2;

var coin3=createSprite(100,220);
coin3.setAnimation("coin");
coin3.scale=0.2;

var coin4=createSprite(100,350);
coin4.setAnimation("coin");
coin4.scale=0.2;

var coin5=createSprite(100,35);
coin5.setAnimation("coin");
coin5.scale=0.2;
//coins

var hero=createSprite(30,36);
hero.setAnimation("hero start");
hero.scale=0.15;

var ash=createSprite(356,330);
ash.setAnimation("ash");
ash.scale=0.25;
//characters


var Lives=5;
var Coins=0;
//score

var lives=createSprite(316,36);
//lives sprite
var coin=createSprite(316,65);
coin.setAnimation("coin1");
coin.scale=0.07;

boy.setVelocity(0,8);
bomb.setVelocity(5,0);
}

function draw() {
background("cyan");
 createEdgeSprites();
 
 hero.collide(edges);
 hero.collide(floor1);
hero.collide(floor2);
hero.collide(floor3);
hero.collide(floor4);
hero.collide(floor5);
hero.collide(floor6);
hero.collide(floor7);
hero.collide(floor8);

fill("black");
textSize(25);
text(Coins,280, 73);


 if (keyDown(RIGHT_ARROW)) {
   hero.setAnimation("hero run");
   hero.x=hero.x+10;
 }
 if (keyWentUp(RIGHT_ARROW)) {
   hero.setAnimation("hero start");
 }
if (keyDown(LEFT_ARROW)) {
  hero.setAnimation(" hero run ");
  hero.x= hero.x-10;
 }
 if (keyWentUp(LEFT_ARROW)) {
  hero.setAnimation(" hero start");
 }
 if (keyDown(DOWN_ARROW)) {
   hero.setAnimation("hero fly");
   hero.y=hero.y+10;
}
 if (keyWentUp(DOWN_ARROW)) {
   hero.setAnimation("hero start");
 }
 if (keyDown(UP_ARROW)) {
   hero.setAnimation("hero fly");
   hero.y=hero.y-10;
}
 if (keyWentUp(UP_ARROW)) {
   hero.setAnimation("hero start");
 }

if (hero.isTouching(coin1)) {
  coin1.x=100000;
Coins=Coins+1;
}

if (hero.isTouching(coin2)) {
  coin2.x=100000;
Coins=Coins+1;
}

if (hero.isTouching(coin3)) {
  coin3.x=100000;
Coins=Coins+1;
}

if (hero.isTouching(coin4)) {
  coin4.x=100000;
Coins=Coins+1;
}

if (hero.isTouching(coin5)) {
  coin5.x=100000;
Coins=Coins+1;
}   

if (hero.isTouching(ash)) {
  bomb.setVelocity(0,0);
      textSize(40);
      text("You Win🏆",200,200);
      
    }
    
bomb.bounceOff(rightEdge);
bomb.bounceOff(leftEdge);

if (hero.isTouching(bomb)||hero.isTouching(boy)) {
reset();
}

if (Lives===5){
lives.setAnimation("5 Lives");
lives.scale=0.2;
}

if (Lives===4){
lives.setAnimation("4 Lives");
lives.scale=0.2;
}

if (Lives===3){
lives.setAnimation("3 Lives");
lives.scale=0.2;
}

if (Lives===2){
lives.setAnimation("2 Lives");
lives.scale=0.2;
}

if (Lives===1){
lives.setAnimation("1 Live");
lives.scale=0.2;
}

if (Lives===0){
  bomb.setVelocity(0,0);
  restart();
if (keyDown("r")) {
    pressR();
  }
    
 
    
}
 drawSprites();

}

function reset() {
  hero.x=30;
  hero.y=36;
  coin1.x=40;
  coin2.x=370;
  coin3.x=100;
  coin4.x=100;
  coin5.x=100;
Coins=0;
Lives=Lives-1;
  
}

function restart(){
   hero.x=30;
  hero.y=36;
 fill("black");
 textSize(50);
  text("GAME OVER", 100, 200);
  fill("black");
  textSize(20);
text("Press R to restart",100,100);
  Lives=0;
  Coins=0;
}

function pressR() {
   Lives=5;
  Coins=0;
bomb.setVelocity(5,0);
}
