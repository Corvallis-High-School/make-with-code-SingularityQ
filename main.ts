/**
 * This is the main file for your project.
 *
 * Create images, tilemaps, animations, and songs using the
 * asset explorer in VS Code. You can reference those assets
 * using the tagged templates on the assets namespace:
 *
 *     assets.image`myImageName`
 *     assets.tilemap`myTilemapName`
 *     assets.tile`myTileName`
 *     assets.animation`myAnimationName`
 *     assets.song`mySongName`
 *
 * New to MakeCode Arcade? Try creating a new project using one
 * of the templates to learn about Sprites, Tilemaps, Animations,
 * and more! Or check out the reference docs here:
 *
 * https://arcade.makecode.com/reference
 */

game.onUpdate(() => {
    controller.up.onEvent(ControllerButtonEvent.Pressed, function () {
    playerX = mainPlayer.tilemapLocation().column
    playerY = mainPlayer.tilemapLocation().row
    tiles.placeOnTile(mainPlayer, tiles.getTileLocation(playerX, playerY - 1))
})
controller.left.onEvent(ControllerButtonEvent.Pressed, function () {
    playerX = mainPlayer.tilemapLocation().column
    playerY = mainPlayer.tilemapLocation().row
    tiles.placeOnTile(mainPlayer, tiles.getTileLocation(playerX - 1, playerY))
})
controller.right.onEvent(ControllerButtonEvent.Pressed, function () {
    playerX = mainPlayer.tilemapLocation().column
    playerY = mainPlayer.tilemapLocation().row
    tiles.placeOnTile(mainPlayer, tiles.getTileLocation(playerX + 1, playerY))
})
controller.down.onEvent(ControllerButtonEvent.Pressed, function () {
    playerX = mainPlayer.tilemapLocation().column
    playerY = mainPlayer.tilemapLocation().row
    tiles.placeOnTile(mainPlayer, tiles.getTileLocation(playerX, playerY + 1))
})
let playerY = 0
let playerX = 0
let mainPlayer: Sprite = null
let queuedMovementX = 0
let queuedMovementY = 0
tiles.setCurrentTilemap(tilemap`level1`)
mainPlayer = sprites.create(img`
    . . . . . . . . . . . . . . . . 
    . . . 5 . . 5 5 5 5 5 . . 5 . . 
    . . 5 6 5 . 6 6 6 6 6 . 5 6 5 . 
    . 7 6 6 6 5 7 7 7 7 7 5 6 6 6 7 
    . . 7 6 6 6 7 7 7 7 7 6 6 6 7 . 
    . . . 7 6 7 7 8 8 8 7 7 6 7 . . 
    . 5 5 6 7 7 8 8 8 8 8 7 7 6 5 5 
    . 5 6 6 7 8 c 8 c 8 8 8 7 6 6 6 
    . 6 6 6 8 8 8 8 8 8 c 8 8 6 6 6 
    . 6 7 7 c 8 8 8 8 8 8 8 8 6 6 6 
    . 7 7 5 8 8 8 8 c 8 8 8 8 5 7 7 
    . . . 5 5 8 c 8 8 8 8 8 5 5 . . 
    . . 5 6 7 5 8 8 8 8 c 5 6 6 5 . 
    . 5 6 6 6 7 5 5 5 5 5 7 7 6 6 5 
    . . 6 6 7 . 6 6 6 6 6 . 7 6 6 . 
    . . . 7 . . 7 7 7 7 7 . . 7 . . 
    `, SpriteKind.Player)
tiles.placeOnTile(mainPlayer, tiles.getTileLocation(3, 0))
forever(function () {
    mainPlayer.setImage(img`
        . . . . . . . . . . . . . . . . 
        . . . 5 . . 5 5 5 5 5 . . 5 . . 
        . . 5 6 5 . 6 6 6 6 6 . 5 6 5 . 
        . 7 6 6 6 5 7 7 7 7 7 5 6 6 6 7 
        . . 7 6 6 6 7 7 7 7 7 6 6 6 7 . 
        . . . 7 6 7 7 8 8 8 7 7 6 7 . . 
        . 5 5 6 7 7 8 8 c 8 8 7 7 6 5 5 
        . 5 6 6 7 8 8 8 8 8 8 8 7 6 6 6 
        . 6 6 6 8 8 8 8 8 c 8 c 8 6 6 6 
        . 6 7 7 8 8 c 8 8 8 8 8 8 6 6 6 
        . 7 7 5 8 8 8 8 8 8 8 8 8 5 7 7 
        . . . 5 5 8 8 c 8 c 8 8 5 5 . . 
        . . 5 6 7 5 8 8 8 8 8 5 6 6 5 . 
        . 5 6 6 6 7 5 5 5 5 5 7 7 6 6 5 
        . . 6 6 7 . 6 6 6 6 6 . 7 6 6 . 
        . . . 7 . . 7 7 7 7 7 . . 7 . . 
        `)
    pause(100)
    mainPlayer.setImage(img`
        . . . . . . . . . . . . . . . . 
        . . . . 5 5 . . 5 5 5 5 . . . . 
        . . . 6 6 6 5 . . 6 6 6 5 . . . 
        . . . . 7 7 6 6 6 7 7 7 . . 5 . 
        . . 5 . 6 6 6 7 7 7 7 6 5 5 6 6 
        . 5 6 5 6 7 7 8 8 8 7 7 6 6 6 7 
        . 6 6 6 7 7 8 8 8 8 8 7 6 6 7 . 
        . 6 7 6 7 8 8 8 c 8 c 8 7 7 . . 
        . 7 . 7 8 8 c 8 8 8 8 8 8 5 . 5 
        . . . 5 8 8 8 8 8 8 8 8 8 6 5 6 
        . . 5 6 5 8 8 8 c 8 8 c 8 6 6 6 
        . 5 6 6 5 c 8 8 8 8 8 8 5 7 6 7 
        . 6 6 7 5 5 8 8 8 8 5 5 5 . 7 . 
        . . 7 . . 5 5 5 5 5 5 5 5 . . . 
        . . . . 5 6 6 6 . . 6 6 6 5 . . 
        . . . . . 7 7 7 6 . . 7 7 . . . 
        `)
    pause(100)
    mainPlayer.setImage(img`
        . . . . . . . . . . . . . . . . 
        . . . . . 5 5 5 5 . 5 5 5 . . . 
        . . . . 5 . 6 6 6 5 . 6 6 5 . . 
        . . 5 5 6 . 7 7 7 6 6 7 6 6 . . 
        . 5 6 6 7 6 7 7 7 7 7 6 7 7 6 . 
        . 6 7 7 6 7 7 8 8 8 7 7 6 . . 5 
        . 7 . 5 7 7 8 8 8 8 8 7 7 5 5 6 
        . . 5 6 7 8 8 8 8 8 8 8 7 6 6 6 
        . 5 6 6 8 8 8 8 8 8 8 8 8 6 6 7 
        . 5 6 6 8 8 8 8 8 8 8 8 8 6 7 . 
        . 6 7 7 8 8 8 8 8 8 8 8 8 7 . 5 
        . 7 . . 5 8 8 8 8 8 8 8 5 5 5 6 
        . . 5 5 5 5 8 8 8 8 8 5 5 6 6 7 
        . . . 5 6 6 5 5 5 5 5 . 6 7 7 . 
        . . . 7 6 6 . 6 6 6 5 . 7 . . . 
        . . . . 7 7 7 . 7 7 6 5 . . . . 
        `)
})
    // Code in this function will run once per frame. MakeCode
    // Arcade games run at 30 FPS
});

