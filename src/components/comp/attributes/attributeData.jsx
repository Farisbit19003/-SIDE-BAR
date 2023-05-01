import { BiEdit, BiTrash } from "react-icons/bi";

export const Headings = ["ID", "Name", "Values", "Actions"];
export const AttributesData = [
  {
    Id: 1,
    Name: "colour",
    Values: "Red Blue Yellow",
    Action: [<BiTrash size={25} color="red" />, <BiEdit size={25} />],
  },
  {
    Id: 1,
    Name: "sizes",
    Values: "sm xs md lg xl",
    Action: [<BiTrash size={25} color="red" />, <BiEdit size={25} />],
  },
  {
    Id: 1,
    Name: "colour",
    Values: "Red Blue Yellow",
    Action: [<BiTrash size={25} color="red" />, <BiEdit size={25} />],
  },
  {
    Id: 1,
    Name: "sizes",
    Values: "sm xs md lg xl",
    Action: [<BiTrash size={25} color="red" />, <BiEdit size={25} />],
  },
];
