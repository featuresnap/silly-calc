/**
 * @jest-environment jsdom
 */
 import {CalculatorKeypad} from '../../../components/calculator-keypad/calculator-keypad';
 import '@testing-library/jest-dom/extend-expect';
 
 test('exists', () => {
    const keypad = document.body.appendChild(document.createElement('calculator-keypad'));
    expect(keypad).toBeVisible();
 });