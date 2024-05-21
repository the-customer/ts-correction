type ToxicityType = 1|2|3|4|5|6|7|8|9|10



export abstract class Cargo {
    static readonly max = 10;
    products: Product[];
    constructor(public distance:number) {
        this.products = [];
    }
    abstract addProduct(product:Product): void;
}

export class Air extends Cargo {
    constructor(distance:number) {
        super(distance);
    }
    addProduct(product: Material|Food): void {
        if (product instanceof Chimical){
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
abstract class Product {
    // name: string;
    // weight: number;
    // constructor(name: string, weight: number) {
    //     this.name = name;
    //     this.weight = weight;
    // }
    // private test:number;
    constructor(private _name: string,private _weight: number) {
    }

    get name():string {
            return this._name;
    }

    setName(value: string) {
        
        this._name = value;
    }
}





class Chimical extends Product {
    constructor(name:string,weight:number, private _toxicity:ToxicityType) {
        super(name,weight);
    }
}

class Food extends Product {
    constructor() {
        super();
    }
}

abstract class Material extends Product {
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

const p = new Chimical("poudre mbaute",100,7);
const p1 = new Food();

