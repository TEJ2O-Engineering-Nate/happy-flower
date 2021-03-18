let projectile: Sprite = null
scene.setBackgroundColor(9)
let mySprite = sprites.create(img`
    . . . . . . . . . . . . . . . . 
    . . . . 5 5 5 5 5 5 5 . . . . . 
    . . . . 5 5 5 5 5 5 5 . . . . . 
    . . . . 5 5 f f f 5 5 . . . . . 
    . . . . 5 5 f f f 5 5 . . . . . 
    . . . . 5 5 f f f 5 5 . . . . . 
    . . . . 5 5 5 5 5 5 5 . . . . . 
    . . . . 5 5 5 5 5 5 5 . . . . . 
    . . . . . . . 7 . . . . . . . . 
    . . . . . . . 7 . . . . . . . . 
    . . . . . . . 7 7 7 . . . . . . 
    . . . . . . . 7 . . . . . . . . 
    . . . . . 7 7 7 . . . . . . . . 
    . . . . . . . 7 . . . . . . . . 
    . . . . . . . 7 . . . . . . . . 
    e e e e e e e e e e e e e e e e 
    `, SpriteKind.Player)
game.onUpdateInterval(1000, function () {
    projectile = sprites.createProjectileFromSprite(img`
        . . . . . . . 1 . . . . . . . . 
        . . . . . . 1 d 1 . . . . . . . 
        . . . . . 1 d d d 1 . . . . . . 
        . . . . . 1 d d d 1 . . . . . . 
        . . . . . 1 d d d 1 . . . . . . 
        . . . . . 5 5 5 5 5 . . . . . . 
        . . . d 5 f 5 f 5 f 5 d . . . . 
        . . . 5 5 f 5 f 5 f 5 5 . . . . 
        . . . d 5 f 5 f 5 f 5 d . . . . 
        . . . . . 5 5 5 5 5 . . . . . . 
        . . . . . 1 d d d 1 . . . . . . 
        . . . . . 1 d d d 1 . . . . . . 
        . . . . . 1 d d d 1 . . . . . . 
        . . . . . . 1 d 1 . . . . . . . 
        . . . . . . . 1 . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        `, mySprite, randint(-25, 25), randint(-25, 25))
    projectile.lifespan = 3000
})
