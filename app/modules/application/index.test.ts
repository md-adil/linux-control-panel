import "regenerator-runtime/runtime";
import { Application } from "./";

test("Application FetchAll", async () => {
    let counter = 0;
    for await (const application of Application.fetchAll()) {
        console.log(application.name, application.icon());
    }
});
