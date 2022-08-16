/**
 * @jest-environment jsdom
 */
import {LedDigit} from '../../../components/led-digit/led-digit';
import '@testing-library/jest-dom/extend-expect';

const digit = document.body.appendChild(document.createElement('led-digit'));

beforeEach(() => digit.clear());

test('contains 8 segments', () => {
    expect(digit.allSegments).toHaveLength(8);
});

test('illuminate no segments', () => {
    digit.segments = '';
    const onSegments = digit.querySelectorAll('.segment.on');
    expect(Array.from(onSegments)).toEqual([]);
});

test('illuminate "a" segment', () => {
    digit.segments = 'a';
    const onSegment = digit.querySelector('.segment.on');
    expect(onSegment).toBe(digit.topSegment);
});

test('illuminate "b" and "c" segments', () => {
    digit.segments = 'bc';
    const onSegments = digit.querySelectorAll('.segment.on');
    expect(onSegments).toContainAllValues([digit.topRightSegment, digit.bottomRightSegment]);
});

test('illuminate "c" and "d" segments', () => {
    digit.segments = "cd";
    const onSegments = digit.querySelectorAll('.segment.on');
    expect(onSegments).toContainAllValues([digit.bottomRightSegment, digit.bottomSegment]);
});

test('illuminate "e", "f" and "g" segments', () => {
    digit.segments = "efg";
    const onSegments = digit.querySelectorAll('.segment.on');
    expect(onSegments).toContainAllValues([digit.bottomLeftSegment, digit.topLeftSegment, digit.centerSegment]);
});

test('segments is empty if no segments turned on', () => {
    digit.clear();
    expect(digit.segments).toEqual('');
});

test('segments reflects turned on segments', () => {
    digit.segments = 'efgh';
    expect(digit.segments).toEqual('efgh');
});

test('segments reflects turned on segments - more segments', () => {
    digit.segments = 'abcd';
    expect(digit.segments).toEqual('abcd');
});


