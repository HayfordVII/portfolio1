import Link from "next/link";

const Navbar = () => {
    return (
        <div id="navbar">
            <p>BRIGHT HAYFORD</p>
            <div className="menu">
                <Link href={'/about'}><p>ABOUT</p></Link>
                <Link href={'/services'}><p>SERVICES</p></Link>
                <Link href={'/work'}><p>WORK</p></Link>
                <Link href={'/contact'}><p>CONTACT</p></Link>
            </div>
            
        </div>
    );
}
 
export default Navbar;