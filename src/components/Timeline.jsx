import React, { Component } from 'react';
import './css/Timeline.css';

export class Timeline extends Component {

    state = {
        timelines: [
            {
                id: 1,
                svg: "clg",
                // svg: <svg stroke="currentColor" fill="currentColor" stroke-width="0" version="1" viewBox="0 0 48 48" enable-background="new 0 0 48 48" class="timeline__icon" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><g fill="#37474F"><rect x="9" y="20" width="30" height="13"></rect><ellipse cx="24" cy="33" rx="15" ry="6"></ellipse></g><path fill="#78909C" d="M23.1,8.2L0.6,18.1c-0.8,0.4-0.8,1.5,0,1.9l22.5,9.9c0.6,0.2,1.2,0.2,1.8,0l22.5-9.9c0.8-0.4,0.8-1.5,0-1.9 L24.9,8.2C24.3,7.9,23.7,7.9,23.1,8.2z"></path><g fill="#37474F"><path d="M43.2,20.4l-20-3.4c-0.5-0.1-1.1,0.3-1.2,0.8c-0.1,0.5,0.3,1.1,0.8,1.2L42,22.2V37c0,0.6,0.4,1,1,1 s1-0.4,1-1V21.4C44,20.9,43.6,20.5,43.2,20.4z"></path><circle cx="43" cy="37" r="2"></circle><path d="M46,40c0,1.7-3,6-3,6s-3-4.3-3-6s1.3-3,3-3S46,38.3,46,40z"></path></g></svg>,
                title: "Bachelore of Engineering",
                sub: "Computer Science and Engineering",
                place: "SNS College of Engineering, Coimbatore",
                timeperiod: "Sep 2020 - Till Now",
            },
            {
                id: 2,
                svg: "school2",
                title: "HSS",
                sub: "Computer Science - Maths",
                place: "Chellammal Matriculation Higher Secondary School, Tiruchirappalli",
                timeperiod: "Jun 2018 - Mar 2020",
            },
            {
                id: 3,
                svg: "schl",
                title: "Upto SSLC",
                place: "Ideal Matriculation Higher Secondary School",
                timeperiod: "upto April 2018",
            },
        ],
    }

    render() {

        const tlines = this.state.timelines.map((tline) => (
            <div className="timeline">
                <div className="timeline-icon">
                    <span className="year">
                        <object id="svg-object" data={process.env.PUBLIC_URL + `/images/${tline.svg}.svg`} type="image/svg+xml"></object>
                    </span>
                </div>
                <div className="timeline-content">
                    <h3 className="title">{tline.title}</h3>
                    <p className="description">{tline.sub}</p>
                    <p className="description">{tline.place}</p>
                    <p className="description">{tline.timeperiod}</p>
                </div>
            </div>
        ));

        return (
            <section className="timeline-section" id="timeline">
                <div className="section-title">
                    <h1 className="project-h1">
                        TIMELINE
                        <hr />
                    </h1>
                </div>
                <div className="container">
                    <div className="row">
                        <div className="col-md-12">
                            <div className="main-timeline">
                                {tlines}
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        )
    }
}

export default Timeline
