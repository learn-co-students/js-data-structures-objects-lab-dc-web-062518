const driver = {}

function updateDriverWithKeyAndValue(driver, key, value) {
  const newDriver = { ...driver };
  newDriver[key] = value;
  return newDriver;
}

function destructivelyUpdateDriverWithKeyAndValue(driver, key, value) {
  driver[key] = value;

  return driver;
}

function deleteFromDriverByKey(driver, key) {
  let newDriver = delete driver.key;
  return newDriver
}

function destructivelyDeleteFromDriverByKey(driver, key) {
  driver = delete driver[key];
  return driver
}
