class Player{
    constructiom(){
       this.index=null;
        this.distance=0;
        this.name=null;
    }
getCount(){
var playerCountref=database.ref('playerCount')
playerCount.on("value",function(data){
    playerCount=data.val()
})

}
updatecount(count){
    database.ref('/').update({playerCount:state});
}
update(){
var playerindex="player"+this.index
database.ref(playerindex).set({
    name:this.name,distance:this.distance
})
}
static getplayerinfo(){
    var playerinforef =database.ref('players');
    playerinforef.on("value",(data)=>{
        allplayer=data.val();
    })
}
}
