export class RoomImage {
    id?: number;
    path: string;

    constructor(path: string, id?: number) {
        this.path = path;
        this.id = id;
    }
}