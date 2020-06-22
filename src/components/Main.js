import PropTypes from 'prop-types';
import React from 'react';
import pic00 from '../images/justin.jpg';
import pic01 from '../images/435.jpg';
import pic02 from '../images/435.jpg';
import { Container, Card } from './common';
import { Wrapper, Grid, Item, Content } from './styles';

class Main extends React.Component {
  render() {
    let close = (
      <div className="close" onClick={() => {
        this.props.onCloseArticle()
      }}></div>
    )

    return (
      <div ref={this.props.setWrapperRef} id="main" style={this.props.timeout ? { display: 'flex' } : { display: 'none' }}>

        <article id="about"
          className={`${this.props.article === 'about' ? 'active' : ''} ${
            this.props.articleTimeout ? 'timeogaut' : ''
          }`}
          style={{ display: 'none' }}>
          <h2 className="major">About Me</h2>
          <h3>Who I Am</h3>
          <p><span className="image left"><img src={pic00} alt="I'm Justin Perez, freelance full stack web developer based in Los Angeles, CA." /></span>My name is Justin Perez and I am a freelance full-stack web developer in Los Angeles, CA. who specializes in the design and build of custom websites and applications using Node.js and React.
          Self-taught programmer with over four years of experience in Shopify and front/backend development. Well versed in technologies such as HTML5/CSS3/JavaScript, Liquid, Bootstrap, Git, Web APIs, and Google Analytics software. Proven track record of professionalism combined with results and very adept when it comes to eCommerce and SEO.
          Goal-oriented and driven team player. Feel free to connect to my <a className="gold" href="https://www.linkedin.com/in/jjustinperez?trk=profile-badge" target="_blank" rel="noopener noreferrer">LinkedIn</a> for professional, social and career networking.
          Have a project idea you'd like to discuss? Email at <a className="gold" href="mailto:justin@startrev.com">justin@startrev.com</a></p>
          <span className="image main intro">
            <img src={pic01} alt="About Who I Am" style={{ width: '50%' }} />
          </span>
          {close}
        </article>

        <article id="skills"
          className={`${this.props.article === 'skills' ? 'active' : ''} ${
            this.props.articleTimeout ? 'timeout' : ''
          }`}
          style={{ display: 'none' }}>
          <h2 className="major">My Skills</h2>
          <ul className="service-list">
            <li><h3>Framework and Languages</h3><p> PHP, Ruby, Liquid, Node, React, Bootstrap, Sass, HTML5/CSS3/JavaScript</p></li>
            <li><h3>API and Libraries</h3><p> jQuery, Google APIs, Social APIs, Maps APIs, Shopify REST APIs</p></li>
            <li><h3>Software and Tools</h3><p> Git and GitHub, Google Analytics Software, NPM Package Managers, Speed/Performance Optimization Tools</p></li>
            <li><h3>Platforms</h3><p> AWS, Google Cloud Platform, MailChimp, Shopify, WordPress, WooComerce, Zendesk</p></li>
          </ul>
          <ul className="service-list">
            <li><h3>Additional</h3><p>Search Engine Optimization, Data Integration, Ecommerce Development, Interface Design, User Experience Design</p></li>
          </ul>
          {close}
        </article>

        <article id="work"
          className={`${this.props.article === 'work' ? 'active' : ''} ${
            this.props.articleTimeout ? 'timeout' : ''
          }`}
          style={{ display: 'none' }}>

          <h2 className="major">My Work</h2>
          <h3>See the latest projects on my portfolio</h3>
          <Wrapper as={Container} id="projects">
            <Grid>
                <Item>
                  <Card style={{ opacity: '0.9' }}>
                    <Content>
                      <h4><a className="gold" href="https://personalspacemb.com" target="_blank" rel="noopener noreferrer">Shopify Website</a></h4>
                      <p>Shopify Ecommerce Website</p>
                      <div>
                        <span>Liquid, HTML, CSS, JavaScript</span>
                      </div>
                    </Content>
                    </Card>
                </Item>
                <Item>
                  <Card style={{ opacity: '0.9' }}>
                    <Content>
                      <h4><a className="gold" href="https://github.com/jaayperez/shopify-node-react-app" target="_blank" rel="noopener noreferrer">Shopify App</a></h4>
                      <p>Shopify Product Discounts Application</p>
                      <div>
                        <span>React, Node.js, Next.js, and GraphQL</span>
                      </div>
                    </Content>
                  </Card>
                </Item>
                <Item>
                  <Card style={{ opacity: '0.9' }}>
                    <Content>
                      <h4><a className="gold" href="https://github.com/jaayperez/shopify-node-express-app" target="_blank" rel="noopener noreferrer">Shopify App</a></h4>
                      <p>Shopify API Application</p>
                      <div>
                        <span>Node.js + Express</span>
                      </div>
                    </Content>
                  </Card>
                </Item>
                <Item>
                  <Card style={{ opacity: '0.9' }}>
                    <Content>
                      <h4><a className="gold" href="https://gaytanleevancpa.com" target="_blank" rel="noopener noreferrer">Business Website</a></h4>
                      <p>CPA Firm Website</p>
                      <div>
                        <span>React, Bootstrap, HTML5, CSS3 Animations</span>
                      </div>
                    </Content>
                  </Card>
                </Item>
                <Item>
                  <Card style={{ opacity: '0.9' }}>
                    <Content>
                      <h4><a className="gold" href="https://jaayperez.github.io/ecommerce-dashboard" target="_blank" rel="noopener noreferrer">Dashboard App</a></h4>
                      <p>Ecommerce Dashboard Application</p>
                      <div>
                        <span>React, Chart.js, Sheets API, and Material UI</span>
                      </div>
                  </Content>
                  </Card>
                </Item>
                <Item>
                  <Card style={{ opacity: '0.9' }}>
                    <Content>
                      <h4><a className="gold" href="https://github.com/jaayperez/spotify-react-native-app" target="_blank" rel="noopener noreferrer">Spotify App</a></h4>
                      <p>Spotify Music Listing Application</p>
                      <div>
                        <span>React Native + Spotify Web API</span>
                      </div>
                    </Content>
                  </Card>
                </Item>
            </Grid>
          </Wrapper>
          {close}
        </article>

        <article id="contact"
          className={`${this.props.article === 'contact' ? 'active' : ''} ${
            this.props.articleTimeout ? 'timeout' : ''
          }`}
          style={{ display: 'none' }}>

          <h2 className="major">Contact Me</h2>
          <p>So you are looking for a professional, communicative and punctual software developer who likes to keep productive.
          Email at <a className="gold" href="mailto:justin@startrev.com">justin@startrev.com</a></p>
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
