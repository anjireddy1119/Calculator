let output = document.querySelector('.output');
let expression = '0';
function calculation(num)
{
    if(num === '=')
    { 
        expression = eval(expression).toString(); 
    }
    else if(num === 'clear')
    {
        expression = '0';                          
    }
    else if(num === 'backspace')
    {
        expression = expression.length>1 ?  expression.slice(0,-1) : '0';
    }
    else{
         expression = expression === '0' ? num.toString() : expression + num;
    }
    output.innerHTML = expression || 0;
    //console.log(expression.length);
    
}
output.innerHTML = expression || 0;
