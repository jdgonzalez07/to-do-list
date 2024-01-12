
import '../Footer/footer.css'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub , faInstagram, faTwitter } from "@fortawesome/free-brands-svg-icons";


function Footer() {
  return (
    <footer className="footer">
    <div className="footer-contact">
      <ul>
        <li>
          <a href="https://github.com/jdgonzalez07" target='_blank' rel='noreferrer'>
          <FontAwesomeIcon icon={faGithub}  />
          </a>
        </li>
        <li>
          <a href="https://www.instagram.com/solutions_jd7/" target='_blank' rel='noreferrer'>
          <FontAwesomeIcon icon={faInstagram}  />
          </a>
        </li>
        <li>
          <a href="https://twitter.com/" target='_blank' rel="noreferrer" >
          <FontAwesomeIcon icon={faTwitter} />
          </a>
        </li>
      </ul>
      <p>&copy; 2024 JD Solutions. All rights reserved.</p>
    </div>
  </footer>
  )
}

export default Footer