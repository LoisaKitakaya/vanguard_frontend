import { Toaster } from "solid-toast";
import Navbar from "./components/navbar";
import Footer from "./components/footer";
import { onMount } from "solid-js";

function App(props) {
  function setTheme(t) {
    document.documentElement.setAttribute("data-theme", t);

    localStorage.setItem("theme", t);
  }

  onMount(() => {
    const saved = localStorage.getItem("theme") || "light";

    setTheme(saved);
  });

  return (
    <>
      <div className="background">
        <Navbar />

        {props.children}

        <Footer />

        <Toaster />
      </div>
    </>
  );
}

export default App;
