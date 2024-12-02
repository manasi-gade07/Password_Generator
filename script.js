const a =  "ABCDEFGHIJKLMNOPQRSTUVWXYZ"
const b = "abcdefghijklmnopqrstuvwxyz"
const c = "0123456789"
const d = "@#%^&*()_+=-/\<>?{}[]~"
const passBox = document.getElementById("pass-box")
const total = document.getElementById("size")

const upper = document.getElementById("Uppercase")
const lower = document.getElementById("Lowercase")
const number = document.getElementById("Numbers")
const symbol = document.getElementById("Symbols")


const getdata=(data)=>
{
return data[Math.floor(Math.random() * data.length)]
}
const generate=(password = "") =>
 { 

   if(upper.checked){
      password += getdata(a)
   }
   if(lower.checked){
      password += getdata(b)
   }
   if(number.checked){
      password += getdata(c)
   }
   if(symbol.checked){
      password += getdata(d)
   }
   if(password.length < total.value){
      return generate(password)
   }
   console.log(password)
   // passBox.value = password
  
   passBox.value = truncateString(password,total.value);
   
}   

generate();
document.getElementById("press").addEventListener(
   "click",
   function ()
   {
      generate();
   }
)
function truncateString(str,num)
{
   if(str.length > num)
   {
      let substr = str.substring(0,num);
      return substr;
   }
   else

   {
      return str;
   }
}


function copy()
{
passBox.select();
navigator.clipboard.writeText(passBox.value);

}
