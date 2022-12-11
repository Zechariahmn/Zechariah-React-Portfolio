import React from 'react';
import { Card, Button } from 'react-bootstrap';

import higherlowerImg from '../../assets/images/higher-lower.PNG';
import notetakerImg from '../../assets/images/note-taker.PNG';
import techblogImg from '../../assets/images/tech-blog.PNG';


function Project() {
    const applications = [
        {
            title: 'Higher-Lower',
            appLink: 'https://styngerbee.github.io/higherlower/',
            repoLink: 'https://github.com/StyngerBee/higherlower',
            languages: 'HTML, CSS, JAVASCRIPT',
            picture: higherlowerImg
        },

        {
            title: 'Note-Taker',
            appLink: 'https://zechariah-note-app.herokuapp.com/',
            repoLink: 'https://github.com/Zechariahmn/Note-Taker',
            languages: 'HTML, CSS, JAVASCRIPT',
            picture: notetakerImg
        },

        {
            title: 'Tech-Blog',
            appLink: 'https://zechariah-blog-spot.herokuapp.com/',
            repoLink: 'https://github.com/Zechariahmn/Tech-Blog',
            languages: 'CSS, JAVASCRIPT, HANDLEBARS',
            picture: techblogImg
        },

    ];

    return (

         <><div>
            {applications.map(project => (
                <Card style={{ width: '18rem' }}>
                    <Card.Img variant="top" style={project.picture} />
                    <Card.Body>
                        <Card.Title>{project.title} </Card.Title>
                        <Card.Text>
                            {project.languages}
                        </Card.Text>
                        <Button href={project.appLink} variant="primary">Go to Application</Button>
                    </Card.Body>
                </Card>
            ))}
        </div><div className="project-container flex-row space-evenly">

                {applications.map(project => (

                    <article className="project-card" key={project.title} style={{ backgroundImage: `url(${project.picture})` }}>

                        <div className="project-content flex-column space-between">

                            <div className="project-title flex-row align-item-center" key={project.title}>
                                <h3><a href={project.appLink} target="_blank" className="appLink">{project.title}</a></h3>
                                <a href={project.repoLink} target="_blank"></a>
                            </div>

                            <span className="project-info">{project.languages}</span>

                        </div>

                    </article>

                ))}

            </div></>
    )
}

export default Project;
