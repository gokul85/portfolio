import React, { Component } from 'react';
import './css/Timeline.css';

export class Timeline extends Component {

    state = {
        timelines: [
            {
                id: 1,
                svg: "clg",
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
