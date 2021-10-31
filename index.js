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

console.log('I\'m glad you come back here, Happy Birthday ;)');
console.log('向你借那十分钟其实是想请你吃冰淇淋而已。。。');