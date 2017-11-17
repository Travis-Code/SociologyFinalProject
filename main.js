
var Homeless = Homeless || {};

//python -m SimpleHTTPServer 9000

//Homeless.dimensions = Homeless.getGameLandscapeDimensions(700,414);

//create a new Phaser.Game object and assign it to our custom Homeless.game property.
// then add our states to the game property.
Homeless.game = new Phaser.Game(700, 414, Phaser.AUTO);

Homeless.game.global = {
 coins : 0,
 countUntilJail: 0,
 record : false
}

Homeless.game.state.add("Boot", Homeless.BootState);
Homeless.game.state.add("Preload", Homeless.PreloadState);
Homeless.game.state.add("TitleScreen", Homeless.titleScreenState);
Homeless.game.state.add("infoOne", Homeless.infoOneState);
Homeless.game.state.add("infoTwo", Homeless.infoTwoState);
Homeless.game.state.add("infoThree", Homeless.infoThreeState);
Homeless.game.state.add("choicesToMake", Homeless.choicesToMake);
Homeless.game.state.add("jail", Homeless.JailState);
Homeless.game.state.add("dead", Homeless.deadState);
Homeless.game.state.add("Game", Homeless.GameState);
// Homeless.game.state.add("Win", Homeless.winScreenState);

//start our boot state
Homeless.game.state.start("Boot");


