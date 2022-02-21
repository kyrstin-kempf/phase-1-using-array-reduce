const batteryBatches = [4, 5, 3, 4, 4, 6, 5];

// Code your solution here

// const totalBatters = batteryBatches.reduce(callbackFn [, 0])

let totalBatteries = batteryBatches.reduce(function (previousValue, currentValue) {
    return previousValue + currentValue;
});