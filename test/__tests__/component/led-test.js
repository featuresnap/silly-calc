/**
 * @jest-environment jsdom
 */
import {LedDigit} from '../../../components/led-digit/led-digit';
import {screen} from '@testing-library/dom';
import '@testing-library/jest-dom/extend-expect';

test('contains 8 segments', () => {
    const digit = document.body.appendChild(document.createElement('led-digit'));
    expect(digit.allSegments).toHaveLength(8);
});

test('illuminate "a" segment', () => {
    const digit = document.body.appendChild(document.createElement('led-digit'));
    digit.segments = 'a';
    const onSegments = digit.querySelectorAll('.segment.on');
    expect(onSegments[0]).toHaveClass('top');
});

test('illuminate "b" segment', () => {
    const digit = document.body.appendChild(document.createElement('led-digit'));
    digit.segments = 'b';
    const onSegments = digit.querySelectorAll('.segment.on');
    expect(onSegments[0]).toHaveClass('top-right');
});

test('illuminate "c" and "d" segments', () => {
    const digit = document.body.appendChild(document.createElement('led-digit'));
    digit.segments = "cd";
    const onSegments = digit.querySelectorAll('.segment.on');
    expect(onSegments).toContainAllValues([digit.bottomRightSegment, digit.bottomSegment]);
});

test('illuminate "e", "f" and "g" segments', () => {
    const digit = document.body.appendChild(document.createElement('led-digit'));
    digit.segments = "efg";
    const onSegments = digit.querySelectorAll('.segment.on');
    expect(onSegments).toContainAllValues([digit.bottomLeftSegment, digit.topLeftSegment, digit.centerSegment]);
});


