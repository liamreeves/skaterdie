import removeUserTrick from "../hooks/removeUserTrick";
import "../styles/TrickList.css";

type Props = {
  tricks: string[][],
  user: {uid: string},
}

export default function TrickList({tricks, user}:Props) {
  const trickList = tricks.map((trick) => {
    return (
      <li key={trick.join()}>
        {trick[0] === "Regular"
          ? (trick[1] === "Regular"
            ? trick[2]
            : trick[1] + " " + trick[2])
          : trick[1] === "Regular" ? (trick[0] + " "  + trick[2]): trick.join(" ")}
        <button
          onClick={() =>
            removeUserTrick(user.uid, trick[0], trick[1], trick[2])
          }
          className="remove-button"
        >
          X
        </button>
      </li>
    );
  });

  return <ul className="trick-list">{trickList}</ul>;
}
