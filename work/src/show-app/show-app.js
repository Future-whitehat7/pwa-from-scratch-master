import {html, PolymerElement} from '@polymer/polymer/polymer-element.js';

/**
 * @customElement
 * @polymer
 */
class ShowApp extends PolymerElement {
  static get template() {
    return html`
          `;
  }
  static get properties() {
    return {
      prop1: {
        type: String,
        value: 'show-app'
      }
    };
  }
}

window.customElements.define('show-app', ShowApp);
