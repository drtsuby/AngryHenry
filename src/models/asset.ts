export class Asset {
    id: string;
    name: string;
    manufacturer: string;
    size: string;
    description: string;

    constructor(id: string, name: string, manufacturer: string, size: string, description: string) {
        this.id = id;
        this.name = name;
        this.manufacturer = manufacturer;
        this.size = size;
        this.description = description;
    }

    getAssetDetails() {
        return {
            id: this.id,
            name: this.name,
            manufacturer: this.manufacturer,
            size: this.size,
            description: this.description
        };
    }
}