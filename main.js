$(document).ready(function(){
    $("#registre").submit(function(event) {
      event.preventDefault()
      var mdp=$("#motdepasse").val()
      var cnf=$("#confirmation").val()
      var email=$("#email").val()
      var user =$({email:email,motdepasse:mdp})
      if(mdp===cnf && mdp.length>=8 && cnf.length>=8){
        localStorage.setItem("user",JSON.stringify(user))
        window.location.href = "login.html";
      }else{
        alert("les deux mots de passes ne sont pas identiques")
      }
    })

    $("#login").submit(function(event) {
        event.preventDefault()
        var mdp=$("#motdepasse").val()
        var email=$("#email").val()
        var user =JSON.parse(localStorage.getItem("user"))
        console.log(user[0]);
        if(user[0].email===email && user[0].motdepasse===mdp){
          window.location.href = "game.html";
        }else{
          alert("user dont found")
        }
      })
   })

   var  title=document.querySelector(".title");
   start ="x"
   var squares=[]
   function end (num1,num2,num3){
    title.innerHTML=`${squares[num1]} winner`;
        document.getElementById('item'+num1).style.background="#000";
       document.getElementById('item'+num2).style.background="#000";
       document.getElementById('item'+num3).style.background="#000";
       setInterval(function(){title.innerHTML +="."},1000)
       setTimeout(function(){location.reload()},4000)
   }
   function winnner(){

    for (var i=1;i<10;i++){
        squares[i]= document.getElementById("item" +i).innerHTML
    }
    if (squares[1]==squares[2] && squares[2]==squares[3] && squares[1] !=""){
        end(1,2,3)
    }
    else if (squares[4]==squares[5] && squares[5]==squares[6] && squares[5] !=""){
        end(4,5,6)

    }
    else if (squares[7]==squares[8] && squares[8]==squares[9] && squares[8] !=""){
        end(7,8,9)

    }
    else if (squares[1]==squares[4] && squares[4]==squares[7] && squares[1] !=""){
        end(1,4,7)

    }
    else if (squares[2]==squares[5] && squares[5]==squares[8] && squares[5] !=""){
        end(2,5,8)

    }
    else if (squares[3]==squares[6] && squares[6]==squares[9] && squares[6] !=""){
        end(3,6,9)

    }
    else if (squares[1]==squares[5] && squares[5]==squares[9] && squares[5] !=""){
        end(1,5,9)

    }
    else if (squares[3]==squares[5] && squares[5]==squares[7] && squares[5] !=""){
        end(3,5,7)
 
    }
   }

function game(id){
    var element=document.getElementById(id);
    if(start=== "x" && element.innerHTML==""){
        element.innerHTML="X";
        start="o"
        title.innerHTML="o"
    }
    else if (start==='o'&&element.innerHTML==""){
        element.innerHTML="O";
        start="x"
        title.innerHTML="x"

    }
    winnner()
}



