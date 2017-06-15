app.config(function($routeProvider) {
  $routeProvider
    .when("/homeBible", {
      templateUrl: "partials/homeBible.html",
      controller: "BibleCtrl",
    })
    .when("/newNote", {
      templateUrl: "partials/newNote.html",
      controller: "NewNoteCtrl",
    })
    .otherwise("/homeBible");
});
