function Header(props) {
  return (
    <header className="h-16 bg-black flex items-center px-16 sm:px-24 md:px-48 lg:px-72 xl:px-96">
      {props.content}
    </header>
  )
}

export default Header;