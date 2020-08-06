class Game{
    constructiom(){

    }
getState(){
var gamestateref=database.ref('gameState')
gamestateref.on("value",function(data){
    gameState=data.val()
})

}
update(state){
    database.ref('/').update({gameState:state})
}
async start(){
    if(gamestate==0){
player=new Player();
var playercountref=await database.ref("playercount").once("value")
if(playercountref.exists()){
playercount=playercountref.val();
player.getCount();

}
form=new Form();
form.display();
    }
}
}
