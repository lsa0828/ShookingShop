import { TbShoppingBag } from "react-icons/tb";

function Header() {
  return (
    <header className="h-16 bg-black flex items-center pr-16">
      <div className="relative w-fit ml-auto">
        <TbShoppingBag className="text-3xl text-white" />
        <div className="absolute -bottom-1 -right-2 bg-white text-black text-xs font-semibold w-5 h-5 rounded-full flex items-center justify-center">
          3
        </div>
      </div>
    </header>
  )
}

export default Header;