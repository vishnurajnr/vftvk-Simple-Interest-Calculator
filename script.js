function compute()
{
    var principal = document.getElementById("principal").value;
    var rate  = document.getElementById("rate").value;
    var years  = document.getElementById("years").value;
    var interest = principal * years * rate / 100
    var result  = document.getElementById("result")
    result.innerHTML = 'If you deposit <mark>${principal}</mark>,<br>
    at an interest rate of <mark>${rate}%</mark>.<br>
    You will receive an amount of <mark>${interest}</mark>,<br>
    in the year <mark>${parseInt(new Date().getFullYear()) +parseInt(years)}</mark>'
    
}
