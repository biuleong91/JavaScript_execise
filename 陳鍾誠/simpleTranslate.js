var e2c = { dog: "狗", cat: "貓", a: "一隻", chase: "追", eat: "吃" };


function check(str) {
    for (var e in e2c) {
        if (e2c[e] === str)
            console.log(e2c[e] + ": " + e);
        break;
    }
}
check("狗");
