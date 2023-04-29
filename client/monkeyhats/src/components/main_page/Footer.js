import "./Footer.css";
function Footer() {
  return (
    <div>
      <footer>
        <div className="page-width">
          <div className="information-footer">
            <div className="first-section">
              <div className="enlaces">
                <h3>Enlaces rapidos</h3>
                <div className="direcciones">
                  <a
                    href="https://api.whatsapp.com/send?phone=5213122105665"
                    target="_blank"
                  >
                    Contacto
                  </a>
                  <a href="#">Preguntas frecuentes</a>
                </div>
              </div>
              <div className="brand-slogan">
                <h3>Monkey hats</h3>
                <span>
                  Bienvenidos a Monkey hats nuestra tienda en línea de gorras,
                  donde encontrarás una gran selección de gorras de alta calidad
                  para todos los gustos y estilos.
                </span>
              </div>
            </div>
            <div className="social-media"></div>
          </div>
        </div>
        <div className="separate-line"></div>
        <div className="copyright-message">
          <p>&copy; Monkey Hats 2023 - Todos los derechos reservados</p>
        </div>
      </footer>
    </div>
  );
}
export default Footer;
