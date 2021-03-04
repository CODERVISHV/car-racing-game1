class Player {
    constructor(){
        this.index=null;
        this.distance=0;
        this.name=null;
        this.rank=null;
        this.distanceX=0
    }
    //to read the value of player count from database.
    getCount(){
     database.ref("playerCount").on("value",(data)=>{
         playerCount=data.val()
     })
    }
    //to update or write value of player count in database.
    updateCount(c){
     database.ref("/").update({
         playerCount:c
     })
    }
    //to update or write name and distance of the player in database. 
    update(){
        var i="players/player"+this.index
     database.ref(i).set({
         name:this.name,distance:this.distance,distanceX:this.distanceX
     })
    }
    /*to get or read all the details of the players.
    it is a static function(this function will not be attached to any particular player).
    static functions are not attached to each object in the class.
    we are trying to get all the player's information here so the work does not involve any particular 
    object.
    static functions are those common fuctions which are called by the class themselves rather than by 
    objects of the class
    */    
    static getPlayerInfo(){
     database.ref("players").on("value",(data)=>{
       info=data.val();
     })

     
    }
    getRank(){
        database.ref("carsAtEnd").on("value",(data)=>{
            this.rank=data.val();
        })    
    }

    static updateRank(r){
        database.ref("/").update({carsAtEnd:r})
   
    }

    
}