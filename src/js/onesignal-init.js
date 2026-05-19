window.OneSignalDeferred = window.OneSignalDeferred || [];
OneSignalDeferred.push(async function (OneSignal) {
    await OneSignal.init({
        appId: "520970e9-567b-4556-8022-3093a50b765f",
        serviceWorkerParam: { scope: "/" },
        notifyButton: { enable: false },
        welcomeNotification: {
            disable: false,
            title: "Noor Nights",
            message: "You'll receive spiritual reminders throughout the 10 blessed days.",
            icon: "https://noor-nights.github.io/assets/icons/icon-512.png",
        },
        promptOptions: {
            slidedown: {
                prompts: [{
                    type: "push",
                    autoPrompt: false,
                    text: {
                        actionMessage: "Receive daily worship reminders during Dhul Hijjah.",
                        acceptButton: "Allow",
                        cancelButton: "Later",
                    },
                    icon: "https://noor-nights.github.io/assets/icons/icon-512.png",
                }]
            }
        }
    });
});
