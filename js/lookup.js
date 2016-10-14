var apiKey = require('./../.env').apiKey;

exports.getRepos = function(_username){
  if(_username !== ""){
    $.get('https://api.github.com/users/' + _username + '/repos?visibility=public&access_token=' + apiKey).then(function(response){
      $('#initial-repo-message').hide();
      $('#output-repos').html('');
      for(var i = 0; i < response.length; i++){
        $('#output-repos').append('<li><a target="_blank" href="' + response[i].html_url + '"><p>' + response[i].name + '</p><p>' + response[i].description + '</p></a></li>');
      }
    }).fail(function(error){
      $('#output-user').html('');
      $('#output-repos').html('');
    });
    $.get('https://api.github.com/users/' + _username + '?access_token=' + apiKey).then(function(response){
      $('#output-user').html('<h2 id="user-name">' + response.name + '</h2><img id="user-avatarImage" src=' + response.avatar_url + '>');
    }).fail(function(error){
      $('#initial-repo-message').text(error.responseJSON.message).show();
      $('#output-user').html('');
      $('#output-repos').html('');
    });
  }
  else {
    $('#output-user').html('');
    $('#output-repos').html('');
    $('#initial-repo-message').text("Username required.").show();
  }
};
