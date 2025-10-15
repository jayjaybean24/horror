controller.B.onEvent(ControllerButtonEvent.Repeated, function () {
    if (stamana0 == false) {
        Render.moveWithController(3, 2, 1)
        statusbar.value += -1
        B_presed = true
    }
})
statusbars.onZero(StatusBarKind.Health, function (status) {
    stamana0 = true
    for (let index = 0; index < 100; index++) {
        statusbar.value += 1
        pause(1)
    }
})
controller.B.onEvent(ControllerButtonEvent.Released, function () {
    if (stamana0 == false) {
        Render.moveWithController(1, 2, 1)
        B_presed = false
        if (B_presed == false) {
            for (let index = 0; index < 100; index++) {
                statusbar.value += 1
                pause(100)
            }
        }
    }
})
statusbars.onStatusReached(StatusBarKind.Health, statusbars.StatusComparison.EQ, statusbars.ComparisonType.Percentage, 100, function (status) {
    if (stamana0 == true) {
        Render.moveWithController(1, 2, 1)
        stamana0 = false
    }
})
let B_presed = false
let stamana0 = false
let statusbar: StatusBarSprite = null
statusbar = statusbars.create(80, 8, StatusBarKind.Health)
let mySprite = sprites.create(img`
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    `, SpriteKind.Player)
mySprite = Render.getRenderSpriteVariable()
tiles.setCurrentTilemap(tilemap`level1`)
Render.moveWithController(1, 2, 1)
statusbar.value = 100
