/**
 * @jest-environment jsdom
 */

// import {screen} from '@testing-library/dom'
import {LedDigit} from '../../../components/led-digit/led-digit';

test('create LedDigit', () => {
    const digit = document.createElement('LedDigit');
    expect(digit).not.toBeNull();
});