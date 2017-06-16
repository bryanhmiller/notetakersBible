app.controller("EditNoteCtrl", function($location, $routeParams, $scope, NoteFactory) {
  $scope.note = {};

  NoteFactory.getSingleNote($routeParams.id).then((results) => {
    $scope.note = results.data;
    console.log("getSingleNote $scope.newNote", $scope.note);
  }).catch((error) => {
  	console.log("getSingleNote error", error);
  });

  $scope.addNewNote = () => {
  	NoteFactory.editNote($scope.note).then(() => {
  		$location.url("/readNote");
  	}).catch((error) => {
  		console.log("editItem error", error);
  	});
  };

});
