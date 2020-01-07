import PropTypes from 'prop-types'
import React from 'react'
import pic01 from '../images/pic01.jpg'
import pic02 from '../images/pic02.jpg'
import pic03 from '../images/pic03.jpg'

class Main extends React.Component {
  render() {
    let close = (
      <div className="close" onClick={() => {
        this.props.onCloseArticle()
      }}></div>
    )

    return (
      <div ref={this.props.setWrapperRef} id="main" style={this.props.timeout ? { display: 'flex' } : { display: 'none' }}>

        <article id="intro"
          className={`${this.props.article === 'intro' ? 'active' : ''} ${
            this.props.articleTimeout ? 'timeout' : ''
          }`}
          style={{ display: 'none' }}>

          <h2 className="major">Introduction</h2>
          <h3>Who I Am</h3>
          <p>Bests as CEO, Founder, and President of <a className="gold" href="https://startrev.com" target="_blank">Start Rev Technology</a>; The Los Angeles tech start up, designing precision-engineered web solutions for established companies and business professionals.</p>
          <p>With over 4 years of working experience, I specialize in Ecommerce and Web Technologies. Being skilled in user interface /experience design, SEO best practices, and technologies such as Git, HTML5/CSS3/JavaScript, Bootstrap, Analytics Software and APIs.
          Connect on  <a className="gold" href="https://www.linkedin.com/in/jjustinperez" target="_blank">LinkedIn</a>.</p>

          <span className="image main intro">
            <img src={pic01} alt="" />
          </span>
          {close}
        </article>

        <article id="skills"
          className={`${this.props.article === 'skills' ? 'active' : ''} ${
            this.props.articleTimeout ? 'timeout' : ''
          }`}
          style={{ display: 'none' }}
        >
          <h2 className="major">Skills and Expertise</h2>

          <ul className="service-list">
            <li><h3>Frameworks and Languages I Speak: </h3><p> HTML5, CSS3, JavaScript, Bootstrap, PHP, Ruby and Liquid</p></li>
            <li><h3>APIs and Libraries: </h3><p> jQuery, Google APIs, Maps API, Instagram API, Shopify REST API, Youtube API</p></li>
            <li><h3>Preferred Software and Tools: </h3><p> Git /GitHub, NPM, Google Analytics, SEO and Speed Optimization Tools</p></li>
            <li><h3>Platforms: </h3><p> Shopify, WordPress, WooComerce, Google Cloud Platform, Trello, MailChimp, Zendesk</p></li>
          </ul>
          <ul className="service-list">
            <li><h3>Tech Skills:</h3><p>Search Engine Optimization (SEO), Ecommerce Development, User Interface Design, User Experience (UX), Package Managers, Task Runners, Analytics Software, and APIs</p></li>
          </ul>
          {close}
        </article>

        <article id="work"
          className={`${this.props.article === 'work' ? 'active' : ''} ${
            this.props.articleTimeout ? 'timeout' : ''
          }`}
          style={{ display: 'none' }}>

          <h2 className="major">Work Portfolio</h2>
          <p>Is up ahead</p>
          <span className="image main work">
            <img src={pic02} alt="" />
          </span>
          {close}
        </article>

        <article id="contact"
          className={`${this.props.article === 'contact' ? 'active' : ''} ${
            this.props.articleTimeout ? 'timeout' : ''
          }`}
          style={{ display: 'none' }}>

          <h2 className="major">Contact Me</h2>
          <p>Complete the form and see how we could work together.<br/> Direct message <a className="gold" href="mailto:justin@startrev.com">justin@startrev.com</a></p>
          <form method="post" action="#" accept-charset="utf-8">
            <div className="field">
              <label htmlFor="name">First and Last Name*</label>
              <input type="text" name="name" id="name" isRequired/>
            </div>
            <div className="field">
              <label htmlFor="email">Email*</label>
              <input type="text" name="email" id="email" isRequired/>
            </div>
            <div className="field">
              <label htmlFor="email">Current Website</label>
              <input type="text" name="website" id="website" />
            </div>
            <div className="field">
              <label htmlFor="message">Detailed Message*</label>
              <textarea name="message" id="message" rows="4" isRequired></textarea>
            </div>
            <ul className="actions">
              <li><input type="submit" value="Send" className="special" /></li>
              <li><input type="reset" value="Reset" /></li>
            </ul>
            <input type="hidden" name="thankyou_url" value=""/>

          </form>

          <h3 className="contact">New Business /</h3>
          <p><a className="gold" href="mailto:justin@startrev.com">justin@startrev.com</a></p>

          <h3>Social Networks /</h3>
          <ul className="icons">
            <li><a href="https://github.com/jaayperez" className="icon fa-github" target="_blank">
                <span className="label">GitHub</span>
              </a>
            </li>
            <li><a href="https://www.linkedin.com/in/jjustinperez" className="icon fa-linkedin" target="_blank">
                <span className="label">LinkedIn</span>
              </a>
            </li>
            <li><a href="https://www.instagram.com/jaay.justin" className="icon fa-instagram" target="_blank">
                <span className="label">Instagram</span>
              </a>
            </li>
          </ul>
          {close}
        </article>
      </div>
    )
  }
}

Main.propTypes = {
  route: PropTypes.object,
  article: PropTypes.string,
  articleTimeout: PropTypes.bool,
  onCloseArticle: PropTypes.func,
  timeout: PropTypes.bool,
  setWrapperRef: PropTypes.func.isRequired,
}

export default Main
