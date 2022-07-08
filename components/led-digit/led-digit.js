import Template from "./template.js";

export default class LedDigit extends HTMLElement {

    constructor() {
        super();
        this._value = "";
    }

    static get observedAttributes() {
        return ['value'];
    }

    connectedCallback() {
        this.root = this.attachShadow({mode: 'open'});
        this.root.innerHTML = Template.render({});
        
        this.topSegment = this.root.querySelector(".top.segment");
        this.topLeftSegment = this.root.querySelector(".top-left.segment");
        this.topRightSegment = this.root.querySelector(".top-right.segment");
        this.centerSegment = this.root.querySelector(".center.segment");
        this.bottomLeftSegment = this.root.querySelector(".bottom-left.segment");
        this.bottomRightSegment = this.root.querySelector(".bottom-right.segment");
        this.bottomSegment = this.root.querySelector(".bottom.segment");  
        
        this.segments = [
            this.topSegment, 
            this.topLeftSegment, 
            this.topRightSegment, 
            this.centerSegment, 
            this.bottomLeftSegment, 
            this.bottomRightSegment, 
            this.bottomSegment
        ]
    }

    attributeChangedCallback(name, oldValue, newValue) {
        console.log(`attribute ${name} changed from ${oldValue} to ${newValue}`);
    }

    set value(newValue) {
        console.log(`value changed from ${this.value} to ${newValue}`);
        this.value = newValue;
    }

    clear() {
        for (const segment of this.segments) {
            segment.classList.remove('on');
        }
    }
    
}

if (!customElements.get('led-digit')) {
    customElements.define('led-digit', LedDigit);
}