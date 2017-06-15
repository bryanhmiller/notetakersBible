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

  let getItemList = (userId) => {
    // let itemz = [];
    // console.log("userId in getItemList", userId);
    // return $q((resolve, reject) => {
    //   $http.get(`${FIREBASE_CONFIG.databaseURL}/addresses.json?orderBy="uid"&equalTo="${userId}"`)
    //   .then((fbItems) => {
    //     console.log("fbItems in getItemList", fbItems);
    //       var itemCollection = fbItems.data;
    //       if(itemCollection !== null) {
    //         Object.keys(itemCollection).forEach((key) => {
    //           itemCollection[key].id=key;
    //           itemz.push(itemCollection[key]);
    //         });
    //       }
    //       resolve(itemz);
    //       console.log("itemz in AddressFactory", itemz)
    //   }).catch((error) => {
    //     reject(error);
    //   });  
    // });  
  };

  let getSingleItem = (id) => {
    // return $q((resolve, reject) => {
    //   $http.get(`${FIREBASE_CONFIG.databaseURL}/addresses/${id}.json`)
    //   .then((resultz) => {
    //     resultz.data.id = id;
    //     resolve(resultz);
    //   }).catch((error) => {
    //     console.log("getSingleItem error", error);
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

  let editItem = (address) => {
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


  return {getItemList:getItemList, getSingleItem:getSingleItem, postNewNote:postNewNote, deletz:deletz, editItem:editItem};

});
