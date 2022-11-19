import Link from "next/link";
import styles from '../styles/Home.module.css'
// const hamburger = () => {
//     this.classList.toggle('is-active');
// }

// hamburger.addEventListener('click', function () {
//   
// });

const Navbar = () => {
    return (
        <div id="navbar">
            <Link href={'/'}><p className="banner">BRIGHT HAYFORD</p></Link>
            <div className="menu">
                <Link href={'/about'} className="food"><p className="links about_link">ABOUT</p></Link>
                <Link href={'/services'}><p className="links service_link">SERVICES</p></Link>
                <Link href={'/work'}><p className="links">WORK</p></Link>
                <Link href={'/contact'}><p className="links">CONTACT</p></Link>
            </div>
            
            <button className="hamburger">
                <span></span>
                <span></span>
                <span></span>
            </button>
        </div>
    );
}
 
export default Navbar;