import { SocialIcon } from "react-social-icons";

function Footer() {
    return (

        <footer>

            <div className="socials">

                <div>
                    <SocialIcon
                        url="https://www.linkedin.com/in/zechariah-naitram-5179aa250/"
                        target="_blank"
                    />
                </div>

                <div>
                    <SocialIcon
                        url="https://github.com/Zechariahmn"
                        target="_blank"
                    />
                </div>

            </div>

        </footer>

    );
}

export default Footer;