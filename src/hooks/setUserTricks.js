import { getDatabase, ref, update, get, child } from "firebase/database";


// Define the update function
export default function addSkateboardTrick(userId, trickName) {
// Get a reference to the Firebase Realtime Database
const db = getDatabase();
  // Get a reference to the user's trick list in the database
  const userTrickListRef = ref(db, 'users/' + userId + '/tricks');

  // Use the Firebase Realtime Database SDK to add the new trick to the list
  update(userTrickListRef, {[trickName]: true});
}

// Call the update function with a user ID and a skateboard trick name

