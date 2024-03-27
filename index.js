// Code your solution here
function findMatching(drivers, name) {
    return drivers.filter(driver => driver.toLowerCase() === name.toLowerCase());
}
findMatching()
function fuzzyMatch(drivers, letters) {
    return drivers.filter(driver => driver.startsWith(letters));
}
fuzzyMatch()
function matchName(drivers, name) {
    return drivers.filter(driver => driver.name === name);
}
matchName()