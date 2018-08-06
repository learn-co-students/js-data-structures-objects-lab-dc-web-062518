const driver = {}

function updateDriverWithKeyAndValue(driver, key, value) {
  const newObj = {...driver};
  newObj[key] = value;
  return newObj;
}

function destructivelyUpdateDriverWithKeyAndValue() {
  driver['name'] = 'Sam';
  driver['address'] = '12 Broadway';
  return driver
}

function deleteFromDriverByKey(driver, key, value) {
  return Object.assign({}, driver, {[key]: value});
}

function destructivelyDeleteFromDriverByKey(driver) {
  delete driver.name
  return driver
}
