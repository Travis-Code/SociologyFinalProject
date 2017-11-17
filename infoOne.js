var Homeless = Homeless || {};

Homeless.infoOneState = {

    init: function() {
        // this.game.stage.backgroundColor = "#00000";
        this.game.stage.backgroundColor = "#11111";

    },
    create: function() {
      
        var playButton = this.game.add.button(this.game.width / 2, this.game.height -50, "infoButton", this.infoTwoDialogState, this);
            playButton.anchor.set(0.5);
            playButton.tint = 0xFCBE12;
            playButton.alpha = 0.5;
            playButton.scale.setTo(0.25,0.25);

        //tween(target).to(properties, ease, autoStart, delay, repeat)
        // var playButtonTween = this.game.add.tween(playButton).to({
        //     width: 220,
        //     height: 91
        // }, 1500, "Linear", true, 0, -1);

        //yoyo method gives yoyo effect plays forward then reverses if set to true.
        //if yoyo method is set to false it will repeat without reversing.
        // playButtonTween.yoyo(true);

        var style = { font: "bold 25px Arial", 
                      fill: "#CC0000", 
                      align: "center" };

        var infoOneText = "According to the Honolulu Civil Beat \n 1 out of 5 locals in hawaii \n will become homeless";


        var text = this.game.add.text(this.game.width/2, this.game.height/2, infoOneText, style);
        text.anchor.set(0.5);
        text.alpha = 0.1;

        this.game.add.tween(text).to( { alpha: 1 }, 2000, "Linear", true);

    },

    update: function() {
       
    },

    infoTwoDialogState: function() {
        // var cheer = this.game.add.audio("cheer");
        // cheer.play();
        this.game.time.events.add(Phaser.Timer.SECOND * 0.4, function() {
            console.log("info One State");
            console.log(Homeless.game.global);
            //this.state.start("infoTwo");
            this.game.state.start("infoTwo", Phaser.Plugin.StateTransition.Out.SlideRight, Phaser.Plugin.StateTransition.In.SlideRight);

            //this.fade("PlayGame");
        }, this);
    },
};