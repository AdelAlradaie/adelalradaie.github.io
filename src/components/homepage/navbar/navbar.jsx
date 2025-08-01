

function Navbar() {
  return (
    <nav className="bg-transparent">
      <div className="flex items-center justify-between py-5">
        <div className="flex flex-shrink-0 items-center">
          <a
            href="/"
            className="text-[#1da1f2] text-3xl font-bold"
          >
            Adel Alradaie
          </a>
        </div>

        <ul
          className="mt-4 flex h-screen max-h-0 w-full flex-col items-start text-sm opacity-0
          md:mt-0 md:h-auto md:max-h-screen md:w-auto md:flex-row md:space-x-1 md:border-0 md:opacity-100"
          id="navbar-default"
        >
          {[
            { to: "/#about", label: "ABOUT" },
            { to: "/#experience", label: "EXPERIENCE" },
            { to: "/#skills", label: "SKILLS" },
            { to: "/#education", label: "EDUCATION" },
            { to: "/#projects", label: "PROJECTS" },
          ].map(({ to, label }) => (
            <li key={label}>
              <a
                className="block px-4 py-2 no-underline outline-none hover:no-underline"
                href={to}
              
              >
                <div className="text-sm text-white transition-colors duration-300 hover:text-[#7c6ff9]">
                  {label}
                </div>
              </a>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;