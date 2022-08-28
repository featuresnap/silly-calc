export default class CalculatorKeypad extends HTMLElement {

    constructor() {
        super();
    }
}

if (!customElements.get('calculator-keypad')) {
    customElements.define('calculator-keypad', CalculatorKeypad);
}