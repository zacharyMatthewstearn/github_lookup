var apiKey = require('./../.env').apiKey;

function Lookup() {

}

exports.getRepos = function(){
  $.get('https://api.github.com/users/zacharyMatthewstearn?access_token=' + apiKey).then(function(response){
    console.log(response);
  }).fail(function(error){
    console.log(error.responseJSON.message);
  });
};
