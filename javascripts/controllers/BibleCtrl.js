app.controller("BibleCtrl", function($rootScope, $scope, BibleFactory) {

	console.log("inside BibleCtrl.js");

  let loadBible = () => {
    BibleFactory.getBible()
    .then((books) => {
    	$scope.books = books;
    })
    .catch((error) => {
    	console.log("error in loadBible", error);
    });
  };

  $scope.loadChapters = (book_id) => {
  	BibleFactory.getChapters(book_id)
    .then((chapters) => {
      $scope.chapters = chapters;
      console.log("chapters", chapters);
    })
    .catch((error) => {
      console.log(error in loadChapters);
    });
  };

  $scope.loadVerses = (chapter_id) => {
    BibleFactory.getVerses(chapter_id)
    .then((verses) => {
      $scope.verses = verses;
      console.log("verses", verses);
    })
    .catch((error) => {
      console.log(error in loadChapters);
    });
  };

  loadBible();


  


});  
