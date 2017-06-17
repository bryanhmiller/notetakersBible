app.controller("BibleCtrl", function($rootScope, $scope, BibleFactory) {

	console.log("inside BibleCtrl.js");

  let loadBible = () => {
    BibleFactory.getBible()
    .then((books) => {
    	$scope.books = books;
    })
    .catch((error) => {
    	console.log("error in loadBible", error);
    })
  };

  $scope.setSelectedBook = (book) => {
  	
  };

  loadBible();


  


});  
