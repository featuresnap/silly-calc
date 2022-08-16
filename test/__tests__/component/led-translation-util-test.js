import { toSegments } from '../../../components/led-display/led-translation-util';

test('get segments for empty digits', () => {
    const value = toSegments('');
    expect(value).toBeEmpty();
});

test('render decimal point', () => {
    const value = toSegments('.');
    expect(value).toEqual(['h']);
});

test('render 1.', () => {
    const value = toSegments('1.');
    expect(value[0]).toContainAllEntries('bch');
});
