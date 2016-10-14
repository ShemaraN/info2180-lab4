// JavaScript File

    window.onload = function()
    {
        hit= false;
        walls = document.querySelectorAll(".boundary");
        
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
        var walls = document.querySelectorAll(".boundary");
        for (var  i=0; i< walls.length; i++)
        {
            walls[i].className= "boundary youlose";
        }
        
    }
    
    function end()
    {
        hit=true;
        if(hit)
        {
            document.getElementById("status").innerHTML = 'You Win!';
            //alert("You Win!");
        } 
        else
        {
            document.getElementById("status").innerHTML = 'Loser! Try again.';
            //alert("Loser! Try Again");
        }
    }
    
    function start()
    {
        var walls = document.querySelectorAll(".boundary");
        for (i=0; i<walls.length; i++)
        {
            walls.classList. addEventListener("you lose");
        }
    }
    
    
   function reset()
   {
           window.location.reload();
       
   }