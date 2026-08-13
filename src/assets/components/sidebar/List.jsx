export default function List({ value, child }) {
  return (
    <li className=" hover:bg-blue-200">
      {child}
      {value}
    </li>
  );
}
