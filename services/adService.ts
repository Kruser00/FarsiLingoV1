// A service to handle rewarded video ads via Adivery.

// This is a placeholder for the real Adivery SDK.
// The real SDK should be loaded in index.html.
declare const adivery: {
    configure: (config: { app_id: string }) => void;
    requestRewardedAd: (placementId: string, onAdLoaded: () => void, onAdLoadFailed: (reason: string) => void) => void;
    show: (placementId: string) => void;
    setRewardedAdListener: (callbacks: {
        onAdRewarded: (placementId: string) => void;
        onAdClosed: (placementId: string) => void;
        onAdShowFailed: (placementId: string) => void;
    }) => void;
} | undefined;


// Using Adivery's official test IDs.
// For a production app, replace these with your actual IDs from the Adivery dashboard.
const ADIVERY_APP_ID = 'a2a214c7-c46e-41a4-a3ad-272d1033bb0a';
const REWARDED_VIDEO_PLACEMENT_ID = 'c490ec46-c2c4-4ed4-8df1-c19af438c88f';

let isAdRewarded = false;
let adClosedCallback: ((rewarded: boolean) => void) | null = null;
let isSdkInitialized = false; // Flag to ensure initialization runs only once

const initializeAdiverySdk = () => {
    // Adivery SDK may not be loaded immediately. We retry until it is.
    const trySetup = () => {
        if (isSdkInitialized) {
            return; // Already initialized
        }
        
        if (typeof adivery !== 'undefined') {
            console.log("Initializing Adivery SDK...");
            // This is the crucial step: configuring the SDK with an App ID.
            adivery.configure({ app_id: ADIVERY_APP_ID });

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

            isSdkInitialized = true;
            console.log("Adivery SDK initialized and listeners are set.");
        } else {
             // Retry if the SDK is not yet available
            setTimeout(trySetup, 500);
        }
    }
    trySetup();
};

// Initialize the SDK when the module is first loaded.
initializeAdiverySdk();


/**
 * Shows a rewarded video ad.
 * @returns A promise that resolves to `true` if the user was rewarded, `false` otherwise.
 */
export const showRewardedVideo = (): Promise<boolean> => {
    return new Promise((resolve, reject) => {
        if (!isSdkInitialized || typeof adivery === 'undefined') {
            console.error("Adivery SDK not initialized. The script might be blocked or failed to load.");
            reject(new Error("Ad service is not available. Check your connection or ad blocker."));
            return;
        }

        // Set the callback that will be called when the ad is closed.
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
            // Rejecting the promise allows the UI component to show an error message.
            reject(new Error(`Failed to load ad: ${reason}`));
        };

        console.log("Requesting Adivery rewarded ad...");
        adivery.requestRewardedAd(REWARDED_VIDEO_PLACEMENT_ID, onAdLoaded, onAdLoadFailed);
    });
};