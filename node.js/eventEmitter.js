var event=require("events");
var eventEmitter=new event.EventEmitter();
    
eventEmitter.on('clicked',function(button){
    console.log(button,"something is clicked");
});
eventEmitter.emit("clicked",'button 1');
