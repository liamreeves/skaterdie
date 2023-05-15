import { useState } from "react";
import styles from "../styles/Home.module.css";

export default function AddTrick(props) {
  const [newTrick, setNewTrick] = useState("");
  const [rotation, setRotation] = useState("");
  const [direction, setDirection] = useState("");
  const [stance, setStance] = useState("");
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
        </div>
        <button
          className={styles.button}
          onClick={() => {
            props.setTrick(newTrick);
            props.setRotation(rotation);
            props.setStance(stance);
          }}
        >
          Submit
        </button>
      </div>
    </>
  );
}
