import React, { Component } from 'react';
import './css/Skills.css';

export class Skills extends Component {

    state = {
        skills: [
            {
                id: 1,
                title: "Programming Languages",
                icons: [
                    'Python', 'C++', 'Java', 'Javascript',
                ],
            },
            {
                id: 2,
                title: "Web Technologies",
                icons: [
                    'ReactJS', 'NodeJS', 'Bootstrap', 'SASS', 'Material-ui', 'HTML', 'CSS',
                ],
            },
            {
                id: 3,
                title: "Databases",
                icons: [
                    'MongoDB', 'MySQL', 'Firebase',
                ],
            },
            {
                id: 4,
                title: "Tools & IDE's",
                icons: [
                    'Git', 'Github', 'VSCode', 'Atom', 'Illustrator', 'Photoshop',
                ],
            },
            {
                id: 5,
                title: "Mobile Development",
                icons: [
                    'React-Native',
                ],
            },
        ],
    }

    render() {
        const skillstab = this.state.skills.map((sk) => (
            <Skill
                key={'skill-' + sk.id}
                id={sk.id}
                title={sk.title}
                icons={sk.icons}
            />
        ));
        return (
            <section className="skills" id="skills">
                <div className="section-title">
                    <h1 className="project-h1">
                        SKILLS
                        <hr />
                    </h1>
                </div>
                <div className="container">
                    <div className="row">
                        {skillstab}
                    </div>
                </div>
            </section>
        )
    }
}

class Skill extends React.Component {
    render() {
        const icons = this.props.icons.map((icon) => (
            <div className="icon-wrapper">
                <object id="svg-object" data={process.env.PUBLIC_URL + `/images/${icon}.svg`} type="image/svg+xml"></object>
                <span className="tooltiptext">
                    {icon}
                </span>
            </div>
        ));

        return (
            <div className="col-12">
                <div className="text-icon">
                    <h2>{this.props.title}</h2>
                    <div className="icon-container">
                        {icons}
                    </div>
                </div>
            </div>
        )
    }
}

export default Skills
