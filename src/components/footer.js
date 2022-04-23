import React from 'react';

const Footer = () => {
    return (
        <div className="footer bg-dark text-light p-2" >
            <h4 className="credit">. . . Made with <i className='bx bxs-heart bx-burst' style={{ color: "#e23b64" }}></i> by Mr.Nishant Rajput . . .</h4>
            <div className="footer-container">
                <div className='foo-box'>
                    <h1>NEWS4Y<i className='bx bx-analyse bx-spin' style={{ color: "#41ff07" }}></i>U </h1>
                    <p>lorem The world The deal announced in October involved Reliance Industries wholly owned arm Reliance New E...is transforming and so are our investment choices. Previously, the investment </p>
                </div>
                <div className=" foo-box socials" >
                    <h3>Socials <i class="fas fa-user-tie"></i></h3>
                    <a href="https://www.facebook.com/profile.php?id=100018164203660"><i className="fab fa-facebook-square" style={{ color: "#059fff" }}></i>FACEBOOK</a>
                    <a href="https://www.instagram.com/being_sarcastic_14/"><i className="fab fa-instagram" style={{ color: "#f53657" }}></i>INSTAGRAM</a>
                    <a href="https://twitter.com/ismart_Nishant?s=09"><i className="fab fa-twitter-square" style={{ color: "#39d7f7" }}></i>TWITTER</a>
                    <a href="https://www.youtube.com/channel/UCyPK-B4DU7j7TwFb90_I8pQ"><i className="fab fa-youtube" style={{ color: "red" }}></i>YOUTUBE</a>
                </div>
                <div className="foo-box contact-info" >
                    <h3>Contact Info <i class="fas fa-paper-plane"></i></h3>
                    <ul className='p-0'>
                        <li><i className="fas fa-envelope" style={{ color: "#f32553" }}></i>nishantrajputa11@gmail.com</li>
                        <li><i className="fas fa-phone-alt" style={{ color: "#39d7f7" }}></i>+91 7218566898</li>
                        <li><i className="fas fa-map-marker-alt" style={{ color: "#05e355" }}></i>Akurdi Pune 411033</li>
                        <li><i className="fas fa-address-book" style={{ color: "#9c71ff" }}></i>About Us</li>
                    </ul>
                </div>
                <p className='copyright'> 2022 NEWS4YOU. &#169; Copyright All rights reserved</p>
            </div>
            <p className="terms p-0 m-0" style={{ color: "#777" }}> Terms of Use || Privacy Policy</p>
        </div>
    )
}
export default Footer;