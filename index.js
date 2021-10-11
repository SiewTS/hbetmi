const candles = document.querySelectorAll(".candles");
const lighter = document.getElementById("lighter");
const bdsong = document.getElementById("bdsong");
const bdMsg = document.querySelectorAll(".bdMsg");
const chipmunks = document.querySelector(".chipmunks");

let isPlaying = false;

lighter.addEventListener('click',()=>{
    toggleSong(bdsong);
    chipmunks.classList.toggle("hide");
    bdMsg.forEach((msg)=>{
        msg.classList.toggle("hide");
    })
    candles.forEach((candle)=>{
        candle.classList.toggle("hide");
        // console.log(candle.classList);
    })
});

const toggleSong=(bdsong)=>{
    if(!isPlaying){
        bdsong.play();
        isPlaying = true;
    }else{
        bdsong.pause();
        isPlaying = false;
    }
}