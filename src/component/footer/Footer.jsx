const Footer = () => {
    return (
      <div className="foote bg-base-200 mt-8 ">
        <footer className="flex flex-col md:flex-row items-start  md:items-center md:justify-between md:w-4/5 px-2 md:px-0 md:mx-auto pt-10 bg-base-200 text-base-content">
          <aside>
            <h1 className="text-5xl mb-2">CareerHub</h1>
            <p>
              ACME Industries Ltd.
              <br />
              Providing reliable tech since 1992
            </p>
          </aside>
          <nav className="flex flex-col">
            <header className="footer-title">Services</header>
            <a className="link link-hover">Design</a>
            <a className="link link-hover">Branding</a>
            <a className="link link-hover">Marketing</a>
            <a className="link link-hover">Advertisement</a>
          </nav>
          <nav className="flex flex-col">
            <header className="footer-title">Company</header>
            <a className="link link-hover">Jobs</a>
            <a className="link link-hover">Contact</a>
            <a className="link link-hover">Press kit</a>
            <a className="link link-hover">About us</a>
          </nav>
          <nav className="flex flex-col">
            <header className="footer-title">Legal</header>
            <a className="link link-hover">Terms of use</a>
            <a className="link link-hover">Privacy policy</a>
            <a className="link link-hover">Cookie policy</a>
          </nav>
        </footer>
        <p className="text-center text-sm pt-3 pb-1 px-2 md:px-0 ">All rights reserved by <a href=""> Ariyan Rahman Anas</a> || CopyRights-2023 </p>
      </div>
    );
};
export default Footer;