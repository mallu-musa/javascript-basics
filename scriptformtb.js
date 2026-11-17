function funny()
{
    a=Number(document.getElementById("mn").value);
    b=Number(document.getElementById("tg").value);
    hy=1;
    
    while(hy>=b)
    {
        console.log(b);
        c=hy*a;
        document.writeln(hy+"x"+a+"="+c+"<br>");
        hy=hy+1;
    }
    console.log(hy);
    console.log(a);
    console.log(b);
}
