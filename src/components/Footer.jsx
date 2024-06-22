const Footer = () => {
  return (
    <>
      <footer>
        <div className="footerNav">
          <h1>
            Everyshop
          </h1>

          <div className="links">
            <div>
              <h2>
                Our Policy
              </h2>
              <ul>
                <li>
                  Test
                </li>
              </ul>
            </div>

            <div>
              <h2>
                Quick Links
              </h2>
              <ul>
                <li>
                  Test
                </li>
              </ul>
            </div>
          </div>
        </div>

        <div className="credit">
          <p>This is a fictitious company</p>
          <p>
            Built by{" "}
            <a
              href="https://github.com/lucsasl"
              target="blank"
              rel="noopener noreferrer"
            >
              Lucsas
            </a>
          </p>
        </div>
      </footer>
    </>
  );
}

export default Footer