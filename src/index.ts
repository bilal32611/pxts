import { DisplayObject,Graphics, Loader, Texture, AnimatedSprite, Sprite } from "pixi.js";
import Engine from "./engine/engine";

import BaseCompDb from "./baseComps/baseCompDb";
import BaseComp from "./baseComps/baseComp";
// import Rect from "./graphics/rect";
import "./style.css";
///////////////////////////////////////////////////

const bcDb = new BaseCompDb(0,100);

bcDb.x.set(100);
bcDb.y.set(100);
bcDb.width.set(400);
bcDb.height.set(200);
bcDb.color = 0x932c2c;

const bc = new BaseComp(bcDb);

console.log("bc",bc);

const engine = new Engine();
engine.addComp(bc.getComp());

//////---the Game loop is not just update with no draw--infect 
engine.app.theApp.ticker.add( ()=>{
    bc.draw(0);
});