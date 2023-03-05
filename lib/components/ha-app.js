import {LitElement, html, css} from 'lit';
import formatDistanceToNow from 'date-fns/formatDistanceToNow';

import './ha-schedule.js';
import './ha-sponsors.js';
import './ha-credits.js';

export class HackpalachiaApp extends LitElement {
  static get styles() {
    return css`
      :host {
      }

      a {
        color: #aa8a00;
      }

      p.timer {
        font-size: 2.7em;
      }

      .container {
        display: flex;
        flex-direction: row;
        margin: 0 auto;
        width: 100%;
      }

      .event-container {
        display: flex;
        flex-direction: column;
        align-items: center;
      }
    `;
  }

  static get properties() {
    return {
      _currentTime: {type: Object, state: true},
      _hackEndTime: {type: Object, state: true},
      _eventEndTime: {type: Object, state: true},
    };
  }

  constructor() {
    super();
    this._currentTime = new Date();
    this._hackEndTime = new Date('March 5, 2023 10:00:00');
    this._eventEndTime = new Date('March 5, 2023 13:15:00');
  }

  connectedCallback() {
    super.connectedCallback();
    this.intervalTimerId = setInterval(() => {
      this._currentTime = new Date();
    }, 1000);
  }

  disconnectedCallback() {
    super.disconnectedCallback();
    if (this.intervalTimerId) {
      clearInterval(this.intervalTimerId);
    }
  }

  render() {
    let timeLeft;
    if (this._hackEndTime > this._currentTime) {
      timeLeft = formatDistanceToNow(this._hackEndTime);
    } else {
      timeLeft = 'Time is up!';
    }

    let isEventEnded;
    if (this._eventEndTime > this._currentTime) {
      isEventEnded = false;
    } else {
      isEventEnded = true;
    }

    let rightPaneContent;
    if (isEventEnded) {
      rightPaneContent = html`<p class="timer">The event has ended</p>
        <p>
          Thank you for participating!
          <a
            href="https://hackpalachiaou.devpost.com/"
            target="_blank"
            rel="noopener"
            >List of Projects</a
          >
        </p>
        <ha-credits></ha-credits>`;
    } else {
      rightPaneContent = html`<p class="timer">
          Time until submission: ${timeLeft}
        </p>
        <ha-schedule></ha-schedule>`;
    }

    return html`<div class="container">
      <div class="event-container">
        <img src="image/hackpalachia-logo.png" width="400px" height="400px" />
        <ha-sponsors></ha-sponsors>
      </div>
      <div>${rightPaneContent}</div>
    </div> `;
  }
}

window.customElements.define('ha-app', HackpalachiaApp);
