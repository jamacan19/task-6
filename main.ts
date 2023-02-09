basic.forever(function () {
    if (input.lightLevel() < 100) {
        maqueen.motorRun(maqueen.Motors.M1, maqueen.Dir.CW, randint(0, 50))
        maqueen.motorRun(maqueen.Motors.M2, maqueen.Dir.CW, randint(0, 50))
        basic.pause(200)
    } else {
        maqueen.motorRun(maqueen.Motors.All, maqueen.Dir.CW, 255)
    }
})
