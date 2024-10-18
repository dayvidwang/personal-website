
const navItems = {
  '#about': {
    name: 'about',
  },
  '#experience': {
    name: 'experience',
  },
  '#research': {
    name: 'research',
  },
}

export function Navbar() {
  return (
    <nav className="fixed top-0 left-0 right-0 bg-white dark:bg-black shadow-md z-10">
      <div className="max-w-xl mx-auto px-4 py-2 flex items-center justify-between">
        <div className="flex space-x-4">
          {Object.entries(navItems).map(([path, { name }]) => {
            return (
              <a
                key={path}
                href={path}
                className="transition-all hover:text-neutral-800 dark:hover:text-neutral-200"
              >
                {name}
              </a>
            )
          })}
        </div>
      </div>
    </nav>
  )
}
