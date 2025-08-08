// A service to handle rewarded video ads via Adivery, with robust initialization.

interface AdiveryAd {
    /**
     * Shows the ad.
     * @returns A promise that resolves with a boolean indicating if the user was rewarded.
     */
    show: () => Promise<boolean>;
}

interface AdiverySDK {
    /**
     * Configures the Adivery SDK with your App ID.
     */
    configure: (appId: string) => void;
    /**
     * Requests a rewarded ad for a given placement.
     * @returns A promise that resolves with an ad object if an ad is loaded.
     */
    requestRewardedAd: (placementId: string) => Promise<AdiveryAd>;
}

// Augment the Window interface to declare the global Adivery object.
declare global {
    interface Window {
        Adivery?: AdiverySDK;
    }
}

const ADIVERY_APP_ID = 'fd86f445-b8f8-4177-bec6-dcb50dd68f15';
const REWARDED_VIDEO_PLACEMENT_ID = '2fa75852-230b-4e10-9f10-4bad0e8b4206';

let isRequestInProgress = false;

// A memoized promise to ensure we only try to initialize the SDK once.
let adiveryInitializationPromise: Promise<void> | null = null;

/**
 * Ensures the Adivery SDK is loaded and initialized.
 * It polls for the global window.Adivery object and rejects if it doesn't appear
 * within a timeout period (e.g., due to an ad blocker or network issue).
 * @returns A promise that resolves when Adivery is ready.
 */
const ensureAdiveryIsReady = (): Promise<void> => {
    // If initialization is already in progress or complete, return the existing promise.
    if (adiveryInitializationPromise) {
        return adiveryInitializationPromise;
    }

    // Start the initialization process.
    adiveryInitializationPromise = new Promise((resolve, reject) => {
        const checkInterval = 100; // ms
        const timeout = 10000; // 10 seconds
        let elapsedTime = 0;

        const intervalId = setInterval(() => {
            // If the SDK is now available on the window object...
            if (typeof window.Adivery !== 'undefined' && window.Adivery.configure) {
                clearInterval(intervalId);
                try {
                    // Configure the SDK. This is safe to call multiple times.
                    window.Adivery.configure(ADIVERY_APP_ID);
                    console.log("Adivery SDK initialized and configured.");
                    resolve();
                } catch (e) {
                    console.error("Adivery SDK is present but configuration failed.", e);
                    reject(new Error("Ad service configuration failed."));
                }
                return;
            }

            // If the SDK is not yet available, check for timeout.
            elapsedTime += checkInterval;
            if (elapsedTime >= timeout) {
                clearInterval(intervalId);
                console.error("Adivery SDK did not load within the timeout period.");
                // Reset promise to allow retries later if needed
                adiveryInitializationPromise = null; 
                reject(new Error("Ad service is not available. Check your connection or ad blocker."));
            }
        }, checkInterval);
    });

    return adiveryInitializationPromise;
};

/**
 * Shows a rewarded video ad using the Adivery SDK.
 * This function handles SDK initialization, ad requests, and error handling.
 * @returns A promise that resolves to `true` if the user was rewarded, `false` otherwise.
 */
export const showRewardedVideo = async (): Promise<boolean> => {
    // First, ensure the Adivery SDK is loaded and ready.
    try {
        await ensureAdiveryIsReady();
    } catch (error) {
        // The error from ensureAdiveryIsReady is already user-friendly.
        console.error("Ad service initialization failed:", error);
        throw error;
    }

    // At this point, window.Adivery is guaranteed to be available.
    const Adivery = window.Adivery!;
    
    // Prevent multiple ad requests from starting simultaneously.
    if (isRequestInProgress) {
        console.warn("An ad request is already in progress.");
        throw new Error("An ad request is already in progress.");
    }

    isRequestInProgress = true;

    try {
        console.log(`Requesting rewarded ad for placement: ${REWARDED_VIDEO_PLACEMENT_ID}`);
        // Step 1: Request the ad.
        const ad = await Adivery.requestRewardedAd(REWARDED_VIDEO_PLACEMENT_ID);
        
        console.log("Rewarded ad loaded successfully. Showing ad...");
        // Step 2: Show the ad and get the reward status.
        const isRewarded = await ad.show();

        console.log(`Ad finished. Rewarded: ${isRewarded}`);
        return isRewarded;

    } catch (error: any) {
        console.error("Adivery ad error:", error);
        // Provide a more generic error message to the user.
        // The detailed error is logged to the console for debugging.
        throw new Error(`Could not display the ad. Please try again later.`);
    } finally {
        // Ensure the lock is released, whether the ad succeeds or fails.
        isRequestInProgress = false;
    }
};