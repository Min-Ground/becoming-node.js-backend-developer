const DB = [];

function saveDB(user) {
    const oldDBSize = DB.length;
    DB.push(user);
    console.log(`save ${user.name} to DB`);

    return new Promise((resolve, reject) => {
        if (DB.length > oldDBSize) {
            resolve(user);
        } else {
            reject(new Error('Save DB Error'));
        }
    });
}

function sendEmail(user) {
    console.log(`email to ${user.email}`);
    return new Promise((resolve) => {
        resolve(user);
    });
}

function getResult(user) {
    return new Promise((resolve) => {
        resolve(`success register ${user.name}`);
    });
}

function register(user) {
    const result = saveDB(user)
        .then(u => sendEmail(u))
        .then(getResult)
        .catch(error => new Error(error))
        .finally(() => console.log('완료!'));
    console.log(result);
    return result;
}

const user = { email: "andy@test.com", password: "1234", name: "andy" };
const result = register(user)
    .then(result => {
        console.log(result);
    })
    .catch(error => {
        console.error(error);
    });

// 동시에 여러 Promise 객체 호출하기
const allResult = Promise.all([saveDB(user), sendEmail(user), getResult(user)]);
allResult.then(console.log);