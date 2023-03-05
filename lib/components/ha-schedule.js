import {LitElement, html, css} from 'lit';

import "./schedule-item.js";

export class HackpalachiaSchedule extends LitElement {
    static get styles() {
      return css`
        :host {
          
        }
      `;
    }
  
    static get properties() {
      return {
        _currentTime: { type: Object, state: true },
      };
    }
  
    constructor() {
      super();
      this._currentTime = new Date();
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
            "text": "Team formation and lunch",
        },
        {
            "begin": new Date('March 4, 2023 14:00:00'),
            "end": new Date('March 5, 2023 10:00:00'),
            "text": "Hacking begins",
        },
        {
            "begin": new Date('March 4, 2023 19:00:00'),
            "end": new Date('March 4, 2023 7:59:00'),
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
  
    render() {
      const scheduleItems = this.schedule.map((item) => { return html`<schedule-item .begin=${item.begin} .end=${item.end} text=${item.text}></schedule-item>` ;})
      return html`
        <h2>Schedule</h2>
        <div style="display: flex; flex-direction: column;">
          ${scheduleItems}
        </div>
      `;
    }
  }
  
  window.customElements.define('ha-schedule', HackpalachiaSchedule);
  