
import Player from '@vimeo/player';
import throttle from 'lodash.throttle';


const iframe = document.getElementById('vimeo-player');
const player = new Player(iframe);


let currentTime = 0;
const updateCurrentTime = (time) => {
    currentTime = time;
    localStorage.setItem('videoplayer-current-time', currentTime);
};

const storedTime = localStorage.getItem('videoplayer-current-time');
if (storedTime) {
    currentTime = parseFloat(storedTime);
}

player.on('timeupdate', throttle(({ seconds }) => {
    updateCurrentTime(seconds);
}, 1000));
 
player.setCurrentTime(currentTime);




