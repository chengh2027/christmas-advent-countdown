input.onButtonPressed(Button.A, function () {
	
})
basic.forever(function () {
    game.setScore(0)
    for (let index = 0; index < 25; index++) {
        if (input.buttonIsPressed(Button.A)) {
            music.playMelody("C C G G C5 C5 G G ", 120)
            game.addScore(1)
            game.startCountdown(86000000)
        }
    }
})
