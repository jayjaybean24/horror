namespace SpriteKind {
    export const orb = SpriteKind.create()
}
namespace StatusBarKind {
    export const sight = StatusBarKind.create()
}
statusbars.onStatusReached(StatusBarKind.sight, statusbars.StatusComparison.LT, statusbars.ComparisonType.Percentage, 100, function (status) {
    no_sight_for_you = true
})
controller.A.onEvent(ControllerButtonEvent.Pressed, function () {
    if (no_sight_for_you == false) {
        statusbar2.value += -100
        color.setPalette(
        color.GrayScale
        )
        color.FadeToBlack.startScreenEffect()
    }
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
sprites.onOverlap(SpriteKind.Enemy, SpriteKind.Player, function (sprite, otherSprite) {
    color.startFadeFromCurrent(color.White)
    pause(2000)
    game.gameOver(false)
})
controller.B.onEvent(ControllerButtonEvent.Released, function () {
    Render.moveWithController(1, 2, 1)
    running = false
})
statusbars.onStatusReached(StatusBarKind.sight, statusbars.StatusComparison.GT, statusbars.ComparisonType.Percentage, 100, function (status) {
    no_sight_for_you = false
})
statusbars.onStatusReached(StatusBarKind.Health, statusbars.StatusComparison.EQ, statusbars.ComparisonType.Percentage, 100, function (status) {
    stamana0 = false
})
let B_presed = false
let stamana0 = false
let running = false
let no_sight_for_you = false
let statusbar: StatusBarSprite = null
let statusbar2: StatusBarSprite = null
statusbar2 = statusbars.create(8, 80, StatusBarKind.sight)
statusbar = statusbars.create(80, 8, StatusBarKind.Health)
let mySprite2 = sprites.create(img`
    . . . . . . . . . . . . . . . . 
    . . . . c c c c c c c c . . . . 
    . . . c c c c c c c c c c . . . 
    . . c c c c c c c c c c c c . . 
    . c c c c c c c c c c c c c c . 
    . c c c c c c a a c c c c c c . 
    . c c c c c a a a a c c c c c . 
    . c c c c a a a a a a c c c c . 
    . c c c c a a a a a a c c c c . 
    . c c c c c a a a a c c c c c . 
    . c c c c c c a a c c c c c c . 
    . c c c c c c c c c c c c c c . 
    . . c c c c c c c c c c c c . . 
    . . . c c c c c c c c c c . . . 
    . . . . c c c c c c c c . . . . 
    . . . . . . . . . . . . . . . . 
    `, SpriteKind.orb)
let mySprite3 = sprites.create(img`
    . . . . . . . . . . . . . . . . 
    . . . . 5 5 5 5 5 5 5 5 . . . . 
    . . . 5 5 5 5 5 5 5 5 5 5 . . . 
    . . 5 5 5 5 5 5 5 5 5 5 5 5 . . 
    . 5 5 5 5 5 5 5 5 5 5 5 5 5 5 . 
    . 5 5 5 5 5 5 2 2 5 5 5 5 5 5 . 
    . 5 5 5 5 5 2 2 2 2 5 5 5 5 5 . 
    . 5 5 5 5 2 2 2 2 2 2 5 5 5 5 . 
    . 5 5 5 5 2 2 2 2 2 2 5 5 5 5 . 
    . 5 5 5 5 5 2 2 2 2 5 5 5 5 5 . 
    . 5 5 5 5 5 5 2 2 5 5 5 5 5 5 . 
    . 5 5 5 5 5 5 5 5 5 5 5 5 5 5 . 
    . . 5 5 5 5 5 5 5 5 5 5 5 5 . . 
    . . . 5 5 5 5 5 5 5 5 5 5 . . . 
    . . . . 5 5 5 5 5 5 5 5 . . . . 
    . . . . . . . . . . . . . . . . 
    `, SpriteKind.orb)
let mySprite4 = sprites.create(img`
    . . . . . . . . . . . . . . . . 
    . . . . 7 7 7 7 7 7 7 7 . . . . 
    . . . 7 7 7 7 7 7 7 7 7 7 . . . 
    . . 7 7 7 7 7 7 7 7 7 7 7 7 . . 
    . 7 7 7 7 7 7 7 7 7 7 7 7 7 7 . 
    . 7 7 7 7 7 7 e e 7 7 7 7 7 7 . 
    . 7 7 7 7 7 e e e e 7 7 7 7 7 . 
    . 7 7 7 7 e e e e e e 7 7 7 7 . 
    . 7 7 7 7 e e e e e e 7 7 7 7 . 
    . 7 7 7 7 7 e e e e 7 7 7 7 7 . 
    . 7 7 7 7 7 7 e e 7 7 7 7 7 7 . 
    . 7 7 7 7 7 7 7 7 7 7 7 7 7 7 . 
    . . 7 7 7 7 7 7 7 7 7 7 7 7 . . 
    . . . 7 7 7 7 7 7 7 7 7 7 . . . 
    . . . . 7 7 7 7 7 7 7 7 . . . . 
    . . . . . . . . . . . . . . . . 
    `, SpriteKind.orb)
let mySprite5 = sprites.create(img`
    . . . . . . . . . . . . . . . . 
    . . . . 8 8 8 8 8 8 8 8 . . . . 
    . . . 8 8 8 8 8 8 8 8 8 8 . . . 
    . . 8 8 8 8 8 8 8 8 8 8 8 8 . . 
    . 8 8 8 8 8 8 8 8 8 8 8 8 8 8 . 
    . 8 8 8 8 8 8 9 9 8 8 8 8 8 8 . 
    . 8 8 8 8 8 9 9 9 9 8 8 8 8 8 . 
    . 8 8 8 8 9 9 9 9 9 9 8 8 8 8 . 
    . 8 8 8 8 9 9 9 9 9 9 8 8 8 8 . 
    . 8 8 8 8 8 9 9 9 9 8 8 8 8 8 . 
    . 8 8 8 8 8 8 9 9 8 8 8 8 8 8 . 
    . 8 8 8 8 8 8 8 8 8 8 8 8 8 8 . 
    . . 8 8 8 8 8 8 8 8 8 8 8 8 . . 
    . . . 8 8 8 8 8 8 8 8 8 8 . . . 
    . . . . 8 8 8 8 8 8 8 8 . . . . 
    . . . . . . . . . . . . . . . . 
    `, SpriteKind.orb)
let mySprite6 = sprites.create(img`
    . . . . . . . . . . . . . . . . 
    . . . . 3 3 3 3 3 3 3 3 . . . . 
    . . . 3 3 3 3 3 3 3 3 3 3 . . . 
    . . 3 3 3 3 3 3 3 3 3 3 3 3 . . 
    . 3 3 3 3 3 3 3 3 3 3 3 3 3 3 . 
    . 3 3 3 3 3 3 d d 3 3 3 3 3 3 . 
    . 3 3 3 3 3 d d d d 3 3 3 3 3 . 
    . 3 3 3 3 d d d d d d 3 3 3 3 . 
    . 3 3 3 3 d d d d d d 3 3 3 3 . 
    . 3 3 3 3 3 d d d d 3 3 3 3 3 . 
    . 3 3 3 3 3 3 d d 3 3 3 3 3 3 . 
    . 3 3 3 3 3 3 3 3 3 3 3 3 3 3 . 
    . . 3 3 3 3 3 3 3 3 3 3 3 3 . . 
    . . . 3 3 3 3 3 3 3 3 3 3 . . . 
    . . . . 3 3 3 3 3 3 3 3 . . . . 
    . . . . . . . . . . . . . . . . 
    `, SpriteKind.orb)
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
    `, SpriteKind.Enemy)
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
tiles.placeOnTile(_, tiles.getTileLocation(14, 4))
color.setPalette(
color.Black
)
statusbar2.setColor(5, 8)
statusbar2.positionDirection(CollisionDirection.Left)
statusbar2.value = 100
let collected = 0
game.setGameOverEffect(false, effects.none)
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
    statusbar2.value += 3.5
    statusbar.value += 1
    pause(50)
})
game.onUpdateInterval(100, function () {
    if (spriteutils.distanceBetween(mySprite, _) <= 180) {
        _.follow(mySprite, 7)
    } else {
        _.follow(mySprite, 0)
    }
})
