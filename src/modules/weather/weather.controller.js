const { weatherservice } = require ('./weather.service');

const weathercontroller = function(){
    weatherservice();
}
module.exports = {
    weathercontroller
}