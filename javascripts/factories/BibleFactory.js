app.factory("BibleFactory", function($http, $q) {

  let getBible = () => {
    let books = [];
    return $q((resolve, reject) => {
      $http.get(`https://note-takers-bible.herokuapp.com/api/noteTakersBible/library/book?key=c0c769e931f78307a6c1c65cc5bd1d8c&dam_id=ENGNAS&v=2`)
      .then((apiResponse) => {
          resolve(apiResponse.data);
          console.log("apiResponse.data in getBible",apiResponse.data);
      }).catch((error) => {
        reject(error);
      });  
    });  
  };

  let getChapters = (book_id) => {
    console.log("getChapters book_id:", book_id);
    let chapters = [];
    return $q((resolve, reject) => {
      $http.get(`https://note-takers-bible.herokuapp.com/api/noteTakersBible/library/chapter?key=c0c769e931f78307a6c1c65cc5bd1d8c&dam_id=ENGNAS&book_id=${book_id}&v=2`)
      .then((apiChapters) => {
          resolve(apiChapters.data);
          console.log("apiChapters.data in getChapters",apiChapters.data);
      }).catch((error) => {
        reject(error);
      });  
    });  
  };

  let getVerses = (testament, book_id, chapter_id) => {
    // console.log("book_id", book_id, "book_order", book_order, "chapter_id", chapter_id);
    let verses = [];
    return $q((resolve, reject) => {
      $http.get(`https://note-takers-bible.herokuapp.com/api/noteTakersBible/text/verse?key=c0c769e931f78307a6c1c65cc5bd1d8c&dam_id=${testament}&book_id=${book_id}&chapter_id=${chapter_id}&v=2`)
      .then((apiVerses) => {
          resolve(apiVerses.data);
          console.log("apiVerses.data in getVerses",apiVerses.data);
      }).catch((error) => {
        reject(error);
      });  
    });  
  };

  return {getBible:getBible, getChapters:getChapters, getVerses:getVerses};

});
// "use strict";

// app.factory("DBPFactory", function($q, $http) {

//     // This dam_id is pulling an NT english version of NAS New American Standard Bible
//     var getBible = function() {
//         return $q((resolve, reject) => {
//             $http.get(`http://dbt.io/library/book?key=c0c769e931f78307a6c1c65cc5bd1d8c&dam_id=ENGNAS&v=2`)
//             .success((response) => {
//                 resolve(response);
//             })
//             .error((errorResponse) => {
//                 reject(errorResponse);
//             });
//         });
//     };

//     var getChapters = function(book_id) {
//         return $q((resolve, reject) => {
//             $http.get(`http://dbt.io/library/chapter?key=c0c769e931f78307a6c1c65cc5bd1d8c&dam_id=ENGNAS&book_id=${book_id}&v=2`)
//             .success((response) => {
//                 resolve(response);
//             })
//             .error((errorResponse) => {
//                 reject(errorResponse);
//             });
//         });
//     };

//     var getVerse = function(book_id, chapter_id, testament) {
//         return $q((resolve, reject) => {
//             $http.get(`http://dbt.io/text/verse?key=c0c769e931f78307a6c1c65cc5bd1d8c&dam_id=${testament}&book_id=${book_id}&chapter_id=${chapter_id}&v=2`)
//             .success((response) => {
//                 resolve(response);
//             })
//             .error((errorResponse) => {
//                 reject(errorResponse);
//             });
//         });
//     };

//     return {
//             getBible: getBible,
//             getChapters: getChapters,
//             getVerse: getVerse
//         };

// });  

