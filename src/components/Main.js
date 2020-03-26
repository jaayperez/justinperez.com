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
          <h3>Who I Am</h3>
          <p>My name is Justin Perez. Hardworking and dedicated full stack web developer with four years of extensive experience in Ecommerce and frontend development. A proven track record of professionalism combined with results and very adept when it comes to Search Engine Optimization. Well versed in technologies such as Git, Shopify Liquid, Bootstrap 4, web APIs, and analytics software. In addition to my knowledge base, I stay up-to-date on industry trends and advancements to stay just ahead of the curve and deliver exceptional work. Able to effectively self manage during independent projects, as well as collaborate in a productive team environment. I am passionate, I am hungry, and I have got mad talent.
          Feel free to connect on my professional network <a className="gold" href="https://www.linkedin.com/in/jjustinperez?trk=profile-badge" target="_blank" rel="noopener noreferrer">LinkedIn</a>.</p>
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
            <li><h3>Framework and Languages</h3><p> Bootstrap, CSS3, HTML5, JavaScript, Jekyll, JSON, Liquid, Node.js, PHP, React, Ruby</p></li>
            <li><h3>API and Libraries</h3><p> jQuery, Google APIs, Instagram API, Maps JS API, Shopify REST API, Youtube API</p></li>
            <li><h3>Software and Tools</h3><p> Git and GitHub, Google Analytics, NPM, SEO and Speed/Performance Optimization Tools</p></li>
            <li><h3>Platforms</h3><p> Google Cloud Platform, MailChimp, Shopify, WordPress, WooComerce, Zendesk</p></li>
          </ul>
          <ul className="service-list">
            <li><h3>Additional</h3><p>SEO Search Engine Optimization, Data Integration, Ecommerce Development, Interface Design, User Experience, Package Managers, Task Runners, Analytics Software</p></li>
          </ul>
          {close}
        </article>

        <article id="work"
          className={`${this.props.article === 'work' ? 'active' : ''} ${
            this.props.articleTimeout ? 'timeout' : ''
          }`}
          style={{ display: 'none' }}>

          <h2 className="major">Work Portfolio</h2>
          <p></p>
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
          <p>Send me an email about your project by completing this form.
          <br/>Reach me directly at <a className="gold" href="mailto:justin@startrev.com">justin@startrev.com</a></p>
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
              <label htmlFor="email">Website</label>
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
