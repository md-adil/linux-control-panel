import { extname } from "path";
import { opendir, readFile } from "fs/promises";
import GtkIcons from 'node-gtk-icon-lookup';
import xdg from "./xdg";
import * as ini from "ini";

export class Application {
    static async * fetchAll() {
        const isIconSupported = await GtkIcons.isIconLookupSupported();
        for (const dir of xdg.dataDirs) {
            try {
                for await (const file of await opendir(`${dir}/applications`)) {
                    if (!file.isFile()) {
                        continue;
                    }
                    if (extname(file.name) !== ".desktop") {
                        continue;
                    }
                    try {
                        const application = new Application(await readFile(`${dir}/applications/${file.name}`, {
                            encoding: "utf-8"
                        }));
                        application.isLookupSupported = isIconSupported;
                        yield  application;
                    } catch (err) {
                        // ignore
                    }
                }
            } catch(err) {
                // ignore error
            }
        }
    }
    protected data: Record<string, any>;
    public isLookupSupported: boolean = false;
    constructor(information: string) {
        this.data = ini.parse(information)['Desktop Entry'];
    }

    public uninstall() {

    }

    get name() {
        return this.data.Name;
    }

    icon(size = 32) {
        if (this.isLookupSupported && this.data.Icon) {
            return GtkIcons.getIconFilePath(this.data.Icon, size);
        }
    }

    get type() {
        return this.data.Type;
    }

    get categories() {
        return this.data.Categories?.split(";") ?? [];
    }

    get exec() {
        return this.data.Exec;
    }
}

