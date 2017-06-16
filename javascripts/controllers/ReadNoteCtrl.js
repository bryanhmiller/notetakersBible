app.controller("ReadNoteCtrl", function($rootScope, $scope, NoteFactory, BibleFactory) {

  let getNotes = () => {	
  	NoteFactory.getNoteList($rootScope).then((notes) => {
      console.log("inside getItems");
      $scope.notes = notes;
    }).catch((error) => {
      console.log("get Error", error);
    });
  };

  getNotes();


});  
