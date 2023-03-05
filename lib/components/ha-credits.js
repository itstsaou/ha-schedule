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
          <li>(name not learn)</li>
          <li>(name not learn)</li>
          <li>(name not learn)</li>
        </ul>
        <h2>Mentors</h2>
        <ul>
          <li>Paul Benedict - Executive Director, Center for Entrepreneurship</li>
          <li>Krystal Geyer - Assistant Director, Center for Entrepreneurship</li>
        </ul>
        <h2>Judges</h2>
        <ul>
          <li>Stacy Strauss - Director Ohio University Innovation Center</li>
          <li>Lindsey Rudibaugh - Executive Director for Ohio University Experiential Learning</li>
          <li>Chad Mourning - Assistant Professor. Electrical Engineering and Computer Science, Ohio University</li>
          <li>Paul Benedict - Executive Director, Center for Entrepreneurship</li>
          <li>Krystal Geyer- Assistant Director, Center for Entrepreneurship</li>
          <li>Maria Dunning - Hackathon Community Manager @ Major League Hacking (MLH)</li>
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
          <li>Major League Hacking (MLH)</li>
          <li>GitHub</li>
          <li>Wolfram Language</li>
          <li>echo3D</li>
          <li>Stand OUT Stickers</li>
          <li>Earth Hacks</li>
          <li>Google Cloud</li>
        </ul>
        <h1>HackPalachia 2023</h1>
        <p>Thank you for participating!</p>
        <p>See you next year!</p>
      `;
    }
  }
  
  window.customElements.define('ha-credits', HackpalachiaCredits);
  