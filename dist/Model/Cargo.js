export class Cargo {
    constructor(distance) {
        this.distance = distance;
        this.products = [];
    }
}
Cargo.max = 10;
export class Air extends Cargo {
    constructor(distance) {
        super(distance);
    }
    addProduct(product) {
        if (product instanceof Chimical) {
            console.log("Adding a chimimal Product in bad Cargo");
            return;
        }
        this.addProduct(product);
    }
}
class Maritime {
    constructor() {
    }
}
class Road {
    constructor() {
    }
}
//----------------------------------------------------------------
class Product {
    // name: string;
    // weight: number;
    // constructor(name: string, weight: number) {
    //     this.name = name;
    //     this.weight = weight;
    // }
    // private test:number;
    constructor(_name, _weight) {
        this._name = _name;
        this._weight = _weight;
    }
    get name() {
        return this._name;
    }
    setName(value) {
        this._name = value;
    }
}
class Chimical extends Product {
    constructor(name, weight, _toxicity) {
        super(name, weight);
        this._toxicity = _toxicity;
    }
}
class Food extends Product {
    constructor() {
        super();
    }
}
class Material extends Product {
    constructor() {
        super();
    }
}
class Fragile extends Material {
    constructor() {
        super();
    }
}
class Unbreakable extends Material {
    constructor() {
        super();
    }
}
const c1 = new Air(1234);
const p = new Chimical("poudre mbaute", 100, 7);
const p1 = new Food();
