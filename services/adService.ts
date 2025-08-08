// A service to handle rewarded video ads via Adivery.

// This is a placeholder for the real Adivery SDK.
// The real SDK should be loaded in index.html.
declare const adivery: {
    requestRewardedAd: (placementId: string, onAdLoaded: () => void, onAdLoadFailed: (reason: string) => void) => void;
    show: (placementId: string) => void;
    setRewardedAdListener: (callbacks: {
        onAdRewarded: (placementId: string) => void;
        onAdClosed: (placementId: string) => void;
        onAdShowFailed: (placementId: string) => void;
    }) => void;
} | undefined;


// TODO: Replace with your actual Adivery Rewarded Video Placement ID
const REWARDED_VIDEO_PLACEMENT_ID = 'c490ec46-c2c4-4ed4-8df1-c19af438c88f';

let isAdRewarded = false;
let adClosedCallback: ((rewarded: boolean) => void) | null = null;

const setupListeners = () => {
    // Adivery SDK may not be loaded immediately
    const trySetup = () => {
        if (typeof adivery !== 'undefined') {
            adivery.setRewardedAdListener({
                onAdRewarded: (placementId) => {
                     if (placementId === REWARDED_VIDEO_PLACEMENT_ID) {
                        console.log("Ad rewarded!");
                        isAdRewarded = true;
                     }
                },
                onAdClosed: (placementId) => {
                    if (placementId === REWARDED_VIDEO_PLACEMENT_ID) {
                        console.log("Ad closed. Rewarded:", isAdRewarded);
                        if (adClosedCallback) {
                            adClosedCallback(isAdRewarded);
                        }
                        // Reset for next ad
                        isAdRewarded = false;
                        adClosedCallback = null;
                    }
                },
                onAdShowFailed: (placementId) => {
                    if (placementId === REWARDED_VIDEO_PLACEMENT_ID) {
                        console.error("Failed to show ad.");
                         if (adClosedCallback) {
                            adClosedCallback(false); // Ad failed to show, so no reward
                        }
                        isAdRewarded = false;
                        adClosedCallback = null;
                    }
                }
            });
        } else {
             // Retry if the SDK is not yet available
            setTimeout(trySetup, 500);
        }
    }
    trySetup();
};

// Set up listeners once when the module is loaded.
setupListeners();


/**
 * Shows a rewarded video ad.
 * @returns A promise that resolves to `true` if the user was rewarded, `false` otherwise.
 */
export const showRewardedVideo = (): Promise<boolean> => {
    return new Promise((resolve, reject) => {
        if (typeof adivery === 'undefined') {
            console.error("Adivery SDK not found. Simulating successful ad reward for development.");
            resolve(true); // Dev fallback
            return;
        }

        adClosedCallback = (rewarded) => {
            resolve(rewarded);
        };

        const onAdLoaded = () => {
            console.log("Adivery rewarded ad loaded.");
            adivery.show(REWARDED_VIDEO_PLACEMENT_ID);
        };
        
        const onAdLoadFailed = (reason: string) => {
            console.error(`Adivery failed to load rewarded ad: ${reason}`);
            reject(new Error(`Failed to load ad: ${reason}`));
        };

        console.log("Requesting Adivery rewarded ad...");
        adivery.requestRewardedAd(REWARDED_VIDEO_PLACEMENT_ID, onAdLoaded, onAdLoadFailed);
    });
};
