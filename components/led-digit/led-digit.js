import Template from "./template.js";

class LedDigit extends HTMLElement {
	constructor() {
        super();
    }
    connectedCallback() {
        this.innerHTML = Template.render({});
    }
}
if (!customElements.get('led-digit')) {
   customElements.define('led-digit', LedDigit);
}