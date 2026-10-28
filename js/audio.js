/**
 * audio.js - Web Audio API Sound Effects & Child Voice Text-To-Speech (TTS)
 * Designed for Playgroup, Nursery & UKG interactive storybooks.
 */

class SoundEffectsEngine {
    constructor() {
        this.ctx = null;
        this.bgMusicPlaying = false;
        this.bgMusicTimer = null;
        this.isMuted = false;
    }

    init() {
        if (!this.ctx) {
            const AudioContext = window.AudioContext || window.webkitAudioContext;
            if (AudioContext) {
                this.ctx = new AudioContext();
            }
        }
        if (this.ctx && this.ctx.state === 'suspended') {
            this.ctx.resume();
        }
    }

    // Gentle button tap "Pop"
    playPop() {
        if (this.isMuted) return;
        this.init();
        if (!this.ctx) return;
        const now = this.ctx.currentTime;
        const osc = this.ctx.createOscillator();
        const gain = this.ctx.createGain();

        osc.type = 'sine';
        osc.frequency.setValueAtTime(450, now);
        osc.frequency.exponentialRampToValueAtTime(800, now + 0.08);

        gain.gain.setValueAtTime(0.3, now);
        gain.gain.exponentialRampToValueAtTime(0.001, now + 0.08);

        osc.connect(gain);
        gain.connect(this.ctx.destination);

        osc.start(now);
        osc.stop(now + 0.08);
    }

    // Playful "Boing" bounce
    playBoing() {
        if (this.isMuted) return;
        this.init();
        if (!this.ctx) return;
        const now = this.ctx.currentTime;
        const osc = this.ctx.createOscillator();
        const gain = this.ctx.createGain();

        osc.type = 'triangle';
        osc.frequency.setValueAtTime(220, now);
        osc.frequency.linearRampToValueAtTime(580, now + 0.12);
        osc.frequency.linearRampToValueAtTime(320, now + 0.25);

        gain.gain.setValueAtTime(0.28, now);
        gain.gain.exponentialRampToValueAtTime(0.001, now + 0.28);

        osc.connect(gain);
        gain.connect(this.ctx.destination);

        osc.start(now);
        osc.stop(now + 0.28);
    }

    // Magical twinkling sparkle sound (for stars, fairy dust, page flip)
    playSparkle() {
        if (this.isMuted) return;
        this.init();
        if (!this.ctx) return;
        const notes = [1046.5, 1318.5, 1567.98, 2093.0]; // C6, E6, G6, C7
        notes.forEach((freq, i) => {
            const now = this.ctx.currentTime + (i * 0.06);
            const osc = this.ctx.createOscillator();
            const gain = this.ctx.createGain();

            osc.type = 'sine';
            osc.frequency.setValueAtTime(freq, now);

            gain.gain.setValueAtTime(0.18, now);
            gain.gain.exponentialRampToValueAtTime(0.001, now + 0.2);

            osc.connect(gain);
            gain.connect(this.ctx.destination);

            osc.start(now);
            osc.stop(now + 0.2);
        });
    }

    // Cheerful victory fanfare for mini-game completion
    playFanfare() {
        if (this.isMuted) return;
        this.init();
        if (!this.ctx) return;
        const notes = [523.25, 659.25, 783.99, 1046.5]; // C5, E5, G5, C6
        notes.forEach((freq, idx) => {
            const start = this.ctx.currentTime + idx * 0.12;
            const duration = idx === 3 ? 0.45 : 0.16;
            const osc = this.ctx.createOscillator();
            const gain = this.ctx.createGain();

            osc.type = 'triangle';
            osc.frequency.setValueAtTime(freq, start);

            gain.gain.setValueAtTime(0.25, start);
            gain.gain.exponentialRampToValueAtTime(0.001, start + duration);

            osc.connect(gain);
            gain.connect(this.ctx.destination);

            osc.start(start);
            osc.stop(start + duration);
        });
    }

    // Duck Quack simulation
    playDuckQuack() {
        if (this.isMuted) return;
        this.init();
        if (!this.ctx) return;
        const now = this.ctx.currentTime;
        const osc = this.ctx.createOscillator();
        const gain = this.ctx.createGain();

        osc.type = 'sawtooth';
        osc.frequency.setValueAtTime(320, now);
        osc.frequency.linearRampToValueAtTime(260, now + 0.15);
        osc.frequency.linearRampToValueAtTime(290, now + 0.25);

        gain.gain.setValueAtTime(0.22, now);
        gain.gain.exponentialRampToValueAtTime(0.01, now + 0.26);

        osc.connect(gain);
        gain.connect(this.ctx.destination);

        osc.start(now);
        osc.stop(now + 0.26);
    }

    // Splash water sound
    playSplash() {
        if (this.isMuted) return;
        this.init();
        if (!this.ctx) return;
        // White noise burst
        const bufferSize = this.ctx.sampleRate * 0.35;
        const buffer = this.ctx.createBuffer(1, bufferSize, this.ctx.sampleRate);
        const data = buffer.getChannelData(0);
        for (let i = 0; i < bufferSize; i++) {
            data[i] = (Math.random() * 2 - 1) * Math.exp(-i / (this.ctx.sampleRate * 0.08));
        }
        const noise = this.ctx.createBufferSource();
        noise.buffer = buffer;

        const filter = this.ctx.createBiquadFilter();
        filter.type = 'lowpass';
        filter.frequency.setValueAtTime(1400, this.ctx.currentTime);
        filter.frequency.linearRampToValueAtTime(400, this.ctx.currentTime + 0.3);

        const gain = this.ctx.createGain();
        gain.gain.setValueAtTime(0.3, this.ctx.currentTime);
        gain.gain.exponentialRampToValueAtTime(0.001, this.ctx.currentTime + 0.35);

        noise.connect(filter);
        filter.connect(gain);
        gain.connect(this.ctx.destination);

        noise.start();
    }

    // Train whistle (two harmonizing frequencies)
    playTrainWhistle() {
        if (this.isMuted) return;
        this.init();
        if (!this.ctx) return;
        const freqs = [440, 554.37]; // A4 and C#5
        freqs.forEach(f => {
            const now = this.ctx.currentTime;
            const osc = this.ctx.createOscillator();
            const gain = this.ctx.createGain();

            osc.type = 'sine';
            osc.frequency.setValueAtTime(f, now);
            osc.frequency.linearRampToValueAtTime(f + 15, now + 0.2);
            osc.frequency.linearRampToValueAtTime(f, now + 0.4);

            gain.gain.setValueAtTime(0.18, now);
            gain.gain.exponentialRampToValueAtTime(0.001, now + 0.45);

            osc.connect(gain);
            gain.connect(this.ctx.destination);

            osc.start(now);
            osc.stop(now + 0.45);
        });
    }

    // Rocket Whoosh
    playRocket() {
        if (this.isMuted) return;
        this.init();
        if (!this.ctx) return;
        const now = this.ctx.currentTime;
        const osc = this.ctx.createOscillator();
        const gain = this.ctx.createGain();

        osc.type = 'triangle';
        osc.frequency.setValueAtTime(150, now);
        osc.frequency.exponentialRampToValueAtTime(1200, now + 0.4);

        gain.gain.setValueAtTime(0.05, now);
        gain.gain.linearRampToValueAtTime(0.28, now + 0.2);
        gain.gain.exponentialRampToValueAtTime(0.001, now + 0.5);

        osc.connect(gain);
        gain.connect(this.ctx.destination);

        osc.start(now);
        osc.stop(now + 0.5);
    }

    // Bear Chomp / Gulp
    playChomp() {
        if (this.isMuted) return;
        this.init();
        if (!this.ctx) return;
        const now = this.ctx.currentTime;
        const osc = this.ctx.createOscillator();
        const gain = this.ctx.createGain();

        osc.type = 'sine';
        osc.frequency.setValueAtTime(180, now);
        osc.frequency.linearRampToValueAtTime(120, now + 0.12);

        gain.gain.setValueAtTime(0.3, now);
        gain.gain.exponentialRampToValueAtTime(0.01, now + 0.15);

        osc.connect(gain);
        gain.connect(this.ctx.destination);

        osc.start(now);
        osc.stop(now + 0.15);
    }

    // Background whimsical lullaby / music-box melody generator
    toggleBackgroundMusic(onStateChange) {
        if (this.bgMusicPlaying) {
            this.stopBackgroundMusic();
            if (onStateChange) onStateChange(false);
            return false;
        } else {
            this.startBackgroundMusic();
            if (onStateChange) onStateChange(true);
            return true;
        }
    }

    startBackgroundMusic() {
        this.init();
        this.bgMusicPlaying = true;
        // Simple cheerful music-box notes (C major pentatonic lullaby: C4, D4, E4, G4, A4, C5)
        const melody = [
            261.63, 329.63, 392.00, 523.25, 
            392.00, 329.63, 440.00, 392.00, 
            329.63, 293.66, 261.63, 329.63,
            392.00, 523.25, 440.00, 392.00
        ];
        let noteIndex = 0;

        const playNextNote = () => {
            if (!this.bgMusicPlaying || this.isMuted) return;
            if (this.ctx) {
                const now = this.ctx.currentTime;
                const freq = melody[noteIndex % melody.length];
                const osc = this.ctx.createOscillator();
                const gain = this.ctx.createGain();

                osc.type = 'sine';
                osc.frequency.setValueAtTime(freq, now);

                // Very gentle volume for background music box
                gain.gain.setValueAtTime(0.045, now);
                gain.gain.exponentialRampToValueAtTime(0.001, now + 0.45);

                osc.connect(gain);
                gain.connect(this.ctx.destination);

                osc.start(now);
                osc.stop(now + 0.45);
            }
            noteIndex++;
            this.bgMusicTimer = setTimeout(playNextNote, 520);
        };

        playNextNote();
    }

    stopBackgroundMusic() {
        this.bgMusicPlaying = false;
        if (this.bgMusicTimer) {
            clearTimeout(this.bgMusicTimer);
            this.bgMusicTimer = null;
        }
    }
}

/**
 * ChildVoiceTTS - Specialized Web Speech Synthesis tuned for a cheerful, gentle Child Voice
 */
class ChildVoiceTTS {
    constructor() {
        this.synth = window.speechSynthesis || null;
        this.voices = [];
        this.currentLang = 'en-US';
        this.currentUtterance = null;
        this.isPlaying = false;
        this.pitch = 1.38; // Tuned high pitch for sweet childlike tone
        this.rate = 0.86;  // Gentle, slower cadence for young kids
        this.autoPlayEnabled = false;

        this.onWordBoundary = null;
        this.onEnd = null;
        this.onStart = null;

        if (this.synth) {
            this.loadVoices();
            if (speechSynthesis.onvoiceschanged !== undefined) {
                speechSynthesis.onvoiceschanged = () => this.loadVoices();
            }
        }
    }

    loadVoices() {
        if (!this.synth) return;
        this.voices = this.synth.getVoices();
    }

    setLanguage(langCode) {
        this.currentLang = langCode;
    }

    // Pick the most youthful, pleasant sounding voice for the requested language
    getBestVoice(langPrefix) {
        if (!this.voices || this.voices.length === 0) {
            this.loadVoices();
        }
        const langMatches = this.voices.filter(v => v.lang.toLowerCase().startsWith(langPrefix.toLowerCase().slice(0, 2)));

        // Prefer natural, high-pitch or female voices which sound delightfully childlike when pitch is boosted
        const preferredNames = ['samantha', 'victoria', 'karen', 'tessa', 'flo', 'eddy', 'shelley', 'google', 'natural', 'zira'];
        for (const pref of preferredNames) {
            const found = langMatches.find(v => v.name.toLowerCase().includes(pref));
            if (found) return found;
        }

        return langMatches[0] || this.voices[0] || null;
    }

    speak(text, options = {}) {
        if (!this.synth) {
            console.warn('Speech synthesis is not supported in this browser.');
            return;
        }

        this.stop();

        if (!text || text.trim().length === 0) return;

        const lang = options.lang || this.currentLang || 'en-US';
        const utterance = new SpeechSynthesisUtterance(text);
        utterance.lang = lang;
        utterance.pitch = options.pitch || this.pitch;
        utterance.rate = options.rate || this.rate;

        const bestVoice = this.getBestVoice(lang);
        if (bestVoice) {
            utterance.voice = bestVoice;
        }

        utterance.onstart = () => {
            this.isPlaying = true;
            if (this.onStart) this.onStart();
            if (options.onStart) options.onStart();
        };

        utterance.onboundary = (event) => {
            if (event.name === 'word') {
                const charIndex = event.charIndex;
                if (this.onWordBoundary) this.onWordBoundary(charIndex);
                if (options.onWordBoundary) options.onWordBoundary(charIndex);
            }
        };

        utterance.onend = () => {
            this.isPlaying = false;
            this.currentUtterance = null;
            if (this.onEnd) this.onEnd();
            if (options.onEnd) options.onEnd();
        };

        utterance.onerror = (e) => {
            console.warn('TTS error or cancelled:', e);
            this.isPlaying = false;
            this.currentUtterance = null;
            if (this.onEnd) this.onEnd();
        };

        this.currentUtterance = utterance;
        this.synth.speak(utterance);
    }

    pause() {
        if (this.synth && this.isPlaying) {
            this.synth.pause();
        }
    }

    resume() {
        if (this.synth) {
            this.synth.resume();
        }
    }

    stop() {
        if (this.synth) {
            this.synth.cancel();
            this.isPlaying = false;
            this.currentUtterance = null;
        }
    }
}

// Global audio managers
window.soundFX = new SoundEffectsEngine();
window.childTTS = new ChildVoiceTTS();
