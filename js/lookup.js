var apiKey = require('./../.env').apiKey;

exports.getRepos = function(){
  $.get('https://api.github.com/users/zacharyMatthewstearn/repos?access_token=' + apiKey).then(function(response){
    // console.log(response);
    $('#output').html('');
    for(var i = 0; i < response.length; i++){
      // console.log(response[i]);
      $('#output').append('<li><hr><p>' + response[i].name + '</p><p>' + response[i].description + '</p></li>');
    }
  }).fail(function(error){
    // console.log(error.responseJSON.message);
    alert(error.responseJSON.message);
  });
};
