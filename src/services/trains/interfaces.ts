export interface ITrainInfo {
    name: string;
    description: string;
    characteristics: {
        engineAmperage: number;
        force: number;
        speed: number;
    }[];
}