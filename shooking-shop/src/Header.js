function Header(props) {
  return (
    <header className="h-16 bg-black flex items-center px-16">
      {props.content}
    </header>
  )
}

export default Header;