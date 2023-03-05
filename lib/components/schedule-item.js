import {LitElement, html, css} from 'lit';
import {classMap} from 'lit/directives/class-map.js';

export class ScheduleItem extends LitElement {
  static get styles() {
    // Pulse effect style from https://www.florin-pop.com/blog/2019/03/css-pulse-effect/
    return css`
      :host {
      }

      .schedule-item {
        display: flex;
        flex-direction: row;
        align-items: center;
        gap: 10px;
      }

      .done {
        text-decoration: line-through;
        color: #cccccc;
      }

      .ongoing p {
        color: #ffffff;
        font-weight: bold;
        font-size: 1.8em;
      }

      .blob {
        background: black;
        border-radius: 50%;
        box-shadow: 0 0 0 0 rgba(0, 0, 0, 1);
        margin: 10px;
        height: 20px;
        width: 20px;
        transform: scale(1);
        animation: pulse-black 2s infinite;
      }

      .blob.red {
        background: rgba(255, 82, 82, 1);
        box-shadow: 0 0 0 0 rgba(255, 82, 82, 1);
        animation: pulse-red 2s infinite;
      }

      @keyframes pulse-red {
        0% {
          transform: scale(0.95);
          box-shadow: 0 0 0 0 rgba(255, 82, 82, 0.7);
        }

        70% {
          transform: scale(1);
          box-shadow: 0 0 0 10px rgba(255, 82, 82, 0);
        }

        100% {
          transform: scale(0.95);
          box-shadow: 0 0 0 0 rgba(255, 82, 82, 0);
        }
      }
    `;
  }

  static get properties() {
    return {
      begin: {type: Object, attribute: true},
      end: {type: Object, attribute: true},
      text: {type: String, attribute: true},
      _currentTime: {type: Object, state: true},
    };
  }

  constructor() {
    super();
    this._currentTime = new Date();
  }

  _getStatus() {
    const currentTime = new Date();
    if (this.begin < currentTime && this.end < currentTime) {
      // Started and ended, should be marked as done.
      return 'done';
    } else if (this.begin <= currentTime && this.end >= currentTime) {
      // Just started. has yet to end.
      return 'ongoing';
    } else if (this.begin > currentTime) {
      return 'upcoming';
    }
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
    const status = this._getStatus();
    const classes = {
      'schedule-item': true,
      done: status === 'done',
      ongoing: status === 'ongoing',
      upcoming: status === 'upcoming',
    };
    return html`
      <div class=${classMap(classes)}>
        <p>${this.begin.toLocaleString()} - ${this.text}</p>
        ${status === 'ongoing' ? html`<div><div class="blob red"></div></div>` : ''}
      </div>
    `;
  }
}

window.customElements.define('schedule-item', ScheduleItem);
