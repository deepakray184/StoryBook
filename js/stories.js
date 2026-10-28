/**
 * stories.js - Rich interactive stories designed for Playgroup, Nursery, and UKG
 * Includes fully translated text (EN, HI, ES, FR, DE), interactive SVG scenes, and mini-games.
 */

window.storiesData = [
    // ==========================================
    // 1. PLAYGROUP: Ducky's Big Splash!
    // ==========================================
    {
        id: 'ducky_splash',
        grade: 'playgroup',
        gradeLabel: 'Playgroup (Ages 2-3)',
        badgeClass: 'badge-playgroup',
        themeColor: 'from-amber-400 to-yellow-200',
        bgTheme: '#FEF9C3',
        icon: '🦆',
        title: {
            en: "Ducky's Big Splash!",
            hi: "नटखट बत्तख का छपाक!",
            es: "¡El Gran Chapuzón del Patito!",
            fr: "Le Grand Plongeon de Petit Canard !",
            de: "Entchens Großer Platscher!"
        },
        description: {
            en: "Join Ducky Yellow as he splashes with Froggy Green and Bunny Pink in the warm pond!",
            hi: "पीले बत्तख के साथ तालाब में छपाक-छपाक खेलें और प्यारे मेंढक से मिलें!",
            es: "¡Acompaña al patito amarillo a saltar al estanque con la ranita verde y el conejito!",
            fr: "Suis le petit canard jaune qui saute dans l'étang avec la grenouille verte et le lapin rose !",
            de: "Komm mit dem gelben Entchen an den warmen Teich zum großen Platsch-Spaß!"
        },
        pages: [
            {
                pageNumber: 1,
                text: {
                    en: "Quack, quack! Here is Ducky Yellow! He waddles happily near the sunny lily pond.",
                    hi: "क्वेक, क्वेक! यह है हमारा नन्हा पीला बत्तख! वह धूप वाले तालाब के पास मटक-मटक कर चल रहा है।",
                    es: "¡Cuak, cuak! ¡Aquí está el Patito Amarillo! Camina feliz junto al estanque soleado.",
                    fr: "Coin, coin ! Voici Petit Canard Jaune ! Il se dandine joyeusement près de l'étang.",
                    de: "Quak, quak! Hier ist das gelbe Entchen! Es watschelt fröhlich am warmen Teich."
                },
                hint: {
                    en: "👉 Tap Ducky to hear him Quack!",
                    hi: "👉 बत्तख को छुओ और 'क्वेक' सुनो!",
                    es: "👉 ¡Toca al patito para oír su ¡Cuak!",
                    fr: "👉 Touche le canard pour l'entendre !",
                    de: "👉 Tippe auf das Entchen für ein Quak!"
                },
                svg: `
                <svg viewBox="0 0 600 380" class="w-full h-full select-none">
                    <!-- Sky & Grass -->
                    <rect width="600" height="260" fill="#BAE6FD"/>
                    <path d="M 0 240 Q 150 200, 300 230 T 600 220 L 600 380 L 0 380 Z" fill="#86EFAC"/>
                    <!-- Sun -->
                    <circle cx="510" cy="70" r="42" fill="#FDE047" class="animate-spin-slow cursor-pointer" onclick="window.soundFX.playSparkle()"/>
                    <circle cx="510" cy="70" r="32" fill="#FACC15"/>
                    <!-- Smiling Pond -->
                    <ellipse cx="300" cy="300" rx="240" ry="70" fill="#38BDF8" class="cursor-pointer" onclick="window.soundFX.playSplash()"/>
                    <ellipse cx="300" cy="300" rx="200" ry="50" fill="#7DD3FC"/>
                    <!-- Lily Pad -->
                    <ellipse cx="160" cy="310" rx="45" ry="18" fill="#22C55E"/>
                    <circle cx="160" cy="305" r="8" fill="#F472B6"/>
                    <!-- Interactive Ducky -->
                    <g id="ducky-char" class="interactive-char cursor-pointer" onclick="window.soundFX.playDuckQuack(); window.triggerCharacterBounce(this)">
                        <!-- Body -->
                        <ellipse cx="300" cy="245" rx="52" ry="40" fill="#FBBF24"/>
                        <circle cx="340" cy="205" r="30" fill="#FBBF24"/>
                        <!-- Cheeks -->
                        <circle cx="348" cy="216" r="6" fill="#F87171" opacity="0.6"/>
                        <!-- Big Eye -->
                        <circle cx="348" cy="198" r="7" fill="#1E293B"/>
                        <circle cx="350" cy="195" r="2.5" fill="#FFFFFF"/>
                        <!-- Orange Beak -->
                        <polygon points="365,204 395,209 365,217" fill="#F97316"/>
                        <!-- Wing -->
                        <ellipse cx="285" cy="242" rx="24" ry="16" fill="#F59E0B" transform="rotate(-15 285 242)"/>
                        <!-- Little Tail -->
                        <polygon points="245,235 230,225 248,250" fill="#FBBF24"/>
                    </g>
                    <!-- Floating Bubbles -->
                    <circle cx="220" cy="270" r="10" fill="#E0F2FE" opacity="0.7" class="floating-bubble" onclick="window.soundFX.playPop(); this.remove()"/>
                    <circle cx="380" cy="285" r="14" fill="#E0F2FE" opacity="0.7" class="floating-bubble" onclick="window.soundFX.playPop(); this.remove()"/>
                </svg>
                `
            },
            {
                pageNumber: 2,
                text: {
                    en: "Ribbit! Ribbit! Froggy Green hops high onto a lily pad! 'Will you play with me?' asks Ducky.",
                    hi: "टर्र-टर्र! मेंढक भैया हरी पत्ती पर कूद पड़े! बत्तख ने पूछा, 'क्या तुम मेरे साथ खेलोगे?'",
                    es: "¡Croac, croac! ¡La Ranita Verde salta alto en un nenúfar! '¿Quieres jugar conmigo?', pregunta el Patito.",
                    fr: "Croa ! Croa ! Grenouille Verte saute sur un nénuphar ! 'Tu veux jouer ?' demande Petit Canard.",
                    de: "Quak! Quak! Frosch Grün hüpft hoch auf das Seerosenblatt! 'Magst du mit mir spielen?' fragt Entchen."
                },
                hint: {
                    en: "👉 Tap Froggy to make him bounce!",
                    hi: "👉 मेंढक को छुओ और उसे उछलते देखो!",
                    es: "👉 ¡Toca a la ranita para hacerla saltar!",
                    fr: "👉 Touche la grenouille pour la faire bondir !",
                    de: "👉 Tippe auf den Frosch, um ihn hüpfen zu lassen!"
                },
                svg: `
                <svg viewBox="0 0 600 380" class="w-full h-full select-none">
                    <rect width="600" height="260" fill="#BAE6FD"/>
                    <path d="M 0 240 Q 150 200, 300 230 T 600 220 L 600 380 L 0 380 Z" fill="#86EFAC"/>
                    <!-- Big Pond -->
                    <ellipse cx="300" cy="300" rx="250" ry="70" fill="#38BDF8"/>
                    <ellipse cx="300" cy="300" rx="210" ry="52" fill="#7DD3FC"/>
                    <!-- Giant Lily Pad -->
                    <ellipse cx="410" cy="280" rx="65" ry="25" fill="#16A34A"/>
                    <!-- Ducky on Left -->
                    <g class="cursor-pointer" onclick="window.soundFX.playDuckQuack(); window.triggerCharacterBounce(this)">
                        <ellipse cx="180" cy="275" rx="45" ry="32" fill="#FBBF24"/>
                        <circle cx="215" cy="245" r="24" fill="#FBBF24"/>
                        <circle cx="223" cy="240" r="5" fill="#1E293B"/>
                        <polygon points="236,243 258,247 236,253" fill="#F97316"/>
                    </g>
                    <!-- Froggy on Lily Pad -->
                    <g id="froggy-char" class="interactive-char cursor-pointer" onclick="window.soundFX.playBoing(); window.triggerCharacterBounce(this)">
                        <!-- Legs -->
                        <ellipse cx="380" cy="275" rx="18" ry="12" fill="#15803D"/>
                        <ellipse cx="440" cy="275" rx="18" ry="12" fill="#15803D"/>
                        <!-- Body -->
                        <ellipse cx="410" cy="255" rx="36" ry="28" fill="#22C55E"/>
                        <ellipse cx="410" cy="260" rx="24" ry="18" fill="#86EFAC"/>
                        <!-- Big Frog Eyes -->
                        <circle cx="395" cy="230" r="14" fill="#22C55E"/>
                        <circle cx="395" cy="230" r="10" fill="#FFFFFF"/>
                        <circle cx="397" cy="230" r="6" fill="#1E293B"/>
                        <circle cx="425" cy="230" r="14" fill="#22C55E"/>
                        <circle cx="425" cy="230" r="10" fill="#FFFFFF"/>
                        <circle cx="423" cy="230" r="6" fill="#1E293B"/>
                        <!-- Wide Smile -->
                        <path d="M 395 255 Q 410 270, 425 255" stroke="#15803D" stroke-width="4" fill="none" stroke-linecap="round"/>
                        <!-- Cheeks -->
                        <circle cx="390" cy="256" r="5" fill="#F472B6" opacity="0.6"/>
                        <circle cx="430" cy="256" r="5" fill="#F472B6" opacity="0.6"/>
                    </g>
                </svg>
                `
            },
            {
                pageNumber: 3,
                text: {
                    en: "Hop, hop, hop! Bunny Pink bounces over with floppy ears. '1, 2, 3... SPLASH!' They all jump in together!",
                    hi: "उछल-कूद करते हुए गुलाबी खरगोश आया! 'एक, दो, तीन... छपाक!' सबने एक साथ पानी में डुबकी लगाई!",
                    es: "¡Hop, hop, hop! ¡El Conejito Rosa llega saltando con orejitas suaves! '1, 2, 3... ¡CHAPUZÓN!' ¡Todos se lanzan al agua!",
                    fr: "Hop, hop, hop ! Lapin Rose bondit joyeusement. '1, 2, 3... PLOUF !' Ils sautent tous ensemble dans l'eau !",
                    de: "Hopp, hopp, hopp! Häschen Rosa hüpft mit Wackelohren herbei. '1, 2, 3... PLATSCH!' Alle springen zusammen hinein!"
                },
                hint: {
                    en: "👉 Tap the big splash to hear the water!",
                    hi: "👉 पानी के छपाक पर छुओ और आवाज़ सुनो!",
                    es: "👉 ¡Toca el gran chapuzón de agua!",
                    fr: "👉 Touche le grand plouf pour entendre l'eau !",
                    de: "👉 Tippe auf das Wasser für den Platscher!"
                },
                svg: `
                <svg viewBox="0 0 600 380" class="w-full h-full select-none">
                    <rect width="600" height="260" fill="#BAE6FD"/>
                    <path d="M 0 240 Q 150 200, 300 230 T 600 220 L 600 380 L 0 380 Z" fill="#86EFAC"/>
                    <!-- Big Splash Pond -->
                    <ellipse cx="300" cy="300" rx="250" ry="70" fill="#38BDF8" class="cursor-pointer" onclick="window.soundFX.playSplash()"/>
                    <!-- Water Splash Droplets -->
                    <g class="cursor-pointer" onclick="window.soundFX.playSplash(); window.triggerCelebration()">
                        <path d="M 300 250 Q 280 180, 260 210 Q 290 220, 300 250" fill="#0284C7"/>
                        <path d="M 300 250 Q 320 170, 340 200 Q 315 220, 300 250" fill="#0284C7"/>
                        <circle cx="250" cy="180" r="10" fill="#38BDF8"/>
                        <circle cx="350" cy="170" r="12" fill="#38BDF8"/>
                        <circle cx="300" cy="150" r="14" fill="#7DD3FC"/>
                    </g>
                    <!-- Bunny Pink -->
                    <g class="cursor-pointer" onclick="window.soundFX.playBoing(); window.triggerCharacterBounce(this)">
                        <!-- Ears -->
                        <ellipse cx="140" cy="170" rx="10" ry="32" fill="#F472B6" transform="rotate(-15 140 170)"/>
                        <ellipse cx="165" cy="170" rx="10" ry="32" fill="#F472B6" transform="rotate(10 165 170)"/>
                        <ellipse cx="140" cy="170" rx="5" ry="22" fill="#FBCFE8" transform="rotate(-15 140 170)"/>
                        <ellipse cx="165" cy="170" rx="5" ry="22" fill="#FBCFE8" transform="rotate(10 165 170)"/>
                        <!-- Head & Body -->
                        <circle cx="155" cy="225" r="28" fill="#F472B6"/>
                        <circle cx="148" cy="220" r="4" fill="#1E293B"/>
                        <circle cx="165" cy="220" r="4" fill="#1E293B"/>
                        <polygon points="152,228 160,228 156,233" fill="#BE185D"/>
                    </g>
                    <!-- Ducky splashing -->
                    <g class="cursor-pointer" onclick="window.soundFX.playDuckQuack(); window.triggerCharacterBounce(this)">
                        <ellipse cx="300" cy="290" rx="35" ry="24" fill="#FBBF24"/>
                        <circle cx="325" cy="270" r="20" fill="#FBBF24"/>
                        <circle cx="330" cy="266" r="4" fill="#1E293B"/>
                        <polygon points="340,268 355,272 340,277" fill="#F97316"/>
                    </g>
                    <!-- Froggy smiling -->
                    <g class="cursor-pointer" onclick="window.soundFX.playBoing()">
                        <ellipse cx="450" cy="290" rx="30" ry="20" fill="#22C55E"/>
                        <circle cx="440" cy="275" r="8" fill="#22C55E"/>
                        <circle cx="460" cy="275" r="8" fill="#22C55E"/>
                        <circle cx="440" cy="275" r="4" fill="#1E293B"/>
                        <circle cx="460" cy="275" r="4" fill="#1E293B"/>
                    </g>
                </svg>
                `
            }
        ],
        miniGame: {
            type: 'bubble_pop',
            title: {
                en: "🫧 Bubble Pop Party!",
                hi: "🫧 रंग-बिरंगे बुलबुले फोड़ो!",
                es: "🫧 ¡Fiesta de Burbujas!",
                fr: "🫧 Éclate les Bulles !",
                de: "🫧 Seifenblasen Platzen!"
            },
            instruction: {
                en: "Tap all 5 colorful bubbles to help Ducky make a rainbow splash!",
                hi: "बत्तख के साथ पानी के सभी ५ बुलबुलों को छूकर फोड़ें!",
                es: "¡Toca las 5 burbujas de colores para ayudar al patito!",
                fr: "Touche les 5 bulles colorées pour faire un splash arc-en-ciel !",
                de: "Tippe auf alle 5 bunten Seifenblasen!"
            },
            targetCount: 5
        }
    },

    // ==========================================
    // 2. PLAYGROUP: Sunny Sun & Happy Cloud
    // ==========================================
    {
        id: 'sunny_cloud',
        grade: 'playgroup',
        gradeLabel: 'Playgroup (Ages 2-3)',
        badgeClass: 'badge-playgroup',
        themeColor: 'from-sky-400 to-indigo-200',
        bgTheme: '#E0F2FE',
        icon: '☀️',
        title: {
            en: "Sunny Sun & Happy Cloud",
            hi: "सूरज दादा और नन्हा बादल",
            es: "El Sol y la Nube Alegre",
            fr: "Petit Soleil et Nuage Heureux",
            de: "Sonnenschein und Wölkchen"
        },
        description: {
            en: "Wake up with golden Sunny Sun, play peek-a-boo with Cloud, and see a magical rainbow!",
            hi: "चमकीले सूरज दादा के साथ जागें, बादल के साथ छुपन-छुपाई खेलें और सतरंगी इंद्रधनुष देखें!",
            es: "¡Despierta con el Sol Dorado, juega al escondite con la nube y descubre un arcoíris!",
            fr: "Réveille-toi avec le doux Soleil et joue à cache-cache avec le nuage arc-en-ciel !",
            de: "Wache auf mit der warmen Sonne und spiele Verstecken mit der freundlichen Wolke!"
        },
        pages: [
            {
                pageNumber: 1,
                text: {
                    en: "Good morning! Golden Sun wakes up and smiles. 'Yawn... time to bring warm sunshine to all kids!'",
                    hi: "सुप्रभात! चमकते हुए सूरज दादा जागे और मुस्कुराए। 'वाह... अब सब प्यारे बच्चों को धूप देने का समय है!'",
                    es: "¡Buenos días! El Sol Dorado se despierta y sonríe. '¡Hora de iluminar el hermoso día!'",
                    fr: "Bonjour ! Le doux Soleil doré se réveille en souriant. 'C'est l'heure d'éclairer le monde !'",
                    de: "Guten Morgen! Die goldene Sonne wacht auf und lacht. 'Zeit für warmen Sonnenschein!'"
                },
                hint: {
                    en: "👉 Tap the Sun to make him giggle!",
                    hi: "👉 सूरज दादा को छूकर उनकी मीठी हँसी सुनो!",
                    es: "👉 ¡Toca al Sol para escucharlo reír!",
                    fr: "👉 Touche le Soleil pour le faire briller !",
                    de: "👉 Tippe auf die Sonne zum Kichern!"
                },
                svg: `
                <svg viewBox="0 0 600 380" class="w-full h-full select-none">
                    <rect width="600" height="380" fill="#FEF08A"/>
                    <!-- Rolling hills -->
                    <circle cx="100" cy="480" r="260" fill="#86EFAC"/>
                    <circle cx="500" cy="480" r="260" fill="#4ADE80"/>
                    <!-- Smiling Big Sun -->
                    <g class="interactive-char cursor-pointer" onclick="window.soundFX.playSparkle(); window.triggerCharacterBounce(this)">
                        <!-- Sun Rays -->
                        <g stroke="#F59E0B" stroke-width="8" stroke-linecap="round">
                            <line x1="300" y1="50" x2="300" y2="15" />
                            <line x1="300" y1="270" x2="300" y2="305" />
                            <line x1="190" y1="160" x2="155" y2="160" />
                            <line x1="410" y1="160" x2="445" y2="160" />
                            <line x1="220" y1="80" x2="195" y2="55" />
                            <line x1="380" y1="80" x2="405" y2="55" />
                            <line x1="220" y1="240" x2="195" y2="265" />
                            <line x1="380" y1="240" x2="405" y2="265" />
                        </g>
                        <!-- Sun Body -->
                        <circle cx="300" cy="160" r="75" fill="#FBBF24"/>
                        <circle cx="300" cy="160" r="65" fill="#FACC15"/>
                        <!-- Big Happy Eyes -->
                        <circle cx="280" cy="148" r="9" fill="#1E293B"/>
                        <circle cx="282" cy="145" r="3" fill="#FFFFFF"/>
                        <circle cx="320" cy="148" r="9" fill="#1E293B"/>
                        <circle cx="322" cy="145" r="3" fill="#FFFFFF"/>
                        <!-- Pink Cheeks -->
                        <circle cx="270" cy="168" r="10" fill="#F87171" opacity="0.6"/>
                        <circle cx="330" cy="168" r="10" fill="#F87171" opacity="0.6"/>
                        <!-- Smile -->
                        <path d="M 285 168 Q 300 188, 315 168" stroke="#B45309" stroke-width="5" fill="none" stroke-linecap="round"/>
                    </g>
                </svg>
                `
            },
            {
                pageNumber: 2,
                text: {
                    en: "Whoosh! Fluffy Cloud drifts over. 'Peek-a-boo!' laughs Cloud, casting a cool gentle breeze.",
                    hi: "हवा की सरसराहट! नन्हा रुई जैसा बादल आया। 'अरे वाह! छुपन-छुपाई खेलें!' बादल हँस पड़ा।",
                    es: "¡Fiuuu! Llega la Nube Esponjosa flotando. '¡Aquí estoy!', se ríe la nube jugando al escondite.",
                    fr: "Flipp ! Nuage tout doux arrive. 'Coucou !' rigole le nuage en soufflant une brise fraîche.",
                    de: "Husch! Die weiche Wolke schwebt herbei. 'Kuckuck!' lacht die Wolke und bringt frischen Wind."
                },
                hint: {
                    en: "👉 Tap the Cloud to play peek-a-boo!",
                    hi: "👉 बादल को छुओ और हवा की आवाज़ सुनो!",
                    es: "👉 ¡Toca la nube para jugar!",
                    fr: "👉 Touche le nuage pour souffler !",
                    de: "👉 Tippe auf die Wolke zum Verstecken!"
                },
                svg: `
                <svg viewBox="0 0 600 380" class="w-full h-full select-none">
                    <rect width="600" height="380" fill="#BAE6FD"/>
                    <circle cx="150" cy="140" r="50" fill="#FACC15" opacity="0.8"/>
                    <!-- Fluffy Cloud -->
                    <g class="interactive-char cursor-pointer" onclick="window.soundFX.playBoing(); window.triggerCharacterBounce(this)">
                        <circle cx="300" cy="160" r="55" fill="#FFFFFF"/>
                        <circle cx="240" cy="175" r="45" fill="#FFFFFF"/>
                        <circle cx="360" cy="175" r="45" fill="#FFFFFF"/>
                        <circle cx="205" cy="195" r="35" fill="#FFFFFF"/>
                        <circle cx="395" cy="195" r="35" fill="#FFFFFF"/>
                        <rect x="210" y="170" width="180" height="60" fill="#FFFFFF"/>
                        <!-- Eyes & Smile -->
                        <circle cx="280" cy="175" r="7" fill="#1E293B"/>
                        <circle cx="320" cy="175" r="7" fill="#1E293B"/>
                        <circle cx="265" cy="188" r="8" fill="#F472B6" opacity="0.6"/>
                        <circle cx="335" cy="188" r="8" fill="#F472B6" opacity="0.6"/>
                        <path d="M 288 190 Q 300 205, 312 190" stroke="#0284C7" stroke-width="4" fill="none" stroke-linecap="round"/>
                    </g>
                </svg>
                `
            },
            {
                pageNumber: 3,
                text: {
                    en: "Look up! A giant magical Rainbow arches across the sky! Red, orange, yellow, green, blue, and purple!",
                    hi: "आसमान में देखो! कितना सुंदर जादुई इंद्रधनुष खिला है! लाल, नारंगी, पीला, हरा, नीला और बैंगनी!",
                    es: "¡Mira arriba! ¡Un arcoíris mágico llena el cielo! Rojo, naranja, amarillo, verde, azul y violeta.",
                    fr: "Regarde là-haut ! Un magnifique arc-en-ciel magique brille de mille feux dans le ciel !",
                    de: "Schau mal nach oben! Ein zauberhafter bunter Regenbogen strahlt am ganzen Himmel!"
                },
                hint: {
                    en: "👉 Tap the Rainbow to hear sparkling chimes!",
                    hi: "👉 इंद्रधनुष को छुओ और मधुर संगीत सुनो!",
                    es: "👉 ¡Toca el arcoíris para escuchar campanitas!",
                    fr: "👉 Touche l'arc-en-ciel pour entendre les carillons !",
                    de: "👉 Tippe auf den Regenbogen für Zauberklänge!"
                },
                svg: `
                <svg viewBox="0 0 600 380" class="w-full h-full select-none">
                    <rect width="600" height="380" fill="#E0F2FE"/>
                    <!-- Magical Rainbow Arcs -->
                    <g class="cursor-pointer" onclick="window.soundFX.playSparkle(); window.triggerCelebration()">
                        <ellipse cx="300" cy="380" rx="270" ry="240" fill="none" stroke="#EF4444" stroke-width="18"/>
                        <ellipse cx="300" cy="380" rx="252" ry="224" fill="none" stroke="#F97316" stroke-width="18"/>
                        <ellipse cx="300" cy="380" rx="234" ry="208" fill="none" stroke="#FACC15" stroke-width="18"/>
                        <ellipse cx="300" cy="380" rx="216" ry="192" fill="none" stroke="#22C55E" stroke-width="18"/>
                        <ellipse cx="300" cy="380" rx="198" ry="176" fill="none" stroke="#3B82F6" stroke-width="18"/>
                        <ellipse cx="300" cy="380" rx="180" ry="160" fill="none" stroke="#A855F7" stroke-width="18"/>
                    </g>
                    <!-- Clouds at base -->
                    <circle cx="50" cy="360" r="60" fill="#FFFFFF"/>
                    <circle cx="550" cy="360" r="60" fill="#FFFFFF"/>
                    <!-- Twinkling stars -->
                    <text x="280" y="80" font-size="32" class="cursor-pointer" onclick="window.soundFX.playSparkle()">⭐</text>
                    <text x="140" y="110" font-size="28" class="cursor-pointer" onclick="window.soundFX.playSparkle()">✨</text>
                    <text x="420" y="110" font-size="28" class="cursor-pointer" onclick="window.soundFX.playSparkle()">✨</text>
                </svg>
                `
            }
        ],
        miniGame: {
            type: 'color_touch',
            title: {
                en: "🌈 Rainbow Color Touch!",
                hi: "🌈 इंद्रधनुषी रंगों को छुओ!",
                es: "🌈 ¡Toca los Colores del Arcoíris!",
                fr: "🌈 Touche les Couleurs Arc-en-ciel !",
                de: "🌈 Regenbogen Farben-Tippen!"
            },
            instruction: {
                en: "Tap each bright colored star to light up the sky!",
                hi: "आसमान को चमकाने के लिए हर रंगीन तारे को छुओ!",
                es: "¡Toca cada estrella de color para iluminar el cielo!",
                fr: "Touche chaque étoile colorée pour illuminer le ciel !",
                de: "Tippe auf jeden bunten Stern!"
            },
            targetCount: 4
        }
    },

    // ==========================================
    // 3. NURSERY: Barnaby Bear's Honey Picnic
    // ==========================================
    {
        id: 'barnaby_bear',
        grade: 'nursery',
        gradeLabel: 'Nursery (Ages 3-4)',
        badgeClass: 'badge-nursery',
        themeColor: 'from-amber-500 to-orange-200',
        bgTheme: '#FEF3C7',
        icon: '🧸',
        title: {
            en: "Barnaby Bear's Honey Picnic",
            hi: "भालू दादा की मीठी दावत",
            es: "El Picnic de Miel del Osito Barnaby",
            fr: "Le Pique-nique de Barnabé l'Ourson",
            de: "Bär Barnabys Honig-Picknick"
        },
        description: {
            en: "Help Barnaby Bear count 3 golden honey pots and share delicious berry cupcakes with his friends!",
            hi: "भालू दादा के साथ शहद की ३ मटकियाँ गिनें और जंगल के दोस्तों के साथ दावत का मज़ा लें!",
            es: "¡Ayuda al osito Barnaby a contar 3 tarros de miel y compartir pastelitos de mora con sus amigos!",
            fr: "Aide l'ourson Barnabé à compter 3 pots de miel doré et à partager des gâteaux !",
            de: "Hilf Bär Barnaby, 3 Honigtöpfe zu zählen und leckere Beerenkuchen zu teilen!"
        },
        pages: [
            {
                pageNumber: 1,
                text: {
                    en: "Grrr-umble! Barnaby Bear wakes up with a hungry tummy. 'I dream of sweet, golden honey!' he chuckles.",
                    hi: "गुड़-गुड़! भालू दादा सोकर उठे तो पेट में भूख के चूहे कूद रहे थे। 'मुझे मीठा शहद खाना है!' वे मुस्कुराए।",
                    es: "¡Rrrr-um! El Osito Barnaby se despierta con hambre en su pancita. '¡Sueño con rica miel dorada!', ríe alegre.",
                    fr: "Grrr-oum ! L'ourson Barnabé se réveille le ventre gargouillant. 'J'ai envie de bon miel doré !'",
                    de: "Magenknurren! Bär Barnaby wacht mit großem Hunger auf. 'Ich träume von süßem, goldenem Honig!'"
                },
                hint: {
                    en: "👉 Tap Barnaby's tummy to hear it rumble!",
                    hi: "👉 भालू के पेट को छुओ और गुड़गुड़ाहट सुनो!",
                    es: "👉 ¡Toca la pancita de Barnaby!",
                    fr: "👉 Touche le ventre de l'ourson !",
                    de: "👉 Tippe auf den Bauch von Barnaby!"
                },
                svg: `
                <svg viewBox="0 0 600 380" class="w-full h-full select-none">
                    <rect width="600" height="260" fill="#FEF3C7"/>
                    <path d="M 0 250 Q 200 220, 600 250 L 600 380 L 0 380 Z" fill="#84CC16"/>
                    <!-- Barnaby Bear -->
                    <g class="interactive-char cursor-pointer" onclick="window.soundFX.playBoing(); window.triggerCharacterBounce(this)">
                        <!-- Ears -->
                        <circle cx="245" cy="115" r="24" fill="#92400E"/>
                        <circle cx="245" cy="115" r="14" fill="#FDE68A"/>
                        <circle cx="355" cy="115" r="24" fill="#92400E"/>
                        <circle cx="355" cy="115" r="14" fill="#FDE68A"/>
                        <!-- Head -->
                        <circle cx="300" cy="165" r="68" fill="#B45309"/>
                        <!-- Muzzle -->
                        <ellipse cx="300" cy="185" rx="36" ry="26" fill="#FDE68A"/>
                        <ellipse cx="300" cy="175" rx="14" ry="10" fill="#1E293B"/>
                        <path d="M 300 185 L 300 196 M 290 196 Q 300 205, 310 196" stroke="#1E293B" stroke-width="4" fill="none" stroke-linecap="round"/>
                        <!-- Eyes -->
                        <circle cx="280" cy="150" r="7" fill="#1E293B"/>
                        <circle cx="282" cy="148" r="2.5" fill="#FFFFFF"/>
                        <circle cx="320" cy="150" r="7" fill="#1E293B"/>
                        <circle cx="322" cy="148" r="2.5" fill="#FFFFFF"/>
                        <!-- Body -->
                        <ellipse cx="300" cy="285" rx="85" ry="70" fill="#92400E"/>
                        <!-- Big Tummy Patch -->
                        <ellipse cx="300" cy="285" rx="55" ry="46" fill="#FDE68A" class="cursor-pointer" onclick="window.soundFX.playChomp()"/>
                        <text x="270" y="295" font-size="28">🍯</text>
                    </g>
                </svg>
                `
            },
            {
                pageNumber: 2,
                text: {
                    en: "Under the big pine tree, he finds 3 shiny golden honey pots! Let's count them: One! Two! Three!",
                    hi: "बड़े पेड़ के नीचे भालू को शहद की ३ चमकीली मटकियाँ मिलीं! चलो गिनें: एक! दो! तीन!",
                    es: "¡Bajo el gran pino, encuentra 3 tarros de miel brillante! Vamos a contar: ¡Uno! ¡Dos! ¡Tres!",
                    fr: "Sous le grand sapin, il découvre 3 jolis pots de miel ! Comptons ensemble : Un ! Deux ! Trois !",
                    de: "Unter der großen Tanne findet er 3 goldene Honigtöpfe! Zählen wir: Eins! Zwei! Drei!"
                },
                hint: {
                    en: "👉 Tap each honey pot to count 1, 2, 3!",
                    hi: "👉 हर मटकी को छूकर १, २, ३ गिनें!",
                    es: "👉 ¡Toca cada tarro para contar 1, 2, 3!",
                    fr: "👉 Touche chaque pot pour compter 1, 2, 3 !",
                    de: "👉 Tippe auf jeden Topf zum Zählen: 1, 2, 3!"
                },
                svg: `
                <svg viewBox="0 0 600 380" class="w-full h-full select-none">
                    <rect width="600" height="260" fill="#FEF3C7"/>
                    <path d="M 0 250 Q 300 230, 600 250 L 600 380 L 0 380 Z" fill="#84CC16"/>
                    <!-- Pine Tree -->
                    <polygon points="90,100 40,240 140,240" fill="#15803D"/>
                    <polygon points="90,60 55,160 125,160" fill="#16A34A"/>
                    <rect x="78" y="240" width="24" height="40" fill="#78350F"/>
                    <!-- Honey Pot 1 -->
                    <g class="interactive-char cursor-pointer" onclick="window.soundFX.playPop(); window.triggerCharacterBounce(this)">
                        <ellipse cx="230" cy="275" rx="35" ry="32" fill="#D97706"/>
                        <ellipse cx="230" cy="250" rx="26" ry="8" fill="#F59E0B"/>
                        <text x="220" y="285" font-size="24" font-weight="bold" fill="#FFFFFF">1</text>
                    </g>
                    <!-- Honey Pot 2 -->
                    <g class="interactive-char cursor-pointer" onclick="window.soundFX.playPop(); window.triggerCharacterBounce(this)">
                        <ellipse cx="320" cy="265" rx="40" ry="36" fill="#D97706"/>
                        <ellipse cx="320" cy="238" rx="30" ry="10" fill="#F59E0B"/>
                        <text x="310" y="275" font-size="28" font-weight="bold" fill="#FFFFFF">2</text>
                    </g>
                    <!-- Honey Pot 3 -->
                    <g class="interactive-char cursor-pointer" onclick="window.soundFX.playPop(); window.triggerCharacterBounce(this)">
                        <ellipse cx="420" cy="275" rx="35" ry="32" fill="#D97706"/>
                        <ellipse cx="420" cy="250" rx="26" ry="8" fill="#F59E0B"/>
                        <text x="410" y="285" font-size="24" font-weight="bold" fill="#FFFFFF">3</text>
                    </g>
                </svg>
                `
            },
            {
                pageNumber: 3,
                text: {
                    en: "'Sharing is caring!' says Barnaby. He invites Sammy Squirrel and Penny Pigeon to feast together happily!",
                    hi: "'मिल बांटकर खाने में सबसे बड़ा मज़ा है!' भालू दादा ने गिलहरी और कबूतर को भी बुलाया और सबने मिलकर दावत की!",
                    es: "¡Compartir nos hace felices! Barnaby invita a la ardilla Sammy y a la palomita a merendar todos juntos.",
                    fr: "'Partager rend heureux !' dit Barnabé. Il invite l'écureuil et le petit oiseau pour un festin d'amis !",
                    de: "'Teilen macht Freude!' sagt Barnaby. Er lädt Eichhörnchen Sammy und Taube Penny zum Schmausen ein!"
                },
                hint: {
                    en: "👉 Tap the picnic feast to celebrate!",
                    hi: "👉 पिकनिक की दावत पर छुओ और जश्न मनाओ!",
                    es: "👉 ¡Toca el mantel de picnic para celebrar!",
                    fr: "👉 Touche le festin pour faire la fête !",
                    de: "👉 Tippe auf das Picknick zum Feiern!"
                },
                svg: `
                <svg viewBox="0 0 600 380" class="w-full h-full select-none">
                    <rect width="600" height="260" fill="#FEF3C7"/>
                    <path d="M 0 250 Q 300 230, 600 250 L 600 380 L 0 380 Z" fill="#84CC16"/>
                    <!-- Red Checkered Picnic Blanket -->
                    <polygon points="150,290 450,290 490,360 110,360" fill="#F87171"/>
                    <!-- Cupcakes on Blanket -->
                    <g class="cursor-pointer" onclick="window.soundFX.playChomp(); window.triggerCelebration()">
                        <ellipse cx="300" cy="320" rx="45" ry="18" fill="#FFFFFF"/>
                        <text x="270" y="325" font-size="24">🧁</text>
                        <text x="300" y="325" font-size="24">🍯</text>
                    </g>
                    <!-- Bear on Left -->
                    <g class="cursor-pointer" onclick="window.soundFX.playBoing()">
                        <circle cx="160" cy="220" r="32" fill="#B45309"/>
                        <circle cx="160" cy="220" r="14" fill="#FDE68A"/>
                        <circle cx="152" cy="215" r="4" fill="#1E293B"/>
                        <circle cx="168" cy="215" r="4" fill="#1E293B"/>
                    </g>
                    <!-- Squirrel on Right -->
                    <g class="cursor-pointer" onclick="window.soundFX.playSparkle()">
                        <ellipse cx="430" cy="230" rx="20" ry="26" fill="#EA580C"/>
                        <circle cx="430" cy="195" r="18" fill="#EA580C"/>
                        <circle cx="436" cy="192" r="3" fill="#1E293B"/>
                        <!-- Big Bushy Tail -->
                        <path d="M 445 235 Q 480 210, 470 170 Q 450 160, 440 180" fill="#C2410C"/>
                        <text x="410" y="235" font-size="16">🌰</text>
                    </g>
                </svg>
                `
            }
        ],
        miniGame: {
            type: 'counting_apples',
            title: {
                en: "🍎 Count the Red Apples!",
                hi: "🍎 लाल सेब गिनकर टोकरी में रखो!",
                es: "🍎 ¡Cuenta las Manzanas Rojas!",
                fr: "🍎 Compte les Pommes Rouges !",
                de: "🍎 Zähle die roten Äpfel!"
            },
            instruction: {
                en: "Tap 3 delicious apples to drop them into Barnaby's picnic basket!",
                hi: "भालू की टोकरी में ३ रसीले सेब डालने के लिए उन पर छुएं!",
                es: "¡Toca 3 ricas manzanas para ponerlas en la cesta!",
                fr: "Touche 3 délicieuses pommes pour les mettre dans le panier !",
                de: "Tippe auf 3 Äpfel für den Picknickkorb!"
            },
            targetCount: 3
        }
    },

    // ==========================================
    // 4. NURSERY: The Little Train That Chugged to Candyland
    // ==========================================
    {
        id: 'choo_train',
        grade: 'nursery',
        gradeLabel: 'Nursery (Ages 3-4)',
        badgeClass: 'badge-nursery',
        themeColor: 'from-rose-400 to-pink-200',
        bgTheme: '#FDF2F8',
        icon: '🚂',
        title: {
            en: "The Little Choo-Choo Train",
            hi: "छोटी छुक-छुक रेलगाड़ी",
            es: "El Trencito Choo-Choo Mágico",
            fr: "Le Petit Train Tchou-Tchou",
            de: "Die kleine Tschu-Tschu Bahn"
        },
        description: {
            en: "All aboard! Hear the whistle blow Choo-Choo as our colorful train travels through Candyland!",
            hi: "सवारी तैयार हो जाओ! सीटी बजी छुक-छुक, रेलगाड़ी चली जादुई मीठे खिलौनों के देश!",
            es: "¡Todos a bordo! ¡Escucha el silbato Chu-Chu mientras el trencito viaja a la tierra de dulces!",
            fr: "En voiture ! Écoute le sifflet Tchou-Tchou traverser le pays enchanté !",
            de: "Alle einsteigen! Hör den Pfiff Tschu-Tschu, während die bunte Bahn durchs Schlaraffenland rollt!"
        },
        pages: [
            {
                pageNumber: 1,
                text: {
                    en: "'Choo-choo, chugga-chugga!' whistles Little Red Engine. He puffs happy rainbow smoke into the blue sky!",
                    hi: "'छुक-छुक, सीटी बजी!' नन्हे लाल इंजन ने आसमान में रंग-बिरंगा धुआँ उड़ाया!",
                    es: "'¡Chu-chu, chacachá!' pita la maquinita roja, lanzando nubecitas de humo de colores.",
                    fr: "'Tchou-tchou, tchou-tchou !' siffle la petite locomotive rouge en soufflant des nuages magiques.",
                    de: "'Tschu-tschu!' pfeift die kleine rote Lokomotive und pustet bunte Wölkchen in den Himmel!"
                },
                hint: {
                    en: "👉 Tap the Train Engine to hear the whistle!",
                    hi: "👉 रेलगाड़ी के इंजन को छूकर छुक-छुक सीटी सुनो!",
                    es: "👉 ¡Toca la locomotora para tocar el silbato!",
                    fr: "👉 Touche la locomotive pour siffler !",
                    de: "👉 Tippe auf die Lokomotive für den Pfiff!"
                },
                svg: `
                <svg viewBox="0 0 600 380" class="w-full h-full select-none">
                    <rect width="600" height="270" fill="#E0F2FE"/>
                    <!-- Train Track & Hills -->
                    <rect x="0" y="270" width="600" height="110" fill="#86EFAC"/>
                    <!-- Railway Track -->
                    <line x1="0" y1="285" x2="600" y2="285" stroke="#78350F" stroke-width="8"/>
                    <line x1="0" y1="300" x2="600" y2="300" stroke="#78350F" stroke-width="8"/>
                    <!-- Wooden Ties -->
                    <g stroke="#92400E" stroke-width="5">
                        <line x1="40" y1="278" x2="40" y2="308"/>
                        <line x1="100" y1="278" x2="100" y2="308"/>
                        <line x1="160" y1="278" x2="160" y2="308"/>
                        <line x1="220" y1="278" x2="220" y2="308"/>
                        <line x1="280" y1="278" x2="280" y2="308"/>
                        <line x1="340" y1="278" x2="340" y2="308"/>
                        <line x1="400" y1="278" x2="400" y2="308"/>
                        <line x1="460" y1="278" x2="460" y2="308"/>
                        <line x1="520" y1="278" x2="520" y2="308"/>
                        <line x1="580" y1="278" x2="580" y2="308"/>
                    </g>
                    <!-- Rainbow Smoke Puffs -->
                    <circle cx="210" cy="110" r="16" fill="#F472B6" opacity="0.8" class="floating-bubble"/>
                    <circle cx="170" cy="80" r="22" fill="#FBBF24" opacity="0.8" class="floating-bubble"/>
                    <circle cx="120" cy="50" r="28" fill="#60A5FA" opacity="0.8" class="floating-bubble"/>
                    <!-- Little Red Engine -->
                    <g class="interactive-char cursor-pointer" onclick="window.soundFX.playTrainWhistle(); window.triggerCharacterBounce(this)">
                        <!-- Cabin -->
                        <rect x="260" y="150" width="90" height="100" rx="10" fill="#EF4444"/>
                        <rect x="275" y="165" width="45" height="35" rx="5" fill="#BAE6FD"/>
                        <!-- Boiler -->
                        <rect x="180" y="180" width="85" height="70" rx="8" fill="#DC2626"/>
                        <!-- Smokestack -->
                        <polygon points="215,180 205,140 235,140 225,180" fill="#F59E0B"/>
                        <!-- Front Cowcatcher -->
                        <polygon points="180,240 150,250 180,250" fill="#FBBF24"/>
                        <!-- Wheels -->
                        <circle cx="205" cy="255" r="18" fill="#1E293B"/>
                        <circle cx="205" cy="255" r="7" fill="#FACC15"/>
                        <circle cx="280" cy="255" r="22" fill="#1E293B"/>
                        <circle cx="280" cy="255" r="8" fill="#FACC15"/>
                        <circle cx="330" cy="255" r="22" fill="#1E293B"/>
                        <circle cx="330" cy="255" r="8" fill="#FACC15"/>
                    </g>
                    <!-- Blue Passenger Wagon -->
                    <g class="cursor-pointer" onclick="window.soundFX.playBoing()">
                        <rect x="375" y="180" width="110" height="70" rx="8" fill="#3B82F6"/>
                        <rect x="390" y="195" width="30" height="25" rx="4" fill="#FEF08A"/>
                        <rect x="435" y="195" width="30" height="25" rx="4" fill="#FEF08A"/>
                        <circle cx="405" cy="255" r="16" fill="#1E293B"/>
                        <circle cx="460" cy="255" r="16" fill="#1E293B"/>
                        <!-- Coupling -->
                        <rect x="350" y="225" width="25" height="6" fill="#64748B"/>
                    </g>
                </svg>
                `
            },
            {
                pageNumber: 2,
                text: {
                    en: "Next stop: Lollipop Valley! Giant strawberry swirl lollipops grow by the gingerbread station!",
                    hi: "अगला स्टेशन: लॉलीपॉप घाटी! स्टेशन के किनारे मीठी-मीठी बड़ी लॉलीपॉप लगी हैं!",
                    es: "¡Siguiente parada: El Valle de Paletas! Grandes dulces de fresa brillan junto a la estación.",
                    fr: "Prochain arrêt : La Vallée des Sucettes ! De géantes friandises poussent partout !",
                    de: "Nächster Halt: Das Lutscher-Tal! Riesen-Erdbeer-Lutscher wachsen an der bunten Station!"
                },
                hint: {
                    en: "👉 Tap the Lollipops to hear tasty treats!",
                    hi: "👉 मीठी लॉलीपॉप को छुओ!",
                    es: "👉 ¡Toca las paletas de caramelo!",
                    fr: "👉 Touche les sucettes colorées !",
                    de: "👉 Tippe auf die süßen Lutscher!"
                },
                svg: `
                <svg viewBox="0 0 600 380" class="w-full h-full select-none">
                    <rect width="600" height="380" fill="#FDF2F8"/>
                    <path d="M 0 260 Q 200 240, 600 260 L 600 380 L 0 380 Z" fill="#F472B6"/>
                    <!-- Giant Swirl Lollipop 1 -->
                    <g class="interactive-char cursor-pointer" onclick="window.soundFX.playSparkle(); window.triggerCharacterBounce(this)">
                        <rect x="155" y="160" width="12" height="130" fill="#FFFFFF"/>
                        <circle cx="161" cy="140" r="45" fill="#EC4899"/>
                        <circle cx="161" cy="140" r="32" fill="#F472B6"/>
                        <circle cx="161" cy="140" r="18" fill="#FDF2F8"/>
                    </g>
                    <!-- Giant Swirl Lollipop 2 -->
                    <g class="interactive-char cursor-pointer" onclick="window.soundFX.playSparkle(); window.triggerCharacterBounce(this)">
                        <rect x="420" y="140" width="12" height="150" fill="#FFFFFF"/>
                        <circle cx="426" cy="120" r="50" fill="#F59E0B"/>
                        <circle cx="426" cy="120" r="35" fill="#FDE68A"/>
                        <circle cx="426" cy="120" r="18" fill="#FEF3C7"/>
                    </g>
                    <!-- Dancing Teddy Passenger -->
                    <g class="cursor-pointer" onclick="window.soundFX.playBoing()">
                        <circle cx="290" cy="230" r="26" fill="#B45309"/>
                        <circle cx="290" cy="230" r="10" fill="#FDE68A"/>
                        <circle cx="284" cy="225" r="3" fill="#1E293B"/>
                        <circle cx="296" cy="225" r="3" fill="#1E293B"/>
                        <text x="270" y="200" font-size="28">🎈</text>
                    </g>
                </svg>
                `
            }
        ],
        miniGame: {
            type: 'train_cars',
            title: {
                en: "🚂 Connect the Train Cars!",
                hi: "🚂 रेलगाड़ी के डिब्बे जोड़ो!",
                es: "🚂 ¡Conecta los Vagones!",
                fr: "🚂 Accroche les Wagons !",
                de: "🚂 Hänge die Waggons an!"
            },
            instruction: {
                en: "Tap each colorful car to connect the magical train!",
                hi: "रेलगाड़ी को पूरा करने के लिए रंगीन डिब्बों पर छुएं!",
                es: "¡Toca cada vagón para armar el tren mágico!",
                fr: "Touche chaque wagon pour assembler le train !",
                de: "Tippe auf jeden Waggon, um den Zug zu bauen!"
            },
            targetCount: 3
        }
    },

    // ==========================================
    // 5. UKG: Pip the Brave Space Bunny
    // ==========================================
    {
        id: 'pip_space_bunny',
        grade: 'ukg',
        gradeLabel: 'UKG (Ages 4-6)',
        badgeClass: 'badge-ukg',
        themeColor: 'from-violet-500 to-fuchsia-300',
        bgTheme: '#EDE9FE',
        icon: '🚀',
        title: {
            en: "Pip the Brave Space Bunny",
            hi: "बहादुर अंतरिक्ष खरगोश पिप",
            es: "Pip el Conejito Espacial",
            fr: "Pip le Lapin Cosmonaute",
            de: "Pip das tapfere Weltraum-Häschen"
        },
        description: {
            en: "Blast off to the stars! Join Pip as he flies in his rocket, counts constellations, and makes a friend on the Moon!",
            hi: "तारों की सैर पर चलें! नन्हे पिप के साथ रॉकेट में बैठकर चाँद पर जाएँ और नया दोस्त बनाएँ!",
            es: "¡Despega hacia las estrellas! Acompaña a Pip en su cohete y haz un nuevo amigo en la Luna.",
            fr: "Décollage immédiat ! Rejoins Pip dans sa fusée pour explorer la Lune et rencontrer des amis !",
            de: "Abflug zu den Sternen! Fliege mit Pip in seiner Rakete zum Mond und finde neue Freunde!"
        },
        pages: [
            {
                pageNumber: 1,
                text: {
                    en: "3... 2... 1... BLAST OFF! Pip puts on his shiny helmet and launches his starlight rocket into outer space!",
                    hi: "३... २... १... रॉकेट उड़ा! पिप ने अपना चमकीला अंतरिक्ष हेलमेट पहना और तारों की ओर उड़ान भरी!",
                    es: "¡3... 2... 1... ¡DESPEGUE! Pip se pone su casco brillante y despega hacia el espacio infinito.",
                    fr: "3... 2... 1... DÉCOLLAGE ! Pip met son casque brillant et s'envole vers les étoiles !",
                    de: "3... 2... 1... ABHEBEN! Pip setzt seinen Helm auf und saust mit der Sternenrakete ins All!"
                },
                hint: {
                    en: "👉 Tap the Rocket to hear it blast off!",
                    hi: "👉 रॉकेट को छुओ और ज़ूम्म आवाज़ सुनो!",
                    es: "👉 ¡Toca el cohete para despegar!",
                    fr: "👉 Touche la fusée pour la faire décoller !",
                    de: "👉 Tippe auf die Rakete für den Start!"
                },
                svg: `
                <svg viewBox="0 0 600 380" class="w-full h-full select-none">
                    <!-- Deep Space Background -->
                    <rect width="600" height="380" fill="#0F172A"/>
                    <!-- Twinkling Stars -->
                    <circle cx="80" cy="50" r="3" fill="#FDE047"/>
                    <circle cx="180" cy="120" r="2" fill="#FFFFFF"/>
                    <circle cx="450" cy="80" r="3" fill="#FDE047"/>
                    <circle cx="520" cy="220" r="2.5" fill="#FFFFFF"/>
                    <circle cx="100" cy="300" r="3" fill="#A855F7"/>
                    <!-- Smiling Moon -->
                    <circle cx="480" cy="110" r="45" fill="#FEF08A" class="cursor-pointer" onclick="window.soundFX.playSparkle()"/>
                    <circle cx="465" cy="105" r="5" fill="#1E293B"/>
                    <circle cx="495" cy="105" r="5" fill="#1E293B"/>
                    <path d="M 470 120 Q 480 130, 490 120" stroke="#CA8A04" stroke-width="3" fill="none"/>
                    <!-- Starlight Rocket -->
                    <g class="interactive-char cursor-pointer" onclick="window.soundFX.playRocket(); window.triggerCharacterBounce(this)">
                        <!-- Flame -->
                        <polygon points="275,270 300,340 325,270" fill="#EF4444"/>
                        <polygon points="285,270 300,320 315,270" fill="#FACC15"/>
                        <!-- Rocket Wings -->
                        <polygon points="250,230 220,270 260,265" fill="#8B5CF6"/>
                        <polygon points="350,230 380,270 340,265" fill="#8B5CF6"/>
                        <!-- Rocket Body -->
                        <path d="M 260 265 L 260 180 Q 300 90, 340 180 L 340 265 Z" fill="#FFFFFF"/>
                        <!-- Nose cone -->
                        <path d="M 260 180 Q 300 90, 340 180 Z" fill="#EF4444"/>
                        <!-- Porthole Window with Bunny Inside -->
                        <circle cx="300" cy="195" r="26" fill="#38BDF8"/>
                        <circle cx="300" cy="195" r="22" fill="#0284C7"/>
                        <!-- Pip inside -->
                        <circle cx="300" cy="195" r="14" fill="#FBCFE8"/>
                        <ellipse cx="295" cy="180" rx="3" ry="8" fill="#F472B6"/>
                        <ellipse cx="305" cy="180" rx="3" ry="8" fill="#F472B6"/>
                    </g>
                </svg>
                `
            },
            {
                pageNumber: 2,
                text: {
                    en: "On the moon, Pip meets Cosmo, a friendly green alien holding a glowing starry crystal. 'Beep boop! Let's be best friends!'",
                    hi: "चाँद पर पिप की मुलाक़ात कॉस्मो नाम के प्यारे हरे एलियन से हुई। 'बीप-बूप! क्या तुम मेरे पक्के दोस्त बनोगे?'",
                    es: "En la luna, Pip conoce a Cosmo, un simpático marcianito verde. '¡Bip bup! ¡Seamos mejores amigos!'",
                    fr: "Sur la Lune, Pip rencontre Cosmo, un gentil petit extraterrestre vert. 'Bip bip ! Soyons amis !'",
                    de: "Auf dem Mond trifft Pip Cosmo, ein freundliches grünes Alien. 'Beep boop! Wollen wir beste Freunde sein?'"
                },
                hint: {
                    en: "👉 Tap Cosmo the Alien to hear his cosmic beep!",
                    hi: "👉 नन्हे एलियन कॉस्मो को छूकर बीप-बीप सुनो!",
                    es: "👉 ¡Toca a Cosmo el marcianito!",
                    fr: "👉 Touche Cosmo pour entendre son bip !",
                    de: "👉 Tippe auf Alien Cosmo für den Beep!"
                },
                svg: `
                <svg viewBox="0 0 600 380" class="w-full h-full select-none">
                    <rect width="600" height="380" fill="#0F172A"/>
                    <!-- Moon Surface -->
                    <path d="M 0 250 Q 300 210, 600 250 L 600 380 L 0 380 Z" fill="#CBD5E1"/>
                    <!-- Moon Craters -->
                    <ellipse cx="120" cy="290" rx="35" ry="14" fill="#94A3B8"/>
                    <ellipse cx="480" cy="300" rx="45" ry="18" fill="#94A3B8"/>
                    <!-- Earth in background -->
                    <circle cx="100" cy="80" r="32" fill="#3B82F6"/>
                    <path d="M 85 75 Q 100 65, 115 80" stroke="#22C55E" stroke-width="8" fill="none"/>
                    <!-- Bunny Pip on Moon -->
                    <g class="interactive-char cursor-pointer" onclick="window.soundFX.playBoing(); window.triggerCharacterBounce(this)">
                        <!-- Suit -->
                        <ellipse cx="230" cy="270" rx="28" ry="32" fill="#FFFFFF"/>
                        <!-- Helmet -->
                        <circle cx="230" cy="200" r="34" fill="#E2E8F0" opacity="0.6"/>
                        <!-- Pip Head -->
                        <circle cx="230" cy="200" r="22" fill="#F472B6"/>
                        <ellipse cx="222" cy="165" rx="5" ry="16" fill="#F472B6"/>
                        <ellipse cx="238" cy="165" rx="5" ry="16" fill="#F472B6"/>
                        <circle cx="225" cy="198" r="3" fill="#1E293B"/>
                        <circle cx="235" cy="198" r="3" fill="#1E293B"/>
                    </g>
                    <!-- Friendly Cosmo Alien -->
                    <g class="interactive-char cursor-pointer" onclick="window.soundFX.playSparkle(); window.triggerCharacterBounce(this)">
                        <!-- Antenna -->
                        <line x1="380" y1="165" x2="380" y2="140" stroke="#4ADE80" stroke-width="4"/>
                        <circle cx="380" cy="135" r="7" fill="#FACC15"/>
                        <!-- Alien Body -->
                        <ellipse cx="380" cy="265" rx="26" ry="30" fill="#22C55E"/>
                        <circle cx="380" cy="195" r="28" fill="#4ADE80"/>
                        <!-- Big Alien Eye -->
                        <circle cx="380" cy="190" r="14" fill="#FFFFFF"/>
                        <circle cx="380" cy="190" r="7" fill="#8B5CF6"/>
                        <circle cx="382" cy="188" r="3" fill="#FFFFFF"/>
                        <!-- Big Smile -->
                        <path d="M 370 210 Q 380 220, 390 210" stroke="#15803D" stroke-width="3" fill="none" stroke-linecap="round"/>
                        <!-- Glowing Star Crystal -->
                        <text x="330" y="260" font-size="28">💎</text>
                    </g>
                </svg>
                `
            }
        ],
        miniGame: {
            type: 'star_words',
            title: {
                en: "⭐ Cosmic Star Words!",
                hi: "⭐ जादुई अंतरिक्ष शब्द!",
                es: "⭐ ¡Palabras Estelares!",
                fr: "⭐ Mots Étoilés !",
                de: "⭐ Sternenwörter!"
            },
            instruction: {
                en: "Tap the 3 glowing space stars to discover new words: ROCKET, MOON, STAR!",
                hi: "नये शब्द सीखने के लिए ३ चमकते तारों पर छुएं: रॉकेट, चाँद, तारा!",
                es: "¡Toca 3 estrellas para descubrir palabras espaciales!",
                fr: "Touche les 3 étoiles pour révéler les mots de l'espace !",
                de: "Tippe auf 3 Sterne für Weltraum-Wörter!"
            },
            targetCount: 3
        }
    },

    // ==========================================
    // 6. UKG: The Magical Garden of Kindness
    // ==========================================
    {
        id: 'kindness_garden',
        grade: 'ukg',
        gradeLabel: 'UKG (Ages 4-6)',
        badgeClass: 'badge-ukg',
        themeColor: 'from-emerald-500 to-teal-300',
        bgTheme: '#ECFDF5',
        icon: '🌸',
        title: {
            en: "The Magical Garden of Kindness",
            hi: "दयालुता का जादुई बगीचा",
            es: "El Jardín Mágico de la Amabilidad",
            fr: "Le Jardin Magique de la Gentillesse",
            de: "Der Zaubergarten der Freundlichkeit"
        },
        description: {
            en: "Plant the seed of kind words like 'Please' and 'Thank You' to watch the glowing Rainbow Tree bloom!",
            hi: "'कृपया' और 'धन्यवाद' जैसे मीठे बोल बोलें और जादुई सतरंगी पेड़ को खिलते देखें!",
            es: "¡Siembra palabras amables como 'Por favor' y 'Gracias' para ver florecer el Gran Árbol!",
            fr: "Plante les graines des mots gentils comme 'S'il vous plaît' et 'Merci' pour faire fleurir l'arbre !",
            de: "Pflanze liebe Worte wie 'Bitte' und 'Danke' und sieh den bunten Zauberbaum blühen!"
        },
        pages: [
            {
                pageNumber: 1,
                text: {
                    en: "Maya plants a tiny magic seed in the warm soil. 'Speak kind words to make it grow!' whispers the butterfly.",
                    hi: "माया ने मिट्टी में एक नन्हा जादुई बीज बोया। तितली ने फुसफुसाया, 'मीठे और प्यार भरे बोल बोलो, तभी यह बड़ा होगा!'",
                    es: "Maya planta una semillita mágica en la tierra fértil. '¡Dile palabras amables para que crezca!', dice la mariposa.",
                    fr: "Maya plante une petite graine magique dans la terre. 'Dis des mots gentils pour la faire grandir !'",
                    de: "Maya pflanzt ein Zauberkörnchen in die Erde. 'Sprich freundliche Worte, damit es wächst!', flüstert der Schmetterling."
                },
                hint: {
                    en: "👉 Tap the tiny seed to give it sunshine!",
                    hi: "👉 नन्हे बीज को छूकर धूप दें!",
                    es: "👉 ¡Toca la semillita para darle calor!",
                    fr: "👉 Touche la petite graine pour l'arroser !",
                    de: "👉 Tippe auf den Samen für Sonnenschein!"
                },
                svg: `
                <svg viewBox="0 0 600 380" class="w-full h-full select-none">
                    <rect width="600" height="250" fill="#E0F2FE"/>
                    <rect x="0" y="250" width="600" height="130" fill="#78350F"/>
                    <!-- Soft Grass border -->
                    <path d="M 0 250 Q 150 235, 300 250 T 600 250 L 600 260 L 0 260 Z" fill="#22C55E"/>
                    <!-- Little Maya -->
                    <g class="interactive-char cursor-pointer" onclick="window.soundFX.playBoing(); window.triggerCharacterBounce(this)">
                        <circle cx="180" cy="180" r="28" fill="#FBBF24"/>
                        <circle cx="172" cy="175" r="4" fill="#1E293B"/>
                        <circle cx="188" cy="175" r="4" fill="#1E293B"/>
                        <!-- Smile -->
                        <path d="M 175 190 Q 180 198, 185 190" stroke="#B45309" stroke-width="2.5" fill="none"/>
                        <!-- Dress -->
                        <polygon points="180,208 150,270 210,270" fill="#EC4899"/>
                    </g>
                    <!-- Tiny Sprout / Seed in Earth -->
                    <g class="interactive-char cursor-pointer" onclick="window.soundFX.playSparkle(); window.triggerCharacterBounce(this)">
                        <circle cx="360" cy="275" r="16" fill="#FDE68A"/>
                        <path d="M 360 270 Q 355 240, 345 230 Q 365 240, 360 270" fill="#4ADE80"/>
                        <path d="M 360 270 Q 365 235, 375 225 Q 365 245, 360 270" fill="#22C55E"/>
                    </g>
                    <!-- Fluttering Butterfly -->
                    <g class="interactive-char cursor-pointer" onclick="window.soundFX.playSparkle(); window.triggerCharacterBounce(this)">
                        <ellipse cx="440" cy="130" rx="14" ry="8" fill="#F472B6" transform="rotate(-30 440 130)"/>
                        <ellipse cx="460" cy="130" rx="14" ry="8" fill="#F472B6" transform="rotate(30 460 130)"/>
                        <line x1="450" y1="120" x2="450" y2="145" stroke="#1E293B" stroke-width="3"/>
                    </g>
                </svg>
                `
            },
            {
                pageNumber: 2,
                text: {
                    en: "Maya smiles and says 'Thank you' and 'I love you!' Instantly, a magnificent Rainbow Flower blooms with sweet perfume!",
                    hi: "माया ने मुस्कुराकर कहा 'धन्यवाद' और 'प्यार'! तभी सतरंगी पंखुड़ियों वाला जादुई फूल खिल उठा!",
                    es: "Maya sonríe y dice 'Gracias' y '¡Te quiero!' De repente, ¡brota una flor arcoíris maravillosa!",
                    fr: "Maya sourit et dit 'Merci' et 'Je t'aime !' Aussitôt, une fleur géante aux couleurs de l'arc-en-ciel s'épanouit !",
                    de: "Maya lächelt und sagt 'Danke' und 'Ich hab dich lieb!' Sofort erblüht eine wunderschöne Regenbogenblume!"
                },
                hint: {
                    en: "👉 Tap the Rainbow Flower to hear the celebration!",
                    hi: "👉 जादुई फूल को छूकर खुशियों की धुन सुनो!",
                    es: "👉 ¡Toca la flor arcoíris!",
                    fr: "👉 Touche la fleur magique !",
                    de: "👉 Tippe auf die Regenbogenblume!"
                },
                svg: `
                <svg viewBox="0 0 600 380" class="w-full h-full select-none">
                    <rect width="600" height="260" fill="#E0F2FE"/>
                    <path d="M 0 260 Q 300 240, 600 260 L 600 380 L 0 380 Z" fill="#4ADE80"/>
                    <!-- Big Glowing Rainbow Flower -->
                    <g class="interactive-char cursor-pointer" onclick="window.soundFX.playFanfare(); window.triggerCelebration()">
                        <!-- Stem -->
                        <path d="M 300 330 Q 295 240, 300 180" stroke="#15803D" stroke-width="12" fill="none" stroke-linecap="round"/>
                        <!-- Leaves -->
                        <path d="M 298 250 Q 240 230, 250 260 Q 275 265, 298 250" fill="#22C55E"/>
                        <path d="M 302 230 Q 360 210, 350 240 Q 325 245, 302 230" fill="#22C55E"/>
                        <!-- Petals -->
                        <circle cx="300" cy="120" r="30" fill="#EF4444"/>
                        <circle cx="355" cy="140" r="30" fill="#F97316"/>
                        <circle cx="345" cy="195" r="30" fill="#FACC15"/>
                        <circle cx="300" cy="220" r="30" fill="#22C55E"/>
                        <circle cx="255" cy="195" r="30" fill="#3B82F6"/>
                        <circle cx="245" cy="140" r="30" fill="#A855F7"/>
                        <!-- Flower Center Face -->
                        <circle cx="300" cy="170" r="32" fill="#FEF08A"/>
                        <circle cx="290" cy="165" r="5" fill="#1E293B"/>
                        <circle cx="310" cy="165" r="5" fill="#1E293B"/>
                        <path d="M 292 178 Q 300 188, 308 178" stroke="#CA8A04" stroke-width="3" fill="none" stroke-linecap="round"/>
                    </g>
                    <!-- Sparkles -->
                    <text x="180" y="90" font-size="28">✨</text>
                    <text x="400" y="90" font-size="28">🌟</text>
                </svg>
                `
            }
        ],
        miniGame: {
            type: 'kindness_words',
            title: {
                en: "🌸 Pick the Kind Words!",
                hi: "🌸 मीठे और प्यारे बोल चुनें!",
                es: "🌸 ¡Elige las Palabras Mágicas!",
                fr: "🌸 Choisis les Mots Magiques !",
                de: "🌸 Wähle die Zauberworte!"
            },
            instruction: {
                en: "Tap 3 kind hearts: 'PLEASE', 'THANK YOU', 'SMILE'!",
                hi: "३ प्यारे दिलों पर छुएं: 'कृपया', 'धन्यवाद', 'मुस्कान'!",
                es: "¡Toca 3 corazones amables para alegrar el jardín!",
                fr: "Touche les 3 cœurs magiques !",
                de: "Tippe auf 3 freundliche Herzen!"
            },
            targetCount: 3
        }
    }
];
