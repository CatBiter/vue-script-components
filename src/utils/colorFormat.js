// RGBA 转 HEX
export function rgbaToHex(r, g, b, a) {
    const hex = ((1 << 24) + (r << 16) + (g << 8) + b).toString(16).slice(1);
    if (a < 1) {
        const alphaHex = Math.round(a * 255).toString(16).padStart(2, '0');
        return `#${hex}${alphaHex}`;
    }
    return `#${hex}`; // 不带 alpha
}

// HEX 转 RGBA
export function hexToRgba(hex, alpha = 1) {
    let r, g, b;
    hex = hex.replace(/^#/, '');
    if (hex.length === 3) {
        r = parseInt(hex[0] + hex[0], 16);
        g = parseInt(hex[1] + hex[1], 16);
        b = parseInt(hex[2] + hex[2], 16);
    } else if (hex.length === 6) {
        r = parseInt(hex.slice(0, 2), 16);
        g = parseInt(hex.slice(2, 4), 16);
        b = parseInt(hex.slice(4, 6), 16);
    } else {
        throw new Error('Invalid HEX color.');
    }
    return `rgba(${r}, ${g}, ${b}, ${alpha})`;
}