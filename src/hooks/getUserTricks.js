import { getDatabase, ref, child, get } from "firebase/database";

export default function getUserTricks(user) {

const tempTrickArray = []
const dbRef = ref(getDatabase());
return get(child(dbRef, `users/${user.uid}/tricks`))
  .then((snapshot) => {
    if (snapshot.exists()) {
      const trickEntries = Object.entries(snapshot.val());
      // loop through tricks
      trickEntries.map((trickOverview) => {
        // loop through stances
        Object.entries(trickOverview[1]).map((trickType) => {
          // loop through rotations
          Object.entries(trickType[1]).map((trickRotation) => {
            tempTrickArray.push([
              trickType[0],
              trickRotation[0],
              trickOverview[0],
            ]);
            return 1;
          });
          return 1;
        });
        return 1;
      });
      return (tempTrickArray);
    } else {
      return ([]);
    }
  })
  .catch((error) => {
    console.error(error);
  })
  .finally(() => {
    return tempTrickArray
  })
}