import React from 'react'
import resumePDF from '../documents/Kazousky_WebDev_Resume.pdf'

const Resume = () => {
    return (
        <div class="resume-page">
                <div class="skills">
                    <div class="skills-left">
                    <ul>
                        <h3>Experience</h3>
                        <li>React</li>
                        <li>Gatsby</li>
                        <li>MERN Stack</li>
                        <li>HTML</li>
                        <li>SASS/CSS</li>
                        <li>Javascript</li>
                    </ul>
                    </div>
                    <div class="skills-center">
                    <ul>
                        <h3>Design Software</h3>
                        <li>Photoshop</li>
                        <li>Illustrator</li>
                        <li>Adobe xD</li>
                        <li>Figma</li>
                    </ul>
                    </div>
                    <div class="skills-right">
                    <ul>
                        <h3>Other Knowledge</h3>
                        <li>Git/GitHub</li>
                        <li>APIs</li>
                        <li>GraphQL</li>
                        <li>CMS</li>
                        <li>Node</li>
                        <li>Netlify</li>
                    </ul>
                </div>
            </div>
            <div class="resume-download"><a href={resumePDF}>Download my Resume!</a></div>
        </div>
    )
}

export default Resume
