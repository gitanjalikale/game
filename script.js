let turn="red"
document.querySelector('#red').getElementsByClassName.marginLeft ='0vmin'
document.querySelector('#red').getElementsByClassName.marginTop ='0vmin'
document.querySelector('#blue').getElementsByClassName.marginLeft ='0vmin'
document.querySelector('#blue').getElementsByClassName.marginTop  ='0vmin'

boxnumbers()

function rolldice(){
   var x=Math.floor(Math.random()*6+1)
   var img1;
   switch(x)
   {
       case 1:
       img1=document.getElementById("tiny").src="d1.jpg" ;
       document.getElementById("tiny").src=img1;
       break; 
       case 2:
        img1=document.getElementById("tiny").src="d2.jpg" ;
        document.getElementById("tiny").src=img1;
        break; 
        case 3:
        img1=document.getElementById("tiny").src="d3.jpg" ;
        document.getElementById("tiny").src=img1;
        break; 
        case 4:
        img1=document.getElementById("tiny").src="d4.jpg" ;
        document.getElementById("tiny").src=img1;
        break; 
        case 5:
        img1=document.getElementById("tiny").src="d5.jpg" ;
        document.getElementById("tiny").src=img1;
        break; 
        case 6:
        img1=document.getElementById("tiny").src="d6.jpg" ;
        document.getElementById("tiny").src=img1;
        break; 
     }
    }
function boxnumbers(){
    let boxes= document.querySelectorAll('.box')
    boxes.forEach((box,i)=>{
        if(String(i).length==1 || (String(i).length==2 && Number(String(i)[0]))%2==0){
            box.innerHTML=100-i
        }else{
            box.innerHTML=Number(`${9-Number(String(i)[0])}${String(i)[1]}`)+1
                    }
    })
}