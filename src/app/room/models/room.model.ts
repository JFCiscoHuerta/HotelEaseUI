import { RoomType } from "./room-type.enum";
import { RoomState } from "./room-state.enum";
import { RoomImage, RoomImageRegisterDTO } from "./room-image.model";
import { RoomFeature, RoomFeatureRegisterDTO } from "./room-feature.model";

export class Room {
    id!: number | null;
    roomNumber: number;
    priceByNight: number;
    roomType: RoomType;
    roomStatus: RoomState;
    roomImages: RoomImage[];
    roomFeatures: RoomFeature[];

    constructor(roomNumber: number, priceByNight: number, roomType: RoomType, roomStatus: RoomState, 
        roomImages: RoomImage[], roomFeatures: RoomFeature[], id?:number) {
            this.roomNumber = roomNumber;
            this.priceByNight = priceByNight;
            this.roomType = roomType;
            this.roomStatus = roomStatus;
            this.roomImages = roomImages;
            this.roomFeatures = roomFeatures;
        }
}

export class RoomRegisterDTO {
    roomNumber: number;
    priceByNight: number;
    roomType: String;
    roomState: String;
    roomImages: RoomImageRegisterDTO[];
    roomFeatureIds: number[];

    constructor(roomNumber: number, priceByNight: number, roomType: String, roomState: String, 
        roomImages: RoomImageRegisterDTO[], roomFeatureIds: number[]) {
            this.roomNumber = +roomNumber;
            this.priceByNight = priceByNight;
            this.roomType = roomType;
            this.roomState = roomState;
            this.roomImages = roomImages;
            this.roomFeatureIds = roomFeatureIds;
        }
}