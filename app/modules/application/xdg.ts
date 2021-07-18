export class XDG {
    get dataDirs() {
        return process.env.XDG_DATA_DIRS?.split(":");
    }
}


const xdg = new XDG();
export default xdg;


