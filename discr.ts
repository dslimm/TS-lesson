const calcRoots: number = (
    a: number,
    b: number,
    c: number
): number | string => {
    const d: number = b * b - 4 * a * c;

    if (d < 0) {
        return "Нет корней";
    } else if (d === 0) {
        const x: number = -b / (2 * a);
        return `Один корень: ${x}`;
    } else {
        const x1: number = (-b + Math.sqrt(d)) / (2 * a);
        const x2: number = (-b - Math.sqrt(d)) / (2 * a);
        return `Два корня: ${x1} и ${x2}`;
    }
};
