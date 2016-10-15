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
        
        var maze= document.getElementById("start");
        var left = maze.offsetHeight;
        var x = event.clientX;
        var y = event.clientY;
        document.getElementById("start").addEventListener("mousemove", start);
        
         if (event.clientX < '400px' && clientY < '300px'  )
            {
                boundary.addEventListener("mousemove", allborders);
            }
        
    }
    
   //offsetLeft 558 X 444 px offsetTop
   
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
   
 