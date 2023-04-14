
function time()
{
today=new Date();
h=today.getHours();
m=today.getMinutes();
s=today.getSeconds();
document.getElementById('txt').innerHTML=h+":"+m+":"+s;
setTimeout('time()',500);
}
