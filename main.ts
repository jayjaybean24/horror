controller.A.onEvent(ControllerButtonEvent.Pressed, function () {
    let no_sight_for_you = false
    if (no_sight_for_you == false) {
        statusbar2.value += -10
        color.setPalette(
        color.GrayScale
        )
        color.FadeToBlack.startScreenEffect()
    }
})
statusbars.onStatusReached(StatusBarKind.Health, statusbars.StatusComparison.LTE, statusbars.ComparisonType.Percentage, 100, function (status) {
    stamana0 = false
})
controller.B.onEvent(ControllerButtonEvent.Repeated, function () {
    running = true
    if (stamana0 == false && running == true) {
        Render.moveWithController(3, 2, 1)
        B_presed = true
        statusbar.value += -1
    }
})
statusbars.onZero(StatusBarKind.Health, function (status) {
    stamana0 = true
})
controller.B.onEvent(ControllerButtonEvent.Released, function () {
    Render.moveWithController(1, 2, 1)
    running = false
})
let B_presed = false
let running = false
let stamana0 = false
let statusbar: StatusBarSprite = null
let statusbar2: StatusBarSprite = null
statusbar2 = statusbars.create(8, 80, StatusBarKind.Health)
statusbar = statusbars.create(80, 8, StatusBarKind.Health)
let henry = sprites.create(img`
    . f f f f f f f f f f . 
    f 7 7 7 7 7 7 7 7 7 7 f 
    f 7 7 7 7 7 7 7 7 7 7 f 
    f 7 7 7 7 7 7 7 7 7 7 f 
    f 7 7 7 7 7 7 7 7 7 7 f 
    f 7 f 7 7 7 7 7 7 7 7 f 
    f 7 7 7 7 7 7 7 7 f 7 f 
    f 7 7 7 7 7 7 7 7 7 7 f 
    f 7 7 7 7 f f f 7 7 7 f 
    f 7 7 7 7 7 9 9 7 7 7 f 
    . f f 7 7 7 7 9 7 f f . 
    . . f 7 7 7 7 7 7 f . . 
    . . f 7 7 7 7 7 7 f . . 
    . . f 7 7 7 7 7 7 f . . 
    . f f 7 f . . f 7 f f . 
    . f 7 7 f . . f 7 7 f . 
    `, SpriteKind.Player)
let _ = sprites.create(img`
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
statusbar.max = 100
animation.runImageAnimation(
henry,
[img`
    . . . . . . . . . . . . 
    . . . . . . . . . . . . 
    . . . . . . . . . . . . 
    . . . . . . . . . . . . 
    . . . . . . . . . . . . 
    . . . . . . . . . . . . 
    . . . . . . . . . . . . 
    . . . . . . . . . . . . 
    . . . . . . . . . . . . 
    . . . . . . . . . . . . 
    . . . . . . . . . . . . 
    . . . . . . . . . . . . 
    . . . . . . . . . . . . 
    . . . . . . . . . . . . 
    . . . . . . . . . . . . 
    . . . . . . . . . . . . 
    `],
500,
true
)
scaling.scaleToPercent(_, 20, ScaleDirection.Uniformly, ScaleAnchor.Middle)
statusbar.setOffsetPadding(0, 10)
statusbar2.setOffsetPadding(0, 5)
statusbar.positionDirection(CollisionDirection.Bottom)
scene.setBackgroundImage(img`
    cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
    cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
    cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
    cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
    cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
    cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
    cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
    cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
    cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
    cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
    cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
    cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
    cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
    cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
    cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
    cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
    cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
    cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
    cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
    cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
    cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
    cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
    cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
    cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
    cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
    cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
    cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
    cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
    cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
    cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
    cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
    cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
    cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
    cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
    cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
    cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
    cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
    cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
    cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
    cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
    cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
    cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
    cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
    cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
    cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
    cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
    cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
    cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
    cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
    cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
    cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
    cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
    cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
    cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
    cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
    cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
    cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
    cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
    cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
    cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
    cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
    bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
    bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
    bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
    bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
    bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
    bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
    bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
    bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
    bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
    bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
    bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
    bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
    bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
    bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
    bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
    bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
    bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
    bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
    bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
    bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
    bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
    bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
    bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
    bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
    bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
    bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
    bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
    bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
    bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
    bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
    bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
    bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
    bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
    bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
    bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
    bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
    bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
    bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
    bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
    bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
    bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
    bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
    bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
    bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
    bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
    bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
    bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
    bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
    bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
    bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
    bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
    bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
    bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
    bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
    bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
    bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
    bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
    bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
    bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
    `)
tiles.placeOnTile(_, tiles.getTileLocation(28, 11))
color.setPalette(
color.Black
)
statusbar2.setColor(5, 8)
statusbar2.positionDirection(CollisionDirection.Left)
statusbar2.value = 100
forever(function () {
    characterAnimations.loopFrames(
    _,
    [img`
        ....aaaaaaaaa....
        ...aaaaaaaaaaa...
        ..aaaaaaaaaaaaa..
        .aaaaaaaaaaaaaaa.
        .aaaaffaaaffaaaa.
        .aaaffffaffffaaa.
        .aaaffffaffffaaa.
        .aaaffffaffffaaa.
        .aaaaffaaaffaaaa.
        .aaaaaaaaaaaaaaa.
        .aaaaaaaaaaaaaaa.
        ..aaaaaaaaaaaaa..
        ..aaaaaaaaaaaaa..
        ..aaaaaaaaaaaaa..
        ...aaaaaaaaaaa...
        ....aaaaaaaaa....
        ....aaaaaaaaa....
        ....ccaaaaacc....
        ...ccccccccccc...
        .ccccccccccccccc.
        ccccccccccccccccc
        ccccccccccccccccc
        ccccccccccccccccc
        ccccccccccccccccc
        ccccccccccccccccc
        ccccccccccccccccc
        ccccccccccccccccc
        ccccccccccccccccc
        ccccccccccccccccc
        ccccccccccccccccc
        ccccccccccccccccc
        ccccccccccccccccc
        ccccccccccccccccc
        cccc.ccc.ccc.cccc
        cccc.ccc.ccc.cccc
        cccc.ccc.ccc.cccc
        .cc..ccc.ccc..cc.
        .....ccc.ccc.....
        .....ccc.ccc.....
        .....ccc.ccc.....
        .....ccc.ccc.....
        .....ccc.ccc.....
        .....ccc.ccc.....
        .....ccc.ccc.....
        .....ccc.ccc.....
        .....ccc.ccc.....
        .....ccc.ccc.....
        .....ccc.ccc.....
        .....ccc.ccc.....
        .........ccc.....
        `,img`
        ....aaaaaaaaa....
        ...aaaaaaaaaaa...
        ..aaaaaaaaaaaaa..
        .aaaaaaaaaaaaaaa.
        .aaaaffaaaffaaaa.
        .aaaffffaffffaaa.
        .aaaffffaffffaaa.
        .aaaffffaffffaaa.
        .aaaaffaaaffaaaa.
        .aaaaaaaaaaaaaaa.
        .aaaaaaaaaaaaaaa.
        ..aaaaaaaaaaaaa..
        ..aaaaaaaaaaaaa..
        ..aaaaaaaaaaaaa..
        ...aaaaaaaaaaa...
        ....aaaaaaaaa....
        ....aaaaaaaaa....
        ....ccaaaaacc....
        ...ccccccccccc...
        .ccccccccccccccc.
        ccccccccccccccccc
        ccccccccccccccccc
        ccccccccccccccccc
        ccccccccccccccccc
        ccccccccccccccccc
        ccccccccccccccccc
        ccccccccccccccccc
        ccccccccccccccccc
        ccccccccccccccccc
        ccccccccccccccccc
        ccccccccccccccccc
        ccccccccccccccccc
        ccccccccccccccccc
        cccc.ccc.ccc.cccc
        cccc.ccc.ccc.cccc
        cccc.ccc.ccc.cccc
        .cc..ccc.ccc..cc.
        .....ccc.ccc.....
        .....ccc.ccc.....
        .....ccc.ccc.....
        .....ccc.ccc.....
        .....ccc.ccc.....
        .....ccc.ccc.....
        .....ccc.ccc.....
        .....ccc.ccc.....
        .....ccc.ccc.....
        .....ccccccc.....
        .....ccccccc.....
        .........ccc.....
        .........ccc.....
        `,img`
        ....aaaaaaaaa....
        ...aaaaaaaaaaa...
        ..aaaaaaaaaaaaa..
        .aaaaaaaaaaaaaaa.
        .aaaaffaaaffaaaa.
        .aaaffffaffffaaa.
        .aaaffffaffffaaa.
        .aaaffffaffffaaa.
        .aaaaffaaaffaaaa.
        .aaaaaaaaaaaaaaa.
        .aaaaaaaaaaaaaaa.
        ..aaaaaaaaaaaaa..
        ..aaaaaaaaaaaaa..
        ..aaaaaaaaaaaaa..
        ...aaaaaaaaaaa...
        ....aaaaaaaaa....
        ....aaaaaaaaa....
        ....ccaaaaacc....
        ...ccccccccccc...
        .ccccccccccccccc.
        ccccccccccccccccc
        ccccccccccccccccc
        ccccccccccccccccc
        ccccccccccccccccc
        ccccccccccccccccc
        ccccccccccccccccc
        ccccccccccccccccc
        ccccccccccccccccc
        ccccccccccccccccc
        ccccccccccccccccc
        ccccccccccccccccc
        ccccccccccccccccc
        ccccccccccccccccc
        cccc.ccc.ccc.cccc
        cccc.ccc.ccc.cccc
        cccc.ccc.ccc.cccc
        .cc..ccc.ccc..cc.
        .....ccc.ccc.....
        .....ccc.ccc.....
        .....ccc.ccc.....
        .....ccc.ccc.....
        .....ccc.ccc.....
        .....ccc.ccc.....
        .....ccccccc.....
        .....ccccccc.....
        .....ccccccc.....
        .........ccc.....
        .........ccc.....
        .........ccc.....
        .........ccc.....
        `,img`
        ....aaaaaaaaa....
        ...aaaaaaaaaaa...
        ..aaaaaaaaaaaaa..
        .aaaaaaaaaaaaaaa.
        .aaaaffaaaffaaaa.
        .aaaffffaffffaaa.
        .aaaffffaffffaaa.
        .aaaffffaffffaaa.
        .aaaaffaaaffaaaa.
        .aaaaaaaaaaaaaaa.
        .aaaaaaaaaaaaaaa.
        ..aaaaaaaaaaaaa..
        ..aaaaaaaaaaaaa..
        ..aaaaaaaaaaaaa..
        ...aaaaaaaaaaa...
        ....aaaaaaaaa....
        ....aaaaaaaaa....
        ....ccaaaaacc....
        ...ccccccccccc...
        .ccccccccccccccc.
        ccccccccccccccccc
        ccccccccccccccccc
        ccccccccccccccccc
        ccccccccccccccccc
        ccccccccccccccccc
        ccccccccccccccccc
        ccccccccccccccccc
        ccccccccccccccccc
        ccccccccccccccccc
        ccccccccccccccccc
        ccccccccccccccccc
        ccccccccccccccccc
        ccccccccccccccccc
        cccc.ccc.ccc.cccc
        cccc.ccc.ccc.cccc
        cccc.ccc.ccc.cccc
        .cc..ccc.ccc..cc.
        .....ccc.ccc.....
        .....ccc.ccc.....
        .....ccc.ccc.....
        .....ccc.ccc.....
        .....ccc.ccc.....
        .....ccc.ccc.....
        .....ccc.ccc.....
        .....ccc.ccc.....
        .....ccc.ccc.....
        .....ccccccc.....
        .....ccccccc.....
        .........ccc.....
        .........ccc.....
        `,img`
        ....aaaaaaaaa....
        ...aaaaaaaaaaa...
        ..aaaaaaaaaaaaa..
        .aaaaaaaaaaaaaaa.
        .aaaaffaaaffaaaa.
        .aaaffffaffffaaa.
        .aaaffffaffffaaa.
        .aaaffffaffffaaa.
        .aaaaffaaaffaaaa.
        .aaaaaaaaaaaaaaa.
        .aaaaaaaaaaaaaaa.
        ..aaaaaaaaaaaaa..
        ..aaaaaaaaaaaaa..
        ..aaaaaaaaaaaaa..
        ...aaaaaaaaaaa...
        ....aaaaaaaaa....
        ....aaaaaaaaa....
        ....ccaaaaacc....
        ...ccccccccccc...
        .ccccccccccccccc.
        ccccccccccccccccc
        ccccccccccccccccc
        ccccccccccccccccc
        ccccccccccccccccc
        ccccccccccccccccc
        ccccccccccccccccc
        ccccccccccccccccc
        ccccccccccccccccc
        ccccccccccccccccc
        ccccccccccccccccc
        ccccccccccccccccc
        ccccccccccccccccc
        ccccccccccccccccc
        cccc.ccc.ccc.cccc
        cccc.ccc.ccc.cccc
        cccc.ccc.ccc.cccc
        .cc..ccc.ccc..cc.
        .....ccc.ccc.....
        .....ccc.ccc.....
        .....ccc.ccc.....
        .....ccc.ccc.....
        .....ccc.ccc.....
        .....ccc.ccc.....
        .....ccc.ccc.....
        .....ccc.ccc.....
        .....ccc.ccc.....
        .....ccc.ccc.....
        .....ccc.ccc.....
        .....ccc.ccc.....
        .........ccc.....
        `,img`
        ....aaaaaaaaa....
        ...aaaaaaaaaaa...
        ..aaaaaaaaaaaaa..
        .aaaaaaaaaaaaaaa.
        .aaaaffaaaffaaaa.
        .aaaffffaffffaaa.
        .aaaffffaffffaaa.
        .aaaffffaffffaaa.
        .aaaaffaaaffaaaa.
        .aaaaaaaaaaaaaaa.
        .aaaaaaaaaaaaaaa.
        ..aaaaaaaaaaaaa..
        ..aaaaaaaaaaaaa..
        ..aaaaaaaaaaaaa..
        ...aaaaaaaaaaa...
        ....aaaaaaaaa....
        ....aaaaaaaaa....
        ....ccaaaaacc....
        ...ccccccccccc...
        .ccccccccccccccc.
        ccccccccccccccccc
        ccccccccccccccccc
        ccccccccccccccccc
        ccccccccccccccccc
        ccccccccccccccccc
        ccccccccccccccccc
        ccccccccccccccccc
        ccccccccccccccccc
        ccccccccccccccccc
        ccccccccccccccccc
        ccccccccccccccccc
        ccccccccccccccccc
        ccccccccccccccccc
        cccc.ccc.ccc.cccc
        cccc.ccc.ccc.cccc
        cccc.ccc.ccc.cccc
        .cc..ccc.ccc..cc.
        .....ccc.ccc.....
        .....ccc.ccc.....
        .....ccc.ccc.....
        .....ccc.ccc.....
        .....ccc.ccc.....
        .....ccc.ccc.....
        .....ccc.ccc.....
        .....ccc.ccc.....
        .....ccc.ccc.....
        .....ccc.ccc.....
        .....ccc.ccc.....
        .....ccc.ccc.....
        .....ccc.........
        `,img`
        ....aaaaaaaaa....
        ...aaaaaaaaaaa...
        ..aaaaaaaaaaaaa..
        .aaaaaaaaaaaaaaa.
        .aaaaffaaaffaaaa.
        .aaaffffaffffaaa.
        .aaaffffaffffaaa.
        .aaaffffaffffaaa.
        .aaaaffaaaffaaaa.
        .aaaaaaaaaaaaaaa.
        .aaaaaaaaaaaaaaa.
        ..aaaaaaaaaaaaa..
        ..aaaaaaaaaaaaa..
        ..aaaaaaaaaaaaa..
        ...aaaaaaaaaaa...
        ....aaaaaaaaa....
        ....aaaaaaaaa....
        ....ccaaaaacc....
        ...ccccccccccc...
        .ccccccccccccccc.
        ccccccccccccccccc
        ccccccccccccccccc
        ccccccccccccccccc
        ccccccccccccccccc
        ccccccccccccccccc
        ccccccccccccccccc
        ccccccccccccccccc
        ccccccccccccccccc
        ccccccccccccccccc
        ccccccccccccccccc
        ccccccccccccccccc
        ccccccccccccccccc
        ccccccccccccccccc
        cccc.ccc.ccc.cccc
        cccc.ccc.ccc.cccc
        cccc.ccc.ccc.cccc
        .cc..ccc.ccc..cc.
        .....ccc.ccc.....
        .....ccc.ccc.....
        .....ccc.ccc.....
        .....ccc.ccc.....
        .....ccc.ccc.....
        .....ccc.ccc.....
        .....ccc.ccc.....
        .....ccc.ccc.....
        .....ccc.ccc.....
        .....ccccccc.....
        .....ccccccc.....
        .....ccc.........
        .....ccc.........
        `,img`
        ....aaaaaaaaa....
        ...aaaaaaaaaaa...
        ..aaaaaaaaaaaaa..
        .aaaaaaaaaaaaaaa.
        .aaaaffaaaffaaaa.
        .aaaffffaffffaaa.
        .aaaffffaffffaaa.
        .aaaffffaffffaaa.
        .aaaaffaaaffaaaa.
        .aaaaaaaaaaaaaaa.
        .aaaaaaaaaaaaaaa.
        ..aaaaaaaaaaaaa..
        ..aaaaaaaaaaaaa..
        ..aaaaaaaaaaaaa..
        ...aaaaaaaaaaa...
        ....aaaaaaaaa....
        ....aaaaaaaaa....
        ....ccaaaaacc....
        ...ccccccccccc...
        .ccccccccccccccc.
        ccccccccccccccccc
        ccccccccccccccccc
        ccccccccccccccccc
        ccccccccccccccccc
        ccccccccccccccccc
        ccccccccccccccccc
        ccccccccccccccccc
        ccccccccccccccccc
        ccccccccccccccccc
        ccccccccccccccccc
        ccccccccccccccccc
        ccccccccccccccccc
        ccccccccccccccccc
        cccc.ccc.ccc.cccc
        cccc.ccc.ccc.cccc
        cccc.ccc.ccc.cccc
        .cc..ccc.ccc..cc.
        .....ccc.ccc.....
        .....ccc.ccc.....
        .....ccc.ccc.....
        .....ccc.ccc.....
        .....ccc.ccc.....
        .....ccc.ccc.....
        .....ccccccc.....
        .....ccccccc.....
        .....ccccccc.....
        .....ccc.........
        .....ccc.........
        .....ccc.........
        .....ccc.........
        `,img`
        ....aaaaaaaaa....
        ...aaaaaaaaaaa...
        ..aaaaaaaaaaaaa..
        .aaaaaaaaaaaaaaa.
        .aaaaffaaaffaaaa.
        .aaaffffaffffaaa.
        .aaaffffaffffaaa.
        .aaaffffaffffaaa.
        .aaaaffaaaffaaaa.
        .aaaaaaaaaaaaaaa.
        .aaaaaaaaaaaaaaa.
        ..aaaaaaaaaaaaa..
        ..aaaaaaaaaaaaa..
        ..aaaaaaaaaaaaa..
        ...aaaaaaaaaaa...
        ....aaaaaaaaa....
        ....aaaaaaaaa....
        ....ccaaaaacc....
        ...ccccccccccc...
        .ccccccccccccccc.
        ccccccccccccccccc
        ccccccccccccccccc
        ccccccccccccccccc
        ccccccccccccccccc
        ccccccccccccccccc
        ccccccccccccccccc
        ccccccccccccccccc
        ccccccccccccccccc
        ccccccccccccccccc
        ccccccccccccccccc
        ccccccccccccccccc
        ccccccccccccccccc
        ccccccccccccccccc
        cccc.ccc.ccc.cccc
        cccc.ccc.ccc.cccc
        cccc.ccc.ccc.cccc
        .cc..ccc.ccc..cc.
        .....ccc.ccc.....
        .....ccc.ccc.....
        .....ccc.ccc.....
        .....ccc.ccc.....
        .....ccc.ccc.....
        .....ccc.ccc.....
        .....ccc.ccc.....
        .....ccc.ccc.....
        .....ccc.ccc.....
        .....ccccccc.....
        .....ccccccc.....
        .....ccc.........
        .....ccc.........
        `,img`
        ....aaaaaaaaa....
        ...aaaaaaaaaaa...
        ..aaaaaaaaaaaaa..
        .aaaaaaaaaaaaaaa.
        .aaaaffaaaffaaaa.
        .aaaffffaffffaaa.
        .aaaffffaffffaaa.
        .aaaffffaffffaaa.
        .aaaaffaaaffaaaa.
        .aaaaaaaaaaaaaaa.
        .aaaaaaaaaaaaaaa.
        ..aaaaaaaaaaaaa..
        ..aaaaaaaaaaaaa..
        ..aaaaaaaaaaaaa..
        ...aaaaaaaaaaa...
        ....aaaaaaaaa....
        ....aaaaaaaaa....
        ....ccaaaaacc....
        ...ccccccccccc...
        .ccccccccccccccc.
        ccccccccccccccccc
        ccccccccccccccccc
        ccccccccccccccccc
        ccccccccccccccccc
        ccccccccccccccccc
        ccccccccccccccccc
        ccccccccccccccccc
        ccccccccccccccccc
        ccccccccccccccccc
        ccccccccccccccccc
        ccccccccccccccccc
        ccccccccccccccccc
        ccccccccccccccccc
        cccc.ccc.ccc.cccc
        cccc.ccc.ccc.cccc
        cccc.ccc.ccc.cccc
        .cc..ccc.ccc..cc.
        .....ccc.ccc.....
        .....ccc.ccc.....
        .....ccc.ccc.....
        .....ccc.ccc.....
        .....ccc.ccc.....
        .....ccc.ccc.....
        .....ccc.ccc.....
        .....ccc.ccc.....
        .....ccc.ccc.....
        .....ccc.ccc.....
        .....ccc.ccc.....
        .....ccc.ccc.....
        .....ccc.........
        `],
    200,
    characterAnimations.rule(Predicate.Moving)
    )
    characterAnimations.loopFrames(
    _,
    [img`
        ....aaaaaaaaa....
        ...aaaaaaaaaaa...
        ..aaaaaaaaaaaaa..
        .aaaaaaaaaaaaaaa.
        .aaaaffaaaffaaaa.
        .aaaffffaffffaaa.
        .aaaffffaffffaaa.
        .aaaffffaffffaaa.
        .aaaaffaaaffaaaa.
        .aaaaaaaaaaaaaaa.
        .aaaaaaaaaaaaaaa.
        ..aaaaaaaaaaaaa..
        ..aaaaaaaaaaaaa..
        ..aaaaaaaaaaaaa..
        ...aaaaaaaaaaa...
        ....aaaaaaaaa....
        ....aaaaaaaaa....
        ....ccaaaaacc....
        ...ccccccccccc...
        .ccccccccccccccc.
        ccccccccccccccccc
        ccccccccccccccccc
        ccccccccccccccccc
        ccccccccccccccccc
        ccccccccccccccccc
        ccccccccccccccccc
        ccccccccccccccccc
        ccccccccccccccccc
        ccccccccccccccccc
        ccccccccccccccccc
        ccccccccccccccccc
        ccccccccccccccccc
        ccccccccccccccccc
        cccc.ccc.ccc.cccc
        cccc.ccc.ccc.cccc
        cccc.ccc.ccc.cccc
        .cc..ccc.ccc..cc.
        .....ccc.ccc.....
        .....ccc.ccc.....
        .....ccc.ccc.....
        .....ccc.ccc.....
        .....ccc.ccc.....
        .....ccc.ccc.....
        .....ccc.ccc.....
        .....ccc.ccc.....
        .....ccc.ccc.....
        .....ccc.ccc.....
        .....ccc.ccc.....
        .....ccc.ccc.....
        .....ccc.ccc.....
        `,img`
        .................
        ....aaaaaaaaa....
        ...aaaaaaaaaaa...
        ..aaaaaaaaaaaaa..
        .aaaaaaaaaaaaaaa.
        .aaaaffaaaffaaaa.
        .aaaffffaffffaaa.
        .aaaffffaffffaaa.
        .aaaffffaffffaaa.
        .aaaaffaaaffaaaa.
        .aaaaaaaaaaaaaaa.
        .aaaaaaaaaaaaaaa.
        ..aaaaaaaaaaaaa..
        ..aaaaaaaaaaaaa..
        ..aaaaaaaaaaaaa..
        ...aaaaaaaaaaa...
        ....aaaaaaaaa....
        ....aaaaaaaaa....
        ...cccaaaaaccc...
        .ccccccccccccccc.
        ccccccccccccccccc
        ccccccccccccccccc
        ccccccccccccccccc
        ccccccccccccccccc
        ccccccccccccccccc
        ccccccccccccccccc
        ccccccccccccccccc
        ccccccccccccccccc
        ccccccccccccccccc
        ccccccccccccccccc
        ccccccccccccccccc
        ccccccccccccccccc
        ccccccccccccccccc
        cccc.ccc.ccc.cccc
        cccc.ccc.ccc.cccc
        cccc.ccc.ccc.cccc
        .cc..ccc.ccc..cc.
        .....ccc.ccc.....
        .....ccc.ccc.....
        .....ccc.ccc.....
        .....ccc.ccc.....
        .....ccc.ccc.....
        .....ccc.ccc.....
        .....ccc.ccc.....
        .....ccc.ccc.....
        .....ccc.ccc.....
        .....ccc.ccc.....
        .....ccc.ccc.....
        .....ccc.ccc.....
        .....ccc.ccc.....
        `],
    1000,
    characterAnimations.rule(Predicate.NotMoving)
    )
})
forever(function () {
    if (stamana0 == false && running == false) {
        B_presed = false
        statusbar.value += 1
        pause(50)
    }
    if (stamana0 == false && running == false) {
        B_presed = false
        statusbar.value += 1
        pause(50)
    }
})
game.onUpdateInterval(100, function () {
    if (spriteutils.distanceBetween(mySprite, _) <= 100) {
        _.follow(mySprite, 7)
    } else {
        _.follow(mySprite, 0)
    }
})
