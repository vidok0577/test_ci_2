export function sortUnitLevelHealth(listUnit) {
    return listUnit.sort((item1, item2) => {
        return (item1.health >= item2.health) ? -1 : 1;
    });
}