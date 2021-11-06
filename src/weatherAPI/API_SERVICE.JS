const request = require('request')
const API_SERVICE = function (){
    // Request URL
var url = 'https://samples.openweathermap.org/data/2.5/forecast?q=australia,DE&appid=e0702aab87076bf923c2d77d6fd1d824';

request(url, (error, response, body)=>{
    let data = JSON.parse(body);
	
	if(response.statusCode===200){
        console.log('The weather in your city Australia is' +' '+ data.list[0].weather[0].description);
    }
    else{
        console.log(error)
    }
});
}
module.exports = API_SERVICE ;