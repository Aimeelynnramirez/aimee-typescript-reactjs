
import {REPOSITORIES , findLessonsForRepositories} from './db-data';

import * as firebase from 'firebase';

const firebaseConfig = {
  apiKey: "AIzaSyCs6Mc6RAaILb6uw_RgnvWIED137gzWjIU",
  authDomain: "aimee-github.firebaseapp.com",
  databaseURL: "https://aimee-github.firebaseio.com",
  projectId: "aimee-github",
  storageBucket: "aimee-github.appspot.com",
  messagingSenderId: "996249239282",
  appId: "1:996249239282:web:d51d596c4789c02d221a6b"
};

console.log("Uploading data to the database with the following config:\n");

console.log(JSON.stringify(firebaseConfig));

console.log("\n\n\n\nMake sure that this is your own database, so that you have write access to it.\n\n\n");

firebase.initializeApp(firebaseConfig);

const db = firebase.firestore();

async function uploadData() {

  var batch = db.batch();

  const repositories = db.collection('repositories');


  Object.values(REPOSITORIES)
    .sort((c1:any, c2:any) => c1.seqNo - c2.seqNo)
    .forEach(async (repository:any) => {

      const newRepository = removeId(repository);

      const repositoriesRef = await repositories.add(newRepository);

      const lessons = repositoriesRef.collection("lessons");

      const repositoriesLessons = findLessonsForRepositories(repository.id);

      repositoriesLessons.forEach(repository =>{
        console.log(`description: ${repository.description}`)
      });
      console.log(`Repos length: ${repositoriesLessons.length}`);

      repositoriesLessons.forEach(async repository => {

        const newRepository = removeId(repository);

        await lessons.add(newRepository);

      });

    });

  return batch.commit();
}


function removeId(data:any) {

  const newData: any = {...data};

  delete newData.id;

  return newData;
}


uploadData()
  .then(() => {
    console.log("Writing data, exiting in 10 seconds ...\n\n");

    setTimeout(() => {

      console.log("\n\n\nData Upload Completed.\n\n\n");
      process.exit(0);

    }, 10000);

  })
  .catch(err => {
    console.log("Data upload failed, reason:", err, '\n\n\n');
    process.exit(-1);
  });


