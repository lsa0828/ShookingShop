import { useNavigate } from "react-router-dom";

function Header({children}) {
  const navigate = useNavigate();
  return (
    <div>
      <header className="h-14 bg-black flex items-center justify-center">
        <button className="text-white font-bold text-2xl font-playfair"
          onClick={() => navigate('/')}>
          Shooking Shop
        </button>
      </header>
      <header className="flex items-center h-16 bg-black px-16 480:px-8 sm:px-24 md:px-48 lg:px-72 xl:px-96">
        {children}
      </header>
    </div>
  )
}

export default Header;