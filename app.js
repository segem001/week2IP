function feedback (){

    let maleNames=['Kwasi','Kwadwo','Kwabena','Kwaku','Yaw','Kofi','Kwame']
    let femaleNames=['Akosua','Adwoa','Abenaa','Akua','Yaa','Afua','Ama']
    let Days=['Sunday','Monday','Tuesday','Wednesday','Thursday','Friday','Saturday']
    // Ghanian_Generator function

    let date_number=document.getElementById('date');
    let month_number=document.getElementById('month');
    let year_number=document.getElementById('year'); 
    
     // //calculations
     let CC=parseInt(year_number.value.slice(0,2));
     let YY=parseInt(year_number.value.slice(2,4));
     let MM=parseInt(month_number.value);
     let DD=parseInt(date_number.value);
     // alert(date_number.value)
 
     // let weekDay = Math.floor(( ( (CC/4) -2*CC-1) + ((5*YY/4) ) + ((26*(MM+1)/10)) + DD ) % 7)
    let weekDay = (( ( (CC/4) -2*CC-1) + ((5*YY/4) ) + ((26*(MM+1)/10)) + DD )%7).toFixed()
 
 
     // alert(weekDay)
     
     //radio values
     let maleRadio=document.getElementById("males");
    let femaleRadio=document.getElementById("females");
    
    //looping 
    
    let outputs="";
    
    if(weekDay==0){
    
        outputs=6;
    
    }else{
    
        outputs=weekDay-1;
    
    }
    