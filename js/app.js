/**
 * app.js - Main Application Controller for WonderTales Storybook
 * Handles UI interactions, Story Reader, TTS Child Voice, Mini-games & Drawing Pad.
 */

class StoryApp {
    constructor() {
        this.currentStory = null;
        this.currentPageIndex = 0;
        this.currentFilter = 'all';
        this.autoReadOnPageFlip = true;
        this.miniGameScore = 0;
        this.drawingPad = null;

        this.initDOM();
        this.initEventListeners();
        this.renderStoryGrid();
        this.updateLanguageUI();
        this.initCanvasDrawing();
    }

    initDOM() {
        this.storyGrid = document.getElementById('story-grid');
        this.filterButtons = document.querySelectorAll('.filter-btn');
        this.langSelect = document.getElementById('lang-select');
        this.storyModal = document.getElementById('story-modal');
        this.miniGameModal = document.getElementById('mini-game-modal');
        this.bgMusicBtn = document.getElementById('bg-music-toggle');
        this.drawingPadSection = document.getElementById('drawing-pad-section');
        this.librarySection = document.getElementById('library-section');
    }

    initEventListeners() {
        // Language Selector
        if (this.langSelect) {
            this.langSelect.addEventListener('change', (e) => {
                window.soundFX.playPop();
                window.currentLang = e.target.value;
                const langConfig = window.translations[window.currentLang] || window.translations['en'];
                window.childTTS.setLanguage(langConfig.code);
                this.updateLanguageUI();
                this.renderStoryGrid();
                if (this.currentStory) {
                    this.renderStoryPage();
                }
            });
        }

        // Category Filter buttons
        this.filterButtons.forEach(btn => {
            btn.addEventListener('click', (e) => {
                window.soundFX.playPop();
                const filter = btn.dataset.filter;
                this.filterButtons.forEach(b => b.classList.remove('active-filter'));
                btn.classList.add('active-filter');
                this.currentFilter = filter;

                if (filter === 'activities') {
                    this.librarySection.classList.add('hidden');
                    this.drawingPadSection.classList.remove('hidden');
                } else {
                    this.librarySection.classList.remove('hidden');
                    this.drawingPadSection.classList.add('hidden');
                    this.renderStoryGrid();
                }
            });
        });

        // Background Music Toggle
        if (this.bgMusicBtn) {
            this.bgMusicBtn.addEventListener('click', () => {
                window.soundFX.playPop();
                const isPlaying = window.soundFX.toggleBackgroundMusic((playing) => {
                    this.updateMusicButtonUI(playing);
                });
                this.updateMusicButtonUI(isPlaying);
            });
        }

        // Story modal close
        document.getElementById('close-story-btn')?.addEventListener('click', () => {
            window.soundFX.playPop();
            this.closeStory();
        });

        // Navigation in story
        document.getElementById('prev-page-btn')?.addEventListener('click', () => {
            window.soundFX.playPop();
            this.prevPage();
        });

        document.getElementById('next-page-btn')?.addEventListener('click', () => {
            window.soundFX.playPop();
            this.nextPage();
        });

        // TTS Controls
        document.getElementById('btn-read-to-me')?.addEventListener('click', () => {
            window.soundFX.playPop();
            this.readCurrentPage();
        });

        document.getElementById('btn-pause-voice')?.addEventListener('click', () => {
            window.soundFX.playPop();
            if (window.childTTS.isPlaying) {
                window.childTTS.pause();
            } else {
                window.childTTS.resume();
            }
        });

        document.getElementById('btn-stop-voice')?.addEventListener('click', () => {
            window.soundFX.playPop();
            window.childTTS.stop();
            this.updateVoiceControlButtons(false);
        });

        document.getElementById('auto-read-toggle')?.addEventListener('change', (e) => {
            this.autoReadOnPageFlip = e.target.checked;
            window.soundFX.playPop();
        });

        // Mini-game modal buttons
        document.getElementById('close-game-btn')?.addEventListener('click', () => {
            window.soundFX.playPop();
            this.closeMiniGame();
        });

        // Keyboard arrow navigation
        window.addEventListener('keydown', (e) => {
            if (!this.storyModal.classList.contains('hidden')) {
                if (e.key === 'ArrowRight' || e.key === 'PageDown') {
                    this.nextPage();
                } else if (e.key === 'ArrowLeft' || e.key === 'PageUp') {
                    this.prevPage();
                } else if (e.key === 'Escape') {
                    this.closeStory();
                }
            }
        });

        // TTS Event hooks for UI
        window.childTTS.onStart = () => {
            this.updateVoiceControlButtons(true);
        };
        window.childTTS.onEnd = () => {
            this.updateVoiceControlButtons(false);
            this.clearWordHighlights();
        };
        window.childTTS.onWordBoundary = (charIndex) => {
            this.highlightCurrentWord(charIndex);
        };
    }

    updateMusicButtonUI(isPlaying) {
        if (!this.bgMusicBtn) return;
        if (isPlaying) {
            this.bgMusicBtn.innerHTML = `<span>🎵</span> <span>${window.getTranslation('bgMusicOn')}</span>`;
            this.bgMusicBtn.classList.add('bg-amber-300', 'text-amber-900', 'border-amber-400');
        } else {
            this.bgMusicBtn.innerHTML = `<span>🎵</span> <span>${window.getTranslation('bgMusicOff')}</span>`;
            this.bgMusicBtn.classList.remove('bg-amber-300', 'text-amber-900', 'border-amber-400');
        }
    }

    updateVoiceControlButtons(isSpeaking) {
        const readBtn = document.getElementById('btn-read-to-me');
        const stopBtn = document.getElementById('btn-stop-voice');
        if (isSpeaking) {
            readBtn?.classList.add('speaking-pulse');
            stopBtn?.classList.remove('hidden');
        } else {
            readBtn?.classList.remove('speaking-pulse');
            stopBtn?.classList.add('hidden');
        }
    }

    updateLanguageUI() {
        // Update header & badges
        document.getElementById('site-title').textContent = window.getTranslation('siteTitle');
        document.getElementById('site-tagline').textContent = window.getTranslation('tagline');

        // Update filters
        document.getElementById('filter-all').textContent = window.getTranslation('allStories');
        document.getElementById('filter-playgroup').textContent = window.getTranslation('playgroup');
        document.getElementById('filter-nursery').textContent = window.getTranslation('nursery');
        document.getElementById('filter-ukg').textContent = window.getTranslation('ukg');
        document.getElementById('filter-activities').textContent = window.getTranslation('activities');

        // Update Buttons in modals
        document.getElementById('read-to-me-label').textContent = window.getTranslation('readToMe');
        document.getElementById('auto-read-label').textContent = window.getTranslation('autoRead');
        document.getElementById('prev-label').textContent = window.getTranslation('previous');
        document.getElementById('next-label').textContent = window.getTranslation('next');
        document.getElementById('drawing-pad-title').textContent = window.getTranslation('colorPadTitle');
        document.getElementById('clear-canvas-btn').textContent = window.getTranslation('clearCanvas');
        document.getElementById('save-canvas-btn').textContent = window.getTranslation('saveDrawing');
    }

    renderStoryGrid() {
        if (!this.storyGrid) return;
        this.storyGrid.innerHTML = '';

        const filtered = window.storiesData.filter(s => {
            if (this.currentFilter === 'all') return true;
            return s.grade === this.currentFilter;
        });

        filtered.forEach(story => {
            const card = document.createElement('div');
            card.className = `story-card rounded-3xl p-6 shadow-xl border-4 border-white cursor-pointer transform transition duration-300 hover:scale-105 hover:-rotate-1 relative overflow-hidden flex flex-col justify-between`;
            card.style.backgroundColor = story.bgTheme;

            const localizedTitle = story.title[window.currentLang] || story.title['en'];
            const localizedDesc = story.description[window.currentLang] || story.description['en'];
            const gradeBadge = window.getTranslation('badges')[story.grade] || story.gradeLabel;

            card.innerHTML = `
                <div>
                    <div class="flex items-center justify-between mb-4">
                        <span class="badge ${story.badgeClass} text-sm font-black px-4 py-1.5 rounded-full shadow-sm">
                            ${gradeBadge}
                        </span>
                        <span class="text-4xl animate-bounce-slow">${story.icon}</span>
                    </div>

                    <h3 class="text-2xl font-black text-slate-800 mb-2 leading-tight">
                        ${localizedTitle}
                    </h3>
                    
                    <p class="text-slate-600 text-sm font-medium line-clamp-3 mb-6">
                        ${localizedDesc}
                    </p>
                </div>

                <div class="flex items-center justify-between pt-4 border-t-2 border-white/60">
                    <span class="text-xs font-bold text-slate-500 flex items-center gap-1">
                        📖 ${story.pages.length} Pages
                    </span>
                    <button class="chunky-btn bg-amber-400 hover:bg-amber-300 text-amber-950 font-black px-5 py-2 rounded-2xl text-sm shadow-md flex items-center gap-2">
                        <span>▶ Start</span>
                    </button>
                </div>
            `;

            card.addEventListener('click', () => {
                window.soundFX.playPop();
                this.openStory(story);
            });

            this.storyGrid.appendChild(card);
        });
    }

    openStory(story) {
        this.currentStory = story;
        this.currentPageIndex = 0;
        this.storyModal.classList.remove('hidden');
        document.body.style.overflow = 'hidden';

        window.soundFX.playSparkle();
        this.renderStoryPage();
    }

    closeStory() {
        window.childTTS.stop();
        this.currentStory = null;
        this.storyModal.classList.add('hidden');
        document.body.style.overflow = 'auto';
    }

    renderStoryPage() {
        if (!this.currentStory) return;
        const page = this.currentStory.pages[this.currentPageIndex];
        const totalPages = this.currentStory.pages.length;

        // Update Page Indicator & Title
        const localizedTitle = this.currentStory.title[window.currentLang] || this.currentStory.title['en'];
        document.getElementById('modal-story-title').textContent = localizedTitle;
        document.getElementById('modal-page-counter').textContent = `${this.currentPageIndex + 1} / ${totalPages}`;

        // Progress bar
        const progressPercent = ((this.currentPageIndex + 1) / totalPages) * 100;
        document.getElementById('story-progress-bar').style.width = `${progressPercent}%`;

        // Render SVG Scene
        const sceneContainer = document.getElementById('story-scene-container');
        sceneContainer.innerHTML = page.svg;

        // Render Story Text (with tap-to-speak on words!)
        const storyTextContainer = document.getElementById('story-text-container');
        const textStr = page.text[window.currentLang] || page.text['en'];
        
        // Wrap words in spans so kids can tap any word to hear it pronounced!
        const words = textStr.split(' ');
        storyTextContainer.innerHTML = words.map((w, i) => {
            return `<span class="interactive-word hover:text-amber-600 cursor-pointer transition" data-word="${w.replace(/[.,!?'"«»()]/g, '')}">${w}</span>`;
        }).join(' ');

        // Add click listener to each word for fun speech feedback
        storyTextContainer.querySelectorAll('.interactive-word').forEach(span => {
            span.addEventListener('click', (e) => {
                e.stopPropagation();
                const word = span.dataset.word;
                window.soundFX.playPop();
                window.childTTS.speak(word, {
                    lang: window.translations[window.currentLang]?.code || 'en-US',
                    pitch: 1.45,
                    rate: 0.8
                });
                span.classList.add('word-bounced');
                setTimeout(() => span.classList.remove('word-bounced'), 400);
            });
        });

        // Hint text
        const hintEl = document.getElementById('story-hint-text');
        const hintStr = page.hint[window.currentLang] || page.hint['en'];
        hintEl.textContent = hintStr;

        // Prev/Next button states
        const prevBtn = document.getElementById('prev-page-btn');
        const nextBtn = document.getElementById('next-page-btn');
        const finishBtn = document.getElementById('finish-story-btn');

        if (this.currentPageIndex === 0) {
            prevBtn.classList.add('opacity-40', 'cursor-not-allowed');
        } else {
            prevBtn.classList.remove('opacity-40', 'cursor-not-allowed');
        }

        if (this.currentPageIndex === totalPages - 1) {
            nextBtn.classList.add('hidden');
            finishBtn.classList.remove('hidden');
            finishBtn.onclick = () => {
                window.soundFX.playFanfare();
                window.triggerCelebration();
                this.openMiniGame(this.currentStory.miniGame);
            };
        } else {
            nextBtn.classList.remove('hidden');
            finishBtn.classList.add('hidden');
        }

        // Auto read if enabled
        if (this.autoReadOnPageFlip) {
            setTimeout(() => {
                this.readCurrentPage();
            }, 350);
        }
    }

    readCurrentPage() {
        if (!this.currentStory) return;
        const page = this.currentStory.pages[this.currentPageIndex];
        const textStr = page.text[window.currentLang] || page.text['en'];
        const langConfig = window.translations[window.currentLang] || window.translations['en'];

        window.childTTS.speak(textStr, {
            lang: langConfig.code,
            pitch: 1.40,
            rate: 0.86
        });
    }

    highlightCurrentWord(charIndex) {
        const textContainer = document.getElementById('story-text-container');
        if (!textContainer) return;
        const page = this.currentStory.pages[this.currentPageIndex];
        const textStr = page.text[window.currentLang] || page.text['en'];
        
        // Find which word index contains charIndex
        const wordSpans = textContainer.querySelectorAll('.interactive-word');
        let currentLen = 0;
        wordSpans.forEach(span => {
            const word = span.textContent;
            if (charIndex >= currentLen && charIndex <= currentLen + word.length + 1) {
                span.classList.add('karaoke-highlight');
            } else {
                span.classList.remove('karaoke-highlight');
            }
            currentLen += word.length + 1;
        });
    }

    clearWordHighlights() {
        const textContainer = document.getElementById('story-text-container');
        if (textContainer) {
            textContainer.querySelectorAll('.interactive-word').forEach(s => s.classList.remove('karaoke-highlight'));
        }
    }

    nextPage() {
        if (!this.currentStory) return;
        if (this.currentPageIndex < this.currentStory.pages.length - 1) {
            window.childTTS.stop();
            this.currentPageIndex++;
            window.soundFX.playSparkle();
            this.renderStoryPage();
        }
    }

    prevPage() {
        if (!this.currentStory) return;
        if (this.currentPageIndex > 0) {
            window.childTTS.stop();
            this.currentPageIndex--;
            window.soundFX.playPop();
            this.renderStoryPage();
        }
    }

    // Mini Game Controller
    openMiniGame(game) {
        if (!game) return;
        this.miniGameScore = 0;
        this.miniGameModal.classList.remove('hidden');

        const title = game.title[window.currentLang] || game.title['en'];
        const instr = game.instruction[window.currentLang] || game.instruction['en'];

        document.getElementById('game-title').textContent = title;
        document.getElementById('game-instruction').textContent = instr;
        document.getElementById('game-score-display').textContent = `⭐ 0 / ${game.targetCount}`;

        const container = document.getElementById('game-play-area');
        container.innerHTML = '';

        if (game.type === 'bubble_pop') {
            this.setupBubblePopGame(container, game);
        } else if (game.type === 'counting_apples') {
            this.setupAppleCountingGame(container, game);
        } else if (game.type === 'train_cars') {
            this.setupTrainCarGame(container, game);
        } else if (game.type === 'star_words') {
            this.setupStarWordsGame(container, game);
        } else if (game.type === 'kindness_words') {
            this.setupKindnessWordsGame(container, game);
        } else {
            this.setupBubblePopGame(container, game);
        }
    }

    closeMiniGame() {
        this.miniGameModal.classList.add('hidden');
    }

    handleMiniGameProgress(targetCount) {
        this.miniGameScore++;
        document.getElementById('game-score-display').textContent = `⭐ ${this.miniGameScore} / ${targetCount}`;

        if (this.miniGameScore >= targetCount) {
            window.soundFX.playFanfare();
            window.triggerCelebration();
            const container = document.getElementById('game-play-area');
            const victoryDiv = document.createElement('div');
            victoryDiv.className = 'text-center py-8 animate-bounce';
            victoryDiv.innerHTML = `
                <div class="text-6xl mb-4">🏆🌟🎈</div>
                <h3 class="text-3xl font-black text-amber-600 mb-2">${window.getTranslation('greatJob')}</h3>
                <button class="chunky-btn bg-emerald-500 hover:bg-emerald-400 text-white font-black px-8 py-3 rounded-2xl text-lg mt-4 shadow-lg" onclick="window.storyApp.closeMiniGame(); window.storyApp.closeStory()">
                    🏠 ${window.getTranslation('backToLibrary')}
                </button>
            `;
            container.appendChild(victoryDiv);
        }
    }

    // Mini-game: Bubble Pop (Playgroup)
    setupBubblePopGame(container, game) {
        const colors = ['#F43F5E', '#3B82F6', '#10B981', '#F59E0B', '#8B5CF6'];
        const bubbleWrap = document.createElement('div');
        bubbleWrap.className = 'flex flex-wrap justify-center items-center gap-6 py-6';

        for (let i = 0; i < game.targetCount; i++) {
            const bubble = document.createElement('div');
            bubble.className = 'w-24 h-24 rounded-full flex items-center justify-center cursor-pointer shadow-lg transform transition duration-300 hover:scale-110 active:scale-95 animate-float';
            bubble.style.backgroundColor = colors[i % colors.length];
            bubble.style.animationDelay = `${i * 0.2}s`;
            bubble.innerHTML = `<span class="text-3xl select-none">🫧</span>`;

            bubble.addEventListener('click', () => {
                window.soundFX.playPop();
                bubble.style.transform = 'scale(1.4)';
                bubble.style.opacity = '0';
                setTimeout(() => bubble.remove(), 200);
                this.handleMiniGameProgress(game.targetCount);
            });

            bubbleWrap.appendChild(bubble);
        }
        container.appendChild(bubbleWrap);
    }

    // Mini-game: Apple Counting (Nursery)
    setupAppleCountingGame(container, game) {
        const wrap = document.createElement('div');
        wrap.className = 'flex flex-col items-center gap-6 py-4';

        const basket = document.createElement('div');
        basket.className = 'w-48 h-28 bg-amber-700 border-4 border-amber-900 rounded-b-3xl shadow-lg flex items-center justify-center text-4xl';
        basket.innerHTML = `🧺`;

        const appleRow = document.createElement('div');
        appleRow.className = 'flex gap-6';

        for (let i = 1; i <= game.targetCount; i++) {
            const apple = document.createElement('div');
            apple.className = 'w-20 h-20 bg-rose-500 rounded-full flex flex-col items-center justify-center cursor-pointer shadow-lg hover:scale-110 active:scale-90 transition';
            apple.innerHTML = `
                <span class="text-3xl">🍎</span>
                <span class="text-white font-black text-xs">${i}</span>
            `;

            apple.addEventListener('click', () => {
                window.soundFX.playBoing();
                window.childTTS.speak(`${i}`, { pitch: 1.45, rate: 0.85 });
                apple.style.transform = 'translateY(120px) scale(0.6)';
                apple.style.opacity = '0';
                setTimeout(() => apple.remove(), 250);
                this.handleMiniGameProgress(game.targetCount);
            });

            appleRow.appendChild(apple);
        }

        wrap.appendChild(appleRow);
        wrap.appendChild(basket);
        container.appendChild(wrap);
    }

    // Mini-game: Train Cars (Nursery)
    setupTrainCarGame(container, game) {
        const trainRow = document.createElement('div');
        trainRow.className = 'flex flex-wrap justify-center items-center gap-4 py-8';

        const carItems = [
            { icon: '🚂', label: 'Engine', color: '#EF4444' },
            { icon: '🚃', label: 'Cookies', color: '#3B82F6' },
            { icon: '🚃', label: 'Lollipops', color: '#10B981' }
        ];

        carItems.forEach(item => {
            const car = document.createElement('div');
            car.className = 'w-24 h-24 rounded-2xl flex flex-col items-center justify-center cursor-pointer shadow-lg transform hover:scale-110 active:scale-95 transition';
            car.style.backgroundColor = item.color;
            car.innerHTML = `
                <span class="text-4xl">${item.icon}</span>
                <span class="text-white text-xs font-black mt-1">${item.label}</span>
            `;

            car.addEventListener('click', () => {
                window.soundFX.playTrainWhistle();
                car.classList.add('ring-4', 'ring-yellow-300', 'scale-105');
                car.style.pointerEvents = 'none';
                this.handleMiniGameProgress(game.targetCount);
            });

            trainRow.appendChild(car);
        });

        container.appendChild(trainRow);
    }

    // Mini-game: Star Words (UKG)
    setupStarWordsGame(container, game) {
        const row = document.createElement('div');
        row.className = 'flex flex-wrap justify-center gap-6 py-6';

        const words = [
            { word: 'ROCKET 🚀', sound: 'Rocket' },
            { word: 'MOON 🌙', sound: 'Moon' },
            { word: 'STAR ⭐', sound: 'Star' }
        ];

        words.forEach(item => {
            const star = document.createElement('div');
            star.className = 'px-6 py-5 bg-gradient-to-r from-purple-500 to-indigo-600 rounded-3xl text-white font-black text-xl cursor-pointer shadow-xl hover:scale-110 active:scale-95 transition flex items-center justify-center';
            star.textContent = item.word;

            star.addEventListener('click', () => {
                window.soundFX.playSparkle();
                window.childTTS.speak(item.sound, { pitch: 1.4, rate: 0.85 });
                star.classList.add('ring-4', 'ring-amber-300');
                star.style.pointerEvents = 'none';
                this.handleMiniGameProgress(game.targetCount);
            });

            row.appendChild(star);
        });

        container.appendChild(row);
    }

    // Mini-game: Kindness Words (UKG)
    setupKindnessWordsGame(container, game) {
        const row = document.createElement('div');
        row.className = 'flex flex-wrap justify-center gap-6 py-6';

        const hearts = [
            { label: 'PLEASE 💖', tts: 'Please' },
            { label: 'THANK YOU 🌸', tts: 'Thank You' },
            { label: 'SMILE 😊', tts: 'Smile' }
        ];

        hearts.forEach(item => {
            const heart = document.createElement('div');
            heart.className = 'px-6 py-5 bg-gradient-to-r from-pink-500 to-rose-400 rounded-3xl text-white font-black text-xl cursor-pointer shadow-xl hover:scale-110 active:scale-95 transition';
            heart.textContent = item.label;

            heart.addEventListener('click', () => {
                window.soundFX.playSparkle();
                window.childTTS.speak(item.tts, { pitch: 1.45, rate: 0.85 });
                heart.classList.add('ring-4', 'ring-yellow-300');
                heart.style.pointerEvents = 'none';
                this.handleMiniGameProgress(game.targetCount);
            });

            row.appendChild(heart);
        });

        container.appendChild(row);
    }

    // Interactive Drawing Pad
    initCanvasDrawing() {
        const canvas = document.getElementById('drawing-canvas');
        if (!canvas) return;
        const ctx = canvas.getContext('2d');

        // Set initial resolution
        canvas.width = 700;
        canvas.height = 420;
        ctx.fillStyle = '#FFFFFF';
        ctx.fillRect(0, 0, canvas.width, canvas.height);

        let isDrawing = false;
        let brushColor = '#EF4444';
        let brushSize = 12;
        let selectedStamp = null;

        // Color buttons
        document.querySelectorAll('.color-choice').forEach(btn => {
            btn.addEventListener('click', () => {
                window.soundFX.playPop();
                document.querySelectorAll('.color-choice').forEach(b => b.classList.remove('ring-4', 'ring-amber-400'));
                btn.classList.add('ring-4', 'ring-amber-400');
                brushColor = btn.dataset.color;
                selectedStamp = null;
            });
        });

        // Brush size buttons
        document.querySelectorAll('.brush-size-btn').forEach(btn => {
            btn.addEventListener('click', () => {
                window.soundFX.playPop();
                document.querySelectorAll('.brush-size-btn').forEach(b => b.classList.remove('bg-amber-300'));
                btn.classList.add('bg-amber-300');
                brushSize = parseInt(btn.dataset.size, 10);
            });
        });

        // Stamp buttons
        document.querySelectorAll('.stamp-btn').forEach(btn => {
            btn.addEventListener('click', () => {
                window.soundFX.playPop();
                document.querySelectorAll('.stamp-btn').forEach(b => b.classList.remove('ring-4', 'ring-amber-400'));
                btn.classList.add('ring-4', 'ring-amber-400');
                selectedStamp = btn.dataset.stamp;
            });
        });

        // Clear canvas
        document.getElementById('clear-canvas-btn')?.addEventListener('click', () => {
            window.soundFX.playPop();
            ctx.fillStyle = '#FFFFFF';
            ctx.fillRect(0, 0, canvas.width, canvas.height);
        });

        // Save canvas
        document.getElementById('save-canvas-btn')?.addEventListener('click', () => {
            window.soundFX.playSparkle();
            window.triggerCelebration();
            const link = document.createElement('a');
            link.download = 'my-wondertales-drawing.png';
            link.href = canvas.toDataURL('image/png');
            link.click();
        });

        // Mouse & Touch events
        const getPos = (e) => {
            const rect = canvas.getBoundingClientRect();
            const clientX = e.touches ? e.touches[0].clientX : e.clientX;
            const clientY = e.touches ? e.touches[0].clientY : e.clientY;
            return {
                x: (clientX - rect.left) * (canvas.width / rect.width),
                y: (clientY - rect.top) * (canvas.height / rect.height)
            };
        };

        const startDraw = (e) => {
            e.preventDefault();
            const pos = getPos(e);
            if (selectedStamp) {
                // Place stamp
                window.soundFX.playPop();
                ctx.font = '40px sans-serif';
                ctx.textAlign = 'center';
                ctx.textBaseline = 'middle';
                ctx.fillText(selectedStamp, pos.x, pos.y);
                return;
            }
            isDrawing = true;
            ctx.beginPath();
            ctx.moveTo(pos.x, pos.y);
            ctx.strokeStyle = brushColor;
            ctx.lineWidth = brushSize;
            ctx.lineCap = 'round';
            ctx.lineJoin = 'round';
        };

        const drawMove = (e) => {
            e.preventDefault();
            if (!isDrawing || selectedStamp) return;
            const pos = getPos(e);
            ctx.lineTo(pos.x, pos.y);
            ctx.stroke();
        };

        const stopDraw = () => {
            if (isDrawing) {
                ctx.closePath();
                isDrawing = false;
            }
        };

        canvas.addEventListener('mousedown', startDraw);
        canvas.addEventListener('mousemove', drawMove);
        window.addEventListener('mouseup', stopDraw);

        canvas.addEventListener('touchstart', startDraw, { passive: false });
        canvas.addEventListener('touchmove', drawMove, { passive: false });
        window.addEventListener('touchend', stopDraw);
    }
}

// Bouncing character helper
window.triggerCharacterBounce = function(el) {
    if (!el) return;
    el.classList.add('char-bounce-animation');
    setTimeout(() => el.classList.remove('char-bounce-animation'), 600);
};

// Celebration Confetti
window.triggerCelebration = function() {
    const confettiCount = 50;
    const container = document.body;
    const colors = ['#EF4444', '#3B82F6', '#10B981', '#F59E0B', '#8B5CF6', '#EC4899'];

    for (let i = 0; i < confettiCount; i++) {
        const piece = document.createElement('div');
        piece.className = 'confetti-piece';
        piece.style.left = `${Math.random() * 100}vw`;
        piece.style.backgroundColor = colors[Math.floor(Math.random() * colors.length)];
        piece.style.animationDelay = `${Math.random() * 0.4}s`;
        piece.style.transform = `rotate(${Math.random() * 360}deg)`;
        container.appendChild(piece);

        setTimeout(() => piece.remove(), 2500);
    }
};

// Launch App when DOM is loaded
window.addEventListener('DOMContentLoaded', () => {
    window.storyApp = new StoryApp();
});
