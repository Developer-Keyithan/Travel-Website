import React, {useEffect} from 'react'
import './footer.css'

import video2 from '../../Assets/footer.jpg'

import { FiSend } from "react-icons/fi";
import { MdTravelExplore } from "react-icons/md";
import { AiOutlineTwitter } from "react-icons/ai";
import { AiFillYoutube } from "react-icons/ai";
import { AiFillInstagram } from "react-icons/ai";
import { FaTripadvisor } from "react-icons/fa";
import { FiChevronRight } from "react-icons/fi";

import Aos from 'aos'
import 'aos/dist/aos.css'

const Footer = () => {
    useEffect(()=>{
        Aos.init({duration: 1000})
    },[])

    return (
        <section className="footer">
            <div className="videoDiv">
                <img src={video2}/>
            </div>

            <div className="secContent container">
                <div className="contactDiv flex">
                    <div data-aos='fade-up' className="text">
                        <small>KEEP IN TOUCH</small>
                        <h2>Travel & Tour With Us.</h2>
                    </div>

                    <div className="inputDiv flex">
                        <input data-aos='fade-up' type="text" placeholder='Enter Your Email Address'/>
                        <button data-aos='fade-up' className="btn flex" type='submit'>
                            SEND <FiSend className='icon'/>
                        </button>
                    </div>
                </div>

                <div className="footerCard flex">
                    <div className="footerIntro flex">
                        <div className="logoDiv">
                            <a href="#" className='logo flex'>
                                <MdTravelExplore className='icon'/>MATHUJANA TRAVEL & AGRICULTURE SERVICES
                            </a>
                        </div>

                        <div data-aos='fade-up' className="footerParagraph">
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit, culpa dignissimos? Quasi est molestias dolor, ipsa culpa optio corrupti iste ad fugit eos hic aperiam? Sint doloribus nesciunt eaque ipsa.
                        </div>

                        <div data-aos='fade-up' className="footerSocials flex">
                            <AiOutlineTwitter className='icon'/>
                            <AiFillYoutube className='icon'/>
                            <AiFillInstagram className='icon'/>
                            <FaTripadvisor className='icon'/>
                        </div>
                    </div>

                    <div className="footerLinks grid">
                        {/* Group One */}
                        <div data-aos='fade-up' data-aos-duration='5000' className="linkGroup">
                            <span className="groupTitle">
                                OUR AGENCY
                            </span>

                            <li className="footerList flex">
                                <FiChevronRight className='icon'/> Services
                            </li>

                            <li className="footerList flex">
                                <FiChevronRight className='icon'/> Insurance
                            </li>

                            <li className="footerList flex">
                                <FiChevronRight className='icon'/> Agency
                            </li>

                            <li className="footerList flex">
                                <FiChevronRight className='icon'/> Tourism
                            </li>

                            <li className="footerList flex">
                                <FiChevronRight className='icon'/> Payment
                            </li>
                        </div>

                        {/* Group Two */}
                        <div data-aos='fade-up' data-aos-duration='4000'  className="linkGroup">
                            <span className="groupTitle">
                                PARTNERS
                            </span>

                            <li className="footerList flex">
                                <FiChevronRight className='icon'/> Booking
                            </li>

                            <li className="footerList flex">
                                <FiChevronRight className='icon'/> Rent Vehicles
                            </li>

                            <li className="footerList flex">
                                <FiChevronRight className='icon'/> Hostel World
                            </li>

                            <li className="footerList flex">
                                <FiChevronRight className='icon'/> Trivago
                            </li>

                            <li className="footerList flex">
                                <FiChevronRight className='icon'/> Trip Advisor
                            </li>
                        </div>

                        {/* Group Three */}
                        <div data-aos='fade-up' data-aos-duration='2000'  className="linkGroup">
                            <span className="groupTitle">
                                LAST MINUTE
                            </span>

                            <li className="footerList flex">
                                <FiChevronRight className='icon'/> Colombo
                            </li>

                            <li className="footerList flex">
                                <FiChevronRight className='icon'/> Nuwara Eliya
                            </li>

                            <li className="footerList flex">
                                <FiChevronRight className='icon'/> Hatton
                            </li>

                            <li className="footerList flex">
                                <FiChevronRight className='icon'/> Galle
                            </li>

                            <li className="footerList flex">
                                <FiChevronRight className='icon'/> Badulla
                            </li>
                        </div>
                    </div>

                    <div className="footerDiv flex">
                        <small>BEST TRAVEL WEBSITE THEME</small>
                        <small>&copy; 2024 MATHUJANA TRAVEL & AGRICULTURE SERVICES. ALL RIGHTS RESERVED.</small>
                    </div>
                </div>
            </div>

        </section>
    )
}

export default Footer