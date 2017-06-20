app.controller("NewNoteCtrl", function($http, $location, $q, $rootScope, $routeParams, $scope, FIREBASE_CONFIG, NoteFactory) {

  $scope.scripture_ref = `${$routeParams.book_name} ${$routeParams.chapter_id}: ${$routeParams.verse_id}`;
  // $scope.newNote.scripture_url =`${routeParams.book_name}/${routeParams.book_id}/${routeParams.chapter_id}/${routeParams.verse_id}`;  

  $scope.addNewNote = () => {
    $scope.newNote.scripture_ref = scripture_ref;
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
