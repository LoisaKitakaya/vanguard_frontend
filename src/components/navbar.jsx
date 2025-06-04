import { createSignal } from "solid-js";
import logo_dark from "../public/logo_dark_theme_sm.png";
import logo_light from "../public/logo_light_theme_sm.png";

function Navbar(porps) {
  const [theme, setThemeSignal] = createSignal("light");

  function setTheme(t) {
    document.documentElement.setAttribute("data-theme", t);

    localStorage.setItem("theme", t);
  }

  function toggleTheme() {
    const newTheme = theme() === "light" ? "dark" : "light";

    setTheme(newTheme);

    setThemeSignal(newTheme);
  }

  return (
    <>
      <div className="navbar bg-base-100 w-full">
        <div className="navbar-start">
          {/* <a href="/#cta" className="block lg:hidden">
            <img
              src={theme() === "light" ? logo_light : logo_dark}
              alt="logo"
              className="w-3/5 mx-auto"
            />
          </a> */}
        </div>
        <div className="navbar-center">
          {/* <a href="/#cta" className="hidden lg:block">
            <img
              src={theme() === "light" ? logo_light : logo_dark}
              alt="logo"
              className="w-1/5 mx-auto"
            />
          </a> */}
        </div>
        <div className="navbar-end">
          <label className="flex cursor-pointer gap-2">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="20"
              height="20"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <circle cx="12" cy="12" r="5" />
              <path d="M12 1v2M12 21v2M4.2 4.2l1.4 1.4M18.4 18.4l1.4 1.4M1 12h2M21 12h2M4.2 19.8l1.4-1.4M18.4 5.6l1.4-1.4" />
            </svg>
            <input
              type="checkbox"
              value="synthwave"
              className="toggle theme-controller"
              onClick={toggleTheme}
            />
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="20"
              height="20"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"></path>
            </svg>
          </label>
        </div>
      </div>
    </>
  );
}

export default Navbar;
