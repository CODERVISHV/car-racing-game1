class Game{
    constructor(){

    }
    getState(){
        database.ref("gameState").on("value",(data)=>{
            gameState=data.val();
        })

    }
    update(s){
        database.ref("/").update({
            gameState:s
        })
    }
    start(){
        if(gameState===0){
            player=new Player()
            player.getCount()
            form=new Form()
            form.display()
        }
        car1=createSprite(100,200)
        car1.addImage("c1",c1)
        car2=createSprite(300,200)
        car2.addImage("c2",c2)
        cars=[car1,car2]
    }
    play(){
        form.greeting.hide()
         Player.getPlayerInfo()
         if(info !==undefined){
             background(ground)
             image(track,0,-displayHeight*4,displayWidth,displayHeight*5)
             var x=170
             var y;
             var index=0
    for(var i in info){
       x=x+200
       y=displayHeight-info[i].distance
       index=index+1
       textSize(22);
       fill(255)
       text(info[i].name,x-45,y+85)
       cars[index-1].x=x
       cars[index-1].y=y
       if(index===player.index){
//camera.position.x=displayWidth/2
       camera.position.y=cars[index-1].y
       fill(255)
       ellipse(x,y,70,70)
       if(keyDown("left")){
           player.distanceX+=-2
           player.update()
       }

       if(keyDown("right")){
        player.distanceX+=2
        player.update()
    }

    }  
    }
    }
    if(keyDown(UP_ARROW)&& player.distance<3900){
        player.distance+=10
        player.update()
    }
    if(player.distance>3860){
        player.rank+=1
        gameState=2
        Player.updateRank(player.rank)
        
        console.log(player.rank)
    }
    drawSprites()
}
end(){
    console.log("game ended")
}
}
