namespace SpriteKind {
    export const orb = SpriteKind.create()
    export const screen = SpriteKind.create()
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
    animation.runImageAnimation(
    screen2,
    [img`
        ..................11
        .88.888.8....888.11.
        .................12.
        .818.............1..
        .8119.........111...
        ..911.........1.....
        ....11.......11.....
        .....111.8.111......
        ......11188.1.......
        ........111111......
        ........1....11.....
        .......11.....111...
        ......1.........1...
        5555111..........1..
        55551...............
        ..111...............
        `,img`
        ..................bb
        .88.888.8....888.bb.
        .................b..
        .8b8............bb..
        .8bb9.........bbb...
        ..9bb.........b.....
        ....bb.......bb.....
        .....bbb.8.bbb......
        ......bbb88.b.......
        ........bbbbbb......
        ........b....bb.....
        .......bb.....bbb...
        ......b.........b...
        555.bbb..........b..
        555.b...............
        ..bbb...............
        `],
    500,
    false
    )
    color.setPalette(
    color.GrayScale
    )
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
let GET_OUT_WHILE_YOU_STILL_CAN = false
let B_presed = false
let stamana0 = false
let running = false
let no_sight_for_you = false
let statusbar: StatusBarSprite = null
let statusbar2: StatusBarSprite = null
let screen2: Sprite = null
screen2 = sprites.create(img`
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
    `, SpriteKind.screen)
statusbar2 = statusbars.create(8, 40, StatusBarKind.sight)
statusbar = statusbars.create(40, 8, StatusBarKind.Health)
let mySprite2 = sprites.create(img`
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
let mySprite3 = sprites.create(img`
    . 
    . 
    . 
    . 
    . 
    . 
    . 
    . 
    . 
    . 
    . 
    . 
    . 
    . 
    . 
    . 
    `, SpriteKind.orb)
let mySprite4 = sprites.create(img`
    . 
    . 
    . 
    . 
    . 
    . 
    . 
    . 
    . 
    . 
    . 
    . 
    . 
    . 
    . 
    . 
    `, SpriteKind.orb)
let mySprite5 = sprites.create(img`
    . 
    . 
    . 
    . 
    . 
    . 
    . 
    . 
    . 
    . 
    . 
    . 
    . 
    . 
    . 
    . 
    `, SpriteKind.orb)
let mySprite6 = sprites.create(img`
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
screen2.setFlag(SpriteFlag.RelativeToCamera, true)
animation.runImageAnimation(
screen2,
[img`
    ....................
    .88.888.8....888.22.
    .................22.
    .888................
    .8889...............
    ..999...............
    ....................
    .........8..........
    ........888.........
    .........8..........
    ....................
    ....................
    ....................
    5555................
    5555................
    ....................
    `,img`
    ....................
    .88.888.8....888....
    ....................
    .888................
    .8889...............
    ..999...............
    ....................
    .........8..........
    ........888.........
    .........8..........
    ....................
    ....................
    ....................
    555.................
    555.................
    ....................
    `],
500,
true
)
scaling.scaleByPercent(screen2, 700, ScaleDirection.Uniformly, ScaleAnchor.Middle)
screen2.setPosition(65, 60)
tiles.placeOnRandomTile(mySprite2, assets.tile`myTile1`)
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
    if (collected == 5) {
        GET_OUT_WHILE_YOU_STILL_CAN = true
        info.startCountdown(180)
        animation.runImageAnimation(
        mySprite2,
        [img`
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
            `],
        500,
        false
        )
    }
})
game.onUpdateInterval(100, function () {
    if (spriteutils.distanceBetween(mySprite, _) <= 180 && GET_OUT_WHILE_YOU_STILL_CAN == false) {
        _.follow(mySprite, 8)
    } else {
        _.follow(mySprite, 0)
    }
    if (GET_OUT_WHILE_YOU_STILL_CAN == true) {
        _.follow(mySprite, 10)
    }
})
