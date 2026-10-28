# 🌟 WonderTales — Interactive Kids Magic Storybook

A colorful, magical, and interactive storybook website specially designed for **Playgroup (Ages 2-3)**, **Nursery (Ages 3-4)**, and **UKG / Upper Kindergarten (Ages 4-6)** kids!

Ready to host on **GitHub Pages** with zero setup or build steps required.

---

## ✨ Features

### 🌈 Designed for Little Learners
- **Playgroup (Ages 2-3)**: Sensory adventures, animal sounds, colors, and touch-to-react scenes (e.g., *Ducky's Big Splash!*, *Sunny Sun & Happy Cloud*).
- **Nursery (Ages 3-4)**: Simple narratives, counting games, sharing, and rhyming adventures (e.g., *Barnaby Bear's Honey Picnic*, *The Little Choo-Choo Train*).
- **UKG / Upper Kindergarten (Ages 4-6)**: Mini moral stories, basic phonics, friendship, curiosity, and early vocabulary (e.g., *Pip the Brave Space Bunny*, *The Magical Garden of Kindness*).
- **🌙 Bedtime Sleep Stories (All Ages)**: Longer, calming, bedtime narratives designed to help children relax and fall asleep (e.g., *The Sleepy Little Star's Lullaby Journey*, *Goodnight, Cozy Little Forest*).

### 🌙 Hands-Free Sleep Mode (No Page Turning Needed!)
- **Continuous Autoplay**: Children or parents tap **"🌙 Sleep Mode (Hands-Free)"** once, and the website reads through the entire story from beginning to end without having to touch the screen.
- **Gentle Bedtime Cadence**: The child voice automatically slows to a relaxing, cozy bedtime rhythm (`rate: 0.78`).
- **Soothing Lullaby Music Box**: Plays a soft, quiet music-box melody in the background.
- **Night Dimmer Mode**: Dims bright colors into a deep starry night theme to keep the bedroom dark and comfortable.
- **Sweet Dreams Ending**: Concludes with a tranquil goodnight message and twinkling stars.

### 🔊 Automatic Child-Voice Audio (Text-to-Speech)
- **Child Voice Synthesis**: Uses the Web Speech API with pitch modulation (`1.38` - `1.45`) and gentle reading rate (`0.86`) to speak in a sweet, cheerful, kid-friendly voice.
- **Audio Controls**: Big bubbly buttons for "🔊 Read to Me (Child Voice)", "⏸️ Pause Voice", "⏹️ Stop", and "Auto-Read on Page Flip".
- **Karaoke Word Tracking**: Lights up each word in golden glow as it is being spoken.
- **Tap Any Word**: Kids can tap on any individual word to hear its pronunciation (perfect for early phonics & vocabulary building!).

### 🌐 Instant Multi-Language Translation
- Supports 5 languages at the click of a button:
  - 🇬🇧 **English**
  - 🇮🇳 **हिन्दी (Hindi)**
  - 🇪🇸 **Español (Spanish)**
  - 🇫🇷 **Français (French)**
  - 🇩🇪 **Deutsch (German)**
- When a language is selected, all story text, descriptions, hints, and speech synthesis voice automatically adapt to that language!

### 🎮 Fun End-of-Story Mini-Games
- **Bubble Pop Party** (Playgroup): Tap floating bubbles with cheerful "Pop!" sounds.
- **Count the Apples** (Nursery): Drop apples into Barnaby Bear's basket while counting 1, 2, 3!
- **Train Cars & Cosmic Star Words** (Nursery & UKG): Connect train wagons and discover new words.
- Celebratory confetti showers and fanfare chords upon completion!

### 🎨 Magic Rainbow Drawing & Coloring Pad
- Drawing canvas with vibrant kid-safe colors (Red, Orange, Yellow, Green, Blue, Purple, Pink).
- Chunky brush sizes and cute stickers (⭐, 🌸, 🦆, 🚀, 🧸, 🎈, 🧁).
- Kids can draw their favorite story characters and click "Save Picture" to download their masterpiece!

### 🎵 Whimsical Sound Effects & Music Box
- 100% Web Audio API synthesizer — no heavy audio files or external server dependencies.
- Cute sounds: Duck Quacks, Water Splashes, Train Whistles, Rocket Blasts, Bear Chomps, Boings, Pops, and Sparkles.
- Optional background music box lullaby toggle.

---

## 🚀 How to Host on GitHub Pages (Step-by-Step)

Because WonderTales is built with pure HTML5, CSS3, and modern JavaScript, it requires **no build step** and can be deployed directly on GitHub Pages for free!

### Option A: Using the Terminal (Fastest)

1. **Create a new repository on GitHub**:
   - Go to [github.com/new](https://github.com/new).
   - Enter repository name (e.g. `storybook` or `wondertales`).
   - Leave it **Public** and do NOT initialize with README.
   - Click **Create repository**.

2. **Push your code from this folder**:
   ```bash
   git add .
   git commit -m "Initial commit of WonderTales interactive storybook"
   git remote add origin https://github.com/YOUR_USERNAME/YOUR_REPOSITORY.git
   git push -u origin main
   ```

3. **Enable GitHub Pages**:
   - In your GitHub repository, go to **Settings** > **Pages** (in the left sidebar).
   - Under **Build and deployment** > **Source**, choose **Deploy from a branch**.
   - Select branch: `main` and folder `/ (root)`.
   - Click **Save**.

4. **Your website is live!**
   - GitHub will give you your URL: `https://YOUR_USERNAME.github.io/YOUR_REPOSITORY/`
   - Share the link with parents, teachers, and kids!

---

### Option B: Upload via GitHub Website

1. Create a repository on GitHub.
2. Drag and drop all files (`index.html`, `css/`, `js/`, `README.md`) into GitHub.
3. Commit the files.
4. Go to **Settings** > **Pages** > Select branch `main` and folder `/ (root)` > Click **Save**.

---

## 📂 Project Structure

```
StoryBook/
├── index.html              # Main single-page web app
├── css/
│   └── style.css           # Playful, kid-friendly animations, chunky 3D buttons
├── js/
│   ├── audio.js            # Web Audio SFX synthesizer & Child-Voice TTS engine
│   ├── translations.js     # 5-language dictionaries (EN, HI, ES, FR, DE)
│   ├── stories.js          # Interactive story data, animated SVGs & mini-games
│   └── app.js              # Core UI controller, karaoke reader, drawing pad
└── README.md               # Documentation & hosting guide
```

---

## 💡 Customization & Adding New Stories

To add a new story, simply open `js/stories.js` and add an object to `window.storiesData`:

```javascript
{
    id: 'my_new_story',
    grade: 'nursery', // 'playgroup', 'nursery', or 'ukg'
    themeColor: 'from-pink-400 to-rose-200',
    bgTheme: '#FDF2F8',
    icon: '🐰',
    title: {
        en: "My New Story",
        hi: "मेरी नई कहानी",
        es: "Mi Nuevo Cuento"
    },
    description: {
        en: "A wonderful new adventure for kids!",
        hi: "बच्चों के लिए एक सुंदर नया सफर!",
        es: "¡Una maravillosa aventura para niños!"
    },
    pages: [
        {
            pageNumber: 1,
            text: {
                en: "Hello little bunny!",
                hi: "नमस्ते नन्हे खरगोश!",
                es: "¡Hola conejito!"
            },
            hint: {
                en: "👉 Tap the bunny!",
                hi: "👉 खरगोश को छुओ!"
            },
            svg: `<svg>...</svg>`
        }
    ]
}
```

---

## 📱 Browser & Tablet Compatibility
- Works on Chrome, Safari, Edge, Firefox, and all modern mobile/tablet browsers (iPad, Android tablets, iPhones).
- Speech synthesis uses native browser voices with automated fallbacks.
