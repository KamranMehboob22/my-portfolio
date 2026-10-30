const Header = () => {
  return (
    <nav className="header">
      {/* 1. Logo First */}
      <div className="logo">
        <p>Kamran Mehboob</p>
      </div>

      {/* 2. Links Second */}
      <div className="nav-links">
        <ul>
          <li><a href="#home">Home</a></li>
          <li><a href="#skills">Skills</a></li>
          <li><a href="#projects">Projects</a></li>
          <li><a href="#contact">Contact</a></li>
        </ul>
      </div>
    </nav>
  )
}

export default Header;