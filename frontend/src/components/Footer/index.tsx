import { IoLogoWhatsapp } from 'react-icons/io5';
import { IoMailOutline } from 'react-icons/io5';
import { IoMapOutline } from 'react-icons/io5';
import './styles.css';

export default function Footer() {
    return (
        <footer className="footer-container">
            <h3 className="footer-title">Entre em contato</h3>
            <div className="footer-separator">
                <div className="footer-info">
                    <h3>Entre em contato</h3>
                    <ul>
                        <li>
                            <IoLogoWhatsapp />
                            (47) 3801-4163
                        </li>
                        <li>
                            <IoMailOutline />
                            secretaria@familiaesperanca.com.br
                        </li>
                        <li>
                            <IoMapOutline />
                            Família Esperança | Sede: Dona Francisca, 3114 -
                            Saguaçu
                        </li>
                    </ul>
                </div>
                <div className="footer-map">
                    <iframe
                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1228.830358185418!2d-48.846373506417!3d-26.27783622499856!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94deafd69319a03b%3A0xb3b9cfb2076d8be0!2sR.%20Dona%20Francisca%2C%203114%20-%20Sagua%C3%A7u%2C%20Joinville%20-%20SC%2C%2089221-008!5e0!3m2!1spt-PT!2sbr!4v1746204368326!5m2!1spt-PT!2sbr"
                        loading="lazy"
                        referrerPolicy="no-referrer-when-downgrade"
                        title="Google Maps"
                    ></iframe>
                </div>
            </div>
        </footer>
    );
}
