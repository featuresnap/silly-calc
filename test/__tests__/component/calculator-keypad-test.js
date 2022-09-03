/**
 * @jest-environment jsdom
 */
import { CalculatorKeypad } from '../../../components/calculator-keypad/calculator-keypad';
import '@testing-library/jest-dom';
import userEvent from '@testing-library/user-event';

let keypad;
let mediator;
let captured;

beforeAll(() => {
    keypad = document.body.appendChild(document.createElement('calculator-keypad'));

    mediator = {
        tell: e => captured = e
    };

    keypad.registerMediator(mediator);
});

beforeEach(() => {
    captured = null;
});

test('exists', () => {
    const keypad = document.body.appendChild(document.createElement('calculator-keypad'));
    expect(keypad).toBeVisible();
});

test('clicking "All Clear" button publishes all clear', async () => {

    let user = userEvent.setup();

    const allClear = keypad.button['AC'];
    await user.click(allClear);

    expect(captured).toEqual({ type: 'keyPress' });

});

afterAll(() => keypad.remove());