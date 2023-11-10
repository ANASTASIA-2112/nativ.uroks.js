import {CityType} from "../02-object/02_02";
import {addMoneyToBudget, createMessage, repairHouse, toFireStaff, toHireStaff} from "./03";


let city: CityType;


beforeEach(() => {
    city = {
        title: "New York",
        houses: [
            {
                buildedAt: 2012, repaired: false,
                address: {number: 100, street: {title: "White street"}}
            }, {
                buildedAt: 2008, repaired: false,
                address: {number: 100, street: {title: "Happy street"}}
            }, {
                buildedAt: 2020, repaired: false,
                address: {number: 101, street: {title: "Happy street"}}
            },
        ],
        governmentBuilding: [
            {
                type: "HOSPITAL", budget: 200000, staffCount: 200,
                address: {
                    street: {
                        title: "Central Str"
                    }
                }
            },
            {
                type: "FIRE-STATION", budget: 500000, staffCount: 1000,
                address: {
                    street: {
                        title: "South Str"
                    }
                }
            }
        ],
        citizensNumber: 1000000

    }
})

//01.создайте в отдельном файле функцию,чтобы тесты прошли
test("Budget should be changed for 'Hospital'", () => {
    addMoneyToBudget(city.governmentBuilding[0], 100000);

    expect(city.governmentBuilding[0].budget).toBe(300000);

})
test("Budget should be changed for FIRE-STATION", () => {
    addMoneyToBudget(city.governmentBuilding[1], -100000)

    expect(city.governmentBuilding[1].budget).toBe(400000);
})

test("Houses should be repared", () => {
    repairHouse(city.houses[1]);

    expect(city.houses[1].repaired).toBeTruthy();
})

//штат сотрудников должен быть увеличен
test("staff should be increased", () => {
    toFireStaff(city.governmentBuilding[0], 20);

    expect(city.governmentBuilding[0].staffCount).toBe(180);
})

//Дом должен быть отремонтирован
test("House should be repared", () => {
    toHireStaff(city.governmentBuilding[0], 20);
    toHireStaff(city.governmentBuilding[1], 100);

    expect(city.governmentBuilding[0].staffCount).toBe(220);
    expect(city.governmentBuilding[1].staffCount).toBe(1100);
})
test("Greeting message should be correct for city", () => {
    //const message = createMessage(city);

    expect(createMessage(city)).toBe("Hello New York citizens. I want you be happy.All 1000000 men");
})



