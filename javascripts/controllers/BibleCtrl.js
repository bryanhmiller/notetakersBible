app.controller("BibleCtrl", function($rootScope, $scope, BibleFactory) {

	console.log("inside BibleCtrl.js");

  let loadBible = () => {
    BibleFactory.getBible();
  };

  loadBible();


  


});  
