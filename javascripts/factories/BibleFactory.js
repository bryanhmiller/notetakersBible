app.factory("BibleFactory", function($http, $q, apiBible, FIREBASE_CONFIG) {

  let getBible = () => {
    return $q((resolve, reject) => {
      // let auth = $base64.encode('');
      // let headers = {'Authorization': 'Basic ' + auth};
      let auth = 'username=&grant_type=password';
      $http({
        method:'GET',
        url:'https://bibles.org/v2/versions/eng-KJVA/books.js?include_chapters=true',
        headers: {
                'Content-Type': 'application/x-www-form-urlencoded'
            },
        data:auth
      })
      .then((chapters) => {
          resolve(chapters);
      }).catch((error) => {
        reject(error);
      });  
    });  
  };

  return {getBible:getBible};
});

