import * as Marionette from "backbone.marionette";
import { Container } from "aurelia-dependency-injection";
import { PLATFORM } from "aurelia-framework";

const template = require<string>("./master-view.html");

export class MasterView extends Marionette.View<any> {

    constructor() {
        super();
        (this as any).template = template;
    }

    public async onShow() {
        const aurelia = Container.instance.get("aurelia");
        await aurelia.start();
        aurelia.enhance(document.querySelector("#viewport"));
    }
}
