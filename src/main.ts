import * as Marionette from "backbone.marionette";
import "aurelia-polyfills";
import {autoinject, Container, PLATFORM, Aurelia} from "aurelia-framework";
import {MasterView} from "./master-view";
import "aurelia-bootstrapper";

@autoinject
export class Main extends Marionette.Application {

   private appRegion: Marionette.Region;

    constructor(private masterView: MasterView) {
        super();
        this.on("start", () => {
            this.appRegion.show(this.masterView);
        });
    }

    public regions(): any {
        const regions: any = {
            appRegion: "#application-region"
        };
        return regions;
    }
}

export async function configure(aurelia: Aurelia) {
    aurelia.use
        .standardConfiguration()
        .globalResources([PLATFORM.moduleName("custom-element")]);

    const container = new Container();
    container.makeGlobal();
    container.registerInstance("aurelia", aurelia);
    container.get(Main).start();
}
