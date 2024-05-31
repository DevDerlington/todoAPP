exports.getDate = function(){
let  today = new Date();
let currentDay = today.getDay();
var  day = "";



var options = {
 weekday: "long",
 day: "numeric",
 month: "long"
};


return  today.toLocaleDateString("en-Us", options);
};

exports.getDay  = function(){
    let  today = new Date();
    let currentDay = today.getDay();
    var  day = "";
    
    
    
    var options = {
     weekday: "long",
    };
    
    
   return today.toLocaleDateString("en-Us", options);
    };
   