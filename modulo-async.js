function moduloPromise(num) {
    let newArr = [];
    for (let counter = 1; counter <= num; counter++) {
        if ((counter%2 == 0) && (counter%7 == 0)) {
            newArr.push("FOOBAR");
        } else if (counter%3 == 0) {
            newArr.push("FOO");
        } else if (counter%5 == 0) {
            newArr.push("BAR");
        } else {
            newArr.push(counter);
        }
    }
    return Promise.resolve(newArr);
}

async function run() {
    const res = await moduloPromise(15);
    console.log(res);
}

run();