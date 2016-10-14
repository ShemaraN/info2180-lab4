// JavaScript File
    
    var hit= false;
    
    window.onload = function()
    {
        hit= false;
        var walls = document.querySelectorAll(".boundary");
        
        document.getElementById("start").addEventListener("mouseover",start);
        document.getElementById("end").addEventListener("mouseover",end);
        for ( var i=0; i < walls.length; i++)
        {
            walls[i].addEventListener("mouseover", allborders);
        }
        document.getElementById("start").addEventListener("click", reset);
    }
    
   
    function allborders()
    {
        hit= true;
        var walls = document.querySelectorAll(".boundary");
        for (var  i=0; i< walls.length; i++)
        {
            walls[i].className= "boundary youlose";
            document.getElementById("status").innerHTML = "Loser! Try again.";
        }
        
    }
    
    function end()
    {
        
        if (hit)
        {
            document.getElementById("status").innerHTML = "Loser! Try again.";
        } 
        else
        {
    
            document.getElementById("status").innerHTML = "You Win!";
        }
    }
    
    function start()
    {
        var walls = document.querySelectorAll(".boundary");
        for (var i=0; i<walls.length; i++)
        {
            walls.classList. remove("you lose");
        }
    }
    
    
   function reset()
   {
           window.location.reload();
       
   }
   
   function outbox(event)
   {
       var maze= document.getElementById("start");
       var top = maze.offsetLeft
       document.addEventListener("mousemove",top);
       var y= event.clientY;
       var x = event.clientX; 
   }