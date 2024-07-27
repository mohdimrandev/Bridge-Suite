import React,{ useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet';
import '../css/home.css';
import marketing from '../assets/marketing.png';
import sales from '../assets/sales.png';
import service_support from '../assets/service_support.png';
import integration from '../assets/integration.png';

const Home = () => {
    useEffect(() => {
      const handleNavLinkClick = (event) => {
        const navLinks = document.querySelectorAll('nav ul li a');
        navLinks.forEach(link => link.classList.remove('active'));
        event.target.classList.add('active');
      };
  
      const handleTabClick = (event) => {
        event.preventDefault();
  
        const tabs = document.querySelectorAll('.nav-link');
        const tabContents = document.querySelectorAll('.tab-pane');
        tabs.forEach(t => t.classList.remove('active'));
        tabContents.forEach(content => content.classList.remove('show', 'active'));
  
        event.target.classList.add('active');
  
        const targetId = event.target.getAttribute('href').substring(1);
        document.getElementById(targetId).classList.add('show', 'active');
      };
  
      const navLinks = document.querySelectorAll('nav ul li a');
      const tabs = document.querySelectorAll('.nav-link');
  
      navLinks.forEach(link => {
        link.addEventListener('click', handleNavLinkClick);
      });
  
      tabs.forEach(tab => {
        tab.addEventListener('click', handleTabClick);
      });
  
      return () => {
        navLinks.forEach(link => {
          link.removeEventListener('click', handleNavLinkClick);
        });
        tabs.forEach(tab => {
          tab.removeEventListener('click', handleTabClick);
        });
      };
    }, []);
  return (
    <div>
    <Helmet>
        <title>Bridge Suite-Home</title>
    </Helmet>
    <main id="home">
        <section className="bridge-intro">
                    <div className="container">
                    <div className="intro-content">
                        <h1>Automate Complete Customer Lifecycle with <span className="highlight">ONE ECOSYSTEM</span></h1>
                        <p><strong>MASSAED</strong> uses Bridge to manage complex service functions for delivering seamless customer experience in 10+ countries across Asia and Africa.</p>
                        <a href="https://www.bridgesuite.ai/free-trial.php" className="btn">START MY FREE TRIAL</a>
                    </div>
                </div>
            </section>    
        <section class="about" id="about">
            <div class="container">
                <div class="title">
                    <h1>Discover what Bridge can do for you</h1>
                </div>
                <div class="row">
                    <div class="col">
                        <div class="box text-center">
                            <h4>Marketing</h4>
                            <img src={marketing} alt="Nipun Dixit"/>
                            <p>Focus on the best leads</p>
                            <Link to="/contact" className="btn">LEARN MORE</Link>
                        </div>
                    </div>
                    <div class="col">
                        <div class="box text-center">
                            <h4>Sales</h4>
                            <img src={sales} alt="Nipun Dixit"/>  
                            <p>Break new sales records</p>
                            <Link to="/contact" className="btn">LEARN MORE</Link>
                        </div>
                    </div>
                    <div class="col">
                        <div class="box text-center">
                            <h4>Service Support</h4>
                            <img src={service_support} alt="Nipun Dixit"/>
                            <p>Make your customer satisfied</p>
                            <Link to="/contact" className="btn">LEARN MORE</Link>
                        </div>
                    </div>
                    <div class="col">
                        <div class="box text-center">
                            <h4>Integration</h4>
                            <img src={integration} alt="Nipun Dixit"/>
                            <p>More visibility with ERP integration</p>
                            <Link to="/contact" className="btn">LEARN MORE</Link>
                        </div>
                    </div>
                </div>
            </div>
        </section>

        <section class="hero bg-gray mt-2 pb-7 pt-9">
            <div class="text-center">
                <h1>Everything Your Business Needs in One Place</h1>
                <p>Bring Sale, Marketing, Support, and ERP together to streamline business processes within a single platform.</p>
            </div>
            <div class="sticky-notes mt-8">
                <div class="container py-8 sticky-bg">
                    <ul class="sticky-list p-0">
                        <li class="note yellow">
                            <div class="card">
                                <h2>Vista</h2>
                                <p>Elevate business with World-Class Solutions for remarkable Sales Growth.</p>
                            </div>
                        </li>
                        <li class="note">
                            <div class="card">
                                <h2>Serve</h2>
                                <p>Hassle-free Support platform for Optimized Customer service experience.</p>
                            </div>
                        </li>
                        <li class="note lazur">
                            <div class="card">
                                <h2>Omni</h2>
                                <p>Tailored Billing Solutions for efficient Accounts analytics anywhere, anytime.</p>
                            </div>
                        </li>
                        <li class="note green">
                            <div class="card">
                                <h2>Nexus</h2>
                                <p>Your Next-Gen Contact Sharing for seamless Digital Networking.</p>
                            </div>
                        </li>
                        <li class="note red">
                            <div class="card">
                                <h2>Pulse</h2>
                                <p>Get effortless Shopping with Integrated Browse and responsive Support System.</p>
                            </div>
                        </li>
                        <li class="note purple">
                            <div class="card">
                                <h2>Drive</h2>
                                <p>Optimized Delivery Operations from assignment to Real-Time Tracking.</p>
                            </div>
                        </li>
                        <li class="note navy">
                            <div class="card">
                                <h2>Dealer Management</h2>
                                <p>Elevate Customer Engagement with personalized Interactions and Growth.</p>
                            </div>
                        </li>
                        <li class="note">
                            <div class="card">
                                <h2>Galaxy</h2>
                                <p>Revolutionize the Sales Process for effective Customer Management and Growth.</p>
                            </div>
                        </li>
                    </ul>
                </div>
            </div>
        </section>

        <section class="pricing">
            <h2>Streamline Sales Cycle with Tailored Plans for Your Business</h2>
            <div class="container">
                <ul class="nav nav-pills mb-3" id="pills-tab" role="tablist">
                    <li class="nav-item" role="presentation">
                        <a class="nav-link active" id="pills-vista-tab" data-bs-toggle="pill" href="#pills-vista" role="tab" aria-controls="pills-vista" aria-selected="true">Vista</a>
                    </li>
                    <li class="nav-item" role="presentation">
                        <a class="nav-link" id="pills-serve-tab" data-bs-toggle="pill" href="#pills-serve" role="tab" aria-controls="pills-serve" aria-selected="false">Serve</a>
                    </li>
                </ul>
                <div class="tab-content" id="pills-tabContent">
                    <div class="tab-pane fade show active" id="pills-vista" role="tabpanel" aria-labelledby="pills-vista-tab">
                        <div id="carouselVista" class="carousel slide" data-bs-ride="carousel" data-bs-interval="false">
                            <div class="carousel-inner">
                                <div class="carousel-item active">
                                    <div class="container">
                                        <div class="row">
                                            <div class="col-md-4 col-sm-6">
                                                <div class="pricingTable">
                                                    <div class="pricingTable-header">
                                                        <h3 class="title">Standard</h3>
                                                    </div>
                                                    <div class="price-value">
                                                        <span class="amount">₹ 699/user</span>
                                                    </div>
                                                    <ul class="pricing-content">
                                                        <li>1 GB Data/User</li>
                                                        <li>Lead, Opportunity, Business Partner</li>
                                                        <li>Order, Invoices, Delivery, Quotation</li>
                                                        <li>Payment Collection</li>
                                                        <li>Target Assignment</li>
                                                        <li>Dashboard, Reports: 20</li>
                                                        <li>Calendar</li>
                                                        <li>No minimum users</li>
                                                    </ul>
                                                </div>
                                            </div>
                                            <div class="col-md-4 col-sm-6">
                                                <div class="pricingTable green">
                                                    <div class="pricingTable-header">
                                                        <h3 class="title">Premium</h3>
                                                    </div>
                                                    <div class="price-value">
                                                        <span class="amount">₹ 899/User</span>
                                                    </div>
                                                    <ul class="pricing-content">
                                                        <li>Everything in Standard</li>
                                                        <li>Expense</li>
                                                        <li>Reports: 40, Map Tracking</li>
                                                        <li>3 Any Integrations</li>
                                                        <li>Campaign Management</li>
                                                        <li>40 Hours of Free Implementation</li>
                                                        <li>VoIP Service</li>
                                                        <li>Logo and color customization</li>
                                                        <li>Minimum 10 users</li>
                                                    </ul>
                                                </div>
                                            </div>
                                            <div class="col-md-4 col-sm-6">
                                                <div class="pricingTable blue">
                                                    <div class="pricingTable-header">
                                                        <h3 class="title">Enterprise</h3>
                                                    </div>
                                                    <div class="price-value">
                                                        <span class="amount">Contact Sales</span>
                                                    </div>
                                                    <ul class="pricing-content">
                                                        <li>Everything in Premium</li>
                                                        <li>Custom Module Development</li>
                                                        <li>Advanced CRM Customization</li>
                                                        <li>Priority Support</li>
                                                        <li>Unlimited Integrations</li>
                                                        <li>24/7 Dedicated Support</li>
                                                    </ul>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="tab-pane fade" id="pills-serve" role="tabpanel" aria-labelledby="pills-serve-tab">
                        <div id="carouselServe" class="carousel slide" data-bs-ride="carousel" data-bs-interval="false">
                            <div class="carousel-inner">
                                <div class="carousel-item active">
                                    <div class="container">
                                        <div class="row">
                                            <div class="col-md-4 col-sm-6">
                                                <div class="pricingTable">
                                                    <div class="pricingTable-header">
                                                        <h3 class="title">Basic</h3>
                                                    </div>
                                                    <div class="price-value">
                                                        <span class="amount">₹ 599/user</span>
                                                    </div>
                                                    <ul class="pricing-content">
                                                        <li>500 MB Data/User</li>
                                                        <li>Leads Management</li>
                                                        <li>Invoices and Quotations</li>
                                                        <li>Payment Tracking</li>
                                                        <li>Basic Dashboard</li>
                                                        <li>Reports: 10</li>
                                                    </ul>
                                                </div>
                                            </div>
                                            <div class="col-md-4 col-sm-6">
                                                <div class="pricingTable green">
                                                    <div class="pricingTable-header">
                                                        <h3 class="title">Advanced</h3>
                                                    </div>
                                                    <div class="price-value">
                                                        <span class="amount">₹ 799/User</span>
                                                    </div>
                                                    <ul class="pricing-content">
                                                        <li>Everything in Basic</li>
                                                        <li>Campaign Management</li>
                                                        <li>Advanced Reporting</li>
                                                        <li>2 Any Integrations</li>
                                                        <li>Advanced Dashboard</li>
                                                    </ul>
                                                </div>
                                            </div>
                                            <div class="col-md-4 col-sm-6">
                                                <div class="pricingTable blue">
                                                    <div class="pricingTable-header">
                                                        <h3 class="title">Enterprise Plus</h3>
                                                    </div>
                                                    <div class="price-value">
                                                        <span class="amount">Contact Sales</span>
                                                    </div>
                                                    <ul class="pricing-content">
                                                        <li>Everything in Advanced</li>
                                                        <li>Custom Integrations</li>
                                                        <li>Full CRM Customization</li>
                                                        <li>Advanced Analytics</li>
                                                        <li>Personalized Support</li>
                                                    </ul>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    </main>
    </div>
  );
};

export default Home;
