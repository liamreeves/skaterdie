import removeUserTrick from "../hooks/removeUserTrick";
import "../styles/TrickList.css";

export default function TrickList(props) {
  const trickList = props.tricks.map((trick) => {
    //console.log(trick.split(" "))
    return (
      <li key={trick}>
        {trick[0] === "Regular"
          ? (trick[1] === "Regular"
            ? trick[2]
            : trick[1] + " " + trick[2])
          : trick[1] === "Regular" ? (trick[0] + " "  + trick[2]): trick.join(" ")}
        <button
          onClick={() =>
            removeUserTrick(props.user.uid, trick[0], trick[1], trick[2])
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
