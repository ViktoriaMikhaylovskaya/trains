export interface ICharacteristic {
    engineAmperage: number;
    force: number;
    speed: number;
}

export interface ITrainInfo {
    name: string;
    description: string;
    characteristics: ICharacteristic[];
}