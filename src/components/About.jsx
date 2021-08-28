import React from 'react';
import './css/About.css'

export default function About() {
    return (
        <section className="about">
            <div className="container">
                <div className="section-title">
                    <h1 className="project-h1">
                        ABOUT ME
                        <hr />
                    </h1>
                </div>
                <div className="row">
                    <div className="col-lg-5">
                        <div className="left-image">
                            <img src="https://res.cloudinary.com/dm7i7i9wg/image/upload/v1629999440/Projects/image_xmxzlc.jpg" alt="" />
                        </div>
                    </div>
                    <div className="col-lg-7">
                        <div className="about-right">
                            <h1>Hi, I'am Gokul</h1>
                            <h3>Web Designer & Web Developer</h3>
                            <p>I am hailing from tiruchirappalli and Currently a student of stream Computer Science at SNS College of Engineering. I'm Open to getting any work or Jobs related to software field as an intern at Your Company. I love to code Everyday.</p>
                            <a className="download-resume" href={process.env.PUBLIC_URL + '/pdf/resume.pdf'} download>Download Resume</a>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}
