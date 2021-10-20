const YTPGenerator = require("./lib/YTPGenerator")
var options = {  
    debug: true,
    sourceList: [  
      //put your videos here
         "./video.mp4"
    ],
    //outro: "./resources/outro.mp4",
    OUTPUT_FILE: "./done.mp4",
    MAX_CLIPS: 20,
    transitions: true,
    effects: {  
        effect_RandomSound: true,
        effect_RandomSoundMute: true,
        effect_Reverse: true,
        effect_Chorus: true,
        effect_Vibrato: true,
        effect_HighPitch: true,
        effect_LowPitch: true,
        effect_SpeedUp: true,
        effect_SlowDown: true,
        effect_Dance: true,
        effect_Squidward: true
    }
}
new YTPGenerator().configurateAndGo(options)
    .then(() =>
        console.log("Completed operation."))
    .catch(() =>
        console.log("Something went wrong!"))
