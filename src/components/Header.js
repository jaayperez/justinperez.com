import React from 'react'
import PropTypes from 'prop-types'

const Header = (props) => (
    <header id="header" style={props.timeout ? {display: 'none'} : {}}>
        <div className="logo">
            <span className="icon fa-diamond"></span>
        </div>
        <div className="content">
            <div className="inner">
                <h1>Justin Perez</h1>
                <h2>Full Stack Engineer</h2>
                <p>Building websites and applications for interfaces is what I do.
                <br/> See my work, check my skills, or get in contact</p>
                <ul className="icons">
                  <li><a href="https://github.com/jaayperez" className="icon fa-github" target="_blank" rel="noopener noreferrer">
                    <span className="label">GitHub</span></a></li>
                  <li><a href="https://www.linkedin.com/in/jjustinperez?trk=profile-badge" className="icon fa-linkedin" target="_blank" rel="noopener noreferrer">
                    <span className="label">LinkedIn</span></a></li>
                  <li><a href="https://www.instagram.com/justin200p300" className="icon fa-instagram" target="_blank" rel="noopener noreferrer">
                    <span className="label">Instagram</span></a></li>
                </ul>
            </div>
        </div>
        <nav>
            <ul>
                <li><a href="javascript:;" onClick={() => {props.onOpenArticle('intro')}}>Introduction</a></li>
                <li><a href="javascript:;" onClick={() => {props.onOpenArticle('skills')}}>Skills</a></li>
                <li><a href="javascript:;" onClick={() => {props.onOpenArticle('work')}}>Work</a></li>
                <li><a href="javascript:;" onClick={() => {props.onOpenArticle('contact')}}>Contact</a></li>
            </ul>
        </nav>
    </header>
)

Header.propTypes = {
    onOpenArticle: PropTypes.func,
    timeout: PropTypes.bool
}

export default Header
