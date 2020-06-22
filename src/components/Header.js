import React from 'react'
import PropTypes from 'prop-types'

const Header = (props) => (

    <header id="header" style={props.timeout ? {display: 'none'} : {}}>
        <div className="content">
            <div className="inner">
            <div className="inner">
            <div className="logo">
            <span className="icon fa-diamond"></span>
            </div>
            <h2>Justin Perez</h2>
            <p style={{textAlign: 'left'}}>Full stack web developer in Los Angeles who specializes in the design and build of custom websites and applications.
            Need a project quote or have a question, shoot your email at <a href="mailto:justin@startrev.com">justin@startrev.com</a></p>
            <br/>
            <nav>
                <ul>
                    <li><a href="javascript:;" onClick={() => {props.onOpenArticle('about')}}>About</a></li>
                    <li><a href="javascript:;" onClick={() => {props.onOpenArticle('skills')}}>Skills</a></li>
                    <li><a href="javascript:;" onClick={() => {props.onOpenArticle('work')}}>Work</a></li>
                    <li><a href="javascript:;" onClick={() => {props.onOpenArticle('contact')}}>Contact</a></li>
                </ul>
            </nav>
            <br />
            </div>
                <ul className="icons">
                <li><a href="https://github.com/jaayperez" className="icon fa-github" target="_blank" rel="noopener noreferrer">
                  <span className="label">GitHub</span></a></li>
                <li><a href="https://www.linkedin.com/in/jjustinperez?trk=profile-badge" className="icon fa-linkedin" target="_blank" rel="noopener noreferrer">
                  <span className="label">LinkedIn</span></a></li>
                <li><a href="https://www.twitter.com/jaayperez" className="icon fa-twitter" target="_blank" rel="noopener noreferrer">
                  <span className="label">Twitter</span></a></li>
                <li><a href="https://www.instagram.com/jaay.justin" className="icon fa-instagram" target="_blank" rel="noopener noreferrer">
                  <span className="label">Instagram</span></a></li>
                </ul>
            </div>
        </div>
    </header>
)

Header.propTypes = {
    onOpenArticle: PropTypes.func,
    timeout: PropTypes.bool
}

export default Header
