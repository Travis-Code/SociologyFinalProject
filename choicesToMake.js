var Homeless = Homeless || {};

Homeless.choicesToMake = {

    init: function() {
        this.game.stage.backgroundColor = "#00000";
    },
    create: function() {
        Homeless.game.global.coins = Homeless.game.global.coins+4;
      
        // var playButton = this.game.add.button(this.game.width / 2, this.game.height - 50, "infoButton", this.startGame, this);
        //     playButton.anchor.set(0.5);
        //     playButton.tint = 0xFCBE12;
        //     playButton.alpha = 0.5;
        //     playButton.scale.setTo(0.25,0.25);

        this.style = { 
            font: "bold 30px Arial", 
            fill: "#CC0000", 
            align: "center" 
        };

        this.styleButtons = { 
            font: "bold 26px Arial", 
            fill: "#CC0000", 
            align: "center",
            stroke:'#000000',
            strokeThickness: 6,    
            fill: '#FFC300'  
        };

        // retreatism button.
        var blueButtonOnePositionX = this.game.width/2-150;
        var blueButtonOnePositionY = this.game.height/2-140;
        this.blueButtonOne = this.game.add.button(blueButtonOnePositionX, blueButtonOnePositionY, "blueButton", this.buyAlcohol, this);
        this.blueButtonOne.anchor.set(0.5);
        this.blueButtonOne.alpha = 0.2;
        this.blueButtonOne.scale.setTo(4.0, 3.5);
        this.blueButtonOne.inputEnabled = true;
        var blueButtonOneText = "RETREATISM \n GET \n DRUNK \n - $2.00 "     
        var blueButtonOneTextOnScreen = this.game.add.text(blueButtonOnePositionX, blueButtonOnePositionY+5, blueButtonOneText, this.styleButtons);
        blueButtonOneTextOnScreen.anchor.set(0.5);
        blueButtonOneTextOnScreen.alpha = 0.1;
        blueButtonOneTextOnScreen.lineSpacing = -15;
        this.game.add.tween(blueButtonOneTextOnScreen).to( { alpha: 1 }, 2000, "Linear", true);

        var blueButtonTwoPositionX = this.game.width/2+150;
        var blueButtonTwoPositionY = this.game.height/2-140;
        this.blueButtonTwo = this.game.add.button(blueButtonTwoPositionX, blueButtonTwoPositionY, "blueButton", this.illegal, this);
        this.blueButtonTwo.anchor.set(0.5);
        this.blueButtonTwo.alpha = 0.2;
        this.blueButtonTwo.scale.setTo(4.0, 3.5);
        this.blueButtonTwo.inputEnabled = true;
        var blueButtonTwoText = "INNOVATION \n DO SOMETHING \n ILLEGAL \n TO MAKE $$$"     
        var blueButtonTwoTextOnScreen = this.game.add.text(blueButtonTwoPositionX, blueButtonTwoPositionY+5, blueButtonTwoText, this.styleButtons);
        blueButtonTwoTextOnScreen.anchor.set(0.5);
        blueButtonTwoTextOnScreen.alpha = 0.1;
        blueButtonTwoTextOnScreen.lineSpacing = -15;
        this.game.add.tween(blueButtonTwoTextOnScreen).to( { alpha: 1 }, 2000, "Linear", true);



        var blueButtonThreePositionX = this.game.width/2+150;
        var blueButtonThreePositionY = this.game.height/2+50;
        this.blueButtonThree = this.game.add.button(blueButtonThreePositionX, blueButtonThreePositionY, "blueButton", this.shelter, this);
        this.blueButtonThree.anchor.set(0.5);
        this.blueButtonThree.alpha = 0.2;
        this.blueButtonThree.scale.setTo(4.0, 3.5);
        this.blueButtonThree.inputEnabled = true;
        var blueButtonThreeText = "GO TO \n A SHELTER."     
        var blueButtonThreeTextOnScreen = this.game.add.text(blueButtonThreePositionX, blueButtonThreePositionY+5, blueButtonThreeText, this.styleButtons);
        blueButtonThreeTextOnScreen.anchor.set(0.5);
        blueButtonThreeTextOnScreen.alpha = 0.1;
        blueButtonThreeTextOnScreen.lineSpacing = -15;
        this.game.add.tween(blueButtonThreeTextOnScreen).to( { alpha: 1 }, 2000, "Linear", true);
       


        var blueButtonFourPositionX = this.game.width/2-150;
        var blueButtonFourPositionY = this.game.height/2+50;
        this.blueButtonFour = this.game.add.button(blueButtonFourPositionX, blueButtonFourPositionY, "blueButton", this.startGame, this);
        this.blueButtonFour.anchor.set(0.5);
        this.blueButtonFour.alpha = 0.2;
        this.blueButtonFour.scale.setTo(4.0, 3.5);
        this.blueButtonFour.inputEnabled = true;
        var blueButtonFourText = "BEG FOR \n CHANGE."     
        var blueButtonFourTextOnScreen = this.game.add.text(blueButtonFourPositionX, blueButtonFourPositionY+5, blueButtonFourText, this.styleButtons);
        blueButtonFourTextOnScreen.anchor.set(0.5);
        blueButtonFourTextOnScreen.alpha = 0.1;
        blueButtonFourTextOnScreen.lineSpacing = -15;
        this.game.add.tween(blueButtonFourTextOnScreen).to( { alpha: 1 }, 2000, "Linear", true);
       







        this.loadStartingTextAndMoney();

        // var infoThreeText = "what do want to do? \n "                            

        // var text = this.game.add.text(this.game.width/2, this.game.height-400, infoThreeText, this.style);
        // text.anchor.set(0.5);
        // text.alpha = 0.1;

        // this.game.add.tween(text).to( { alpha: 1 }, 2000, "Linear", true);
    },

    update: function() {

        this.mouseOverButton();
       
    },

    mouseOverButton: function(){
        if (this.blueButtonOne.input.pointerOver())
        {
            this.blueButtonOne.alpha = 1;
        } else {
            this.blueButtonOne.alpha = 0.5;
        }
        if (this.blueButtonTwo.input.pointerOver())
        {
            this.blueButtonTwo.alpha = 1;
        } else {
            this.blueButtonTwo.alpha = 0.5;
        }
         if (this.blueButtonThree.input.pointerOver())
        {
            this.blueButtonThree.alpha = 1;
        } else {
            this.blueButtonThree.alpha = 0.5;
        }
         if (this.blueButtonFour.input.pointerOver())
        {
            this.blueButtonFour.alpha = 1;
        } else {
            this.blueButtonFour.alpha = 0.5;
        }
    },

    loadStartingTextAndMoney: function(){
        this.textOnScreenWidth = this.game.height-35;
        this.amountOfMoney = this.add.text(this.game.width/2, this.textOnScreenWidth, "you have: $" + Homeless.game.global.coins.toFixed(2), this.style);
        this.amountOfMoney.anchor.set(0.5);
    },

    buyAlcohol: function(){
        if(Homeless.game.global.coins <= 0.00) {
            console.log("not enough money to buy beer");
            console.log(Homeless.game.global.record);
            this.game.state.start("dead", Phaser.Plugin.StateTransition.Out.SlideRight, Phaser.Plugin.StateTransition.In.SlideRight);

        } else {
            Homeless.game.global.coins -= 2.00;
            console.log("you bought beer");
            console.log(Homeless.game.global.record);

            var blueButtonOnePositionX = this.game.width/2-150;
            var blueButtonOnePositionY = this.game.height/2-140;
            this.beerPic = this.game.add.sprite(blueButtonOnePositionX, blueButtonOnePositionY, "beer");
            this.beerPic.anchor.set(0.5);
            // this.beerPic.alpha = 0.2;
            this.beerPic.scale.set(0.2);
            // this.beerPic.inputEnabled = true;

            this.beerPic.anchor.set(0.5);
            this.beerPic.alpha = 1;
            this.game.add.tween(this.beerPic).to( { alpha: 0 }, 4000, "Linear", true);

            this.amountOfMoney.destroy();
            this.amountOfMoney = this.add.text(this.game.width/2,  this.textOnScreenWidth, "you have: $" + Homeless.game.global.coins.toFixed(2), this.style);
            this.amountOfMoney.anchor.set(0.5);
            console.log(Homeless.game.global.coins);
        }
    },

    illegal: function(){
        if(Homeless.game.global.coins >= 1.00 && Homeless.game.global.coins <= 40.00 ) {
            Homeless.game.global.coins += 2.00;
            Homeless.game.global.countUntilJail = Homeless.game.global.countUntilJail+1;
            console.log("you got money");
            console.log(Homeless.game.global.record);
            console.log(Homeless.game.global.countUntilJail);

            this.amountOfMoney.destroy();
            this.amountOfMoney = this.add.text(this.game.width/2, this.textOnScreenWidth, "you have: $" + Homeless.game.global.coins.toFixed(2), this.style);
            this.amountOfMoney.anchor.set(0.5);
            console.log(Homeless.game.global.coins);           
        } else if(Homeless.game.global.countUntilJail >= 10){
            console.log("you got caught by the police! now you have a record.");
            Homeless.game.global.record = true;
            this.game.state.start("jail", Phaser.Plugin.StateTransition.Out.SlideRight, Phaser.Plugin.StateTransition.In.SlideRight);
        }
    },

    startGame: function() {
        // var cheer = this.game.add.audio("cheer");
        // cheer.play();
        this.game.time.events.add(Phaser.Timer.SECOND * 0.4, function() {
            console.log("info One State");
            console.log(Homeless.game.global);
            this.game.state.start("Game", Phaser.Plugin.StateTransition.Out.SlideRight, Phaser.Plugin.StateTransition.In.SlideRight);
            //this.fade("PlayGame");
        }, this);
    },
};