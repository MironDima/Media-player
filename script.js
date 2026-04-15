const video = document.querySelector('.video');
const nowTime = document.querySelector('.now_time');
const rangeVideo = document.querySelector('#range_video');
const playButton = document.querySelector('.fa-play');
const pauseButton = document.querySelector('.fa-pause');
const volumeVideo = document.querySelector('#volume_video');
const volumeLevel = document.querySelector('.volume_level');
let minutes = 0;
let secunds = 0;
const time = '00 : 00';
nowTime.innerHTML = time;

playButton.addEventListener('click', (e) => {
    video.play();
});

pauseButton.addEventListener('click', (e) => {
    video.pause();
});


video.addEventListener('timeupdate', () => {
    minutes = Math.floor(video.currentTime / 60);
    secunds = Math.floor(video.currentTime % 60);

    nowTime.innerHTML = ` ${minutes.toString().padStart(2, '0')} : ${secunds.toString().padStart(2, '0')}`;
    rangeVideo.value = video.currentTime / video.duration * 100;
})

rangeVideo.addEventListener('input', () => {
    video.currentTime = rangeVideo.value / 100 * video.duration;
});

volumeVideo.addEventListener('input', () => {
    const volume = volumeVideo.value;
    video.volume = volume;
});


