export default function Example(props) {
  if (props.example) {
    return `"${props.example}"`;
  } else {
    return null;
  }
}
