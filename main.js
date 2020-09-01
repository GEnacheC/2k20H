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
        document.getElementById("p1").innerHTML = "Qual a quantidade de plantas desejadas por hectare?"
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

if(n==2){
    document.getElementById("p1").innerHTML = "Qual o número de plantas por metro linear?"
    var qpl = document.getElementById("per1").value
    if(qpl == 0){
        qpl = 0
       
       
     }
    if(qpl >= 1){
      n -= n
      n += 3
      document.getElementById("per1").value = '';
      pl = qpl
      
      
     }

  
  }

/**************************  */
if(n==3){
    document.getElementById("p1").innerHTML = "Qual a quantidade de sementes por metro linear?"
    var qsl = document.getElementById("per1").value
    if(qsl == 0){
        qsl = 0
       
       
     }
    if(qsl >= 1){
      n -= n
      n += 4
      document.getElementById("per1").value = '';
      sl = qsl
      
      
     }

  
  }
/*************************** */
if(n==4){
    document.getElementById("p1").innerHTML = "Qual o poder germinativo de sua planta?"
    var qpg = document.getElementById("per1").value
    if(qpg == 0){
        qpg = 0
       
       
     }
    if(qpg >= 1){
      n -= n
      n += 5
      document.getElementById("per1").value = '';
      pg = qpg
      
      
     }

  
  }
/*********************** */
if(n==5){
    document.getElementById("p1").innerHTML = "Qual a quantidade de metros lineares?"
    var qml = document.getElementById("per1").value
    if(qml == 0){
        qml = 0
       
       
     }
    if(qml >= 1){
      n -= n
      n += 6
      document.getElementById("per1").value = '';
      ml = qml
      
      
     }

  
  }
/*********************** */
if(n==6){
    document.getElementById("p1").innerHTML = "Qual o peso de mil sementes?"
    var qms = document.getElementById("per1").value
    if(qms == 0){
        qms = 0
       
       
     }
    if(qms >= 1){
      n -= n
      n += 7
      document.getElementById("per1").value = '';
      ms = qms
      
      
     }

  
  }
/*********************** */
if(n==7){
    document.getElementById("p1").innerHTML = "Qual o número de sementes por hectare?"
    var qns = document.getElementById("per1").value
    if(qns == 0){
        qns = 0
       
       
     }
    if(qns >= 1){
      n -= n
      document.getElementById("per1").value = '';
      ns = qns
      
      
     }

  
  }
/******************************************************************** */

}
