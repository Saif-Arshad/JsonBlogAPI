
import Link from "next/link";

const menuItems = [
  {
    name: "Home",
    href: "/",
  },
  {
    name: "Documentation",
    href: "/docs",
  },
  {
    name: "GitHub",
    href: "https://github.com/Saif-Arshad/JsonBlogAPI",
    external: true,
  },
 
];

export function Header() {

  return (
    <div className="relative w-full bg-white">
      <div className="mx-auto flex max-w-7xl gap-y-5 sm:gap-0 items-center justify-center sm:justify-between flex-col sm:flex-row px-4 py-2 ">
        <div className="inline-flex items-center space-x-2">
            <Link href={'/'}>
          <span className="font-bold text-3xl">{"{ JSON }"} </span>
          </Link>
        </div>
          <ul className="  inline-flex space-x-8">
            {menuItems.map((item) => (
              <li key={item.name}>
        <Link
  href={item.href}  
  target={item.external ? "_blank" : ""}
  className="inline-flex items-center border-b-2 border-white hover:border-black font-semibold text-gray-800 hover:text-gray-900"
>
  {item.name}
</Link>
              </li>
            ))}
          </ul>

     
       
      </div>
    </div>
  );
}