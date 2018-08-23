import React from 'react'
import Link from 'gatsby-link'
import get from 'lodash/get'
import Helmet from 'react-helmet'
import Waypoint from 'react-waypoint'
import Header from '../components/Header'
import Nav from '../components/Nav'

class Index extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      stickyNav: false,
    }
  }

  _handleWaypointEnter = () => {
    this.setState(() => ({ stickyNav: false }))
  }

  _handleWaypointLeave = () => {
    this.setState(() => ({ stickyNav: true }))
  }

  render() {
    return (
      <div>
        <Helmet title={get(this, 'props.data.site.siteMetadata.title')} />

        <Header />

        <Waypoint
          onEnter={this._handleWaypointEnter}
          onLeave={this._handleWaypointLeave}
        />
        <Nav sticky={this.state.stickyNav} />

        <div id="main">
          <section id="intro" className="main">
            <div className="spotlight">
              <div className="content">
                <header className="major">
                  <h2>About Me</h2>
                </header>
                <p>
                  Hi! I'm <b>Jennifer Hurd</b>, a Full Stack Developer with a
                  strong interest in both technology and helping people. I
                  really enjoy figuring out how the devices we use everyday work
                  in greater detail and had put these interests to use in my
                  previous roles in technical support.
                </p>
                <p>
                  More recently, I found an interest in coding. Technical
                  support agents resolve a lot of problems, but many of the
                  issues not resolved are often escalated to software engineers.
                  I attended a few coding meetups near my house and realized I
                  could be one of those providing solutions as well as bringing
                  my own ideas to life! Once I got started I knew this is what I
                  was meant to do and have been coding ever since.
                </p>
                <p>
                  When I am not coding, I love to spend my time traveling. If
                  I'm not checking out a cave in Kentucky or combing a beach in
                  the Bahamas, you can find me thinking of where to go next...
                </p>
              </div>
              <span className="image">
                <img
                  src={
                    'http://res.cloudinary.com/jjenjjenjjen/image/upload/v1531494432/Jen_o9ev3x.jpg'
                  }
                  alt="Jen"
                />
              </span>
            </div>
          </section>

          <section id="first" className="main special">
            <header className="major">
              <h2>Skills</h2>
            </header>
            <ul className="features">
              <li>
                <span className="icon style1 fa fa-github fa-5x" />
                <h3>Git and Github</h3>
              </li>
              <li>
                <img
                  src="http://res.cloudinary.com/jjenjjenjjen/image/upload/c_scale,w_100/v1496579062/JavaScript_ciochs.png"
                  alt="JavaScript"
                />
                <h3>JavaScript</h3>
              </li>
              <li>
                <span className="icon style3 fa fa-css3 fa-5x" />
                <h3>CSS</h3>
              </li>
              <li>
                <img
                  src="http://res.cloudinary.com/jjenjjenjjen/image/upload/c_scale,w_150/v1534904925/maxresdefault_jjetpo.jpg"
                  alt="Node"
                />
                <h3>Node</h3>
                <i class="fab fa-react" />
              </li>
              <li>
                <span className="icon style2 fa fa-html5 fa-5x" />
                <h3>HTML5</h3>
              </li>
              <li>
                <img
                  src="http://res.cloudinary.com/jjenjjenjjen/image/upload/c_scale,w_100/v1534904093/react-512_ek1bfd.png"
                  alt="React"
                />
                <h3>React</h3>
              </li>
              <li>
                <img
                  src="http://res.cloudinary.com/jjenjjenjjen/image/upload/c_scale,h_100,w_100/v1534904521/postgresql-logo_bas0nl.png"
                  alt="PostgreSQL"
                />

                <h3>Database</h3>
              </li>

              <li>
                <img
                  src="http://res.cloudinary.com/jjenjjenjjen/image/upload/c_scale,h_100/v1534905883/687474703a2f2f617070732e6f63746f636f6e73756c74696e672e636f6d2f696d616765732f6578707265737349636f6e2e706e67_tygv3e.png"
                  alt="Express"
                />
                <h3>Express</h3>
              </li>
              <li>
                <img
                  src="http://res.cloudinary.com/jjenjjenjjen/image/upload/c_scale,h_100,w_100/v1534904393/redux-logo-9CA6836C12-seeklogo.com_waoinc.png"
                  alt="Redux"
                />
                <h3>Redux</h3>
              </li>
            </ul>
          </section>

          <section id="second" className="main special">
            <header className="major">
              <h2>Projects</h2>
            </header>
            <ul className="statistics">
              <li className="style1">
                <img src="http://res.cloudinary.com/jjenjjenjjen/image/upload/c_scale,w_500/v1534906162/jenhurdcom_ijdelt.png" />
                <strong>My Health</strong>
                Personal Project
              </li>
            </ul>
            <p className="myParagraphs">
              Created using: React, Redux, JavaScript, Node, Git/Github, and
              Material UI. This was my Personal Project. A healthcare history
              tracking application with medical provider search feature. I
              learned to use Auth0 for user login and Material UI for styling.
              <br /> View the live site here:{' '}
              <b>
                <a href="myhealth.jenhurd.com">myhealth.jenhurd.com</a>
              </b>
            </p>

            <ul className="statistics">
              <li className="style2">
                <img src="http://res.cloudinary.com/jjenjjenjjen/image/upload/c_scale,w_500/v1534906171/Freelancer_bonauw.png" />
                <strong>Freelancer</strong>
                Group Project
              </li>
            </ul>
            <p className="content">
              Created using: React, Redux, JavaScript, Node, Git/Github. A full
              stack application to help Freelancers and Employers connect. This
              was our Group Project. Completed and maintained the Redux portion
              of our application Setup the logic on the dashboard combining and
              sorting the employers and freelancers, the applying to jobs
              function, and functions in the modals.
              <br /> View the live site here:{' '}
              <b>
                <a href="freelancer.jenhurd.com">freelancer.jenhurd.com</a>
              </b>
            </p>
            <footer className="major" />
          </section>

          <section id="cta" className="main special">
            <header className="major">
              <div className="content2">
                <div>
                  <h2>Contact </h2>
                  <ul className="icons">
                    <li>
                      <h3>
                        <b> Email: </b>

                        <a href="mailto:jenhurd8@gmail.com" target="_top">
                          jenhurd8@gmail.com
                        </a>
                      </h3>

                      <dd />
                    </li>
                  </ul>
                </div>
                <div>
                  <h2>Social Media </h2>
                  <ul className="icons">
                    <li>
                      <a
                        href="https://www.linkedin.com/in/jenhurd/"
                        className="icon fa-linkedin alt"
                      >
                        <span className="label">Linked In</span>
                      </a>
                    </li>
                    <li>
                      <a
                        href="https://twitter.com/jjenjjenjjen2"
                        className="icon fa-twitter alt"
                      >
                        <span className="label">Twitter</span>
                      </a>
                    </li>
                    <li>
                      <a
                        href="https://github.com/jenhurd8"
                        className="icon fa-github alt"
                      >
                        <span className="label">GitHub</span>
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </header>
          </section>
        </div>
      </div>
    )
  }
}

Index.propTypes = {
  route: React.PropTypes.object,
}

export default Index

export const pageQuery = graphql`
  query IndexQuery {
    site {
      siteMetadata {
        title
      }
    }
  }
`
