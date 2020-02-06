import PropTypes from 'prop-types'
import React from 'react'
import pic01 from '../images/435.jpg'
import pic02 from '../images/435.jpg'

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
          <h3>Who Am I</h3>
          <p>My name is Justin Perez. I'm the CEO, <a className="gold" href="https://www.startrev.com" target="_blank" rel="noopener noreferrer">Start Rev Technology</a>. My startup company is from Los Angeles, engineering transformative, client-centric tech solutions in great precision.
          In addition for my work I'm a full stack engineer, while specializing in Ecommerce at 4 years' experience. Well versed in user interface design, CMS, SEO and technologies e.g., Git, HTML5, CSS3, JavaScript, Bootstrap, Analytics Software and APIs.
          Connect to my professional network  <a className="gold" href="https://www.linkedin.com/in/jjustinperez?trk=profile-badge" target="_blank" rel="noopener noreferrer">LinkedIn</a>.</p>
          <span className="image main intro">
            <img src={pic01} alt="My Introduction" style={{ width: '50%' }} />
          </span>
          {close}
        </article>

        <article id="skills"
          className={`${this.props.article === 'skills' ? 'active' : ''} ${
            this.props.articleTimeout ? 'timeout' : ''
          }`}
          style={{ display: 'none' }}>
          <h2 className="major">Skills and Expertise</h2>
          <ul className="service-list">
            <li><h3>Frameworks and Languages</h3><p> Bootstrap, CSS3, HTML5, JavaScript, Jekyll, JSON, Liquid, PHP, Ruby</p></li>
            <li><h3>APIs and Libraries</h3><p> jQuery, Google APIs, Instagram API, Maps JS API, Shopify REST API, Youtube API</p></li>
            <li><h3>Software and Tools</h3><p> Git /GitHub, Google Analytics, NPM, SEO and Speed/Performance Optimization Tools</p></li>
            <li><h3>Platforms</h3><p> Google Cloud Platform, MailChimp, Shopify, WordPress, WooComerce, Zendesk</p></li>
          </ul>
          <ul className="service-list">
            <li><h3>Additional</h3><p>SEO Search Engine Optimization, Data Integration, Ecommerce Development, Interface Design, User Experience, Package Managers, Task Runners, Analytics Software, and APIs</p></li>
          </ul>
          {close}
        </article>

        <article id="work"
          className={`${this.props.article === 'work' ? 'active' : ''} ${
            this.props.articleTimeout ? 'timeout' : ''
          }`}
          style={{ display: 'none' }}>

          <h2 className="major">Work Portfolio</h2>
          <p>Coming</p>
          <span className="image main work">
            <img src={pic02} alt="My Portfolio" style={{ width: '50%' }} />
          </span>
          {close}
        </article>

        <article id="contact"
          className={`${this.props.article === 'contact' ? 'active' : ''} ${
            this.props.articleTimeout ? 'timeout' : ''
          }`}
          style={{ display: 'none' }}>

          <h2 className="major">Contact</h2>
          <p>See how we could work together after completing this form.<br/> Direct message <a className="gold" href="mailto:justin@startrev.com">justin@startrev.com</a></p>
          <form method="post" action="#" acceptCharset="utf-8">
            <div className="field">
              <label htmlFor="name">First and Last Name*</label>
              <input type="text" name="name" id="name" isRequired/>
            </div>
            <div className="field">
              <label htmlFor="email">Email*</label>
              <input type="text" name="email" id="email" isRequired/>
            </div>
            <div className="field">
              <label htmlFor="email">Existing Website</label>
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
