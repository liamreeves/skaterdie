import { getDatabase, ref, update } from "firebase/database";

export default function updateUserTricks(userId, trickName, stance, rotation, landed) {
  // Get a reference to the Firebase Realtime Database
  const db = getDatabase();
  // Get a reference to the user's trick list in the database
  const trickRotationRef = ref(db, "users/" + userId + "/tricks/" + trickName + "/" + (stance ? stance : "Regular") );

  // Use the Firebase Realtime Database SDK to add the new trick to the list
  update(trickRotationRef, {[rotation ? rotation : "Regular"] : landed})
}

// Call the update function with a user ID and a skateboard trick name
