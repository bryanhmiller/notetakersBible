app.run(function(FIREBASE_CONFIG) {
  // firebase.initializeApp(FIREBASE_CONFIG);
});


app.config(function($routeProvider) {
  $routeProvider
    .when("/auth", {
      templateUrl: "partials/auth.html",
      controller: "AuthCtrl",
    })
    .when("/homeBible", {
      templateUrl: "partials/homeBible.html",
      controller: "BibleCtrl",
    })
    .when("/newNote", {
      templateUrl: "partials/newNote.html",
      controller: "NewNoteCtrl",
    })
    .when("/readNote", {
      templateUrl: "partials/readNote.html",
      controller: "ReadNoteCtrl",
    })
    .when("/editNote/:id", {
      templateUrl: "partials/editNote.html",
      controller: "EditNoteCtrl"
    })
    .otherwise("/auth");
});
