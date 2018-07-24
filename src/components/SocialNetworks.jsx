import React from 'react';
import '@css/SocialNetworks.css';
export default class SocialNetworks extends React.Component {
    render() {
        return (
            <ul className="socialNetworks">
            <li>
              <a href="http://www.twitter.com" target="_blank" social="twitter">
                <i className="fab fa-twitter" />
              </a>
            </li>
            <li>
              <a href="http://www.whatsapp.com" target="_blank" social="whatsapp">
                <i className="fab fa-whatsapp" />
              </a>
            </li>
            <li>
              <a href="http://www.facebook.com" target="_blank" social="facebook">
                <i className="fab fa-facebook" />
              </a>
            </li>
            <li>
              <a href="http://www.instagram.com" target="_blank" social="instagram">
                <i className="fab fa-instagram" />
              </a>
            </li>
            <li>
              <a href="http://www.linkedin.com" target="_blank" social="linkedin">
                <i className="fab fa-linkedin" />
              </a>
            </li>
            <li>
              <a href="http://www.youtube.com" target="_blank" social="youtube">
                <i className="fab fa-youtube" />
              </a>
            </li>
          </ul>
        );
    }
}