// Callback hell

function random(min = 100, max = 500) {
    const randomize = Math.random() * (max - min) + min;
    return randomize;
}

function f1(Callback) {
    setTimeout(function () {
        console.log('Executando f1');
        if (Callback) Callback();
    }, random())
}

function f2(Callback) {
    setTimeout(function () {
        console.log('Executando f2');
        if (Callback) Callback();
    }, random())
}

function f3(Callback) {
    setTimeout(function () {
        console.log('Executando f3');
        if (Callback) Callback();
    }, random())
}



f1(function () {
    f2(function () {
        f3(function () {
            console.log('Isso deve vir por ultimo');
        });
    });
});
