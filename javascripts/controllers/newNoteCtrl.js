app.controller("NewNoteCtrl", function($http, $location, $q, $rootScope, $routeParams, $scope, FIREBASE_CONFIG, NoteFactory) {
  let bookName = $routeParams.book_name;
  let bookId = $routeParams.book_id;
  let chapterId = $routeParams.chapter_id;
  let verseId = $routeParams.verse_id;
  // console.log("$routeParams.book_name", $routeParams.book_name);
  // console.log("$routeParams.book_name", $routeParams.book_name);
  // console.log("$routeParams.book_name", $routeParams.book_name);
  // console.log("$routeParams.book_name", $routeParams.book_name);
  $scope.scripture_ref = `${bookName} ${chapterId}: ${verseId}`;
  $scope.scripture_url = `${bookName}/${bookId}/${chapterId}/${verseId}`;  
console.log("$scope.scripture_ref", $scope.scripture_ref);
console.log("$scope.scripture_url", $scope.scripture_url);
  $scope.addNewNote = () => {
    $scope.newNote.scripture_ref = $scope.scripture_ref;
    $scope.newNote.scripture_url = $scope.scripture_url;
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
