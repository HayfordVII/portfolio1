import Link from "next/link";

const About = () => {
    return (
        <div id="about">
            <div className="about-content">
                <div className="about_summary">
                    <p>Hi, my name name is Bright Hayford.</p>
                    <p>Over the past three years, I have worked as a freelancer creating visually appealing sites for clients.</p>
                    <p>I lead the process from the clients briefing to the full launch of the website, attracting new customers with proven design methods.</p>
                    <p>I offer the following services:</p>    
                </div>
                    <div className="service-list">
                        <Link href={""}><a><p>Website Dev</p></a></Link>
                        <Link href={""}><a><p>UI/UX Design</p></a></Link>
                        <Link href={""}><a><p>Motion Graphics</p></a></Link>
                        <Link href={""}><a><p>3D Design</p></a></Link>                
                    </div>

                    
                    
                
                    <p className="about_contacts">brighthfrd@gmail.com</p>
                    <p className="about_contacts">+233 55 702 3397</p>

            </div>
        </div>
    );
}
 
export default About;