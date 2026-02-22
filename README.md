# Portfolio v1
[![Ask DeepWiki](https://devin.ai/assets/askdeepwiki.png)](https://deepwiki.com/Thrax-911/Portfolio-v1)

[![Ask DeepWiki]

A sleek, animated personal portfolio template featuring a frosted glass design, a background video, and an integrated music player. This project is built with pure HTML, CSS, and JavaScript, offering a lightweight and customizable solution for showcasing your profile.

## Features
- **Fullscreen Video Background:** An engaging, looping video serves as the page background.
- **Intro Overlay:** A "click to enter" screen that initiates the music and reveals the content.
- **Frosted Glass UI:** A modern, semi-transparent hero card that blurs the background content.
- **Integrated Music Player:**
    - Playlist support for multiple tracks.
    - Controls for play/pause, next, and previous songs.
    - Dynamic progress bar and time display.
- **Animated Social Icons:** Glowing social media links that scale on hover.
- **Custom Volume Control:** A unique, expandable volume slider for global audio control.
- **Framework-Free:** Built with vanilla HTML, CSS, and JavaScript for simplicity and performance.

## Customization
This portfolio is designed for easy personalization. Key areas for customization are noted with comments in the source files.

### Personal Information
- **Avatar:** Replace `img/thrax.png` with your own profile picture.
- **Text:** Edit the name, subtitle, and description directly in `index.html`.

### Background Video
To change the background, update the `src` attribute of the `<source>` tag within the `<video>` element in `index.html`.

### Music Playlist
1. Add your audio files (e.g., `.mp3`) to the `/mp3` directory.
2. Open `script.js` and modify the `playlist` array. Each song is an object with a `src` (the file path) and `title` (the display name).
   ```javascript
   const playlist = [
       { src: 'mp3/your-song-1.mp3', title: 'Your Song Title 1' },
       { src: 'mp3/your-song-2.mp3', title: 'Your Song Title 2' },
   ];
   ```

### Social Media Links
Update the `href` attributes for each `<a>` tag inside the `.social-icons` div in `index.html` to point to your social profiles.

## Project Structure
The repository is organized as follows:
```
.
├── index.html          # Main HTML structure
├── style.css           # All styles for the portfolio
├── script.js           # JavaScript for interactivity and music player
├── icons/              # Holds social media and UI icons
├── img/                # Contains the avatar and music cover images
└── mp3/                # Stores the audio files for the playlist
```

## Deployment
This is a static website and can be deployed easily to any static hosting service.

1.  **Clone the repository:**
    ```bash
    git clone https://github.com/Thrax-911/Portfolio-v1.git
    ```
2.  **Customize the content** as described in the sections above.
3.  **Deploy** to a service such as:
    -   GitHub Pages
    -   Vercel
    -   Netlify

---
Designed by Dr.Thrax
