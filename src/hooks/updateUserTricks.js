import { getDatabase, ref} from "firebase/database";

export default function updateUserTricks(userId, trickName) {
// Get a reference to the Firebase Realtime Database
const db = getDatabase();
  // Get a reference to the user's trick list in the database
  const userTrickListRef = ref(db, 'users/' + userId + '/tricks');

  // Use the Firebase Realtime Database SDK to add the new trick to the list
  ref.set(userTrickListRef, {[trickName]: true});
}

// Call the update function with a user ID and a skateboard trick name

