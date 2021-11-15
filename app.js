function feedback (){

    let maleNames=['Kwasi','Kwadwo','Kwabena','Kwaku','Yaw','Kofi','Kwame']
    let femaleNames=['Akosua','Adwoa','Abenaa','Akua','Yaa','Afua','Ama']
    let Days=['Sunday','Monday','Tuesday','Wednesday','Thursday','Friday','Saturday']
    // Ghanian_Generator function

    let date_number=document.getElementById('date'); 
    if (date_number.value<=0 || date_number.value>31){
      alert("Invalid Date Number");return false
    }
    let month_number=document.getElementById('month');
    if (month_number.value<=0 || month_number.value>12){
        alert("Invalid Month Number");return false
      }
    let year_number=document.getElementById('year'); 
    
     // //calculations
     let CC=parseInt(year_number.value.slice(0,2));
     let YY=parseInt(year_number.value.slice(2,4));
     let MM=parseInt(month_number.value);
     let DD=parseInt(date_number.value);

     var birth_date=(MM+'/'+DD+'/'+CC+YY)
     date_number.value=""
     month_number.value=""
     year_number.value=""
    //  alert (birth_date)
    var get_time=new Date(birth_date).getDay();

     let maleRadio=document.getElementById("males");
    let femaleRadio=document.getElementById("females");
    
        let userdetails=document.getElementById("results");
     
    if(maleRadio.checked){

        userdetails.value= `Your Akan name is ${femaleNames[get_time]} and was born on ${Days[get_time]}`;
          return false;
        
    }else if(femaleRadio.checked){
        userdetails.value= `Your Akan name is ${maleNames[get_time]} and was born on ${Days[get_time]}`;
    userdetails.style.display="block";return false
    }else if(!(maleRadio.checked || femaleRadio.checked)){
        alert("Choose your gender");return false
    }
       
    
        return false;
    
    
    
    
    }