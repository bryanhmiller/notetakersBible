app.controller("NewNoteCtrl", function($http, $location, $q, $scope, FIREBASE_CONFIG, NoteFactory) {

  $scope.addNewNote = () => {
    // $scope.newContact.isCompleted = false;
    NoteFactory.postNewNote($scope.newNote).then((response) => {
      $scope.newNote = {};
      $location.url("/homeBible");
    }).catch((Error) => {
      console.log("Add error", error);
    });
  };

});
