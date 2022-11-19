import { Graphics,DisplayObject } from "pixi.js";
import App from "../app/app";
import BaseComp from "../baseComps/baseComp";
import IBaseComp from "../baseComps/IBaseComp";
import StopWatch from "./stopWatch";
///////////////////////////////////////////
export default class Engine {
//..
app :App;
stopWatch:StopWatch;
//--chagne BaseComp with an interface
comps : IBaseComp[];

///////////////////////////
constructor(width :number=600 , height :number=350, backgroundColor :number=0xd3d3d3){

this.stopWatch = new StopWatch();        
this.app = new App(width, height,backgroundColor,true);
this.comps = [];
document.body.appendChild(this.app.getView());
//----------------------------
window.onload = async (): Promise<void> => {
    // await loadGameAssets();
    resizeCanvas(this.app);
};
//----------------------------
}

addComp(comp :IBaseComp){
this.comps.push(comp);
const displayObject = comp.getDisplayObject();        
this.app.theApp.stage.addChild(displayObject);
}

start(){
this.stopWatch.start(); 
this.app.theApp.ticker.add( this.gameLoop.bind(this));
}
stop(){
this.stopWatch.stop(); 
}

private gameLoop(){        
for (let i = 0; i < this.comps.length; i++) {
        const comp = this.comps[i];
        comp.draw(this.stopWatch.getMsDelta(), this.app.theApp.screen);
}
}
////////////////
}
///XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX
///XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX
function resizeCanvas(app :App): void {
    const resize = () => {
    app.theApp.renderer.resize(window.innerWidth, window.innerHeight);
    app.theApp.stage.scale.x = window.innerWidth / app.theApp.screen.width;
    app.theApp.stage.scale.y = window.innerHeight / app.theApp.screen.height;
    };
    ///////////////
    window.addEventListener("resize", resize);
    /////////////////
    resize();
}

// window.onload = async (): Promise<void> => {
//     await loadGameAssets();
    
//    
//     resizeCanvas();
//     /////////////////////////////
//     };
    

    
////////////////--loadGameAssets
// async function loadGameAssets(): Promise<void> {
//     return new Promise((res, rej) => {
        // const loader = Loader.shared;
// loader.add("rabbit", "./assets/simpleSpriteSheet.json");
// loader.add("pixie", "./assets/spine-assets/pixie.json");
        ///////////////////
// loader.add("capGuy", "./assets/capGuy/capGuy.json");

        ///////////////////
//         loader.onComplete.once(() => {
//             res();
//         });

//         loader.onError.once(() => {
//             rej();
//         });

//         loader.load();
//     });
// }
