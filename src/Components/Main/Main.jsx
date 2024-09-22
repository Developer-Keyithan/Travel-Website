import React, {useEffect} from 'react'
import './main.css'

//import icons
import { HiOutlineLocationMarker } from "react-icons/hi";
import { HiOutlineClipboardCheck } from "react-icons/hi";

//import images
import img1 from '../../Assets/img1.jpg'
import img2 from '../../Assets/img2.jpg'
import img3 from '../../Assets/img3.jpg'
import img4 from '../../Assets/img4.jpg'
import img5 from '../../Assets/img5.jpg'
import img6 from '../../Assets/img6.jpg'
import img7 from '../../Assets/img7.jpg'
import img8 from '../../Assets/img8.jpg'
import img9 from '../../Assets/img9.jpg'
import img10 from '../../Assets/img10.jpg'
import img11 from '../../Assets/img11.jpg'
import img12 from '../../Assets/img12.jpg'

import Aos from 'aos'
import 'aos/dist/aos.css'

const Data = [
    {
    id:1,
    imgSrc: img1,
    destTitle:'Sigiriya (Lion Rock)',
    location: 'Matale District',
    grade: 'ARCHITECTURAL WONDER',
    fees:'Rs.3,000/=',
    description:'Sigiriya is a large rock fortress in Sri Lanka, built by King Kashyapa in the 5th century. It has a palace on top, gardens, and paintings on the rock. At the base, there are giant lion’s paws, which is why it’s called "Lion Rock." Now, it is a famous tourist spot and a UNESCO World Heritage site.'
    },
    
    {
    id:2,
    imgSrc: img2,
    destTitle:'Bora Bora',
    location: 'Kandy',
    grade:'CULTURAL RELAX',
    fees:'Rs.35,000/=',
    description:'The epitome of romance, Bora  Bora is one of the best travel destinations in the world. This place is known for its luxurious stays and adventurous activities.'
    },

    {
    id:3,
    imgSrc: img3,
    destTitle:'Bora Bora',
    location: 'Kandy',
    grade:'CULTURAL RELAX',
    fees:'Rs.35,000/=',
    description:'The epitome of romance, Bora  Bora is one of the best travel destinations in the world. This place is known for its luxurious stays and adventurous activities.'
    },

    {
    id:4,
    imgSrc: img4,
    destTitle:'Bora Bora',
    location: 'Kandy',
    grade:'CULTURAL RELAX',
    fees:'Rs.35,000/=',
    description:'The epitome of romance, Bora  Bora is one of the best travel destinations in the world. This place is known for its luxurious stays and adventurous activities.'
    },

    {
    id:5,
    imgSrc: img5,
    destTitle:'Bora Bora',
    location: 'Kandy',
    grade:'CULTURAL RELAX',
    fees:'Rs.35,000/=',
    description:'The epitome of romance, Bora  Bora is one of the best travel destinations in the world. This place is known for its luxurious stays and adventurous activities.'
    },

    {
    id:6,
    imgSrc: img6,
    destTitle:'Bora Bora',
    location: 'Kandy',
    grade:'CULTURAL RELAX',
    fees:'Rs.35,000/=',
    description:'The epitome of romance, Bora  Bora is one of the best travel destinations in the world. This place is known for its luxurious stays and adventurous activities.'
    },

    {
    id:7,
    imgSrc: img7,
    destTitle:'Bora Bora',
    location: 'Kandy',
    grade:'CULTURAL RELAX',
    fees:'Rs.35,000/=',
    description:'The epitome of romance, Bora  Bora is one of the best travel destinations in the world. This place is known for its luxurious stays and adventurous activities.'
    },

    {
    id:8,
    imgSrc: img8,
    destTitle:'Bora Bora',
    location: 'Kandy',
    grade:'CULTURAL RELAX',
    fees:'Rs.35,000/=',
    description:'The epitome of romance, Bora  Bora is one of the best travel destinations in the world. This place is known for its luxurious stays and adventurous activities.'
    },

    {
    id:9,
    imgSrc: img9,
    destTitle:'Bora Bora',
    location: 'Kandy',
    grade:'CULTURAL RELAX',
    fees:'Rs.35,000/=',
    description:'The epitome of romance, Bora  Bora is one of the best travel destinations in the world. This place is known for its luxurious stays and adventurous activities.'
    },
    
    {
    id:10,
    imgSrc: img10,
    destTitle:'Bora Bora',
    location: 'Kandy',
    grade:'CULTURAL RELAX',
    fees:'Rs.35,000/=',
    description:'The epitome of romance, Bora  Bora is one of the best travel destinations in the world. This place is known for its luxurious stays and adventurous activities.'
    },

    {
    id:11,
    imgSrc: img11,
    destTitle:'Bora Bora',
    location: 'Kandy',
    grade:'CULTURAL RELAX',
    fees:'Rs.35,000/=',
    description:'The epitome of romance, Bora  Bora is one of the best travel destinations in the world. This place is known for its luxurious stays and adventurous activities.'
    },

    {
    id:12,
    imgSrc: img12,
    destTitle:'Bora Bora',
    location: 'Kandy',
    grade:'CULTURAL RELAX',
    fees:'Rs.35,000/=',
    description:'The epitome of romance, Bora  Bora is one of the best travel destinations in the world. This place is known for its luxurious stays and adventurous activities.'
    }
]

const Main = () => {
    useEffect(()=>{
        Aos.init({duration: 500})
    },[])

    return (
        <section className="main container section">
            <div className="secTitle">
                <h3 data-aos='fade-right' className="title">
                    Most visited destinations
                </h3>
            </div>

            <div className="secContent grid">
                {
                    Data.map(({id, imgSrc, destTitle, location, grade, fees, description})=>{
                        return (
                            <div key={id} data-aos='fade-up' className="singleDestination">
                                <div className="imageDiv">
                                    <img src={imgSrc} alt={destTitle}/>
                                </div>

                                <div className="cardInfo">
                                    <h4 className="destTitle">{destTitle}</h4>
                                    <span className="continent flex">
                                        <HiOutlineLocationMarker className='icon'/>
                                        <span className="name">{location}</span>
                                    </span>

                                    <div className="fees flex">
                                        <div className="grade">
                                            <span>{grade} <small>+1</small></span>
                                        </div>
                                        <div className="price">
                                            <h5>{fees}</h5>
                                        </div>
                                    </div>

                                    <div className="desc">
                                        <p>{description}</p>
                                    </div>

                                    <button className='btn flex'>
                                        DETAILS <HiOutlineClipboardCheck className='icon'/>
                                    </button>
                                </div>
                            </div>
                        )
                    })
                }
            </div>

        </section>
    )
}

export default Main