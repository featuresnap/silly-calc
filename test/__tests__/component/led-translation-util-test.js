import { toSegments } from '../../../components/led-display/led-translation-util';

test('get segments for empty digits', () => {
    const value = toSegments('');
    expect(value).toBeEmpty();
});

test('decimal point', () => {
    const value = toSegments('.');
    expect(value).toEqual(['h']);
});
