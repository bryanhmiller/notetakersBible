app.controller("BibleCtrl", function($rootScope, $scope, BibleFactory) {
  $scope.bookName = {};
	$scope.bookNumber = {};
  let NT = "ENGNASN2ET";
  let OT = "ENGNASO2ET";

  let loadBible = () => {
    BibleFactory.getBible()
    .then((books) => {
    	$scope.books = books;
    })
    .catch((error) => {
    	console.log("error in loadBible", error);
    });
  };

  $scope.loadChapters = (book_id, book_order) => {
    console.log("loadChapters book_id, book_order", book_id, book_order);
  	$scope.bookName = book_id;
    $scope.bookNumber = book_order;
    BibleFactory.getChapters(book_id)
    .then((chapters) => {
      $scope.chapters = chapters;
      console.log("chapters", chapters);
    })
    .catch((error) => {
      console.log(error in loadChapters);
    });
  };

  $scope.loadVerses = (chapter_id, bookNumber, bookName) => {
    console.log("load verses chapter_id", chapter_id, "bookNumber", bookNumber, "bookName", bookName);
    let testament = "OT";
    // bookNumber = parseInt(book_order);
    if (bookNumber > 39) {
      testament = "NT";
    }

    BibleFactory.getVerses(chapter_id)
    .then((verses) => {
      $scope.verses = verses;
      console.log("verses", verses);
    })
    .catch((error) => {
      console.log(error in loadChapters);
    });
  };

  $scope.getVerseData = (book_name, chapter_id, verse_id) => {
    console.log("verse data", book_name, chapter_id, verse_id);
  };
  
  loadBible();


  


});  
