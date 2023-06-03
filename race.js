window.onload=()=>{

//Variables 

//let playerName = prompt("Welcome, Enter Your Name")

let player = document.querySelector(".player")

    let para = document.getElementById("para")

    let btn1 = document.querySelector(".btn1")

    

    let one = document.querySelector(".one")

    let two = document.querySelector(".two")

    let car1 = document.querySelector(".car1")

    let car2= document.querySelector(".car2")

   

    let race= document.querySelector("body")

    

    

   // player.innerHTML = playerName 

    var interval;

    let counting = 0

   var stop;

    btn1.addEventListener("click",starter)

    

    btn1.addEventListener("mouseover",load)

    

    //load func is for screen movement 

   function load (){

        setTimeout(()=>{

      let roll =  setInterval(()=>{

         if(counting === 650){

         counting = 0

            clearInterval(roll) 

            para.innerHTML = " "

         }

         counting++

         

         window.scrollTo(counting, 0)

             

     },10)  

      

  },4000)

        

    }  

    //Start function  

    function starter(){

             

 interval = setInterval(counter,500)    

    }  

     

    

    //Random Variables

    

    var random1 = Math.floor(Math.random() * (4-2) + 2)

     var random2 = Math.floor(Math.random() * (4- 2)+ 2)

     

     var count = 5

       var pos = 0   

       var scores= 0  

       var scoreBoard; 

    car1.innerHTML = scores 

    car2.innerHTML = scores 

    

    

    

    function counter(){

     

    

    para.style.display ="block"

    btn1.style.display = "none"

     para.innerHTML = count

           if(count > 0){

              count--

              }

            else if(count ===0){

           count = "GO !!"

          clearInterval(interval )

          

        let scoreBoard=()=>{

   let startRace = setInterval(()=>{

      pos++

      one.style.left= (pos * random1) + "px"

      two.style.left= (pos * random2) + "px"   

     if(pos === 400){

    clearInterval(startRace)

   para.style.display=  "none   "

   btn1.style.display ="block"

   btn1.innerHTML = " Race Again"

     pos = 10

         one.style.left= pos+ "px"

         

         two.style.left = pos+ "px"

         if(random1 > random2 ){

             scores++       

            car1.innerHTML = scores 

            

               }else if(random2 > random1 ){

                scores++

               car2.innerHTML = scores 

          }

          else if(random1 === random2 ){

                   scores++

                   car1.innerHTML= scores 

                   car2.innerHTML= scores 

               }

             }

  

     }, 20)

     

     

               }

               scoreBoard()

               btn1.addEventListener("click",()=>{

                   let roll =  setInterval(()=>{

         if(counting === 650){

         counting = 0

            clearInterval(roll) 

            para.innerHTML = " "

         }

         counting++

         

         window.scrollTo(counting, 0)

             

     },10)  

                   scoreBoard()

               })

               para.style.display=  "none   "

              }  

           }

           

                

    

    

    

    

    

    

    

    

    

    

    

    

    

    

    

    

    

}
