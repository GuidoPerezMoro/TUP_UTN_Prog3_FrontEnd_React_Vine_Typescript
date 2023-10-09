const Footer = () => {
  return (
    <footer className="footer bg-black">
      <div className="container">
        <div className="row">
          <div className="col-lg-6">
            <div className="footer-section">
              <h4 className="footer-heading text-white">Sobre nosotros</h4>
              <p className="footer-text text-white">Info de la compañía</p>
              <p className="footer-text">&nbsp;</p>
            </div>
          </div>
          <div className="col-lg-6">
            <div className="footer-section">
              <h4 className="footer-heading text-white">Contáctanos</h4>
              <p className="footer-text text-white">Email: elbuensabor@gmail.com</p>
              <p className="footer-text text-white">Teléfono: 1234</p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;

