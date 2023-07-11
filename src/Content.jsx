import { UsersIndex } from "./UsersIndex";

export function Content() {
  const users = [
    { id: 1, name: "Joel", image_url: "Whippy.jpg" },
    { id: 2, name: "Bimbly", image_url: "Croissant.png" },
  ];
  return (
    <div>
      <UsersIndex users={users} />
    </div>
  );
}
