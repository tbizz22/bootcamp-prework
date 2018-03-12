

//grow button Function
document.getElementById("button1").addEventListener("click",function(){
    document.getElementById("box").style.height = "900px";
    document.getElementById("box").style.width = "400px";
});

//Blue Button Function
document.getElementById("button2").addEventListener("click",function(){
    document.getElementById("box").style.backgroundColor = "blue";
});

// Fade Button Function
document.getElementById("button3").addEventListener("click",function(){
    document.getElementById("box").style.opacity = ".5";
});

// Reset Button Function
document.getElementById("button4").addEventListener("click",function(){
    document.getElementById("box").style.opacity= "1";
    document.getElementById("box").style.backgroundColor = "orange";
    document.getElementById("box").style.height = "150px";
    document.getElementById("box").style.width = "150px";
    document.getElementById("box").className = "default";
});

//Shadow Button
document.getElementById("button5").addEventListener("click",function(){
    document.getElementById("box").className = "shadow"
});

// How I would like to do reset but not sure why it isnt working - Only removes shadow but doesnt change size / color 
//  document.getElementById("button4").addEventListener("click",function(){
//    document.getElementById("box").className = "default"
//  });
//

