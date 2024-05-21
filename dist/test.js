import { Cargo } from "./Model/Cargo.js";
class DisplayElement {
    constructor(idTemplateElement, idHostElement) {
        // this.templateElement = <HTMLTemplateElement>document.getElementById(idTemplateElement)!;
        this.templateElement = document.getElementById(idTemplateElement);
        this.hostElement = document.getElementById(idHostElement);
        //Ajouter le template element dans le host element
        this.attach();
        this.styles = [];
    }
    attach() {
        // this.hostElement.innerHTML = "";
        this.hostElement.appendChild(this.templateElement.content.cloneNode(true));
    }
}
const header = new DisplayElement("header", "app");
const main = new DisplayElement("main", "app");
// console.log(somme(12,3))
const c = new Cargo();
///references: src="./Model/Cargo.js"/
