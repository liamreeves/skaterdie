import removeUserTrick from "../hooks/removeUserTrick";
import '../styles/TrickList.css';

export default function TrickList(props) {

  const trickList = props.tricks.map((trick) => {
    return (
      <li key={trick}>
        {trick}
        <button
          onClick={() => removeUserTrick(props.user.uid, trick)}
          className="remove-button"
        >
          X
        </button>
      </li>
    );
  });

  return <ul className="trick-list">{trickList}</ul>;
}

