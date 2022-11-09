import {
  Container,
  Icon
} from "./FooterStyles";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons";
import { faBookmark } from '@fortawesome/free-regular-svg-icons'

const Footer = () => {
  return (
      <Container>
        <Icon>
          <a target="_blank" rel="noreferrer" href="https://www.alphavantage.co/">
            <FontAwesomeIcon icon={faBookmark} />
          </a>
        </Icon>
        <Icon>
          <a target="_blank" rel="noreferrer"  href="https:/github.com/jy-ko">
            <FontAwesomeIcon icon={faGithub} />
          </a>
        </Icon>
        <Icon>
          <a target="_blank" rel="noreferrer"  href="https://www.linkedin.com/in/jiyoung-ko/">
            <FontAwesomeIcon icon={faLinkedin} />
          </a>
        </Icon>
      </Container>
  );
};
export default Footer;
