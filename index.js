// Code your solution in this file!
const logDriverNames=function(drivers){
drivers.forEach(function (driver) {
 console.log(driver.name)
})
}
const logDriversByHometown = function (drivers, hometown) {
  drivers.forEach(function (driver) {
    if (driver.hometown === hometown) {
      console.log(driver.name);
    }
     })
      }
      var driversByRevenue = function (driver) {
  return driver.slice().sort(function (firstDriver, secondDriver) {
    return firstDriver.revenue - secondDriver.revenue; });
				};
				var driversByName = function (driver) {
  return driver.slice().sort(function (firstDriver, secondDriver) {
    return firstDriver.name.localeCompare(secondDriver.name); });
				};
				
		var totalRevenue = function (drivers) {
  return drivers.reduce(function (sumation, thedriver) {
    return thedriver. revenue  + sumation});
};
				