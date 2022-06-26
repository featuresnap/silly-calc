import Template from "./template.js";

class LedDigit extends HTMLElement {

    constructor() {
        super();
        this._value = "";
    }

    static get observedAttributes() {
        return ['value'];
    }

    connectedCallback() {
        this.innerHTML = Template.render({});
        this.topSegment = this.querySelector(".top.segment");
        this.topLeftSegment = this.querySelector(".top-left.segment");
        this.topRightSegment = this.querySelector(".top-right.segment");
        this.middleSegment = this.querySelector(".middle.segment");
        this.bottomLeftSegment = this.querySelector(".bottom-left.segment");
        this.bottomRightSegment = this.querySelector(".bottom-right.segment");
        this.bottomSegment = this.querySelector(".bottom.segment");      
    }

    attributeChangedCallback(name, oldValue, newValue) {
        console.log(`attribute ${name} changed from ${oldValue} to ${newValue}`);
    }

    set value(newValue) {
        
    }
    
}

if (!customElements.get('led-digit')) {
    customElements.define('led-digit', LedDigit);
}