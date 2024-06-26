import React from 'react';
import "./GymVideo.css"
import bg from '../../assets/bg/10.jpg'
import { FaPlayCircle } from "react-icons/fa";

const GymVideo = () => {
    return (
        <section className="video-wrapper video section-padding bg-img bg-fixed" data-overlay-dark="4" style={{ backgroundImage: `url(${bg})` }}>
            <div className="container ">
                <div className="row">
                    <div className="col-md-12 text-center mb-14">
                        <div className="section-title3 text-white">Be Inspire</div>
                    </div>
                </div>
                <div className="row">
                    <div className="text-center col-md-12">
                        <a className="vid flex items-center justify-center text-white" href="https://youtu.be/pJsWKy9y1Cg">
                            <div className='hover:text-red-700'>
                            <FaPlayCircle style={{ height: '100px', width: '100px' }}/>
                            </div>
                           
                        </a>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default GymVideo;
