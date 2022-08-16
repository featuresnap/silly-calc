function toSegmentsRaw(expr) {

    if (expr === '.') { return 'h'; }
    if (expr === '1') { return 'bc'; }
    if (expr === '1.') { return 'bch'; }
    return '';
}

function toSegments(expr) {
    return [toSegmentsRaw(expr)];
}

export { toSegments };