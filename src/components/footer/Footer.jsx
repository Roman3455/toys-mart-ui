import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faHeart} from '@fortawesome/free-solid-svg-icons';
import "./footer.css";

const Footer = () => {
  return (
    <footer className="footer">
      Built with
      <FontAwesomeIcon
        icon={faHeart}
        className="footer-icon"
        aria-hidden="true"
      />
      by
      <a
        href="https://github.com/Roman3455"
        target="_blank"
        rel="noreferrer"
      >@Roman3455</a>
    </footer>
  );
}

export default Footer
