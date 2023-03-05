import {LitElement, html, css} from 'lit';

export class HackpalachiaCredits extends LitElement {
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
      return html`
        <h1>(unofficial) Credits</h1>
        <h2>The Team</h2>
        <ul>
          <li>Parwinder Singh</li>
          <li>Brianne Furness</li>
          <li>Ankita Bansode</li>
          <li>(Buff Person)</li>
          <li>("Thank you, boss" Person)</li>
          <li>(named not learn)</li>
          <li>(named not learn)</li>
          <li>(named not learn)</li>
        </ul>
        <h2>Mentors</h2>
        <ul>
          <li>Paul Benedict</li>
          <li>Krystal Geyer</li>
        </ul>
        <h2>Judges</h2>
        <ul>
          <li>Stacy Strauss - Director Ohio University Innovation Center</li>
          <li>Lindsey Rudibaugh - Executive Director for Ohio University Experiential Learning</li>
          <li>Chad Mourning - Assistant Professor. Electrical Engineering and Computer Science, Ohio University</li>
          <li>Paul Benedict</li>
          <li>Krystal Geyer</li>
          <li>Maria Dunning - Major League Hacking (MLH)</li>
        </ul>
        <h2>Major League Hacking (MLH) - On-site Contact</h2>
        <ul>
          <li>Maria Dunning</li>
        </ul>
        <h2>Volunteers</h2>
        <ul>
          <li>Ananya Goel</li>
          <li>Samantha Phat</li>
        </ul>
        <h2>Photography</h2>
        <ul>
          <li>Roshi</li>
        </ul>
        <h2>Sponsors</h2>
        <ul>
          <li>The Center for Entrepreneurship</li>
          <li>Ohio University Entrepreneurs</li>
          <li>Major League Hacking</li>
          <li>GitHub</li>
          <li>Wolfram Language</li>
          <li>echo3D</li>
          <li>Google Cloud</li>
          <li>Stand OUT Stickers</li>
          <li>Earth Hacks</li>
        </ul>
        <h1>HackPalachia 2023</h1>
        <p>Thank you for participating!</p>
        <p>See you next year!</p>
      `;
    }
  }
  
  window.customElements.define('ha-credits', HackpalachiaCredits);
  