function compute(){//compute the total amount earned with simple interest
    var principal = document.getElementById("principal").value;//capture principal value 
    var rate = document.getElementById("rate").value;//capture rate value
    var years = document.getElementById("years").value;//capture years value
    var interest = principal * years * rate / 100;//compute the total amount earned with simple interest
    var this_year = new Date().getFullYear();//capture current year
    var tbd = this_year + parseInt(years);//find actual year used to calculate simple interest
    if( check_principal() == true)   {//if principal value is valid, display results  
        document.getElementById("result").innerHTML = 
        "If you deposit <mark>" + principal + "</mark>,<br>" +  
        "at an interest rate of <mark>" + rate + "%</mark>.<br>" + 
        "You will receive an amount of <mark>" + interest + "</mark>, <br>" + 
        "in the year <mark>" + tbd + "</mark><br>"
    }    
}

function change_rate(){//display rate from slider
    var slider_value = document.getElementById("rate").value;
    document.getElementById("change").innerHTML = slider_value;
}
   
function drop_down_years(){//create drop down menu for number of years
    var years = document.getElementById("years"); 
    var options = "";
    for(i=1;i<=10;i++){
        options += "<option value=" + i + ">" + i + "</option>";        
    }   
    years.innerHTML = options;       
}

window.onload = drop_down_years;//load drop down menu when window loads

function check_principal(){//check if principal value is valid (non-zero and positive)
    var p = document.getElementById("principal");//capture principal amount

    if(p.value == 0 || p.value < 0){//yield alert if principal amount is invalid
        alert("Enter a positive number");
        p.focus();
        document.getElementById("result").innerHTML = "";
        return false;
    }
    return true;
    
}
