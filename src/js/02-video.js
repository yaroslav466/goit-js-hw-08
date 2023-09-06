import Player from '@vimeo/player';
import throttle from 'lodash.throttle';

const player = new Player('vimeo-player', {
    id: 19231868,
    width: 640
});

player.on('play', function() {
    console.log('played the video!');
});


player.on('timeupdate',throttle( function ({seconds}) {
 
    console.log('Current time:', seconds);
    localStorage.setItem("videoplayer-current-time", JSON.stringify(seconds))
    }, 1000)
);


const cachedDataTime = JSON.parse(localStorage.getItem("videoplayer-current-time"));

if (typeof cachedDataTime === 'number') {
    player.setCurrentTime(cachedDataTime).then(function(seconds) {
        console.log('Successfully set current time to:', seconds);
        
    })
    .catch (function(error) {
        switch (error.name) {
            case 'RangeError':
                console.log('Error: Time was less than 0 or greater than the video’s duration');
                break;

            default:
                console.error('An error occurred:', error);
                break;
        }
    });
} else {
    console.log('Cached time is not valid:', cachedDataTime);
}
