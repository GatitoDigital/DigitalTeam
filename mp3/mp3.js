/* Music 
======================================*/
var playlist = [
    {
        "song": "Cancion 1",
        "album": "Digital Team",
        "artist": "Digital Team",
        "artwork": "http://upload.wikimedia.org/wikipedia/en/thumb/a/a8/Rising_sun_animals_US.jpg/220px-Rising_sun_animals_US.jpg",
        "mp3": "mp3/Cancion 1.mp3"
    },
    {
        "song": "Cancion 2",
        "album": "Digital Team",
        "artist": "Digital Team",
        "artwork": "https://i.imgur.com/Py4XcBT.png",
        "mp3": "mp3/Cancion 2.mp3"
    },
    {
        "song": "Cancion 3",
        "album": "Digital Team",
        "artist": "Digital Team",
        "artwork": "http://i1285.photobucket.com/albums/a583/TheGreatOzz1/Hosted-Images/Noisy-Freeks-Image_zps4kilrxml.png",
        "mp3": "mp3/Cancion 3.mp3"
    }
];

/* General Load / Variables
======================================*/
var rot = 0;
var duration;
var playPercent;
var rotate_timer;
var armrot = -45;
var bufferPercent;
var currentSong = 0;
var arm_rotate_timer;
var arm = document.getElementById("arm");
var next = document.getElementById("next");
var song = document.getElementById("song");
var timer = document.getElementById("timer");
var music = document.getElementById("music");
var album = document.getElementById("album");
var artist = document.getElementById("artist");
var volume = document.getElementById("volume");
var playButton = document.getElementById("play");
var timeline = document.getElementById("slider");
var playhead = document.getElementById("elapsed");
var previous = document.getElementById("previous");
var pauseButton = document.getElementById("pause");
var bufferhead = document.getElementById("buffered");
var artwork = document.getElementsByClassName("artwork")[0];
var timelineWidth = timeline.offsetWidth - playhead.offsetWidth;
var visablevolume = document.getElementsByClassName("volume")[0];

music.addEventListener("ended", _next, false);
music.addEventListener("timeupdate", timeUpdate, false);
music.addEventListener("progress", bufferUpdate, false);
load();

/* Functions
======================================*/
function load() {
    pauseButton.style.visibility = "hidden";
    var songName = playlist[currentSong]['song'];
    // Extraer el nombre del archivo sin la extensión .mp3
    var mp3FileName = playlist[currentSong]['mp3'].split('/').pop().replace('.mp3', '');
    song.innerHTML = mp3FileName; // Usar el nombre del archivo MP3
    song.title = songName;
    album.innerHTML = playlist[currentSong]['album'];
    album.title = playlist[currentSong]['album'];
    artist.innerHTML = playlist[currentSong]['artist'];
    artist.title = playlist[currentSong]['artist'];
    artwork.setAttribute("style", "background:url(mp3/Disco.png), url('" + playlist[currentSong]['artwork'] + "') center no-repeat;");
    music.innerHTML = '<source src="' + playlist[currentSong]['mp3'] + '" type="audio/mp3">';
    music.load();
}
function reset() {
    rotate_reset = setInterval(function () {
        Rotate();
        if (rot == 0) {
            clearTimeout(rotate_reset);
        }
    }, 1);
    fireEvent(pauseButton, 'click');
    armrot = -45;
    playhead.style.width = "0px";
    bufferhead.style.width = "0px";
    timer.innerHTML = "0:00";
    music.innerHTML = "";
    currentSong = 0; // set to first song, to stay on last song: currentSong = playlist.length - 1;
    song.innerHTML = playlist[currentSong]['song'];
    song.title = playlist[currentSong]['song'];
    album.innerHTML = playlist[currentSong]['album'];
    album.title = playlist[currentSong]['album'];
    artist.innerHTML = playlist[currentSong]['artist'];
    artist.title = playlist[currentSong]['artist'];
    artwork.setAttribute("style", "background:url(mp3/Disco.png), url('" + playlist[currentSong]['artwork'] + "') center no-repeat;");
    music.innerHTML = '<source src="' + playlist[currentSong]['mp3'] + '" type="audio/mp3">';
    music.load();
}
function formatSecondsAsTime(secs, format) {
    var hr = Math.floor(secs / 3600);
    var min = Math.floor((secs - (hr * 3600)) / 60);
    var sec = Math.floor(secs - (hr * 3600) - (min * 60));
    if (sec < 10) {
        sec = "0" + sec;
    }
    return min + ':' + sec;
}
function timeUpdate() {
    bufferUpdate();
    playPercent = timelineWidth * (music.currentTime / duration);
    playhead.style.width = playPercent + "px";
    timer.innerHTML = formatSecondsAsTime(music.currentTime.toString());
}
function bufferUpdate() {
    bufferPercent = timelineWidth * (music.buffered.end(0) / duration);
    bufferhead.style.width = bufferPercent + "px";
}
function Rotate() {
    if (rot == 361) {
        artwork.style.transform = 'rotate(0deg)';
        rot = 0;
    } else {
        artwork.style.transform = 'rotate(' + rot + 'deg)';
        rot++;
    }
}
function RotateArm() {
    if (armrot > -12) {
        arm.style.transform = 'rotate(-38deg)';
        armrot = -45;
    } else {
        arm.style.transform = 'rotate(' + armrot + 'deg)';
        armrot = armrot + (26 / duration);
    }
}
function fireEvent(el, etype) {
    if (el.fireEvent) {
        el.fireEvent('on' + etype);
    } else {
        var evObj = document.createEvent('Events');
        evObj.initEvent(etype, true, false);
        el.dispatchEvent(evObj);
    }
}
function _next() {
    if (currentSong == playlist.length - 1) {
        reset();
    } else {
        fireEvent(next, 'click');
    }
}
playButton.onclick = function () {
    music.play();
}
pauseButton.onclick = function () {
    music.pause();
}
music.addEventListener("play", function () {
    playButton.style.visibility = "hidden";
    pause.style.visibility = "visible";
    rotate_timer = setInterval(function () {
        if (!music.paused && !music.ended && 0 < music.currentTime) {
            Rotate();
        }
    }, 10);
    if (armrot != -45) {
        arm.setAttribute("style", "transition: transform 800ms;");
        arm.style.transform = 'rotate(' + armrot + 'deg)';
    }
    arm_rotate_timer = setInterval(function () {
        if (!music.paused && !music.ended && 0 < music.currentTime) {
            if (armrot == -45) {
                arm.setAttribute("style", "transition: transform 800ms;");
                arm.style.transform = 'rotate(-38deg)';
                armrot = -38;
            }
            if (arm.style.transition != "") {
                setTimeout(function () {
                    arm.style.transition = "";
                }, 1000);
            }
            RotateArm();
        }
    }, 1000);
}, false);
music.addEventListener("pause", function () {
    arm.setAttribute("style", "transition: transform 800ms;");
    arm.style.transform = 'rotate(-45deg)';
    playButton.style.visibility = "visible";
    pause.style.visibility = "hidden";
    clearTimeout(rotate_timer);
    clearTimeout(arm_rotate_timer);
}, false);
next.onclick = function () {
    arm.setAttribute("style", "transition: transform 800ms;");
    arm.style.transform = 'rotate(-45deg)';
    clearTimeout(rotate_timer);
    clearTimeout(arm_rotate_timer);
    playhead.style.width = "0px";
    bufferhead.style.width = "0px";
    timer.innerHTML = "0:00";
    music.innerHTML = "";
    arm.style.transform = 'rotate(-45deg)';
    armrot = -45;
    if ((currentSong + 1) == playlist.length) {
        currentSong = 0;
        music.innerHTML = '<source src="' + playlist[currentSong]['mp3'] + '" type="audio/mp3">';
    } else {
        currentSong++;
        music.innerHTML = '<source src="' + playlist[currentSong]['mp3'] + '" type="audio/mp3">';
    }
    song.innerHTML = playlist[currentSong]['song'];
    song.title = playlist[currentSong]['song'];
    album.innerHTML = playlist[currentSong]['album'];
    album.title = playlist[currentSong]['album'];
    artist.innerHTML = playlist[currentSong]['artist'];
    artist.title = playlist[currentSong]['artist'];
    artwork.setAttribute("style", "transform: rotate(" + rot + "deg); background:url(mp3/Disco.png), url('" + playlist[currentSong]['artwork'] + "') center no-repeat;");
    music.load();
    duration = music.duration;
    music.play();
}
previous.onclick = function () {
    arm.setAttribute("style", "transition: transform 800ms;");
    arm.style.transform = 'rotate(-45deg)';
    clearTimeout(rotate_timer);
    clearTimeout(arm_rotate_timer);
    playhead.style.width = "0px";
    bufferhead.style.width = "0px";
    timer.innerHTML = "0:00";
    music.innerHTML = "";
    arm.style.transform = 'rotate(-45deg)';
    armrot = -45;
    if ((currentSong - 1) == -1) {
        currentSong = playlist.length - 1;
        music.innerHTML = '<source src="' + playlist[currentSong]['mp3'] + '" type="audio/mp3">';
    } else {
        currentSong--;
        music.innerHTML = '<source src="' + playlist[currentSong]['mp3'] + '" type="audio/mp3">';
    }
    song.innerHTML = playlist[currentSong]['song'];
    song.title = playlist[currentSong]['song'];
    album.innerHTML = playlist[currentSong]['album'];
    album.title = playlist[currentSong]['album'];
    artist.innerHTML = playlist[currentSong]['artist'];
    artist.title = playlist[currentSong]['artist'];
    artwork.setAttribute("style", "transform: rotate(" + rot + "deg); background:url(mp3/Disco.png), url('" + playlist[currentSong]['artwork'] + "') center no-repeat;");
    music.load();
    duration = music.duration;
    music.play();
}
volume.oninput = function () {
    music.volume = volume.value;
    visablevolume.style.width = (80 - 11) * volume.value + "px";
}
music.addEventListener("canplay", function () {
    duration = music.duration;
}, false);
