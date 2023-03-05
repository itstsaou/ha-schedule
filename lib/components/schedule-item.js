import {LitElement, html, css} from 'lit';
import {classMap} from 'lit/directives/class-map.js';

export class ScheduleItem extends LitElement {
  static get styles() {
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

      .ongoing {
        color: #ffffff;
        font-weight: bold;
        font-size: 1.8em;
      }

      .gg-media-live {
        color: red;
        transform: scale(var(--ggs, 1));
      }

      .gg-media-live,
      .gg-media-live::after {
        border-top-color: transparent;
        border-bottom-color: transparent;
      }

      .gg-media-live,
      .gg-media-live::after,
      .gg-media-live::before {
        box-sizing: border-box;
        position: relative;
        display: block;
        border: 2px solid;
        border-radius: 50%;
        width: 14px;
        height: 14px;
      }

      .gg-media-live::after,
      .gg-media-live::before {
        content: '';
        position: absolute;
        width: 6px;
        height: 6px;
        top: 2px;
        left: 2px;
      }

      .gg-media-live::after {
        width: 22px;
        height: 22px;
        top: -6px;
        left: -6px;
      }
    `;
  }

  static get properties() {
    return {
      begin: {type: Object, attribute: true},
      end: {type: Object, attribute: true},
      text: {type: String, attribute: true},
      _currentTime: { type: Object, state: true },
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
        ${status === 'ongoing' ? html`<i class="gg-media-live"></i>` : ''}
      </div>
    `;
  }
}

window.customElements.define('schedule-item', ScheduleItem);
