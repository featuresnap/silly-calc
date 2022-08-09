/**
 * @jest-environment jsdom
 */
import {LedDigit} from '../../../components/led-digit/led-digit';
import {screen} from '@testing-library/dom';

test('create LedDigit', () => {
    document.body.appendChild(document.createElement('led-digit'));
    const digit = document.querySelector('led-digit');
    expect(digit.children).toHaveLength(9);
    expect(digit.allSegments).toHaveLength(8);
    digit.theSegments = 'a';
});