import {LitElement, html, css} from 'lit';
import formatDistanceToNow from 'date-fns/formatDistanceToNow';

import "./ha-schedule.js";

export class HackpalachiaTimer extends LitElement {
    static get styles() {
      return css`
        :host {
          
        }
      `;
    }
  
    static get properties() {
      return {
        _currentTime: { type: Object, state: true },
        _hackEndTime: { type: Object, state: true },
      };
    }
  
    constructor() {
      super();
      this._currentTime = new Date();
      this._hackEndTime = new Date('March 5, 2023 10:00:00');
    }

    connectedCallback() {
        super.connectedCallback()
        this.intervalTimerId = setInterval(() => {
            this._currentTime = new Date();
        }, 1000);
    }

    disconnectedCallback() {
        super.disconnectedCallback()
        if (this.intervalTimerId) {
            clearInterval(this.intervalTimerId);
        }
    }
  
    render() {
      const timeLeft = formatDistanceToNow(this._hackEndTime);
      return html`
        <h1>Hacking Time Left: ${timeLeft}</h1>
      `;
    }
  }
  
  window.customElements.define('ha-timer', HackpalachiaTimer);
  