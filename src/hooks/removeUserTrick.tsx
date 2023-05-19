import { getDatabase, ref, remove } from "firebase/database";

export default function removeUserTrick(user: string, stance: string, rotation: string, trickName: string) {

  // Get a reference to the Firebase Realtime Database
  const db = getDatabase();

  // Get a reference to the user's trick list in the database
  const userTrickListRef = ref(db, "users/" + user + "/tricks/" + trickName + (stance ? "/" + stance : ""));

  // Use the Firebase Realtime Database SDK to add the new trick to the list
  remove(userTrickListRef);
}