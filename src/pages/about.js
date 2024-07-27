import React, { useEffect } from 'react';
import { Helmet } from 'react-helmet';
import '../css/about.css';
import nipun from '../assets/nipun.png';
import laxmikant from '../assets/laxmikant.png';

const About = () => {
    useEffect(() => {
      const navLinks = document.querySelectorAll('nav ul li a');
  
      navLinks.forEach(link => {
        link.addEventListener('click', function() {
          navLinks.forEach(link => link.classList.remove('active'));
          this.classList.add('active');
        });
      });
  
      return () => {
        navLinks.forEach(link => link.removeEventListener('click', () => {}));
      };
    }, []);
  return (
    <main id="about">
        <Helmet>
          <title>Bridge Suite-About Us</title>
        </Helmet>
        <section class="mission-vision">
            <h2>We're changing the way people think about CRM</h2>
            <p>Welcome to BRIDGE, the end-to-end CRM software that redefines customer relationship management. Our tailored solution provides a unified ecosystem for managing all aspects of your customer relationships - from sales and marketing to services and satisfaction. With BRIDGE, elevate service quality, improve information flow, better manage campaigns, shorten sales cycles, and enhance productivity across your organization.</p>
            <p>Our user-friendly and adaptable software is designed to help businesses of all sizes achieve their real potential. Experience the power of BRIDGE and take your business to new heights with a holistic CRM solution that delivers results in one ecosystem. Transform the way you connect with your customers and streamline your business processes with BRIDGE.</p>
        </section>

        <section class="mission">
            <h2>Our Mission</h2>
            <p>Our mission is to simplify the complexities of customer relationship management by providing a revolutionary end-to-end CRM software that empowers businesses to connect with their customers seamlessly. We aim to enhance productivity and ensure our clients achieve their full potential by offering a unified ecosystem for all customer-related needs.</p>
        </section>

        <section class="leadership-team">
            <h2>Leadership Team</h2>
            <div class="team-member">
                <img src={nipun} alt="Nipun Dixit"/>
                <h3>Nipun Dixit</h3>
                <p>Founder of Bridge</p>
            </div>
            <div class="team-member">
                <img src={laxmikant} alt="Laxmikant Dixit"/>
                <h3>Laxmikant Dixit</h3>
                <p>Managing Director</p>
            </div>
        </section>

        <section class="company-culture">
            <h2>Our Culture</h2>
            <p>At Bridge, our culture is rooted in values that guide us toward being a high-performing team.</p>
            <p>We deeply care about our members, and by putting them first, we create a quality product that we proudly stand behind. Helpfulness is a part of our DNA, and we believe in uplifting and supporting one another. We value openness, honesty, and accountability, and we never give up when faced with challenges.</p>
            <p>We believe that everyone deserves an opportunity to thrive, and we are committed to creating an inclusive and empowering environment where all Bridge team members can excel and contribute to our culture's built on relationships, growth, and impact, and we aim to uphold the highest professional and ethical standards while fostering an environment of innovation and learning.</p>
        </section>
    </main>
  );
};

export default About;
