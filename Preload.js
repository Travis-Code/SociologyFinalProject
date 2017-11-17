var Homeless = Homeless || {};

//load game assets
Homeless.PreloadState = {
    preload: function() {
        //show loading screen
        this.loadingBar = this.add.sprite(this.game.world.centerX, this.game.world.centerY, "loadingBar");
        this.loadingBar.anchor.setTo(0.5);
        this.loadingBar.scale.setTo(3);
        //method that expands the loading bar from 0-100%
        this.load.setPreloadSprite(this.loadingBar);
       
        //load assets
         this.load.image("arrowButton", "assets/sprites/glassArrow.png");
        this.load.image("actionButton", "assets/sprites/whiteButton.png");
        this.load.image("infoButton", "assets/sprites/arrowButton.png");
        this.load.image("chinatown", "assets/sprites/Chinatown.jpg");
        this.load.image("southPark", "assets/sprites/southPark.png");
        this.load.image("dollar", "assets/sprites/dollar.png");
        this.load.image("quarter", "assets/sprites/quarter.png");
        this.load.image("blueButton", "assets/sprites/blueButton.png");
        this.load.image("jail", "assets/sprites/prisonBars.png");
        this.load.image("beer", "assets/sprites/beer.png");

        //this.load.image("actionButton", "assets/sprites/whiteButton.png");     
     

        // this.load.image('backgroundCity', 'assets/sprites/backgroundPic.png');
        this.load.image('superPKTitle', 'assets/sprites/titleScreenHomeless.png');
        this.load.image('playButton', 'assets/sprites/playButton.png');
        // this.load.spritesheet('cat', 'assets/sprites/cat.png', 61.9, 47);
        // this.load.spritesheet('monster', 'assets/sprites/monsterHair.png', 306.14 ,320 );
        // //this.load.spritesheet('monster', 'assets/sprites/monster.png', 389.7 ,408 );
        // this.load.spritesheet('smallMonster', 'assets/sprites/smallMonster.png', 76.5 ,80 );
        // this.load.spritesheet('trampoline', 'assets/sprites/trampolineFixed.png',220, 112);
        // this.load.spritesheet('fire', 'assets/sprites/soccerBall.png', 45, 45);

        // this.game.load.audio("boing", ["assets/sprites/boing.mp3", "assets/sounds/boing.ogg"]);
        // this.game.load.audio("coolHipHop", ["assets/sprites/coolHipHop.mp3", "assets/sounds/coolHipHop.ogg"]);
        // this.game.load.audio("jumpPark", ["assets/sprites/jumpPark.mp3", "assets/sounds/jumpPark.ogg"]);
        // this.game.load.audio("squeekSound", ["assets/sprites/squeekSound.mp3", "assets/sounds/squeekSound.ogg"]);
        // this.game.load.audio("ouch", ["assets/sprites/ouch.mp3", "assets/sounds/ouch.ogg"]);
        // this.game.load.audio("meow", ["assets/sprites/meow.mp3", "assets/sounds/meow.ogg"]);
        // this.game.load.audio("cheer", ["assets/sprites/cheer.mp3", "assets/sounds/cheer.ogg"]);

        //spritesheet ("key", "path", xframeSize, yframeSize, num of frames in sheet.)    
        //this.load.spritesheet("player", "assets/sprites/playerIdle.png",60,84);
        // this.load.spritesheet("player", "assets/sprites/playerRunJump.png", 52, 86);
        // this.load.spritesheet("player", "assets/sprites/kimmySpriteThreeFramesWalking.png", 77.5, 147);
        this.load.spritesheet("player", "assets/sprites/kimmyWalkingSpriteSad.png", 77.5, 147);

        //this.load.spritesheet("player", "assets/sprites/player_spritesheet.png",28, 30, 5, 1,1);

        //load json file.
        // this.load.text("level", "assets/prefabrications/level.json");

    },
    create: function() {
        // this.state.start("TitleScreen");
        this.state.start("TitleScreen");

    }
};