import React, { Component } from 'react'

export default class Subpage extends Component {
  render() {
    return (
      <div>
        <div className='page animated fadein'>
          <div className='section featured center grey lighten-5'>
            <h2 className='heading'>App Centric</h2>
            <p>Shuttle isnt just a website, it comes with tons of App Pages!</p>
            <img src='img/featured.png' alt='' />
          </div>
          <footer className='page-footer primary-color'>
            <div className='footer-copyright'>
              <div className='container center'>
                <span>Made with <i className='ion-ios-heart' /> by Codnauts</span>
              </div>
            </div>
          </footer>
        </div>
      </div>
    )
  }
}
