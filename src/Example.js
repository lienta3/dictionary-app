export default function Example(props) {
  if (props.example) {
    return (
      <div className="Synonyms">
        <strong>Example: </strong>
        <em>{props.example}</em>
      </div>
    );
  } else {
    return null;
  }
}
