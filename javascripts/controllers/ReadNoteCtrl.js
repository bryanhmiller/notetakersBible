app.controller("ReadNoteCtrl", function($location, $rootScope, $scope, NoteFactory, BibleFactory) {
	$scope.notes = [];

  let getNotes = () => {	
  	NoteFactory.getNoteList($rootScope).then((notes) => {
      console.log("inside getNotes");
      $scope.notes = notes;
    }).catch((error) => {
      console.log("get Error", error);
    });
  };

  getNotes();

  $scope.deleteNote = (id) => {
  	NoteFactory.deletz(id).then(() => {
  		getNotes();
  	}).catch((error) => {
  		console.log("deleteItem error", error);
  	});
  }; 


  $scope.inputChange = (id) => {
    $location.url(`/editNote/${id}`);
  };



});  
