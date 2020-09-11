// -------------------  Marker classes ------------------- //
export class Marker {
    constructor(color, ink) {
        this.color = color;
        this.ink = ink < 0 || ink > 100 ? 0 : ink;
    }

    print(string) {
        let result = '';
        for ( const char of string ) {
            if ( this.ink <= 0 ) {
                return `<span style="color: ${this.color};">${result}</span> |_OUT OF INK!!_|`;
            };
            if ( !char.match(/\s/) ) {
                 this.ink -= 0.5;
            }
            result += char;
        }
        return `<span style="color: ${this.color};">${result}</span>`;
    }
}
export class MarkerRefillable extends Marker {
    refill() {
        this.ink = 100;
    }
}
// ========================================================= //

// -------------------- Circle class ------------------------ //
export class Circle {
    _radius = 0;
    setRadius(value) {
        this._radius = value;
    }
    getRadius() {
        return this._radius;
    }
    getDiameter() {
        return this._radius * 2;
    }
    area() {
        return ((this._radius ** 2) * Math.PI).toFixed(1);
    }
    length() {
        return (this._radius * 2 * Math.PI).toFixed(1);
    }
}
// ========================================================= //
