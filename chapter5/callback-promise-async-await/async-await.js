async function myName() {
    return 'Andy';
}

myName().then(name => {
    console.log(name);
});

async function showName() {
    const name = await myName();
    console.log(name);
}

console.log(showName());