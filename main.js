var n = 0;
/********************************************************** */
var h = 0;
var pd = 0;
var pl = 0;
var sl = 0;
var pg = 0;
var ml = 0;
var ms = 0;
var ns = 0;

/********************************************************* */

function nextQ(){

      if(n == 0){
      document.getElementById("p1").innerHTML = "Qual o tamanho da sua plantação em hectares?"
      var qh = document.getElementById("per1").value
      if(qh == 0){
             qh = 0
             
           
      }
      if(qh >= 1){
           n -=n
           n += 1
           document.getElementById("per1").value = '';
           h = qh;
           
           
           
           
      }
    
      }
    /****************** */
      if(n==1){
        document.getElementById("p1").animate([
          
          { transform: 'translateX(-100px)', opacity:"0" }, 
          { transform: 'translateX(0px)',
             opacity: "1" }
        ], { 
          
          duration: 500,
          
        });
        document.getElementById("p1").innerHTML = "Qual a quantidade de plantas desejadas por hectare?"
       
        document.getElementById("p1").style.opacity = "1"
        var qpd = document.getElementById("per1").value
        if(qpd == 0){
            qpd = 0
           
           
         }
        if(qpd >= 1){
          n -= n
          n += 2
          document.getElementById("per1").value = '';
          pd = qpd
          
          
         }

      
      }
/*************************** */


/**************************  */

/*************************** */
if(n==2){
  document.getElementById("p1").animate([
          
    { transform: 'translateX(-100px)', opacity:"0" }, 
    { transform: 'translateX(0px)',
       opacity: "1" }
  ], { 
    
    duration: 500,
    
  });
    document.getElementById("p1").innerHTML = "Qual o poder germinativo de sua planta?"
    var qpg = document.getElementById("per1").value
    if(qpg == 0){
        qpg = 0
       
       
     }
    if(qpg >= 1){
      n -= n
      n += 3
      document.getElementById("per1").value = '';
      pg = qpg
      
      
     }

  
  }
/*********************** */
if(n==3){
  document.getElementById("p1").animate([
          
    { transform: 'translateX(-100px)', opacity:"0" }, 
    { transform: 'translateX(0px)',
       opacity: "1" }
  ], { 
    
    duration: 500,
    
  });
    document.getElementById("p1").innerHTML = "Qual a quantidade de metros lineares do seu hectar?"
    var qml = document.getElementById("per1").value
    if(qml == 0){
        qml = 0
       
       
     }
    if(qml >= 1){
      n -= n
      n += 4
      document.getElementById("per1").value = '';
      ml = qml
      
      
     }

  
  }
/*********************** */
if(n==4){
  document.getElementById("p1").animate([
          
    { transform: 'translateX(-100px)', opacity:"0" }, 
    { transform: 'translateX(0px)',
       opacity: "1" }
  ], { 
    
    duration: 500,
    
  });
    document.getElementById("p1").innerHTML = "Qual o peso de mil sementes?"
    var qms = document.getElementById("per1").value
    if(qms == 0){
        qms = 0
       
       
     }
    if(qms >= 1){
      n -= n
      n += 5
      document.getElementById("per1").value = '';
      ms = qms
      
      
     }

  
  }
/*********************** */
if(n==5){
  document.getElementById("container4").animate([
          
    { transform: 'translateY(0px)', opacity:"0" }, 
    { transform: 'translateY(13px)',
       opacity: "1" }
  ], { 
    
    duration: 500,
    
  });
      document.getElementById("container2").style.display = "none";
      document.getElementById("tp").innerHTML = "<h2>Os resultados da sua plantação foi: </h2>"
     
      document.getElementById("PMLP").innerHTML = "Plantas por metro linear:  "
      document.getElementById("PML").innerHTML = showRPD() 
      
      document.getElementById("NSLP").innerHTML=   "Número de sementes por metro linear: " 
      document.getElementById("NLH").innerHTML =  showRSL()

      document.getElementById("NSHP").innerHTML =   "Número de sementes por hectar: " 
      document.getElementById("NSH").innerHTML = showRSH()

      document.getElementById("NSHP").innerHTML =   "Número de sementes por hectar: " 
      document.getElementById("NSH").innerHTML = showRSH()

      document.getElementById("NSHKP").innerHTML =  "Sementes por hectar em kg: " 
      document.getElementById("NSHK").innerHTML = showRPK() + "Kg"

      document.getElementById("")
      
     
     
      document.getElementById("container4").style.border = "solid 0.5px #AAA"
      document.getElementById("container4").style.padding = "15px"
}

/******************************************************************** */
function showRPD(){
  return  ppl = (pd * h)/10000
        


}
function showRSL(){
  return  nsl = (ppl * 100)/pg
       
        
}
function  showRSH(){
  return nsh = nsl * ml
  
  

}
function showRPK(){
  return sph = (ms * nsh)/1000


}
}
