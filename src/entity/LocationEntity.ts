export class LocationEntity{

    public type:string;
    public coordinates:Array<number>; 
    
    constructor(typ:string, coor:Array<number>){
        this.type=typ;
        this.coordinates=coor;
    }
}
export default LocationEntity;