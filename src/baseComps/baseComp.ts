import { AniNumber, AniPerc } from "../animations/animations";
import BasecompDb from "./baseCompDb";
import { DisplayObject,Graphics } from "pixi.js";

/////////////////////////////////////////////
export default class BaseComp {
    public graphics : Graphics;
    public readonly id: string;

    public startTime: number;
    public endTime: number;

    public x: AniNumber;
    public y: AniNumber;
    public width: AniNumber;
    public height: AniNumber;
    public color: number;
/////////////////////////////////////////
constructor(basecompDb : BasecompDb) {
    this.graphics = new Graphics();
    this.id = basecompDb.id;

    this.startTime = basecompDb.startTime;
    this.endTime = basecompDb.endTime;

    this.x = new AniNumber(basecompDb.x);
    this.y = new AniNumber(basecompDb.y);
    this.width = new AniNumber(basecompDb.width);
    this.height = new AniNumber(basecompDb.height);
    this.color = basecompDb.color;
}
getComp():DisplayObject{
    this.graphics.beginFill(this.color);
    
    this.graphics.drawRect(
            this.x.value(), 
            this.y.value(), 
            this.width.value(), 
            this.height.value()
    );

    this.graphics.endFill();
    return this.graphics;
}

draw(timeMs :number=0){
    this.graphics.x += 1;
}
}