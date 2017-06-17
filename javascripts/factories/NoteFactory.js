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
    console.log("userId in getNoteList", userId);
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
    console.log("note in NoteFactory", note);
    return $q((resolve, reject) => {
      $http.put(`${FIREBASE_CONFIG.databaseURL}/notes/${note.id}.json`, 
        JSON.stringify({
          date: note.date,
          img: note.img,
          is_personal: note.is_personal,
          is_sermon: note.is_sermon,
          is_verses: note.is_verses,
          keyword_id: note.keyword_id,
          location: note.location,
          note: note.note,
          pastor: note.pastor,
          scripture_ref: note.scripture_ref,
          uid: note.uid,
          url: note.url
        })  
      ).then((resultz) => {
        resolve(resultz);
        console.log("editItem resultz", resultz);
      }).catch((error) => {
        console.log("editItem error", error);
      });
    });
  };

  let deletz = (noteId) => {
    return $q ((resolve, reject) => {
      $http.delete(`${FIREBASE_CONFIG.databaseURL}/notes/${noteId}.json`)
      .then((resultz) => {
        resolve(resultz);
      }).catch((error) => {
        reject(error);
      });
    });
  };



  return {getNoteList:getNoteList, getSingleNote:getSingleNote, postNewNote:postNewNote, deletz:deletz, editNote:editNote};

});
