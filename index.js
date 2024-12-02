var inputvalue=document.querySelector('#city');
var btn = document.querySelector('#submitBtn');
var city = document.querySelector('#cityoutput');
var descrip = document.querySelector('#description');
var temp = document.querySelector('#temp');
var wind = document.querySelector('#wind');
apik= "eaca953d63f25e5c92608a911ddee6f3"

function convertion(val)
{
    return (val-273).toFixed(3);
}
btn.addEventListener('click',function()

{
    fetch('https://api.openweathermap.org/data/2.5/weather?q='+inputvalue.value+'&appid='+apik)
    .then(res=>res.json())

    .then(data=>
        {
            var nameval = data['name'];
            var descrip=data['weather']['0']['description'];
            var temparature=data['main']['temp'];
            var wndspeed=data['wind']['speed'];
            
            city.innerHTML=`Weather of <span>${nameval}<span>`
            temp.innerHTML=`Temperature: <span>${convertion(temparature)} C<span>`
            description.innerHTML=`Sky Conditions: <span>${descrip}<span>`
            wind.innerHTML=`Wind Speed : <span>${wndspeed} km/h <span>`
        
        })
        .catch(err=>alert('You enter the wrong city name '))
})