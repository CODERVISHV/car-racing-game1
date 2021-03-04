class Form{
constructor(){
    this.title=createElement("h1")
    this.input=createInput("")
    this.button=createButton("start")
    this.greeting=createElement("h1")
    this.restart=createButton("restart")
}
display(){
this.title.html("Car Racing Game")

this.title.position(130,20)

this.input.position(130,160)

this.button.position(230,200)

this.restart.position(50,50)
this.restart.mousePressed(()=>{
    player.updateCount(0)
    game.update(0)
    Player.updateRank(0)
})



this.button.mousePressed(()=>{
    this.input.hide();
    this.button.hide();
    player.name=this.input.value();
    playerCount+=1;
    player.index =playerCount;
    player.update();
    player.updateCount(player.index);
    this.greeting.html(" HELLO "+player.name + " ! wait for other player to join ")
    this.greeting.position(90,170)
})

}
}