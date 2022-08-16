import { toSegments } from '../../../components/led-display/led-translation-util';

test('get segments for empty digits', () => {
    const value = toSegments('');
    expect(value[0]).toBeEmpty();
});

test('render decimal point', () => {
    const value = toSegments('.');
    expect(value).toEqual(['h']);
});

test('render 1', () => {
    const value = toSegments('1');
    expect(value[0]).toContainAllValues(['b', 'c']);
});

test('render 1.', () => {
    const value = toSegments('1.');
    expect(value[0]).toContainAllValues(['b', 'c', 'h']);
});

// test('render 4', () => {
//     const value = toSegments('4.');
//     expect(value[0]).toContainAllValues('bcfg')
// });
