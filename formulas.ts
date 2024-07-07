const calcRoots: (a: number, b: number, c: number) => number | string = (a, b, c) => {
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



const calcPressure = (p: number, g: number, h: number): number => {
    const pressure: number = p * g * h;
    return pressure;
};