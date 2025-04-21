interface Menu {
  id: string | number;
  title: string;
}

interface CategorySideBarProps {
  onClick: (title: string) => void;
  menus: Menu[];
}

function CategorySideBar({ onClick, menus }: CategorySideBarProps) {
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
              onClick={() => onClick(item.title)}
            >
              {item.title}
            </li>
          ))}
          <li className="px-2.5 py-2 text-gray-20 hover:text-white hover:cursor-pointer hover:border hover:border-gray-20 rounded-md">
            설정
          </li>
        </ul>
      </aside>
    </>
  );
}

export default CategorySideBar;
