var getRepos = require('./../js/lookup.js').getRepos;

$('#button-search').click(function(event) {
  event.preventDefault();
  var username = $('#username').val();
  $('#username').val("");
  getRepos(username);
});
