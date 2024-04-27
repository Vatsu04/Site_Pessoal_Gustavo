$('[lang="en"]').hide();

$('#switch-lang').click(function() {
  $('[lang="pt"]').toggle();
  $('[lang="en"]').toggle();
});