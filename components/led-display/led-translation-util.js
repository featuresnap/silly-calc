function toSegments(expr) {

    if (expr === '.') { return 'h'; }
    if (expr === '1') { return 'bc'; }
    if (expr === '1.') { return 'bch'; }
    return '';
}

export { toSegments};