app.controller("BibleCtrl", function($rootScope, $scope, BibleFactory) {

	console.log("inside BibleCtrl.js");


  let getSearchResults = () => {
	  console.log("inside getSearchResults");
  };

  let getItems = () => {	
  	BibleFactory.getBible($rootScope).then((itemz) => {
      console.log("inside getItems");
      $scope.items = itemz;
    }).catch((error) => {
      console.log("get Error", error);
    });
  };

  getItems();




});  
