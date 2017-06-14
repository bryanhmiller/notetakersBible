app.factory("BibleFactory", function($http, $q, apiBible, FIREBASE_CONFIG) {

  let getBible = () => {
    let Bible = [];
    return $q((resolve, reject) => {
      $http.get(`https://apiBible@bibles.org/v2/books/eng-GNTD:2Tim/chapters.js`)
      .then((chapters) => {
          resolve(chapters);
          var BibleCollection = chapters;
          console.log("BibleCollection", BibleCollection);
      }).catch((error) => {
        reject(error);
      });  
    });  
  };
});

