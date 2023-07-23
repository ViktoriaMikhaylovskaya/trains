import { api } from "../../store"
import { ITrainInfo } from "./interfaces";

const URL = 'https://gist.githubusercontent.com/orlov-oleg-developer/49f08290d1c59a6851e0a0581900e2a7/raw/e5daf87338f3c75165f8edf4c76cc7ec9c2b4aa9/gistfile1.json'

class TrainsApi {
    async getTrainsInfo(): Promise<ITrainInfo[]> {
        return api.get(URL);
    }
}

export default TrainsApi