input.onGesture(Gesture.Shake, function () {
    Icono = 0
    if (Icono == 0) {
        basic.showIcon(IconNames.Chessboard)
    }
    if (Icono == 1) {
        basic.showIcon(IconNames.Meh)
    }
    if (Icono == 2) {
        basic.showIcon(IconNames.Heart)
    }
})
let Icono = 0
basic.showString("Hola mundo ")
basic.showNumber(10)
basic.showIcon(IconNames.Heart)
basic.pause(100)
basic.showNumber(9)
basic.pause(100)
basic.pause(100)
basic.showNumber(8)
basic.pause(100)
basic.showNumber(6)
basic.pause(100)
basic.showNumber(7)
basic.showNumber(5)
basic.showNumber(4)
basic.pause(100)
basic.showNumber(3)
basic.pause(100)
basic.showNumber(2)
basic.pause(100)
basic.showNumber(1)
basic.pause(100)
basic.showNumber(0)
basic.pause(100)
basic.forever(function () {
    if (input.buttonIsPressed(Button.A)) {
        basic.showIcon(IconNames.Angry)
    }
    if (input.buttonIsPressed(Button.B)) {
        basic.showIcon(IconNames.Sad)
    }
})
