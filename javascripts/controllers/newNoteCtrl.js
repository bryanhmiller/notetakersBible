app.controller("NewNoteCtrl", function($http, $location, $q, $rootScope, $scope, FIREBASE_CONFIG, NoteFactory) {

  $scope.addNewNote = () => {
    $scope.newNote.is_personal = true;
    $scope.newNote.is_sermon = false;
    $scope.newNote.is_verses = false;
    $scope.newNote.uid = $rootScope.user.uid;
    NoteFactory.postNewNote($scope.newNote).then((response) => {
      $scope.newNote = {};
      $location.url("/homeBible");
    }).catch((Error) => {
      console.log("Add error", error);
    });
  };

});
