class Form {
    constructor(){
       this.input=createInput("name");
       this.button=createButton("play")
        

    }
    display(){
       var title=createElement('h2') 
      title.html('car racing game')
      title.position(130,0)
      this.input.position(200,160);
      
      this.button.position(200,200);
      this.button.mousePressed(()=>{
        this.input.hide()
        this.button.hide()
      this.greeting.html("hello"+player.name)
     this.greeting.position(130,160);
     player.name=this.input.value;
     playercount=playercount+1;
     player.index=playercount;
     player.update();
     player.updatecount(playercount);

      })
        
      

      
      
    }

}
