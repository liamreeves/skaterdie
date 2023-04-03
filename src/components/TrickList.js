export default function TrickList(props) {
  const trickList = props.tricks.map((trick) => {
    return <li key={trick}>{trick}</li>;
  });

  return <ul>{trickList}</ul>;
}
