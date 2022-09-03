setInterval(fall, 500);
setInterval(check, 10);

var nos=0, nos1=0;

function fall()
{
    if (nos<=100)
    {    
    var marginleft = Math.floor(Math.random()*1276)+3;
    var f=marginleft+"px";
    var i="s"+nos1;

    var newFlake = document.createElement("img");
	document.getElementById("content").appendChild(newFlake);
    if(nos1%5==0)
    {newFlake.setAttribute("class","snowflake1");}
    else if(nos1%5==1)
    {newFlake.setAttribute("class","snowflake2");}
    else if(nos1%5==2)
    {newFlake.setAttribute("class","snowflake3");}
    else if(nos1%5==3)
    {newFlake.setAttribute("class","snowflake4");}
    else
    newFlake.setAttribute("class","snowflake");
    newFlake.setAttribute("id", i);
    newFlake.setAttribute("src","Capture.PNG");
    newFlake.style.setProperty("margin-left", f);
    nos++;
    nos1++;
    }
}

function check()
{
    for (var j=0; j<nos1; j++)
    {
        var o = "s"+j;
        var b = document.getElementById(o);
        var bb = window.getComputedStyle(b);
        var bbb = parseInt(bb.getPropertyValue("margin-top"));
        if(bbb>570)
        {
            let marginleft1 = Math.floor(Math.random()*1276)+3;
            var c = marginleft1+"px";
            console.log(marginleft1);
            b.style.setProperty("margin-top","-20px");
            b.style.setProperty("margin-left", c);
        }
    }
}