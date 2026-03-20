// Konfiguration der Level 
const GAME_LEVELS = [
    // --- PHASE 1: DIE GRUNDREIHE ---
    { level: 1, title: "Zeigefinger", type: "letters", items: ["f", "j"], speed: 1.2, spawnRate: 2000, pointsToNext: 150 },
    { level: 2, title: "Mittelfinger", type: "letters", items: ["d", "k", "f", "j"], speed: 1.3, spawnRate: 1900, pointsToNext: 450 },
    { level: 3, title: "Ringfinger", type: "letters", items: ["s", "l", "d", "k", "f", "j"], speed: 1.4, spawnRate: 1800, pointsToNext: 600 },
    { level: 4, title: "Kleine Finger", type: "letters", items: ["a", "ö", "ä", "s", "l", "d", "k", "f", "j"], speed: 1.5, spawnRate: 1700, pointsToNext: 900 },
    { level: 5, title: "Die Mitte", type: "letters", items: ["g", "h", "a", "s", "d", "f", "j", "k", "l", "ö", "ä"], speed: 1.5, spawnRate: 1600, pointsToNext: 1200 },

    // --- PHASE 1.5: DIE LEERTASTE (DAUMEN) ---
    // (Hier bleibt "type: words", damit "f j" als EIN Block zusammen im Neon-Modus fällt!)
    { level: 6, title: "Der Daumen (Leertaste)", type: "words", items: ["f j", "d k", "s l", "a ö", "g h"], speed: 1.3, spawnRate: 2200, pointsToNext: 1550 },

    // --- PHASE 2: OBERE UND UNTERE REIHE ---
    { level: 7, title: "Oben: Zeigefinger", type: "letters", items: ["r", "t", "z", "u"], speed: 1.4, spawnRate: 1800, pointsToNext: 2100 },
    { level: 8, title: "Obere Reihe Mix", type: "letters", items: ["q", "w", "e", "r", "t", "z", "u", "i", "o", "p", "ü"], speed: 1.5, spawnRate: 1700, pointsToNext: 2450 },
    { level: 9, title: "Unten: Zeigefinger", type: "letters", items: ["v", "b", "n", "m"], speed: 1.4, spawnRate: 1800, pointsToNext: 1000 },
    { level: 10, title: "Untere Reihe Mix", type: "letters", items: ["y", "x", "c", "v", "b", "n", "m", ",", "."], speed: 1.5, spawnRate: 1700, pointsToNext: 3150 },

    // --- PHASE 3: SHIFT-TASTE (GROSSBUCHSTABEN) ---
    { level: 11, title: "Shift: Grundreihe", type: "letters", items: ["A", "S", "D", "F", "G", "H", "J", "K", "L", "Ö", "Ä"], speed: 1.5, spawnRate: 1800, pointsToNext: 4300 },
    { level: 12, title: "Alphabet Chaos", type: "letters", items: ["Q", "W", "E", "R", "T", "Z", "U", "I", "O", "P", "A", "S", "D", "F", "G", "H", "J", "K", "L", "Y", "X", "C", "V", "B", "N", "M"], speed: 1.6, spawnRate: 1600, pointsToNext: 1500 },

    // --- PHASE 4: WÖRTER & LEERZEICHEN MIX ---
    { level: 13, title: "Kurze Sätze", type: "words", items: ["er ist", "und du", "der Bär", "die Maus", "das Haus", "mit dir"], speed: 1.2, spawnRate: 2500, pointsToNext: 4700 },
    { level: 14, title: "Gemischte Wörter", type: "words", items: ["wir laufen", "die Sonne", "sehr schnell", "gut lernen", "der Computer"], speed: 1.3, spawnRate: 2400, pointsToNext: 6000 },
    { level: 15, title: "Schweizer Boss", type: "words", items: ["Kanton Schwyz", "es Chuchichäschtli", "feins Müesli", "schnells Velo", "es Gipfeli"], speed: 1.4, spawnRate: 2200, pointsToNext: 7500 },

    // --- PHASE 5: FLIESSTEXT (IN REIHENFOLGE) ---
    { 
        level: 16, title: "Die Geschichte", 
        type: "story", // Durch "story" weiss das Programm, dass es den Text zerschneiden soll
        ordered: true,
        items: [
            // Du kannst nun ganze Sätze am Stück einfügen!
            "Es war einmal ein mutiges Kind, das sehr schnell auf der Tastatur schreiben lernte. Jeder Buchstabe war ein kleiner Sieg auf dem Weg zum Profi!"
        ], 
        speed: 1.4, spawnRate: 2200, pointsToNext: 8750 
    },

    // --- ENDLOS MODUS ---
    { 
        level: "∞", title: "Endlos", type: "words", ordered: false,
        items: [
            "der Baum", "die Maus", "das Haus", "Kanton Schwyz", "es Chuchichäschtli", "feins Müesli", 
            "schnells Velo", "die Sonne", "wir laufen", "sehr schnell", "gut lernen", "der Computer", 
            "es Gipfeli", "die Tastatur", "Zauberer", "Neon Licht", "A", "S", "D", "F", 
            "q", "w", "e", "r", "t", "z", "u", "i", "o", "p"
        ], 
        speed: 1.5, spawnRate: 1800, pointsToNext: Infinity
    }
];