function Footer(props) {
  return (
    <>
      <footer className="footer footer-horizontal footer-center bg-base-100 text-base-content rounded p-10">
        <nav className="grid grid-flow-col gap-4">
          <a className="underline">About us</a>
          <a className="underline">Contact</a>
          <a className="underline">Jobs</a>
        </nav>

        <aside>
          <p>
            Copyright © {new Date().getFullYear()} - All right reserved by
            VANGUARD
          </p>
        </aside>
      </footer>
    </>
  );
}

export default Footer;
