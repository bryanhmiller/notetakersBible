app.controller("EditNoteCtrl", function($location, $routeParams, $scope, NoteFactory) {
  $scope.Note = {};

  NoteFactory.getSingleNote($routeParams.id).then((results) => {
    $scope.Note = results.data;
    console.log("getSingleNote $scope.newNote", $scope.Note);
  }).catch((error) => {
  	console.log("getSingleNote error", error);
  });

  $scope.addNewNote = () => {
  	NoteFactory.editNote($scope.Note).then(() => {
  		$location.url("/readNote");
  	}).catch((error) => {
  		console.log("editItem error", error);
  	});
  };

});
