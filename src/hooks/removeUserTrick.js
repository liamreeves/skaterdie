import { getDatabase, ref, remove } from "firebase/database";

export default function removeUserTrick(user, stance, rotation, trickName) {

  // Get a reference to the Firebase Realtime Database
  const db = getDatabase();

  // Get a reference to the user's trick list in the database
  const userTrickListRef = ref(db, "users/" + user + "/tricks/" + trickName + (stance ? "/" + stance : ""));
  console.log(userTrickListRef)

  // Use the Firebase Realtime Database SDK to add the new trick to the list
  remove(userTrickListRef);
}