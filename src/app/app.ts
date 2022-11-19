import { Application, Loader} from "pixi.js";

////////////////////////////////////////
export default class App {
 theApp :Application;
/////////////////////////////////////    
constructor(width :number=600 , height :number=350, backgroundColor :number=0xd3d3d3, antialias : true=true ){

this.theApp = new Application({ backgroundColor,width: width,
height: height , antialias : antialias});
this.theApp.stage.interactive = true
}

getView(){
return this.theApp.view    
}



}