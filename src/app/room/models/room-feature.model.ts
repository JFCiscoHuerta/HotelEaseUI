export class RoomFeature {
    id?: number;
    serviceName: string;
    servicePrice: number;

    constructor(serviceName: string, servicePrice: number, id?: number) {
        this.serviceName = serviceName;
        this.servicePrice = servicePrice;
        this.id = id;
    }
}

export class RoomFeatureRegisterDTO {
    serviceName: string;
    servicePrice: number;

    constructor(serviceName: string, servicePrice: number) {
        this.serviceName = serviceName;
        this.servicePrice = servicePrice;
    }
}