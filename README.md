# ytpplus-node
Port of the YTP+ program from [arctic.zone](https://arctic.zone) to a Node.js module.
## New functionality exclusive to this port
It is possible to set the effect "range" (0-11, 0 being no effect) during creation, allowing for such things like only having a single effect in the output.

Alongside that, no output is made to console (other than possible errors) allowing for completely no output from using this module.

An added bonus of this module is being able to set the output resoluton and add an outro to the end of the output, which is not possible with the java eequivalent.
## Why use this version instead of the UI based one?
This version is a Node.js module, which allows it to be used in conjunction with other applications. There are also new features added to this version that were not originally added to the java one.

With that said, I do plan on eventually creating a UI for this module for easier access.
## What is currently missing?
The only thing missing from this module compared to YTP+ is the Squidward effect. I plan to add it eventually, but not at this time.
## License?
According to the original creator of the YTP+ software, the code is FOSS (Free Open Source Software) and therefore this port is as well. You are free to do whatever you'd like with the source code or the software, even sell it if you'd like.
## How to get started
First, you need to add source clips (aka "transitions"), music, and sound effects somewhere, you can try to use the module directory's premade folder however I don't recommend this.

Set the values [Options object].sources, [Options object].sounds and [Options object].music to a directory with the [required files](https://github.com/philosophofee/YTPPlus), then start to use the module however you'd like.
## How to use
Example usage:
```js
const YTPGenerator = require("ytpplus-node")
var options = {  
    debug: true,
    sourceList: [  
         "./intro2.mp4"
    ],
    outro: "./resources/outro.mp4",
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
```
Documentation on the configureAndGo function:
```js
/** 
 * Configure ytpplus-node and start generating.
 * @param {Object} options Options for setting up ytpplus-node. Required to have at least sourceList defined for usage.
 * @param {Date} options.date Uses the exact time from this date to create the temporary directory. Default is new Date().
 * @param {string} options.sources Directory that should contain different YTP source clips that will keep their length unspliced and will be added at random. Default is ./sources
 * @param {string} options.sounds Directory that should contain different audio files for the random sound effects' sounds. Default is ./sounds
 * @param {string} options.music Directory that should contain different audio files for the dance effect's music. Default is ./music
 * @param {boolean} options.transitions Whether or not to add transition clips, in the "sources" directory set. Default is false.
 * @param {string} options.OUTPUT_FILE The output destination of the completed YTP. Default is ./done.mp4
 * @param {float} options.MAX_STREAM_DURATION The maximum duration of a single clip. Default is 0.2.
 * @param {float} options.MIN_STREAM_DURATION The minimum duration of a single clip. Default is 0.4.
 * @param {float} options.MAX_CLIPS The maximum clips in a completed YTP. Default is 5.
 * @param {array} options.sourceList A list containing your videos, must be a valid file:// format. Required for usage.
 * @param {boolean} options.debug Enables console.log for a lot of different parts of the module. Not recommended for general use.
 * @param {array} options.effectRange A new implementation in ytpplus-node, allows you to choose the range of effects. 1-11 are every effect in order, with 0 being the stock clip splice. If effects are disabled, their placement will be replaced with the stock clip splice.
 * @param {number} options.effectRange[0] An integer that should be 0-10, anything greater or lower will likely cause issues! This is the starting effect range, default is 0.
 * @param {number} options.effectRange[1] An integer that should be 1-11, anything greater or lower will likely cause issues! This is the ending effect range, default is 11.
 * @param {array} options.resolution A new implementation in ytpplus-node, allows you to set the output resolution and the resolution that the effects will use to create videos.
 * @param {number} options.resolution[0] Width of the output video. Default is 640.
 * @param {number} options.resolution[1] Height of the output video. Default is 480.
 * @param {array} options.outro A new implementation in ytpplus-node, allows you to set an outro video file (*.mp4) to play at the very end of the YTP. Default is null, however you can easily set it to the included outro.mp4 in resources.
 * @param {Object} options.effects An object that contains different booleans for the effects to add. Every effect defaults to false.
 * @param {boolean} options.effects.effect_RandomSound Adds a random sound effect to either the source material or a transition clip.
 * @param {boolean} options.effects.effect_RandomSoundMute Adds a random sound effect, but mutes the original audio.
 * @param {boolean} options.effects.effect_Reverse Reverses both audio and video, sometimes doesn't work unfortunately.
 * @param {boolean} options.effects.effect_SpeedUp Speeds up the clip, may end up with broken audio.
 * @param {boolean} options.effects.effect_SlowDown Slows down the clip, may end up with broken audio.
 * @param {boolean} options.effects.effect_Chorus Applys a "chorus" effect to the audio.
 * @param {boolean} options.effects.effect_Vibrato Applys a "vibrato" effect to the audio.
 * @param {boolean} options.effects.effect_HighPitch Sets the pitch to be higher than normal.
 * @param {boolean} options.effects.effect_LowPitch Sets the pitch to be lower than normal.
 * @param {boolean} options.effects.effect_Dance Grabs a few frames from the video and continuously plays it normally and revered alongside playing music.
 * @param {boolean} options.effects.effect_Squidward *NOT IMPLEMENTED* Applys a bunch of ImageMagick effects to a single frame of the clip to a beat, similar to the popular "Squidward Fad" meme.
 * @return {promise} Resolves when YTP is finished generating, rejects using an error in a try catch loop if something is caught unexpectedly. Also rejects if there is no sourcelist.
 */
 ```
 ## I'm having problems, how do I get help?
 You can try to join arctic.zone's [Discord](https://discord.gg/6NZArYA) but I can't guarentee anyone will help you other than myself (LimeQuartz) due to the differences in code and usage. If you'd like to talk to me directly, my DiscordTag is LimeQuartz#7754. (Don't want to friend me? Join the discord.js or Speak.js communities on Discord, I would be able to be directly messaged without sending a friend request to me.)
