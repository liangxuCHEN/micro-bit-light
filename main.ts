input.onButtonPressed(Button.A, function () {
    显示类型 += 1
})
input.onButtonPressed(Button.B, function () {
    是否开灯 = !(是否开灯)
})
let 是否开灯 = false
let 显示类型 = 0
是否开灯 = true
basic.forever(function () {
    if (显示类型 % 2 == 0) {
        basic.showIcon(IconNames.Sword)
        basic.pause(500)
        basic.showNumber(input.temperature())
    } else {
        basic.showIcon(IconNames.Chessboard)
        basic.pause(500)
        basic.showNumber(input.lightLevel())
    }
    if (input.lightLevel() < 80 && 是否开灯) {
        pins.digitalWritePin(DigitalPin.P0, 1)
    } else {
        pins.digitalWritePin(DigitalPin.P0, 0)
    }
})
