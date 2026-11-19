function funny()
{
    a=Number(document.getElementById("mn").value);
    b=Number(document.getElementById("tg").value);
    // hy=1;
    
    // while(hy<=b)
    // {
    //     console.log(b);
    //     c=hy*a;
    //     document.writeln(hy+"x"+a+"="+c+"<br>");
    //     hy=hy+1;
    // }
    // console.log(hy);
    // console.log(a);
    // console.log(b);
    for(hy=1;hy<=b;hy++)
    {
        c=hy*a;
        document.writeln(hy+"x"+a+"="+c+"<br>");
    }
}

function enthada(){
    document.getElementById("mn").style.backgroundColor="yellow";
    document.getElementById("mn").placeholder="$";
    document.getElementById("tg").style.backgroundColor="red";
    document.getElementById("tg").placeholder="*";
}
function looy(){
    document.getElementById("mn").style.backgroundColor="red";
    document.getElementById("tg").style.backgroundColor="yellow";
    document.getElementById("tg").placeholder="+";
    document.getElementById("mn").placeholder="=";
}
function catcho(){
    kunjava=document.getElementById("sub");
    // maxX=window.innerWidth-kunjava.offsetWidth;
    // maxY=window.innerHeight-kunjava.offsetHeight;
    // kunji=Math.floor(Math.random() * maxX);
    // kunjan=Math.floor(Math.random() * maxY);
    // kunjava.style.position="absolute";
    // kunjava.style.left=kunji+"px";
    // kunjava.style.top=kunjan +"px";
    // kunjava.style.transition="0.2s ease-out";
    kunjava.value="submit cheyyada";
}
function ehhh(){
    // kunji=math.floor(math.random() * math.random());
    // kunjan=math.floor(math.random() * math.random());
    kunjava=document.getElementById("sub");
    // kunjava.style.position="absolute";
    // kunjava.style.left=kunji+"px";
    // kunjava.style.top=kunjan +"px";
    // kunjava.style.transition="0.2s ease-out";
    kunjava.value="submit cheyyada";
}

 function finanumber(){
    fn=document.getElementById("num").value;
    a=0;
    while(a<=fn){
        document.writeln(a+"<br>");
        a=a+1;
    }
 }
 function ageverification(){
    age=document.getElementById("age").value;
    if(age>=18){
        document.write("you can vote")
    }
    else if(age==0){
        document.write("odra")
    }
    else if(age>=130){
        document.write("pinne world record thanne 122 ollu")
    }
    else{
        document.write("oh sorry bro , your a minor")
    }

 }
 function heey(){
    kunjava=document.getElementById("rrrr");
    maxX=window.innerWidth-kunjava.offsetWidth;
    maxY=window.innerHeight-kunjava.offsetHeight;
    kunji=Math.floor(Math.random() * maxX);
    kunjan=Math.floor(Math.random() * maxY);
    kunjava.style.position="absolute";
    kunjava.style.left=kunji+"px";
    kunjava.style.top=kunjan +"px";
    kunjava.style.transition="0.2s ease-out";
    kunjava.value="try one more time";
 }
 function ykyk(){
    mn=document.getElementById("ykykb");
    mn.value="<a href=https://www.google.com/search?q=musammiln> you did it bro</a>"
 }