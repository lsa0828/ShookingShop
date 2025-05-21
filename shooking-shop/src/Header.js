function Header({children}) {
  return (
    <header className="flex items-center h-16 bg-black px-16 sm:px-24 md:px-48 lg:px-72 xl:px-96">
      {children}
    </header>
  )
}

export default Header;