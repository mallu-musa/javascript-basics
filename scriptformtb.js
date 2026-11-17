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
    document.getElementById("sub").style.width="200px";
}
function ehhh(){
    document.getElementById("sub").style.width="50px";
}