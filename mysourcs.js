
let hours=document.getElementById("hrs");
let minutes=document.getElementById("min");
let seconds=document.getElementById("sec");


setInterval(()=>
{
let curTime=new Date();

hours.innerHTML=(curTime.getHours()<10?"0":"")+curTime.getHours();
minutes.innerHTML=(curTime.getMinutes()<10?"0":"")+curTime.getMinutes();
seconds.innerHTML=(curTime.getSeconds()<10?"0":"")+curTime.getSeconds();

},1000)



