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


// Using Adivery's official test placement ID for rewarded videos.
// For a production app, replace this with your actual ID from the Adivery dashboard.
const REWARDED_VIDEO_PLACEMENT_ID = 'c490ec46-c2c4-4ed4-8df1-c19af438c88f
';

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
        // Adivery SDK is loaded via a script tag in index.html.
        // If it's not available, it means the script failed to load or is blocked.
        if (typeof adivery === 'undefined') {
            console.error("Adivery SDK not found. The script might be blocked or failed to load.");
            // Reject the promise so the calling component can handle the error.
            reject(new Error("Ad service is not available. Check your connection or ad blocker."));
            return;
        }

        adClosedCallback = (rewarded) => {
            resolve(rewarded);
        };

        const onAdLoaded = () => {
            console.log("Adivery rewarded ad loaded.");
             if (typeof adivery !== 'undefined') {
                adivery.show(REWARDED_VIDEO_PLACEMENT_ID);
             } else {
                reject(new Error("Ad service became unavailable before showing the ad."));
             }
        };
        
        const onAdLoadFailed = (reason: string) => {
            console.error(`Adivery failed to load rewarded ad: ${reason}`);
            reject(new Error(`Failed to load ad: ${reason}`));
        };

        console.log("Requesting Adivery rewarded ad...");
        adivery.requestRewardedAd(REWARDED_VIDEO_PLACEMENT_ID, onAdLoaded, onAdLoadFailed);
    });
};