import { Instagram, Twitter, Mail } from "@mui/icons-material";
import Link from "next/link";


const Footer = () => {
    return (
        <div id="footer">
            <Link href={""}><a><Twitter className="socials"/></a></Link>
            <Link href={""}><a><Instagram className="socials"/></a></Link>
            <Link href={""}><a><Mail className="socials"/></a></Link>
        </div>        
    );
}
 
export default Footer;