var tl = gsap.timeline();

var count = 0;
var v = document.querySelector("#video");

var s = setInterval(function(){
    if(count<100){
        count++;
        document.querySelector(".prg").style.width = count + '%';
        document.querySelector("#bar h1").textContent = count + '%';
    }
    else{
        clearInterval(s);
        document.querySelector("#bar").style.display = "none";
        v.style.width = "30%";
        v.style.width = "25%";
        // v.style.top = "30%";
        v.style.left = "35%";
        v.style.transform = "translate(12%,-13%)"
        document.querySelector("#main").style.padding = "0 50px";
        document.querySelector("#nav").style.top = "2%";
        
        
        tl.to("#middle", {
            onStart: function(){
              $('#middle h1').textillate({ 
                in: { 
                  effect: 'fadeInDown' }
                 });
            }
          })
        
          tl.to("#middle", {
            onStart: function(){
              $('#things h1').textillate({ 
                in: { 
                  effect: 'fadeInDown' }
                 });
            }
          })
        
    }
},60)


var lerp = document.querySelector("#lerp");
window.addEventListener("mousemove",function(dets){
    console.log(dets);
    
    lerp.style.transform = `translate(${dets.clientX}px,${dets.clientY}px)`;
    // if((clientX >= 584 && clientX <= 943)  ){
    //     lerp.style.width = "100 px";
    //     lerp.style.height = "100 px";
    //     // lerp.style.backgroundColor = "white";
    //     alert("hey")
    // }

    
})




