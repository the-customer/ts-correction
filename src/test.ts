import { Cargo, somme } from "./Model/Cargo.js";
class DisplayElement {
    templateElement: HTMLTemplateElement;
    hostElement: HTMLDivElement;
    styles: string[];
    constructor(idTemplateElement: string,idHostElement: string) {
        // this.templateElement = <HTMLTemplateElement>document.getElementById(idTemplateElement)!;
        this.templateElement = document.getElementById(idTemplateElement)! as HTMLTemplateElement;
        this.hostElement = document.getElementById(idHostElement)! as HTMLDivElement;
        //Ajouter le template element dans le host element
        this.attach();
        this.styles = [];
    }

    attach(){
        // this.hostElement.innerHTML = "";
        this.hostElement.appendChild(this.templateElement.content.cloneNode(true));
    }
}


const header = new DisplayElement("header","app");
const main = new DisplayElement("main","app");


// console.log(somme(12,3))
const c =  new Cargo()
///references: src="./Model/Cargo.js"/
