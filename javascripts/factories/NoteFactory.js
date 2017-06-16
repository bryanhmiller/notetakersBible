app.factory("NoteFactory", function($http, $q, FIREBASE_CONFIG) {

  let postNewNote = (newNote) => {
    return $q ((resolve, reject) => {
      $http.post(`${FIREBASE_CONFIG.databaseURL}/notes.json`, JSON.stringify(newNote))
      .then((resultz) => {
        resolve(resultz);
      }).catch((error) => {
        reject(error);
      });
    });
  };

  let getNoteList = (userId) => {
    let notes = [];
    console.log("userId in getItemList", userId);
    return $q((resolve, reject) => {
      $http.get(`${FIREBASE_CONFIG.databaseURL}/notes.json`)
      .then((fbNotes) => {
        console.log("fbNotes in getNoteList", fbNotes);
          var noteCollection = fbNotes.data;
          if(noteCollection !== null) {
            Object.keys(noteCollection).forEach((key) => {
              noteCollection[key].id=key;
              notes.push(noteCollection[key]);
            });
          }
          resolve(notes);
          console.log("notes in NoteFactory", notes);
      }).catch((error) => {
        reject(error);
      });  
    });  
  };

  let getSingleNote = (id) => {
    return $q((resolve, reject) => {
      $http.get(`${FIREBASE_CONFIG.databaseURL}/notes/${id}.json`)
      .then((resultz) => {
        resultz.data.id = id;
        resolve(resultz);
      }).catch((error) => {
        console.log("getSingleNote error", error);
      });
    });
  };

  let editNote = (note) => {
    // console.log("address in AddressFactory", address);
    // return $q((resolve, reject) => {
    //   $http.put(`${FIREBASE_CONFIG.databaseURL}/addresses/${address.id}.json`, 
    //     JSON.stringify({
    //       firstName: address.firstName,
    //       lastName: address.lastName,
    //       streetAddress: address.streetAddress,
    //       city: address.city,
    //       state: address.state,
    //       zipCode: address.zipCode,
    //       phone: address.phone,
    //       email: address.email
    //     })  
    //   ).then((resultz) => {
    //     resolve(resultz);
    //     console.log("editItem resultz", resultz);
    //   }).catch((error) => {
    //     console.log("editItem error", error);
    //   });
    // });
  };

  let deletz = (itemId) => {
    // return $q ((resolve, reject) => {
    //   $http.delete(`${FIREBASE_CONFIG.databaseURL}/addresses/${itemId}.json`)
    //   .then((resultz) => {
    //     resolve(resultz);
    //   }).catch((error) => {
    //     reject(error);
    //   });
    // });
  };



  return {getNoteList:getNoteList, getSingleItem:getSingleItem, postNewNote:postNewNote, deletz:deletz, editItem:editItem};

});
