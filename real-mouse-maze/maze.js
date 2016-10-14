// JavaScript File

    window.onload= function()
    {
        var hit= false;
        var walls = document.querySelectorAll(".boundary");
        
        document.getElementById("start").addEventListener("mouseover",start);
        document.getElementById("end").addEventListener("mouseover",end);
        for ( var i=0; i < walls.length; i++)
        {
            walls[i].addEventListener("mouseover", allborders);
        }
        
    }
    
    
    //turn red
    function allborders()
    {
        var walls = document.querySelectorAll(".boundary");
        for (var  i=0; i< walls.length; i++)
        {
            walls[i].className= "boundary youlose";
        }
        document.getElementById("start").addEventListener("click", reset);
    }
    
    function start()
    {
        var walls = document.querySelectorAll(".boundary");
        for (i=0; i<walls.length; i++)
        {
            walls.classList. removeAttribute("you lose");
        }
    }
    
    function end()
    {
       var hit=true;
        if(hit)
        {
            alert("You Win!");
        } else
        {
            alert("Loser! Try Again");
        }
    }