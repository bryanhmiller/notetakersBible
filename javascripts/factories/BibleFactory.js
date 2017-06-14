app.factory("BibleFactory", function($http, $q, ,apiKeyBible, FIREBASE_CONFIG) {

  let getbible = () => {
    let Bible = [];
    return $q((resolve, reject) => {
      $http.get(`https://apiKeyBible@bibles.org/v2/books/eng-GNTD:2Tim/chapters.js`)
      .then((chapters) => {
          var BibleCollection = chapters;
          console.log("BibleCollection", BibleCollection);
          }
          resolve(chapters);
      }).catch((error) => {
        reject(error);
      });  
    });  
  };
