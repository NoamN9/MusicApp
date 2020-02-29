// Name: Harel Yerushalmi
// ID: 203456603

import { initialize, Endpoint, Self } from '@muzilator/sdk'

var patternRecognition;
var sequenceChannel;
var controllerChannel

const BackgroundMusic = [

	// C M7
	{
    "type": "note-on",
    "pitch": 48,
    "velocity": 100,
    "timestamp": 0
	},
	{
    "type": "note-off",
    "pitch": 48,
    "velocity": 100,
    "timestamp": 0.4
	}, 
	{
    "type": "note-on",
    "pitch": 52,
    "velocity": 100,
    "timestamp": 0.4
	},
	{
    "type": "note-off",
    "pitch": 52,
    "velocity": 100,
    "timestamp": 0.7
	}, 	
	{
    "type": "note-on",
    "pitch": 55,
    "velocity": 100,
    "timestamp": 0.7
	},
	{
    "type": "note-off",
    "pitch": 55,
    "velocity": 100,
    "timestamp": 1.1
	},
	{
    "type": "note-on",
    "pitch": 58,
    "velocity": 100,
    "timestamp": 1.1
	},
	{
    "type": "note-off",
    "pitch": 58,
    "velocity": 100,
    "timestamp": 1.9
	},
	
	// 0.9 secs between bars
	
	// F M7
	{
    "type": "note-on",
    "pitch": 53,
    "velocity": 100,
    "timestamp": 2.8
	},
	{
    "type": "note-off",
    "pitch": 53,
    "velocity": 100,
    "timestamp": 3.2
	}, 
	{
    "type": "note-on",
    "pitch": 57,
    "velocity": 100,
    "timestamp": 3.2
	},
	{
    "type": "note-off",
    "pitch": 57,
    "velocity": 100,
    "timestamp": 3.5
	}, 	
	{
    "type": "note-on",
    "pitch": 60,
    "velocity": 100,
    "timestamp": 3.5
	},
	{
    "type": "note-off",
    "pitch": 60,
    "velocity": 100,
    "timestamp": 3.9
	},
	{
    "type": "note-on",
    "pitch": 63,
    "velocity": 100,
    "timestamp": 3.9
	},
	{
    "type": "note-off",
    "pitch": 63,
    "velocity": 100,
    "timestamp": 4.7
	},
	
	// C M7
	{
    "type": "note-on",
    "pitch": 48,
    "velocity": 100,
    "timestamp": 5.6
	},
	{
    "type": "note-off",
    "pitch": 48,
    "velocity": 100,
    "timestamp": 6
	}, 
	{
    "type": "note-on",
    "pitch": 52,
    "velocity": 100,
    "timestamp": 6
	},
	{
    "type": "note-off",
    "pitch": 52,
    "velocity": 100,
    "timestamp": 6.3
	}, 	
	{
    "type": "note-on",
    "pitch": 55,
    "velocity": 100,
    "timestamp": 6.3
	},
	{
    "type": "note-off",
    "pitch": 55,
    "velocity": 100,
    "timestamp": 6.7
	},
	{
    "type": "note-on",
    "pitch": 58,
    "velocity": 100,
    "timestamp": 6.7
	},
	{
    "type": "note-off",
    "pitch": 58,
    "velocity": 100,
    "timestamp": 7.5
	},
	
	// C M7
	{
    "type": "note-on",
    "pitch": 48,
    "velocity": 100,
    "timestamp": 8.4
	},
	{
    "type": "note-off",
    "pitch": 48,
    "velocity": 100,
    "timestamp": 8.8
	}, 
	{
    "type": "note-on",
    "pitch": 52,
    "velocity": 100,
    "timestamp": 8.8
	},
	{
    "type": "note-off",
    "pitch": 52,
    "velocity": 100,
    "timestamp": 9.1
	}, 	
	{
    "type": "note-on",
    "pitch": 55,
    "velocity": 100,
    "timestamp": 9.1
	},
	{
    "type": "note-off",
    "pitch": 55,
    "velocity": 100,
    "timestamp": 9.5
	},
	{
    "type": "note-on",
    "pitch": 58,
    "velocity": 100,
    "timestamp": 9.5
	},
	{
    "type": "note-off",
    "pitch": 58,
    "velocity": 100,
    "timestamp": 10.3
	},
		
	// F M7
	{
    "type": "note-on",
    "pitch": 53,
    "velocity": 100,
    "timestamp": 11.2
	},
	{
    "type": "note-off",
    "pitch": 53,
    "velocity": 100,
    "timestamp": 11.6
	}, 
	{
    "type": "note-on",
    "pitch": 57,
    "velocity": 100,
    "timestamp": 11.6
	},
	{
    "type": "note-off",
    "pitch": 57,
    "velocity": 100,
    "timestamp": 11.9
	}, 	
	{
    "type": "note-on",
    "pitch": 60,
    "velocity": 100,
    "timestamp": 11.9
	},
	{
    "type": "note-off",
    "pitch": 60,
    "velocity": 100,
    "timestamp": 12.3
	},
	{
    "type": "note-on",
    "pitch": 63,
    "velocity": 100,
    "timestamp": 12.3
	},
	{
    "type": "note-off",
    "pitch": 63,
    "velocity": 100,
    "timestamp": 13.1
	},
	
	// F M7
	{
    "type": "note-on",
    "pitch": 53,
    "velocity": 100,
    "timestamp": 14
	},
	{
    "type": "note-off",
    "pitch": 53,
    "velocity": 100,
    "timestamp": 14.4
	}, 
	{
    "type": "note-on",
    "pitch": 57,
    "velocity": 100,
    "timestamp": 14.4
	},
	{
    "type": "note-off",
    "pitch": 57,
    "velocity": 100,
    "timestamp": 14.7
	}, 	
	{
    "type": "note-on",
    "pitch": 60,
    "velocity": 100,
    "timestamp": 14.7
	},
	{
    "type": "note-off",
    "pitch": 60,
    "velocity": 100,
    "timestamp": 15.1
	},
	{
    "type": "note-on",
    "pitch": 63,
    "velocity": 100,
    "timestamp": 15.1
	},
	{
    "type": "note-off",
    "pitch": 63,
    "velocity": 100,
    "timestamp": 15.9
	},
	
	// C M7
	{
    "type": "note-on",
    "pitch": 48,
    "velocity": 100,
    "timestamp": 16.8
	},
	{
    "type": "note-off",
    "pitch": 48,
    "velocity": 100,
    "timestamp": 17.2
	}, 
	{
    "type": "note-on",
    "pitch": 52,
    "velocity": 100,
    "timestamp": 17.2
	},
	{
    "type": "note-off",
    "pitch": 52,
    "velocity": 100,
    "timestamp": 17.5
	}, 	
	{
    "type": "note-on",
    "pitch": 55,
    "velocity": 100,
    "timestamp": 17.5
	},
	{
    "type": "note-off",
    "pitch": 55,
    "velocity": 100,
    "timestamp": 17.9
	},
	{
    "type": "note-on",
    "pitch": 58,
    "velocity": 100,
    "timestamp": 17.9
	},
	{
    "type": "note-off",
    "pitch": 58,
    "velocity": 100,
    "timestamp": 18.7
	},
	
	// C M7
	{
    "type": "note-on",
    "pitch": 48,
    "velocity": 100,
    "timestamp": 19.6
	},
	{
    "type": "note-off",
    "pitch": 48,
    "velocity": 100,
    "timestamp": 20
	}, 
	{
    "type": "note-on",
    "pitch": 52,
    "velocity": 100,
    "timestamp": 20
	},
	{
    "type": "note-off",
    "pitch": 52,
    "velocity": 100,
    "timestamp": 20.3
	}, 	
	{
    "type": "note-on",
    "pitch": 55,
    "velocity": 100,
    "timestamp": 20.3
	},
	{
    "type": "note-off",
    "pitch": 55,
    "velocity": 100,
    "timestamp": 20.7
	},
	{
    "type": "note-on",
    "pitch": 58,
    "velocity": 100,
    "timestamp": 20.7
	},
	{
    "type": "note-off",
    "pitch": 58,
    "velocity": 100,
    "timestamp": 21.5
	},
	
	// G M7
	{
    "type": "note-on",
    "pitch": 55,
    "velocity": 100,
    "timestamp": 22.4
	},
	{
    "type": "note-off",
    "pitch": 55,
    "velocity": 100,
    "timestamp": 22.8
	}, 
	{
    "type": "note-on",
    "pitch": 59,
    "velocity": 100,
    "timestamp": 22.8
	},
	{
    "type": "note-off",
    "pitch": 59,
    "velocity": 100,
    "timestamp": 23.1
	}, 	
	{
    "type": "note-on",
    "pitch": 62,
    "velocity": 100,
    "timestamp": 23.1
	},
	{
    "type": "note-off",
    "pitch": 62,
    "velocity": 100,
    "timestamp": 23.5
	},
	{
    "type": "note-on",
    "pitch": 65,
    "velocity": 100,
    "timestamp": 23.5
	},
	{
    "type": "note-off",
    "pitch": 65,
    "velocity": 100,
    "timestamp": 24.3
	},
	
	// F M7
	{
    "type": "note-on",
    "pitch": 53,
    "velocity": 100,
    "timestamp": 25.2
	},
	{
    "type": "note-off",
    "pitch": 53,
    "velocity": 100,
    "timestamp": 25.6
	}, 
	{
    "type": "note-on",
    "pitch": 57,
    "velocity": 100,
    "timestamp": 25.6
	},
	{
    "type": "note-off",
    "pitch": 57,
    "velocity": 100,
    "timestamp": 25.9
	}, 	
	{
    "type": "note-on",
    "pitch": 60,
    "velocity": 100,
    "timestamp": 25.9
	},
	{
    "type": "note-off",
    "pitch": 60,
    "velocity": 100,
    "timestamp": 26.3
	},
	{
    "type": "note-on",
    "pitch": 63,
    "velocity": 100,
    "timestamp": 26.3
	},
	{
    "type": "note-off",
    "pitch": 63,
    "velocity": 100,
    "timestamp": 27.1
	},
	
	// C M7
	{
    "type": "note-on",
    "pitch": 48,
    "velocity": 100,
    "timestamp": 28
	},
	{
    "type": "note-off",
    "pitch": 48,
    "velocity": 100,
    "timestamp": 28.4
	}, 
	{
    "type": "note-on",
    "pitch": 52,
    "velocity": 100,
    "timestamp": 28.4
	},
	{
    "type": "note-off",
    "pitch": 52,
    "velocity": 100,
    "timestamp": 28.7
	}, 	
	{
    "type": "note-on",
    "pitch": 55,
    "velocity": 100,
    "timestamp": 28.7
	},
	{
    "type": "note-off",
    "pitch": 55,
    "velocity": 100,
    "timestamp": 29.1
	},
	{
    "type": "note-on",
    "pitch": 58,
    "velocity": 100,
    "timestamp": 29.1
	},
	{
    "type": "note-off",
    "pitch": 58,
    "velocity": 100,
    "timestamp": 29.9
	},
	
	// C M7
	{
    "type": "note-on",
    "pitch": 48,
    "velocity": 100,
    "timestamp": 30.8
	},
	{
    "type": "note-off",
    "pitch": 48,
    "velocity": 100,
    "timestamp": 31.2
	}, 
	{
    "type": "note-on",
    "pitch": 52,
    "velocity": 100,
    "timestamp": 31.2
	},
	{
    "type": "note-off",
    "pitch": 52,
    "velocity": 100,
    "timestamp": 31.5
	}, 	
	{
    "type": "note-on",
    "pitch": 55,
    "velocity": 100,
    "timestamp": 31.5
	},
	{
    "type": "note-off",
    "pitch": 55,
    "velocity": 100,
    "timestamp": 31.9
	},
	{
    "type": "note-on",
    "pitch": 58,
    "velocity": 100,
    "timestamp": 31.9
	},
	{
    "type": "note-off",
    "pitch": 58,
    "velocity": 100,
    "timestamp": 32.7
	}	
]

const pattern = [48, 51, 53, 54, 55, 58, 60];
const MidiEvents = [
  {
    "type": "note-on",
    "pitch": 60,
    "velocity": 100,
    "timestamp": 0
  }, 
  {
    "type": "note-on",
    "pitch": 64,
    "velocity": 100,
    "timestamp": 0
  }, 
  {
    "type": "note-on",
    "pitch": 67,
    "velocity": 100,
    "timestamp": 0
  },
  {
    "type": "note-off",
    "pitch": 60,
    "velocity": 100,
    "timestamp": 0.5
  }, 
  {
    "type": "note-off",
    "pitch": 64,
    "velocity": 100,
    "timestamp": 0.5
  }, 
  {
    "type": "note-off",
    "pitch": 67,
    "velocity": 100,
    "timestamp": 0.5
  }
]

const init = async () => {
	const platform = await initialize()
	patternRecognition = await platform.createChannel('pattern-recognition')
	sequenceChannel = await platform.createChannel('sequence')
	controllerChannel = await platform.createChannel('controllerMsgs')

	// load Controller, MIDI-Synth, Analyzer and Sequence Player
	await platform.loadLibrary('Blues1', 'controller', 'primary')
	await platform.loadLibrary('midi-synth', 'synth')
	await platform.loadLibrary('blues-generator-analyzer', 'analyzer')
	await platform.loadLibrary('sequence-player', 'sequence-player')

	// connect channels
	await platform.connectChannels(Endpoint('controller', 'midi'), Endpoint('synth', 'midi'))
	await platform.connectChannels(Endpoint('controller', 'midi'), Endpoint('analyzer', 'midi'))
	await platform.connectChannels(Endpoint('analyzer', 'analysis-control'), Self('pattern-recognition'))
	await platform.connectChannels(Self('pattern-recognition'), Endpoint('analyzer', 'analysis-control'))
	await platform.connectChannels(Self('sequence'), Endpoint('sequence-player', 'midi'))
	await platform.connectChannels(Endpoint('sequence-player', 'midi'), Endpoint('synth', 'midi'))
    await platform.connectChannels(Self('controllerMsgs'), Endpoint('controller', 'midi'))

	patternRecognition.postMessage({type: 'set-pattern', pattern: pattern});

	// handle event when pattern recognized
	patternRecognition.addEventListener('message', message => {
		if (message.data.type === 'start-background-music') {
			sequenceChannel.postMessage({type: 'play-pattern', sequence: BackgroundMusic});
		}
		
		else if (message.data.type === 'pattern-recognized') {
			console.log('Pattern Recognized!');
			// play DoMajor Twice with 1 second timeout between the iterations
			sequenceChannel.postMessage({type: 'play-pattern', sequence: BackgroundMusic})
		}
	});

	// activate channels
	patternRecognition.start();
	sequenceChannel.start();
	controllerChannel.start();
}

init()

function playBackgroundMusic() {

	
	// var delay = 0;
	// for (var i = 0; i < BackgroundMusic.length; i += 2) {
		// setTimeout(() => {sequenceChannel.postMessage({type: 'play-pattern', sequence: [BackgroundMusic[i], BackgroundMusic[i + 1]]})}, delay);
		// delay += (BackgroundMusic[i + 1].timestamp) * 1000.0;
	// }
}

function convertToNotesPattern(array) {
	var notesText = "";
	
}






