// A service to play sound effects for user actions.

// Pre-create audio elements to reduce delay on first play.
// NOTE: You must provide your own sound files in the `public/sounds/` directory.
const sounds: { [key: string]: HTMLAudioElement | null } = {
  correct: typeof Audio !== 'undefined' ? new Audio('/sounds/correct.mp3') : null,
  incorrect: typeof Audio !== 'undefined' ? new Audio('/sounds/incorrect.mp3') : null,
  heartLost: typeof Audio !== 'undefined' ? new Audio('/sounds/heart-lost.mp3') : null,
  lessonComplete: typeof Audio !== 'undefined' ? new Audio('/sounds/lesson-complete.mp3') : null,
  click: typeof Audio !== 'undefined' ? new Audio('/sounds/click.mp3') : null,
};

// Set volumes for different sounds
if (sounds.correct) sounds.correct.volume = 0.5;
if (sounds.incorrect) sounds.incorrect.volume = 0.4;
if (sounds.heartLost) sounds.heartLost.volume = 0.6;
if (sounds.lessonComplete) sounds.lessonComplete.volume = 0.7;
if (sounds.click) sounds.click.volume = 0.3;


const playSound = (sound: HTMLAudioElement | null) => {
    if (sound) {
        // Rewind to the start in case it's already playing
        sound.currentTime = 0;
        sound.play().catch(error => {
            // Autoplay was prevented. This is common and expected in browsers.
            // We don't need to log this as an error unless we're debugging.
            // console.error("Sound play failed:", error);
        });
    }
}

export const playCorrectSound = (isSoundEnabled: boolean) => {
  if (isSoundEnabled) playSound(sounds.correct);
};

export const playIncorrectSound = (isSoundEnabled: boolean) => {
  if (isSoundEnabled) playSound(sounds.incorrect);
};

export const playHeartLostSound = (isSoundEnabled: boolean) => {
  if (isSoundEnabled) playSound(sounds.heartLost);
};

export const playLessonCompleteSound = (isSoundEnabled: boolean) => {
    if (isSoundEnabled) playSound(sounds.lessonComplete);
};

export const playButtonClickSound = (isSoundEnabled: boolean) => {
    if (isSoundEnabled) playSound(sounds.click);
};