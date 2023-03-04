import {LitElement, html, css} from 'lit';

export class HackpalachiaSponsors extends LitElement {
  static get styles() {
    return css`
      :host {
      }
    `;
  }

  static get properties() {
    return {
      _currentTime: { type: Object, state: true},
      _currentSponsorIdx: { type: Number, state: true},
    };
  }

  constructor() {
    super();
    this._currentTime = new Date();
    this._currentSponsorIdx = 0;
    this.sponsorList = [
      {
        name: "center-entreprenurship",
        path: 'image/center-entreprenurship.webp',
      },
      {
        name: "earth-hacks",
        path: 'image/earth-hacks-logo.webp',
      },
      {
        name: "echo3d",
        path: 'image/echo3d-logo.webp',
      },
      {
        name: "github",
        path: 'image/github-logo.webp',
      },
      {
        name: "google-cloud",
        path: 'image/google-cloud-logo.webp',
      },
      {
        name: "mlh",
        path: 'image/mlh-logo-color.webp',
      },
      {
        name: "",
        path: 'image/oue-logo.webp',
      },
      {
        name: "stand-out-stickers",
        path: 'image/stand-out-stickers-logo.webp',
      },
      {
        name: "wolfram",
        path: 'image/wolfram-logo.webp',
      },
    ];
  }

  connectedCallback() {
    super.connectedCallback();
    this.intervalTimerId = setInterval(() => {
      this._currentTime = new Date();
      if (this._currentSponsorIdx + 1 >= this.sponsorList.length) {
        this._currentSponsorIdx = 0;
      } else {
        this._currentSponsorIdx = this._currentSponsorIdx + 1;
      }
    }, 30000);
  }

  disconnectedCallback() {
    super.disconnectedCallback();
    if (this.intervalTimerId) {
      clearInterval(this.intervalTimerId);
    }
  }

  _getSponsorImgPath() {
    return this.sponsorList[this._currentSponsorIdx];
  }

  render() {
    const sponsor = this._getSponsorImgPath();
    return html`<div>
      <h1>Sponsors</h1>
      <img src=${sponsor.path} width="300px"/>
    </div> `;
  }
}

window.customElements.define('ha-sponsors', HackpalachiaSponsors);
