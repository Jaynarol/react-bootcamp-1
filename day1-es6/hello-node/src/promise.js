import fs from "fs";

const logReadFile = (data) => {
    console.log('echo "' + data + '"')
    return 111;
}
const readThenLog = (filename) => {
    return new Promise((nextThen, reject) => {
        fs.readFile(filename, (err, data) => nextThen(data));
    })
}

readThenLog('./assets/hello.txt')
    .then((hello) => logReadFile(hello))
    .then(() => readThenLog('./assets/jaynarol.txt'))
    .then((jaynarol) => logReadFile(jaynarol))
    .then((oneoneone) => console.log(oneoneone))