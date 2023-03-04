import {LitElement, html, css} from 'lit';
import formatDistanceToNow from 'date-fns/formatDistanceToNow';

import "./ha-schedule.js";

export class HackpalachiaApp extends LitElement {
    static get styles() {
      return css`
        :host {
        }

        .container {
          display: flex;
          flex-direction: row;
          margin: 0 auto;
          width: 100%;
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
      this.schedule = [
        {
            "begin": new Date('March 4, 2023 10:00:00'),
            "end": new Date('March 4, 2023 11:59:00'),
            "text": "Check-in and registration begin",
        },
        {
            "begin": new Date('March 4, 2023 12:00:00'),
            "end": new Date('March 4, 2023 12:59:00'),
            "text": "Opening ceremony and keynote speaker",
        },
        {
            "begin": new Date('March 4, 2023 13:00:00'),
            "end": new Date('March 4, 2023 13:59:00'),
            "text": "Opening ceremony and keynote speaker",
        },
        {
            "begin": new Date('March 4, 2023 14:00:00'),
            "end": new Date('March 5, 2023 10:00:00'),
            "text": "Hacking begins",
        },
        {
            "begin": new Date('March 4, 2023 19:00:00'),
            "end": new Date('March 5, 2023 7:59:00'),
            "text": "Dinner",
        },
        {
            "begin": new Date('March 5, 2023 8:00:00'),
            "end": new Date('March 5, 2023 9:59:00'),
            "text": "Breakfast",
        },
        {
            "begin": new Date('March 5, 2023 10:00:00'),
            "end": new Date('March 5, 2023 10:59:00'),
            "text": "Hacking ends, project submissions due",
        },
        {
            "begin": new Date('March 5, 2023 11:00:00'),
            "end": new Date('March 5, 2023 11:59:00'),
            "text": "Project presentations and judging",
        },
        {
            "begin": new Date('March 5, 2023 12:00:00'),
            "end": new Date('March 5, 2023 13:00:00'),
            "text": "Closing ceremony and award",
        },
      ];
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

    _linearSearchUpcoming(currentTime) {
        let lastItemWithoutGreaterThan = -1;
        for (let i = 0; i < this.schedule; i++) {
            if (currentTime <= this.schedule[i].begin) {
                lastItemWithoutGreaterThan = i;
            }
            if (currentTime > this.schedule[i].begin) {
                return this.schedule[lastItemWithoutGreaterThan];
            }
        }
        return null;
    }
  
    render() {
      const scheduleItems = this.schedule.map((item) => { return html`<schedule-item .begin=${item.begin} .end=${item.end} text=${item.text}></schedule-item>` ;});
      const timeLeft = formatDistanceToNow(this._hackEndTime);

      return html`<div class="container">
        <img src="image/hackpalachia-logo.png" width="300px" height="300px" />
        <div>
          <h2>Time until submission: ${timeLeft}</h2>
          <ha-schedule></ha-schedule>
        </div>
      </div>
      `;
    }
  }
  
  window.customElements.define('ha-app', HackpalachiaApp);
  