/**
 * @jest-environment jsdom
 */
import { LedDisplay } from '../../../components/led-display/led-display';
import '@testing-library/jest-dom/extend-expect';

test('render', () => {
    const display = document.body.appendChild(document.createElement('led-display'));
    expect(display).toBeVisible();
});

