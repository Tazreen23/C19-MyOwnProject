var PLAY=1;
var END=0;
var gameState="play";
var score=0;


var girlrunning,jumpingKangaroo,Forestbackground,twig1,twig2,twig3;
var girlrunningImg,jumpKanagrooImg,ForestbackgroundImg;
var twigGroup,twig1Img,twig2Img,twig3Img;


function preload(){
girlrunningImg=loadImage("Girl Scare Running GIF.gif");
jumpKanagrooImg=loadImage("JumpingKangrooimage.Gif");
ForestbackgroundImg=loadImage("CartoonForest.jpeg")
twig1Img=loadImage("TwigsImage.png");
twig2Img=loadImage("TwigImage2.jpeg");
twig3Img=loadImage("TwigImage3.jpeg");

}

function setup() {
 createCanvas(600,600);
 Forestbackground = createSprite(300,300);
 Forestbackground.addImage("Forestbackground",ForestbackgroundImg);
 Forestbackground.veloctiy=1;
 twigsGroup= new Group();
 girlrunning=createSprite(300,300);
 girlrunning.addImage(girlrunningImg);
 girlrunning.scale=2.5;



}

function draw() {
 background(200);
    if(tower.y>400){
        tower.y=300
    }
    spawnTwigs();
    drawSprites();

function spawnTwigs(){
    if (frameCount%260===0){
    twigs=createSprite(Math.round(random(50,550)),-50,20,20);
    twigs.addImage(twig1Img,twig2Img,twig3Img);
    twigs.velocityY=1;
    twigs.lifetime=800;
    twigsGroup.add(twigs);
    }
}   
