import { useState, useContext, useEffect } from "react";
import styles from "../styles/Home.module.css";
import updateUserTricks from "../hooks/updateUserTricks";
import { AuthContext } from "../contexts/AuthContext";
import TrickDropdownSelect from "../components/TrickDropdownSelect";
import getUserTricks from "../hooks/getUserTricks";

export default function AddTrick() {
  const { user } = useContext(AuthContext);
  const [newTrick, setNewTrick] = useState("");
  const [rotation, setRotation] = useState("");
  const [direction, setDirection] = useState("");
  const [stance, setStance] = useState("");

  const [userTricks, setUserTricks] = useState([]);

  useEffect(() => {
    // This effect will only run when the user context changes
    if (user) {
      getUserTricks(user)
        .then((tricks) => {
          setUserTricks(tricks);
        })
        .catch((error) => console.error(error));
    } else {
      setUserTricks([]);
    }
  }, [user]);

  return (
    <>
      <div>
        <div>
          <select
            className="text-black p-1 m-1 rounded"
            value={stance}
            onChange={(e) => setStance(e.target.value)}
            name="stance"
            id="stance"
          >
            <option value=""></option>
            <option value="Switch">Switch</option>
            <option value="Fakie">Fakie</option>
            <option value="Nollie">Nollie</option>
          </select>
          <select
            className="text-black p-1 m-1 rounded"
            value={direction}
            onChange={(e) => setDirection(e.target.value)}
            name="direction"
            id="direction"
          >
            <option value=""></option>
            <option value="BS">BS</option>
            <option value="FS">FS</option>
          </select>
          <select
            className="text-black p-1 m-1 rounded"
            value={rotation}
            onChange={(e) => setRotation(e.target.value)}
            name="rotation"
            id="rotation"
          >
            <option value=""></option>
            <option value="180">180</option>
            <option value="360">360</option>
            <option value="540">540</option>
            <option value="720">720</option>
            <option value="900">900</option>
            <option value="1080">1080</option>
          </select>
        </div>
        <div>
          <input
            className="rounded text-black p-1 my-2"
            value={newTrick}
            onChange={(e) => setNewTrick(e.target.value)}
            type="text"
            maxLength={30}
          />

          <TrickDropdownSelect setNewTrick={setNewTrick} tricks={userTricks} />
        </div>
        <button
          className={styles.button}
          onClick={() => {
            updateUserTricks(
              user.uid,
              newTrick,
              stance,
              direction + " " + rotation,
              true
            );
          }}
        >
          Save
        </button>
      </div>
    </>
  );
}
