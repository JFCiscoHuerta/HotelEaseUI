import { RoomType } from "./room-type.enum";
import { RoomStatus } from "./room-status.enum";
import { RoomImage } from "./room-image.model";
import { RoomFeature } from "./room-feature.model";

export class Room {
    id?: number;
    roomNumber: number;
    priceByNight: number;
    roomType: RoomType;
    roomStatus: RoomStatus;
    roomImages: RoomImage[];
    roomFeatures: RoomFeature[];

    constructor(roomNumber: number, priceByNight: number, roomType: RoomType, roomStatus: RoomStatus, 
        roomImages: RoomImage[], roomFeatures: RoomFeature[], id?:number) {
            this.roomNumber = roomNumber;
            this.priceByNight = priceByNight;
            this.roomType = roomType;
            this.roomStatus = roomStatus;
            this.roomImages = roomImages;
            this.roomFeatures = roomFeatures;
        }
}