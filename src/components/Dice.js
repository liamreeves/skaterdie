import React, { useContext, useEffect, useState } from "react";
import { stances } from "../tricks/stances";
import { tricks } from "../tricks/tricks";
import { rotations } from "../tricks/rotations";
import styles from "../styles/Home.module.css";
import updateUserTricksList from "../hooks/updateUserTricks";
import { AuthContext } from "../contexts/AuthContext";
import { getDatabase, ref, child, get } from "firebase/database";
import TrickList from "./TrickList";
import HashLoader from "react-spinners/HashLoader";
import AddTrick from "./AddTrick";

export default function Dice(props) {
  const [stance, setStance] = useState("");
  const [rotation, setRotation] = useState("");
  const [trick, setTrick] = useState("");
  const [landed, setLanded] = useState(true);
  const [fullTrickName, setFullTrickName] = useState("");
  const [changeTrick, handleChangeTrick] = useState(true);
  const [changeStance, handleChangeStance] = useState(false);
  const [changeRotation, handleChangeRotation] = useState(false);
  const [showHard, handleHard] = useState(false);
  const [showPro, handlePro] = useState(false);
  const [showGod, handleGod] = useState(false);
  const [userTricks, setUserTricks] = useState([]);

  const { user } = useContext(AuthContext);

  useEffect(() => {
    const tempTrickArray = [];
    // This effect will only run when the user context changes
    if (user) {
      const dbRef = ref(getDatabase());
      get(child(dbRef, `users/${user.uid}/tricks`))
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
                    (trickType[0]),
                      (trickRotation[0]),
                      trickOverview[0]
                  ]);
                });
              });
            });
            setUserTricks(tempTrickArray);
          } else {
            setUserTricks([]);
          }
        })
        .catch((error) => {
          console.error(error);
        });
    } else {
    }
  }, [user, userTricks]);

  useEffect(() => {
    setFullTrickName(`${stance} ${rotation} ${trick}`);
  }, [rotation, stance, trick]);

  const randomStance = () => {
    setStance(stances[Math.floor(Math.random() * stances.length)]);
  };

  const randomTrick = () => {
    let hardTricks = showHard ? tricks.hard : [];
    let proTricks = showPro ? tricks.pro : [];
    let godTricks = showGod ? tricks.god : [];
    let chosenTricks = tricks.beginner.concat(hardTricks, proTricks, godTricks);
    setTrick(chosenTricks[Math.floor(Math.random() * chosenTricks.length)]);
  };

  const randomRotation = () => {
    setRotation(rotations[Math.floor(Math.random() * rotations.length)]);
  };

  const random = () => {
    changeTrick && randomTrick();
    changeStance && randomStance();
    changeRotation && randomRotation();
  };

  return (
    <div className={styles.container}>
      <div className={styles.trickListContainer}>
        {user ? (
          <TrickList
            className={styles.trickList}
            user={user}
            tricks={userTricks}
          />
        ) : props.loading ? (
          <HashLoader
            color="#ffffff"
            loading={props.loading}
            size={50}
            aria-label="Loading Spinner"
            data-testid="loader"
          />
        ) : (
          ""
        )}
      </div>
      <div className={styles.checkboxes}>
        <div className={styles.checkbox}>
          <input
            onChange={() => handleChangeTrick(!changeTrick)}
            type="checkbox"
            name="trick"
            id="trick"
            checked={changeTrick}
          />
          <label className={styles.subTitle} htmlFor="trick">
            Trick
          </label>
        </div>
        <div className={styles.checkbox}>
          <input
            onChange={() => handleChangeStance(!changeStance)}
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
            onChange={() => handleChangeRotation(!changeRotation)}
            type="checkbox"
            name="rotation"
            id="rotation"
            checked={changeRotation}
          />
          <label className={styles.subTitle} htmlFor="rotation">
            Rotation
          </label>
        </div>
      </div>
      <div className={styles.checkboxes}>
        <div className={styles.checkbox}>
          <input
            onChange={() => handleHard(!showHard)}
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
            onChange={() => handlePro(!showPro)}
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
            onChange={() => handleGod(!showGod)}
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
      <div>
        <div className={styles.trick}>
          <h1 className={styles.title}>{stance}</h1>
          <h1 className={styles.title}>{rotation}</h1>
          <h1 className={styles.title} data-testid="trick">
            {trick}
          </h1>
        </div>
        <input
          onChange={() => setLanded(!landed)}
          type="checkbox"
          name="landed"
          id="landed"
          checked={landed}
        />
        <label className={styles.subTitle} htmlFor="landed">
          Landed?
        </label>
      </div>
      <AddTrick
        setTrick={setTrick}
        setRotation={setRotation}
        setStance={setStance}
      />
      <div>
        <button className={styles.button} onClick={random}>
          New Trick
        </button>
        {user ? (
          <button
            className={styles.button}
            onClick={() =>
              updateUserTricksList(user?.uid, trick, stance, rotation, landed)
            }
          >
            Save Trick
          </button>
        ) : (
          ""
        )}
      </div>
    </div>
  );
}
