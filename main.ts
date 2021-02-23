input.onPinReleased(TouchPin.P2, function () {
	
})
input.onPinPressed(TouchPin.P2, function () {
	
})
pins.setEvents(DigitalPin.P2, PinEventType.Edge)
basic.forever(function () {
    basic.showNumber(pins.digitalReadPin(DigitalPin.P2))
    if (pins.analogReadPin(AnalogPin.P1) < 150) {
        pins.digitalWritePin(DigitalPin.P0, 1)
    } else {
        pins.digitalWritePin(DigitalPin.P0, 0)
    }
    basic.pause(100)
    basic.clearScreen()
})
