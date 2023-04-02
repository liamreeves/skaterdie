export default function TrickList(props) {
  const trickList = props.tricks.map((trick) => {
    return <li>{trick}</li>;
  });

  return <ul>{trickList}</ul>;
}
