var loadState = {
    
    preload : function() {
        /* Add a loading label on the screen */
        var loadingLabel = game.add.text(game.world.centerX, 150, 'loading ...', {font: '30px Arial', fill: '#ffffff'});
        loadingLabel.anchor.setTo(0.5, 0.5);
        
        /* Display the progress bar */
        var progressBar = game.add.sprite(game.world.centerX, 200, 'progressBar');
        progressBar.anchor.setTo(0.5, 0.5);
        game.load.setPreloadSprite(progressBar);
        
        /* Load all our assets */
        
        /* Load the player as a spritesheet for later animation */
        game.load.spritesheet('player', 'img/player2.png', 20, 20);
        
        game.load.image('tileset', 'img/tileset.png');
        game.load.tilemap('map', 'img/map2.json', null, Phaser.Tilemap.TILED_JSON);
        game.load.image('playButton', 'img/playButton.png');
        game.load.spritesheet('muteButton', 'img/muteButton.png', 28, 22);
        game.load.image('pixel', 'img/pixel.png');
        game.load.image('enemy', 'img/enemy.png');
        game.load.image('coin', 'img/coin.png');
        game.load.image('background', 'img/background.png');
        /* Sound when the player jumps */
        game.load.audio('jump', [ 'img/jump.ogg', 'img/jump.mp3' ]);
        /* Sound when the player takes a coin */
        game.load.audio('coin', [ 'img/coin.ogg', 'img/coin.mp3' ]);
        /* Sound when the player dies */
        game.load.audio('dead', [ 'img/dead.ogg', 'img/dead.mp3' ]);
        game.load.image('jumpButton', 'img/jumpButton.png');
        game.load.image('rightButton', 'img/rightButton.png');
        game.load.image('leftButton', 'img/leftButton.png');
    },
    
    create : function() {
        /* Go to the menu state */
        game.state.start('menu');
    },
  
    scaleAsset : function(asset) {
        asset.scale.setTo(scaleRatio, scaleRatio);
    }
}