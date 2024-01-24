//constructing a promise object

const inventory = {
    sunglasses: 1900,
    pants: 1088,
    bags: 1344,
};

const myExecutor = (resolve, reject) => {
    if (inventory.sunglasses > 0) {
        resolve("Sunglasses order processed.");
    } else {
        reject("That item is sold out.");
    }
};

const orderSunglasses = () => {
    return new Promise(myExecutor)
}

orderPromise = orderSunglasses()

console.log(orderPromise)

//The Node setTimeout() Function

const doSomethingAsync = (callback) => {
    // Simulating an asynchronous task, like fetching data
    setTimeout(() => {
        console.log("Task completed!");
        callback(); // Calling the callback function after the task is done
    }, 1000);
}

const afterTaskCompleted = () => {
    console.log("Callback function executed!");
}

    // Passing the callback function to doSomethingAsync
doSomethingAsync(afterTaskCompleted);
