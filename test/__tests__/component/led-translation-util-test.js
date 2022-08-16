import { toSegments , toSegmentsRaw} from '../../../components/led-display/led-translation-util';

test('get segments for empty digits', () => {
    const value = toSegmentsRaw('');
    expect(value).toBeEmpty();
});

test('render decimal point', () => {
    const value = toSegmentsRaw('.');
    expect(value).toEqual('h');
});

test('render 1', () => {
    const value = toSegmentsRaw('1');
    expect(value).toContainAllValues(['b', 'c']);
});

test('render 1.', () => {
    const value = toSegmentsRaw('1.');
    expect(value).toContainAllValues(['b', 'c', 'h']);
});

// test('render 4', () => {
//     const value = toSegments('4.');
//     expect(value[0]).toContainAllValues('bcfg')
// });
