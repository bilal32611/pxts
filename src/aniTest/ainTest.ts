
import {AniNumber,AniNumberDb} from "../animations/animations";


export default function aniTest(){
    const aniNoDb = new AniNumberDb(10);
    
    aniNoDb.animate(0,20, 0, 1000);

    const aniNo = new AniNumber(aniNoDb);
    console.log("aniNoDb",aniNoDb);
    console.log("aniNo",aniNo);

    aniNo.update(0);
    console.log("aniNo:update(0)",aniNo.value());
    
    aniNo.update(10_000);
    console.log("aniNo:update(10_000)",aniNo.value());

    aniNo.update(15_000);
    console.log("aniNo:update(15_000)",aniNo.value());

    aniNo.update(20_000);
    console.log("aniNo:update(20_000)",aniNo.value());


}