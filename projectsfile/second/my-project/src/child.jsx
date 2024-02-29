export default function Child (props) {
    console.log(props);
  return (
    <div>
        <span>{props.na}</span>
        <span>{-props.age}</span>
    </div>
  )
}
