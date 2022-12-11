import React from 'react';
import { Card, Button } from 'react-bootstrap';

import  from '../../assets/images/';
import  from '../../assets/images/';
import  from '../../assets/images/';
import  from '../../assets/images/';
import  from '../../assets/images/';
import  from '../../assets/images/';
import  from '../../assets/images/'

function Project() {
    const applications = [
        {
            title: '',
            appLink: '',
            repoLink: '',
            languages: '',
            picture: i
        },

        {
            title: '',
            appLink: '',
            repoLink: '',
            languages: '',
            picture: i
        },

        {
            title: '',
            appLink: '',
            repoLink: '',
            languages: '',
            picture: i
        },

        {
            title: '',
            appLink: '',
            repoLink: '',
            languages: '',
            picture: i
        },

        {
            title: 'i',
            appLink: 'i',
            repoLink: 'i',
            languages: 'i',
            picture: i
        },

        {
            title: 'i',
            appLink: 'i',
            repoLink: 'i',
            languages: 'i',
            picture: i
        }

    ];

    return (

        <div className="project-container flex-row space-evenly">

            {applications.map(project => (

                <article className="project-card" key={project.title} style={{backgroundImage: `url(${project.picture})`}}>

                    <div className="project-content flex-column space-between">

                        <div className="project-title flex-row align-item-center" key={project.title}>
                            <h3><a href={project.appLink} target="_blank" className="appLink">{project.title}</a></h3>
                            <a href={project.repoLink} target="_blank"><img src={githubIcon} style={{width: "30px", height: "30px"}} alt="" className="project-icon"></img></a>
                        </div>

                        <span className="project-info">{project.languages}</span>

                    </div>

                </article>

            ))}
            
        </div>
    )
}

export default Project;
