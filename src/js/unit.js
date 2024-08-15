export function sortUnitLevelHealth(listUnit) {
    listUnit.sort((item1, item2) => {
        return (item1.health >= item2.health) ? -1 : 1;
    });
    console.log(listUnit);
    return listUnit;
}