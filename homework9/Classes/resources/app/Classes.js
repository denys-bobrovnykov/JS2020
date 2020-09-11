// ==================  Marker classes ===================== //
class Marker {
    constructor(color, ink) {
        this.color = color;
        this.ink = ink < 0 ? 0 : ink > 100 ? 100 : ink;
    }
    print(string) {
        string.fontcolor(this.color);
        let result = '';
        for ( const char of string ) {
            if ( this.ink <= 0 ) {
                console.log(`%c${result}...Out of ink`, `color:${this.color}`);
                return;
            };
            if ( !char.match(/\s/) ) {
                 this.ink -= 0.5;
            }
            result += char;
        }
        console.log(`%c${result}`+ ` |ink ${this.ink}|`, `color:${this.color}`);
    }
}
class MarkerRefillable extends Marker {
    refill() {
        this.ink = 100;
    }
}
// ========================================================= //

// ----------------------- Demo ---------------------------- //
console.log('------------- Markers demo ----------------');

const refillable = new MarkerRefillable('red', 110);
console.log('Trying to set ink 110%... const refillable = new MarkerRefillable("red", 110)');
console.log('Set auto ->',refillable.ink);

refillable.print('Print print print........print');
refillable.print('Print again.')
refillable.print('...and again.');

console.log('Refill...');

refillable.refill();

refillable.print('Print after refill.');

// ---------------------------------------------------------- //

// ================== Circle class ========================= //
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

// --------------------------- Demo ----------------------- //
console.log('-------------- Cricle demo ----------------');

const circle = new Circle();

console.log('const circle = new Circle()');
console.log('circle.setRadius(10)');

circle.setRadius(10);

console.log('circle.getRadius ->', circle.getRadius());
console.log('circle.area ->',circle.area());
console.log('circle.length ->',circle.length());
