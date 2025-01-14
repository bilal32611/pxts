import AniPropDb from "../aniProp/aniPropDb";
import Increment from "./filters/increment";
import Decrement from "./filters/decrement";
import Random from    "./filters/random";
import Oscillate from "./filters/oscillatets"; 
import IdentityFil from "../filters/identityFil";

//--------------------------------------------
export default class AniNumberDb extends AniPropDb <number>{

     
constructor(value :number){
super(value)
}
//////////////////////////////////////////////

public animate( StartSec :number, endSec :number,startValue :number,endValue :number){
    if (startValue < endValue ){
        let inc = new Increment(StartSec * 1000,endSec * 1000,startValue,endValue,0);
        this.addFilter(inc);
    }else if (startValue > endValue){
        let dec = new Decrement(StartSec * 1000,endSec * 1000,startValue,endValue,0);
        this.addFilter(dec);
    }
}

public random(StartSec :number,endSec :number,min :number=0, max :number=100, delayInMs :number=10){    
const v = new Random(StartSec * 1000, endSec * 1000, min,max,delayInMs);
this.addFilter(v);
}

public oscillate(StartSec :number,endSec :number,startValue :number, endValue :number,secPerIter :number= 1,stopAt=endValue){

    if (startValue > endValue ){
throw new Error("for oscillate operation the startValue can not be bigger than endValue, however in future this restriction may be lifted.");   
}    
const v = new Oscillate(StartSec * 1000,endSec * 1000,startValue,endValue,secPerIter * 1000,stopAt);
this.addFilter(v);  
}//oscialte

///--goto overridden from AniPropDb since it takes percentages
public goto(atSec :number,value :number):boolean{

    const v = new IdentityFil(atSec * 1000,(atSec * 1000) + 1000,value);
    this.addFilter(v);
    return false;//// new goto frame ADDED 
}

///////////////////////////////////////////
///////////////////////////////////////////
///////////////////////////////////////////
}