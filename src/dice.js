
import React, { useState } from "react";
import { stances, sides } from "./tricks/stances";
import { tricks } from "./tricks/tricks";
import { rotations } from "./tricks/rotations";
import styles from "./Home.module.css";

export default function Home() {
  const [stance, setStance] = useState("");
  const [side, setSide] = useState("");
  const [trick, setTrick] = useState("");
  const [rotation, setRotation] = useState("");
  const [changeTrick, handleChangeTrick] = useState(false);
  const [changeStance, handleChangeStance] = useState(false);
  const [changeRotation, handleChangeRotation] = useState(false);
  const [showHard, handleHard] = useState(false);
  const [showPro, handlePro] = useState(false);
  const [showGod, handleGod] = useState(false);

  const randomStance = () => {
    setStance(stances[Math.floor(Math.random() * stances.length)]);
  };

  const randomTrick = () => {
    let hardTricks = showHard ? tricks.hard : [];
    let proTricks = showPro ? tricks.pro : [];
    let godTricks = showGod ? tricks.god : [];
    let chosenTricks = tricks.beginner.concat(hardTricks, proTricks, godTricks);
    setTrick(
      chosenTricks[Math.floor(Math.random() * chosenTricks.length)]
    );
  };

  const randomRotation = () => {
    setRotation(rotations[Math.floor(Math.random() * rotations.length)]);
    setSide(sides[Math.floor(Math.random() * sides.length)]);
  };

  const random = () => {
    changeTrick && randomTrick();
    changeStance && randomStance();
    changeRotation && randomRotation();
  };

  return (
    <div className={styles.container}>
      <div className={styles.checkboxes}>
        <div className={styles.checkbox}>
          <input
            onClick={() => handleChangeStance(!changeStance)}
            type="checkbox"
            name="stance"
            id="stance"
            checked={changeStance}
          />
          <label className={styles.subTitle} htmlFor="stance">
            Stance
          </label>
        </div>
        <div className={styles.checkbox}>
          <input
            onClick={() => handleChangeRotation(!changeRotation)}
            type="checkbox"
            name="rotation"
            id="rotation"
            checked={changeRotation}
          />
          <label className={styles.subTitle} htmlFor="rotation">
            Rotation
          </label>
        </div>
        <div className={styles.checkbox}>
          <input
            onClick={() => handleChangeTrick(!changeTrick)}
            type="checkbox"
            name="trick"
            id="trick"
            checked={changeTrick}
          />
          <label className={styles.subTitle} htmlFor="trick">
            Trick
          </label>
        </div>
      </div>

      <div className={styles.checkboxes}>
        <div className={styles.checkbox}>
          <input
            onClick={() => handleHard(!showHard)}
            type="checkbox"
            name="hard"
            id="hard"
            checked={showHard}
          />
          <label className={styles.subTitle} htmlFor="hard">
            Hard
          </label>
        </div>
        <div className={styles.checkbox}>
          <input
            onClick={() => handlePro(!showPro)}
            type="checkbox"
            name="pro"
            id="pro"
            checked={showPro}
          />
          <label className={styles.subTitle} htmlFor="pro">
            Pro
          </label>
        </div>
        <div className={styles.checkbox}>
          <input
            onClick={() => handleGod(!showGod)}
            type="checkbox"
            name="god"
            id="god"
            checked={showGod}
          />
          <label className={styles.subTitle} htmlFor="god">
            God
          </label>
        </div>
      </div>
      <div className={styles.trick}>
        <h1 className={styles.title}>{stance}</h1>
        <h1 className={styles.title}>
          {side} {rotation}
        </h1>
        <h1 className={styles.title}></h1>
        <h1 className={styles.title}>{trick}</h1>
      </div>

      <button className={styles.button} onClick={random}>
        New Trick
      </button>
    </div>
  );
}
