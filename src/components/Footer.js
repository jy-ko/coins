import {
  Box,
  Container,
  Icon
} from "./FooterStyles";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons";
import { faBookmark } from '@fortawesome/free-regular-svg-icons'

const Footer = () => {
  return (
    <Box>
      <h1
        style={{ color: "green", textAlign: "center", marginTop: "10px" }}
      ></h1>
      <Container>
        <Icon>
          <a target="_blank" href="https://www.alphavantage.co/">
            <FontAwesomeIcon icon={faBookmark} />
          </a>
        </Icon>
        <Icon>
          <a target="_blank" href="https:/github.com/jy-ko">
            <FontAwesomeIcon icon={faGithub} />
          </a>
        </Icon>
        <Icon>
          <a target="_blank" href="https://www.linkedin.com/in/jiyoung-ko/">
            <FontAwesomeIcon icon={faLinkedin} />
          </a>
        </Icon>
      </Container>
    </Box>
  );
};
export default Footer;
