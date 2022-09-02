export default class CalculatorKeypad extends HTMLElement {

    constructor() {
        super();
    }

    connectedCallback() {
        this.buttons = {};
        const root = this;
        const allClearButton = document.createElement('button');
        allClearButton.innerText = "AC";
        this.button.AC = allClearButton;
        root.appendChild(allClearButton);
        allClearButton.addEventListener('click', () => {
            if (this.mediator) {
                this.mediator.tell({'type': 'keyPress'});
            }
        })
        
    }

    registerMediator(mediator) {
        this.mediator = mediator;
    }

    get button() {
        return this.buttons;
    }
}

if (!customElements.get('calculator-keypad')) {
    customElements.define('calculator-keypad', CalculatorKeypad);
}