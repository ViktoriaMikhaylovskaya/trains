import TrainsApi from "./trains";

class Api {
    trains: TrainsApi;

    constructor() {
        this.trains = new TrainsApi();
    }
}

export default new Api();
