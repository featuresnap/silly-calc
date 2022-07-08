import Template from './template.js'
import LedDigit from '../led-digit/led-digit.js';

export default class LedDisplay extends HTMLElement {

    constructor() {
        super();
    }

    connectedCallback() {
        this.root = this.attachShadow({mode: 'open'});
        this.root.innerHTML = Template.render({});
    }

}

if (!customElements.get('led-display')) {
    customElements.define('led-display', LedDisplay);
}