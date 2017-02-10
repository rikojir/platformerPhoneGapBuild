var bootState = {
    
    preload: function () {
        /* Load the menu image */
        game.load.image('progressBar', 'img/progressBar.png');
    }, 

    
    create: function () {
        /* Set some game settings */
        game.stage.backgroundColor = '#3498db';
        game.physics.startSystem(Phaser.Physics.ARCADE);
      
        /* Scale the game to keep aspect ratio untouched and 
        always show the complete game */
        game.scale.scaleMode = Phaser.ScaleManager.SHOW_ALL;
      
        /* Landscape allowed, portrait not */
        game.scale.forceOrientation(true, false);
      

        // If the device is not a desktop, so it's a mobile device
        if (!game.device.desktop) {
          
          // Add a blue color to the page, to hide the white borders we might have
          document.body.style.backgroundColor = '#3498db';
          // Set the min and max width/height of the game
          game.scale.minWidth = 250;
          game.scale.minHeight = 170;
          game.scale.maxWidth = 500*0.9;
          game.scale.maxHeight = 340*0.9;
          // Center the game on the screen
          game.scale.pageAlignHorizontally = true;
          game.scale.pageAlignVertically = true;
          // Apply the scale changes
          
          //WARNING: IMPORTANT CHANGE!
          //game.scale.refresh();
        } else {
          //Desktop device, so we can use higher max widths and heights
          document.body.style.backgroundColor = '#3498db';
          // Set the min and max width/height of the game
          game.scale.minWidth = 250;
          game.scale.minHeight = 170;
          game.scale.maxWidth = 250 * 3;
          game.scale.maxHeight = 170 * 3;
          // Center the game on the screen
          game.scale.pageAlignHorizontally = true;
          game.scale.pageAlignVertically = true;
        }
          
          
          game.state.start('load');
    },
  
    update: function() {
      if (game.scale.isPortrait) {
        console.log('Game runs in portrait mode');
        document.getElementById('turn').style.display = "block";
      }
      if (game.scale.isLandscape) {
        console.log('Game runs in landscape mode');
        document.getElementById('turn').style.display = "none";
        game.state.start('load');
      }
    }
}