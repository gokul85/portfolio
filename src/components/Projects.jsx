import React, { Component } from 'react';
import './css/Projects.css';
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";


// import Swiper core and required modules
import SwiperCore, {
    Navigation, Pagination, Mousewheel, Keyboard
} from 'swiper/core';

// Import Swiper styles
import "swiper/swiper.min.css";
import "swiper/components/navigation/navigation.min.css";
import "swiper/components/pagination/pagination.min.css";
// install Swiper modules
SwiperCore.use([Navigation, Pagination, Mousewheel, Keyboard]);


// export default function App() {



//     return (
//         <>
//             <Swiper cssMode={true} navigation={true} pagination={{ clickable: true }} mousewheel={true} keyboard={true} className="mySwiper">
//                 <SwiperSlide>Slide 1</SwiperSlide><SwiperSlide>Slide 2</SwiperSlide><SwiperSlide>Slide 3</SwiperSlide><SwiperSlide>Slide 4</SwiperSlide><SwiperSlide>Slide 5</SwiperSlide><SwiperSlide>Slide 6</SwiperSlide><SwiperSlide>Slide 7</SwiperSlide><SwiperSlide>Slide 8</SwiperSlide><SwiperSlide>Slide 9</SwiperSlide>
//             </Swiper>
//         </>
//     )
// }




export class Projects extends Component {

    state = {
        slides: [
            {
                id: 1,
                title: "Tic Tac Toe",
                discription: "It is a tic tac toe game with the best ui and ux",
                languages: [
                    "html.svg",
                    "css.svg",
                    "javascript.svg",
                ],
                link1: "https://github.com/gokul85/XO-game",
                link2: "https://github.com/gokul85/XO-game/archive/refs/heads/main.zip",
                link3: "https://gokul85.github.io/XO-game/",
                imageLink: "https://res.cloudinary.com/dm7i7i9wg/image/upload/v1629902699/Projects/XO-game_nkt9lb.jpg",
            },
            {
                id: 2,
                title: "UI to Web Page",
                discription: "It is my first web development project",
                languages: [
                    "html.svg",
                    "css.svg",
                ],
                link1: "https://github.com/gokul85/first-web-page",
                link2: "https://github.com/gokul85/first-web-page/archive/refs/heads/main.zip",
                link3: "https://gokul85.github.io/first-web-page/",
                imageLink: "https://res.cloudinary.com/dm7i7i9wg/image/upload/v1629902697/Projects/First-web-page_eqbdep.jpg",
            },
        ],
    };

    // componentDidMount() {
    //     this.setState({ slides: Seed.slides });
    // }

    render() {

        var countDownDate = new Date("Sep 11, 2021 00:00:00").getTime();

        // Update the count down every 1 second
        var countdownfunction = setInterval(function () {

            // Get todays date and time
            var now = new Date().getTime();

            // Find the distance between now an the count down date
            var distance = countDownDate - now;

            // Time calculations for days, hours, minutes and seconds
            var days = Math.floor(distance / (1000 * 60 * 60 * 24));
            var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
            var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
            var seconds = Math.floor((distance % (1000 * 60)) / 1000);

            // Output the result in an element with id="demo"
            document.getElementById("time").innerHTML = days + "d " + hours + "h "
                + minutes + "m " + seconds + "s ";

            // If the count down is over, write some text 
            if (distance < 0) {
                clearInterval(countdownfunction);
                document.getElementById("time").innerHTML = "EXPIRED";
            }
        }, 1000);

        const slidecontens = this.state.slides.map((slide) => (
            <SwiperSlide className="Container">
                <Slide
                    key={'slide-' + slide.id}
                    id={slide.id}
                    title={slide.title}
                    discription={slide.discription}
                    languages={slide.languages}
                    link1={slide.link1}
                    link2={slide.link2}
                    link3={slide.link3}
                    imageLink={slide.imageLink}
                />
            </SwiperSlide>
        ));

        return (
            <section className="project">
                <div className="container">
                    <div className="section-title">
                        <h1 className="project-h1">
                            PROJECTS
                            <hr />
                        </h1>
                    </div>
                </div>
                <Swiper cssMode={false} navigation={true} pagination={{ clickable: true }} mousewheel={false} keyboard={true} className="mySwiper">
                    {slidecontens}
                    <SwiperSlide>
                        <div className="container">
                            <div className="row">
                                <div className="col-12 p-1">
                                    <div className="comming-soon">
                                        <div className="middle">
                                            <h1>COMING SOON</h1>
                                            <hr />
                                            <p id="time"></p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </SwiperSlide>
                </Swiper>
            </section>
        )
    }
}

class Slide extends React.Component {
    render() {

        const langus = this.props.languages.map((lan) => (
            // <img src={process.env.PUBLIC_URL + `/images/${lan}`} alt="" />
            <object id="svg-object" data={process.env.PUBLIC_URL + `/images/${lan}`} type="image/svg+xml"></object>
        ));
        return (
            <div className="container">
                <div className="row">
                    <div className="col-12">
                        <div className="slider-inner">
                            <div className="slider-texts">
                                <h2 className="slider-title">{this.props.title}</h2>
                                <p>{this.props.discription}</p>
                                <div className="slider-languages">
                                    {langus}
                                </div>
                                <div className="project-links">
                                    <div className="project-class">
                                        <a href={this.props.link1} className="project-link">
                                            <svg stroke="currentColor" fill="currentColor" stroke-width="0" role="img" viewBox="0 0 24 24" class="icon" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><title></title><path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12"></path></svg>
                                        </a>
                                    </div>
                                    <a href={this.props.link2} className="project-link">
                                        <svg stroke="currentColor" fill="none" stroke-width="0" viewBox="0 0 24 24" class="icon" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4"></path></svg>
                                    </a>
                                    <a href={this.props.link3} className="project-link">
                                        <svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 16 16" class="icon" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M8.5 1a6.5 6.5 0 1 1 0 13 6.5 6.5 0 0 1 0-13zm4.894 4a5.527 5.527 0 0 0-3.053-2.676c.444.84.765 1.74.953 2.676h2.1zm.582 2.995A5.11 5.11 0 0 0 14 7.5a5.464 5.464 0 0 0-.213-1.5h-2.342c.032.331.055.664.055 1a10.114 10.114 0 0 1-.206 2h2.493c.095-.329.158-.665.19-1.005zm-3.535 0l.006-.051A9.04 9.04 0 0 0 10.5 7a8.994 8.994 0 0 0-.076-1H6.576A8.82 8.82 0 0 0 6.5 7a8.98 8.98 0 0 0 .233 2h3.534c.077-.332.135-.667.174-1.005zM10.249 5a8.974 8.974 0 0 0-1.255-2.97C8.83 2.016 8.666 2 8.5 2a3.62 3.62 0 0 0-.312.015l-.182.015L8 2.04A8.97 8.97 0 0 0 6.751 5h3.498zM5.706 5a9.959 9.959 0 0 1 .966-2.681A5.527 5.527 0 0 0 3.606 5h2.1zM3.213 6A5.48 5.48 0 0 0 3 7.5 5.48 5.48 0 0 0 3.213 9h2.493A10.016 10.016 0 0 1 5.5 7c0-.336.023-.669.055-1H3.213zm2.754 4h-2.36a5.515 5.515 0 0 0 3.819 2.893A10.023 10.023 0 0 1 5.967 10zM8.5 12.644A8.942 8.942 0 0 0 9.978 10H7.022A8.943 8.943 0 0 0 8.5 12.644zM11.033 10a10.024 10.024 0 0 1-1.459 2.893A5.517 5.517 0 0 0 13.393 10h-2.36z"></path></svg>
                                    </a>
                                </div>
                            </div>
                            <img className="project-image" src={this.props.imageLink} />
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default Projects
