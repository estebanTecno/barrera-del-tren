basic.forever(function () {
    pins.servoWritePin(AnalogPin.P3, 180)
    basic.pause(2000)
    pins.servoWritePin(AnalogPin.P3, 90)
    basic.pause(2000)
})
