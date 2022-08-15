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
        this.innerHTML = Template.render({});

        this.topSegment = this.querySelector(".top.segment");
        this.topLeftSegment = this.querySelector(".top-left.segment");
        this.topRightSegment = this.querySelector(".top-right.segment");
        this.centerSegment = this.querySelector(".center.segment");
        this.bottomLeftSegment = this.querySelector(".bottom-left.segment");
        this.bottomRightSegment = this.querySelector(".bottom-right.segment");
        this.bottomSegment = this.querySelector(".bottom.segment");
        this.decimalPointSegment = this.querySelector('.decimal.segment');

        this.allSegments = [
            this.topSegment,
            this.topLeftSegment,
            this.topRightSegment,
            this.centerSegment,
            this.bottomLeftSegment,
            this.bottomRightSegment,
            this.bottomSegment,
            this.decimalPointSegment
        ];
    }

    attributeChangedCallback(name, oldValue, newValue) {
        console.log(`attribute ${name} changed from ${oldValue} to ${newValue}`);
    }

    set value(newValue) {
        console.log(`value changed from ${this.value} to ${newValue}`);
        this.value = newValue;
    }

    clear() {
        for (const segment of this.allSegments) {
            segment.classList.remove('on');
        }
    }

    set segments(segmentsTurnedOn) {
        this.clear();
        for (const segment of segmentsTurnedOn) {
            switch (segment) {
                case 'a': { this.topSegment.classList.add('on'); break; };
                case 'b': { this.topRightSegment.classList.add('on'); break; }
                case 'c': { this.bottomRightSegment.classList.add('on'); break; }
                case 'd': { this.bottomSegment.classList.add('on'); break; }
                case 'e': { this.bottomLeftSegment.classList.add('on'); break; }
                case 'f': { this.topLeftSegment.classList.add('on'); break; }
                case 'g': { this.centerSegment.classList.add('on'); break; }
                case 'h': { this.decimalPointSegment.classList.add('on'); break; }

                default: break;
            }
        }
    }

    get segments() {
        let onSegments = '';
        if (this.topSegment.classList.contains('on')) { onSegments = 'a';}
        if (this.topRightSegment.classList.contains('on')) { onSegments += 'b'; }
        if (this.bottomRightSegment.classList.contains('on')) { onSegments += 'c'; }
        if (this.bottomSegment.classList.contains('on')) { onSegments += 'd'; }
        if (this.bottomLeftSegment.classList.contains('on')) { onSegments += 'e'; }
        if (this.topLeftSegment.classList.contains('on')) { onSegments += 'f'; }
        if (this.centerSegment.classList.contains('on')) { onSegments += 'g'; }
        if (this.decimalPointSegment.classList.contains('on')) { onSegments += 'h'; }        
        return onSegments;
    }

}

if (!customElements.get('led-digit')) {
    customElements.define('led-digit', LedDigit);
}