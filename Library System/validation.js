///inputs
var tInput = document.getElementById('title');
var AInput = document.getElementById('author');
var image = document.getElementById('image');
var price = document.getElementById('price');
//erorr span
var TError = document.getElementById('t-error');
var aError = document.getElementById('a-error');
var url_error = document.getElementById('img-error');
var priceError = document.getElementById('p-error');
// regular expression

const urlPattern = /^(https?:\/\/)?(www\.)?([a-zA-Z0-9-]+\.[a-zA-Z]{2,})(\/[^\s]*)?$/;  
var REG = new RegExp('^[a-zA-Z]$');
var reqnum=new RegExp('^[1-9]$')
//call function

validate(tInput,TError,"title",REG)
validate(AInput,aError,"name",REG)
validate(price,priceError,"Price",reqnum)
validate(image,url_error,"url",urlPattern)


function validate( n, er,str,REG)
{
    n.addEventListener('keypress',function(e)
    {
    
        var key=e.key;
        if(REG.test(key)!=true)
        {
            er.innerHTML="Enter valid "+ str;
            er.style.color="red"

            n.style.border= "4px solid red" 

            e.preventDefault();
    
        }
        else
        {
            n.style.border= "4px solid green" 
            er.innerHTML="";
        }
    })
}


