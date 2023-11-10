export type HouseType={
    buildedAt:number
    repaired:boolean
    address:AddressType
    id?:number


}
export type AddressType={
    number?:number
    street: StreetType
}
export type StreetType={
    title:string
}
export type CityType={
    title:string
    houses: Array<HouseType>
    governmentBuilding:Array<GovernmentBuildingType>,
    citizensNumber: number
}
export type GovernmentBuildingType={

    type:"HOSPITAL"|"FIRE-STATION"
    budget:number
    staffCount:number
    address: AddressType


}
