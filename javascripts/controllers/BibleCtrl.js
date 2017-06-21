app.controller("BibleCtrl", function($location, $rootScope, $scope, BibleFactory) {
  $scope.book_id = "";
  $scope.book_order = "";
  let NT = "ENGNASN2ET";
  let OT = "ENGNASO2ET";

  let loadBible = () => {
    BibleFactory.getBible()
    .then((books) => {
    	$scope.books = books;
      console.log("loadBible books", books);
    })
    .catch((error) => {
    	console.log("error in loadBible", error);
    });
  };

  $scope.loadChapters = (book_id, book_order) => {
    $scope.book_id = book_id;
    $scope.book_order = book_order;   
    console.log("loadChapters book_id:", book_id);
    BibleFactory.getChapters(book_id)
    .then((chapters) => {
      $scope.chapters = chapters;
      console.log("chapters", chapters);
    })
    .catch((error) => {
      console.log(error in loadChapters);
    });
  };

  $scope.loadVerses = (book_id, book_order, chapter_id) => {
    console.log("load verses chapter_id", chapter_id, "book_id", book_id, "book_order", book_order);
    let testament = OT;
    let bookNumber = parseInt(book_order);
    if (bookNumber > 39) {
      testament = NT;
    }
    $rootScope.currentText = {testament:testament, book_id:book_id, book_order:book_order, chapter_id:chapter_id};
    BibleFactory.getVerses(testament, book_id, chapter_id)
    .then((verses) => {
      $scope.verses = verses;
      console.log("verses", verses);
    })
    .catch((error) => {
      console.log(error in loadChapters);
    });
  };

  $scope.getVerseData = (book_name, book_id, chapter_id, verse_id) => {
    console.log("verse data", book_name, book_id, chapter_id, ":", verse_id);
    $location.url(`/newNote/${book_name}/${book_id}/${chapter_id}/${verse_id}`);
  };
  
  loadBible();

  if($rootScope.currentText) {
    $scope.loadVerses($rootScope.currentText.book_id, $rootScope.currentText.book_order, $rootScope.currentText.chapter_id);
  }



});  
