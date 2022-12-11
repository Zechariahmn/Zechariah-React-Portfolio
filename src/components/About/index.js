import React from 'react';
import profilePic from "../../assets/profile-pic.jpg";



function About() {
    return (

        <section id="about">

            <div classname="row">

                <div className="three columns">
                    <img className="profilepic" src={profilePic} alt="Zechariah Naitram Profile Pic" />
                </div>

                <div className="nine columns main-col">

                    <h2>About Me</h2>

                    <p> I am a web developer in the making that is constantly looking and trying to learn new things in order to make me a better developer and to make my ideas a reality. I have always wanted to try coding but never got the chance when i was younger, so now im diving head first into it and trying to absorb as much as i can.
                    </p>

                    <div className="row">

                        <div className="columns contact-details">

                            <h2>Contact Details</h2>

                            <p className="address">
                                <span>Zechariah Naitram</span><br/>
                                <span>Orlando, FL</span><br/>
                                <span>(689) 500-7290</span><br/>
                                <span>zechariahnaitram20@gmail.com</span>
                            </p>

                        </div>

                        <div className="columns download">

                            <p>
                                
                            </p>

                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default About;