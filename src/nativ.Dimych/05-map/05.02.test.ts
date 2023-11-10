import {createMessages, getStreetsTitleOfGovermentsBuildings, getStreetsTitleOfHouses} from "./05.02";
import {CityType} from "../02-object/02_02";
import {createMessage} from "../03-function/03";


let city: CityType;

beforeEach(() => {
    city = {
        title: "New York",
        houses: [
            {
                id: 1,
                buildedAt: 2012, repaired: false,
                address: {number: 100, street: {title: "White street"}}
            }, {
                id: 2,
                buildedAt: 2008, repaired: false,
                address: {number: 100, street: {title: "Happy street"}}
            }, {
                id: 3,
                buildedAt: 2020, repaired: false,
                address: {number: 101, street: {title: "Happy street"}}
            },
        ],
        governmentBuilding: [
            {
                type: "HOSPITAL", budget: 200000, staffCount: 200,
                address: {street: {title: "Central Str"}, number: 12}
            },
            {
                type: "FIRE-STATION", budget: 500000, staffCount: 1000,
                address: {street: {title: "South Str"}, number: 12}
            }
        ],
        citizensNumber: 1000000

    }
})
//"список названий государственных зданий"
//внутрь мы передаем сздания городские массив обьектов, а нам должна вернуть массив строк
//нам вернеться имена улиц
test("list of srteets titles of goverments buildings", () => {
    let streetsNames = getStreetsTitleOfGovermentsBuildings(city.governmentBuilding);

    expect(streetsNames.length).toBe(2);
    expect(streetsNames[0]).toBe("Central Str");
    expect(streetsNames[1]).toBe("South Str");


});

//"список названий улиц"
test("list of streets titles", () => {
    let streets = getStreetsTitleOfHouses(city.houses);


    expect(streets.length).toBe(3);
    expect(streets[0]).toBe("White street");
    expect(streets[1]).toBe("Happy street");
    expect(streets[2]).toBe("Happy street");
})

//"создавайте поздравительные сообщения для улиц"
test("create greeting messages for streets", () => {
    let streets = getStreetsTitleOfHouses(city.houses);


    expect(streets.length).toBe(3);
    expect(streets[0]).toBe("White street");
    expect(streets[1]).toBe("Happy street");
    expect(streets[2]).toBe("Happy street");
})
test("create greeting for streets", () => {
    let messages = createMessages(city.houses);

    expect(messages.length).toBe(3);
    expect(messages[0]).toBe("Hello guys from White street");
    expect(messages[1]).toBe("Hello guys from Happy street");
    expect(messages[2]).toBe("Hello guys from Happy street");
})

