// ============================================
// 💝 CUSTOMIZE YOUR VALENTINE'S WEBSITE HERE 💝
// ============================================

const CONFIG = {
    // Your Valentine's name that will appear in the title
    valentineName: "Jessica Benedicta",

    // The title that appears in the browser tab
    // You can use emojis! 💝 💖 💗 💓 💞 💕
    pageTitle: "Small Valentine Questions 💝",

    // Floating emojis that appear in the background
    // Find more emojis at: https://emojipedia.org
    floatingEmojis: {
        hearts: ['💙', '💖', '🤍'],          // Heart emojis
        bears: ['🌊', '🐚', '🦈', '✨']      // Cute bear emojis
    },

    // Questions and answers
    // Customize each question and its possible responses
    questions: {
        first: {
            text: "Do you like spending time together with me?",       // First interaction
            yesBtn: "Yes",                                             // Text for "Yes" button
            noBtn: "No",                                               // Text for "No" button
            secretAnswer: "Definitely! 💙"                             // Secret hover message
        },
        second: {
            text: "How much do you like it?",                          // For the love meter
            startText: "Let's say...",                                   // Text before the percentage
            nextBtn: "Next ->"                                         // Text for the next button
        },
        third: {
            text: "Would you like to be my Valentine? 🌹",            // The big question!
            yesBtn: "Yes!",                                             // Text for "Yes" button
            noBtn: "No"                                                 // Text for "No" button
        }
    },

    // Love meter messages
    // They show up depending on how far they slide the meter
    loveMessages: {
        extreme: "Okay wow, that escalated 😄",  // Shows when they go past 5000%
        high: "That’s dangerously high 👀",              // Shows when they go past 1000%
        normal: "I’ll take it 😊"                           // Shows when they go past 100%
    },

    // Messages that appear after they say "Yes!"
    celebration: {
        title: "That makes me really happy 💝",
        message: "Let's save the proper version when we're together in person.",
        emojis: "💖✨🤍"  // These will bounce around
    },

    // Color scheme for the website
    // Use https://colorhunt.co or https://coolors.co to find beautiful color combinations
    colors: {
        backgroundStart: "#96F5F5",      // Gradient start (try pastel colors for a soft look)
        backgroundEnd: "#E8FFFF",        // Gradient end (should complement backgroundStart)
        buttonBackground: "#6EDDDD",     // Button color (should stand out against the background)
        buttonHover: "#58CACA",          // Button hover color (slightly lighter than buttonBackground)
        textColor: "#2F6F73"             // Text color (make sure it's readable!)
    },

    // Animation settings
    // Adjust these if you want faster/slower animations
    animations: {
        floatDuration: "15s",           // How long it takes hearts to float up (10-20s recommended)
        floatDistance: "50px",          // How far hearts move sideways (30-70px recommended)
        bounceSpeed: "0.5s",            // Speed of bouncing animations (0.3-0.7s recommended)
        heartExplosionSize: 1.5         // Size of heart explosion effect (1.2-2.0 recommended)
    },

    // Background Music (Optional)
    // Add your own music URL after getting proper licenses
    music: {
        enabled: true,                     // Music feature is enabled
        autoplay: true,                    // Try to autoplay (note: some browsers may block this)
        musicUrl: "https://res.cloudinary.com/dcgrd3xei/video/upload/v1770781406/Westlife_-_How_Does_It_Feel_Official_Audio_-_westlifeVEVO_ynuuaj.mp3", // Music streaming URL
        startText: "🎵 Play Music",        // Button text to start music
        stopText: "🔇 Stop Music",         // Button text to stop music
        volume: 0.5                        // Volume level (0.0 to 1.0)
    }
};

// Don't modify anything below this line unless you know what you're doing
window.VALENTINE_CONFIG = CONFIG; 
