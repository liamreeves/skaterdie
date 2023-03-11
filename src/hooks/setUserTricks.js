import { getDatabase, ref, set } from "firebase/database";

export default function setUserTricks(userId, tricks) {
  const db = getDatabase();
  set(ref(db, "users/" + userId + "/tricks"), {
    tricks
  });
}