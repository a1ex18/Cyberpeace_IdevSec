import { NavLink } from "react-router-dom";

const Navbar = () => {
  const linkClass = ({ isActive }: { isActive: boolean }) =>
    `text-sm font-semibold transition ${isActive ? "text-navy-900" : "text-navy-700 hover:text-navy-900"}`;

  return (
    <header className="border-b border-gray-200 bg-white">
      <div className="mx-auto flex w-full max-w-7xl items-center justify-between px-4 py-4 sm:px-6 lg:px-8">
        <div className="flex items-center gap-3">
          <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-navy-900 text-white">
            CS
          </div>
          <div>
            <p className="text-sm font-semibold text-navy-900">CyberShield AI</p>
            <p className="text-xs text-navy-700">Cybercrime Reporting Intelligence</p>
          </div>
        </div>
        <nav className="flex items-center gap-6">
          <NavLink className={linkClass} to="/">
            Home
          </NavLink>
          <NavLink className={linkClass} to="/file-complaint">
            File Complaint
          </NavLink>
          <NavLink className={linkClass} to="/track-complaint">
            Track Complaint
          </NavLink>
          <NavLink className={linkClass} to="/admin">
            Admin Dashboard
          </NavLink>
        </nav>
      </div>
    </header>
  );
};

export default Navbar;
