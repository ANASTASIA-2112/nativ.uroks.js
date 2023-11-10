import {CityType, GovernmentBuildingType} from "../02-object/02_02";

export const demolishHousesOnTheStreet = (city: CityType, street: string) => {//не чистая функция меняет что-то, не чего не возврощает
    city.houses = city.houses.filter(h => h.address.street.title !== street)
//дом который стоит на той улице выражение вернет true а нам надо чтоб не попал false (!)
}

export function getBuildingsWithStaffCountGreaterThen(buildings: Array<GovernmentBuildingType>, number: number) {
    return buildings.filter(b => b.staffCount > number)//чистая функция

}

