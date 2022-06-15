input.onButtonPressed(Button.A, function () {
    if (Passworteingeben == 1) {
        if (PasswortZahleingabe > 1) {
            PasswortZahleingabe += -1
        }
    }
})
input.onButtonPressed(Button.AB, function () {
    if (Passworteingeben == 0) {
        if (PasswortZahleingabe == 0) {
            PasswortZahleingabe = 1
            Passworteingeben = 1
        }
    }
    if (Passworteingeben == 1) {
        if (PasswortZahleingabe == 1) {
            PWZF = 1
            if (PWZF == 1) {
                basic.setLedColor(0xff8000)
                PWZ1 = PWZZeigen
            }
            if (PWZF == 2) {
                basic.setLedColor(0x007fff)
                PWZ2 = PWZZeigen
            }
        }
    }
})
input.onButtonPressed(Button.B, function () {
    if (Passworteingeben == 1) {
        PWZZeigen += 1
        basic.showNumber(PWZZeigen)
    }
})
let PWZ2 = 0
let PWZZeigen = 0
let PWZ1 = 0
let PWZF = 0
let PasswortZahleingabe = 0
let Passworteingeben = 0
let MainMenuSeite = 0
let Gesperrt = 0
let SperrEinstellung = 1
if (SperrEinstellung == 1) {
    Gesperrt = 1
    if (Gesperrt == 1) {
        basic.setLedColor(0xff0000)
        basic.showLeds(`
            . # # # .
            . # . # .
            . # . # .
            # # # # #
            # # # # #
            `)
    }
} else {
    MainMenuSeite = 1
    MainMenuSeite = 1
}
basic.forever(function () {
    if (Passworteingeben == 1) {
        basic.showLeds(`
            . . . . .
            . . . . .
            . . . . .
            . . . . .
            . . . . .
            `)
    } else {
        if (Gesperrt == 1) {
            basic.setLedColor(0xff0000)
            basic.showLeds(`
                . # # # .
                . # . # .
                . # . # .
                # # # # #
                # # # # #
                `)
        }
    }
})
