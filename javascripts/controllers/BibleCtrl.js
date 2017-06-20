app.controller("BibleCtrl", function($rootScope, $scope, BibleFactory) {
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

    BibleFactory.getVerses(testament, book_id, chapter_id)
    .then((verses) => {
      $scope.verses = verses;
      console.log("verses", verses);
    })
    .catch((error) => {
      console.log(error in loadChapters);
    });
  };

  $scope.getVerseData = (book_id, chapter_id, verse_id) => {
    console.log("verse data", book_id, chapter_id, ":", verse_id);
  };
  
  loadBible();


  


});  
