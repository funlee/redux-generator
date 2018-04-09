import React, {Component} from 'react';
import './notFound.css';

export default class NotFound extends Component {
  handleGoBack() {
    window.history.back()
  }
  render() {
    return (
      <section>
        <div className="not-found">
          <div className="error">404</div>
          <br />
          <br />
          <br />
          <br />
          <span className="info">File not found</span>
        </div>
      </section>

    )
  }
}
