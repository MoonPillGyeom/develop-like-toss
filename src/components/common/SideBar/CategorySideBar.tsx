import { useEffect, useState } from "react";
type Item = { id: number; title: string };
function CategorySideBar() {
  const [menus, setMenus] = useState<Array<Item>>([]);

  useEffect(() => {
    fetch("/api/sideBar")
      .then((res) => res.json())
      .then(setMenus);
  }, []);
  console.log(menus);
  return (
    <>
      {/* <aside className="w-full"> */}
      <aside className="w-[220px]">
        <p>카테고리</p>
        <ul>
          {menus.map((item, i) => (
            <li
              key={i}
              className="px-2.5 py-2 text-gray-20 hover:text-white hover:cursor-pointer hover:border hover:border-gray-20 rounded-md"
            >
              {item.title}
            </li>
          ))}
        </ul>
      </aside>
    </>
  );
}

export default CategorySideBar;
