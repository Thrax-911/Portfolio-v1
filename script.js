// ==================================================
// 🎵 PLAYLIST CUSTOMIZATION
// لتغيير الأغاني:
// 1- ضع ملفات mp3 داخل مجلد mp3
// 2- أضف عنصر جديد داخل playlist بنفس الشكل
// 3- غير title لاسم الأغنية اللي يظهر في الموقع
// ==================================================


// ==================================================
// 🔊 Default Volume
// يمكنك تغيير القيمة الافتراضية للصوت من هنا (0.0 إلى 1.0)
// مثال: audio.volume = 0.5 يعني 50%
// ==================================================


// ==================================================
// 🎬 Intro Overlay
// هذا الجزء مسؤول عن شاشة "click to enter"
// لا تحذف هذا الجزء إلا إذا أزلت overlay من HTML
// ==================================================


// ==================================================
// ⏭️ Next & Previous Buttons
// هذه الأزرار تتنقل بين الأغاني داخل playlist
// لو حذفت playlist هيتسبب في أخطاء
// ==================================================


// Music player logic
const musicPlayer = document.querySelector('.music-player');
if (musicPlayer) {
    // Playlist array with multiple songs
    const playlist = [
        { src: 'mp3/GOTHEX (ultra slowed) - N!GHTvisiøn.mp3', title: 'GOTHEX (ultra slowed)' },
        { src: 'mp3/Discipline (Slowed) - 14thesenses.mp3', title: 'Discipline (Slowed)' },
        { src: 'mp3/DudePlaya - DEAD END (Slowed) - DudePlaya.mp3', title: 'DudePlaya - DEAD END (Slowed)' }
    ];
    
    let currentSongIndex = 0;
    const audio = new Audio(playlist[currentSongIndex].src);
    const playBtn = musicPlayer.querySelector('.music-btn.play');
    const prevBtn = musicPlayer.querySelector('.music-btn.prev');
    const nextBtn = musicPlayer.querySelector('.music-btn.next');
    const progress = musicPlayer.querySelector('.music-progress');
    const currentTimeEl = musicPlayer.querySelector('.current-time');
    const durationEl = musicPlayer.querySelector('.total-duration');
    const musicTitle = musicPlayer.querySelector('.music-title');

    // Update the music title display
    function updateMusicTitle() {
        if (musicTitle) {
            musicTitle.textContent = playlist[currentSongIndex].title;
        }
    }

    // Load and play a song
    function loadSong(index) {
        currentSongIndex = index;
        audio.src = playlist[currentSongIndex].src;
        updateMusicTitle();
        audio.play().then(() => {
            playBtn.innerHTML = '<i class="fa-solid fa-pause"></i>';
        }).catch(() => {
            // ignore play errors (e.g. browser restrictions)
        });
    }

    // Play next song in playlist
    function playNextSong() {
        currentSongIndex = (currentSongIndex + 1) % playlist.length;
        loadSong(currentSongIndex);
    }

    // Play previous song in playlist
    function playPrevSong() {
        currentSongIndex = (currentSongIndex - 1 + playlist.length) % playlist.length;
        loadSong(currentSongIndex);
    }

    // Intro overlay logic - first click starts audio and hides overlay
    const introOverlay = document.getElementById('intro-overlay');
    if (introOverlay) {
        const handleFirstClick = () => {
            introOverlay.classList.add('hidden');
            audio.play().then(() => {
                playBtn.innerHTML = '<i class="fa-solid fa-pause"></i>';
            }).catch(() => {
                // ignore play errors (e.g. browser restrictions)
            });
            introOverlay.removeEventListener('click', handleFirstClick);
        };
        introOverlay.addEventListener('click', handleFirstClick);
    }

    const formatTime = (time) => {
        const minutes = Math.floor(time / 60) || 0;
        const seconds = Math.floor(time % 60) || 0;
        return `${minutes}:${seconds.toString().padStart(2, '0')}`;
    };

    // global volume slider (0 - 100)
    const volumeSlider = document.querySelector('.slider .level');

    // default volume
    if (volumeSlider) {
        const initial = parseFloat(volumeSlider.value) || 70;
        audio.volume = initial / 100;
    } else {
        audio.volume = 0.7;
    }

    audio.addEventListener('loadedmetadata', () => {
        progress.max = Math.floor(audio.duration);
        durationEl.textContent = formatTime(audio.duration);
    });

    audio.addEventListener('timeupdate', () => {
        progress.value = Math.floor(audio.currentTime);
        currentTimeEl.textContent = formatTime(audio.currentTime);
    });

    audio.addEventListener('ended', () => {
        playNextSong(); // Automatically play next song when current one ends
    });

    playBtn.addEventListener('click', () => {
        if (audio.paused) {
            audio.play();
            playBtn.innerHTML = '<i class="fa-solid fa-pause"></i>';
        } else {
            audio.pause();
            playBtn.innerHTML = '<i class="fa-solid fa-play"></i>';
        }
    });

    progress.addEventListener('input', () => {
        audio.currentTime = progress.value;
    });

    if (volumeSlider) {
        volumeSlider.addEventListener('input', () => {
            const v = parseFloat(volumeSlider.value) || 0;
            audio.volume = v / 100;
        });
    }

    // Previous button functionality (previous song)
    prevBtn.addEventListener('click', () => {
        playPrevSong();
    });

    // Next button functionality (next song) - changed from seeking to changing songs
    nextBtn.addEventListener('click', () => {
        playNextSong();
    });
    
    // Initialize music title
    updateMusicTitle();
}