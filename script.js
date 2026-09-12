// PhishGuard - Phishing Campaign Simulation
// Safe educational/demo project

let campaignStarted = false;

// Start Campaign button
function startCampaign() {
    document.getElementById("campaign").scrollIntoView({
        behavior: "smooth"
    });

    document.getElementById("campaignMessage").innerText =
        "Create your awareness campaign below.";
}


// Create Campaign
function createCampaign() {

    const campaignName =
        document.getElementById("campaignName").value.trim();

    const recipients =
        parseInt(document.getElementById("recipients").value);

    if (campaignName === "") {
        document.getElementById("campaignMessage").innerText =
            "Please enter a campaign name.";
        return;
    }

    if (isNaN(recipients) || recipients < 1) {
        document.getElementById("campaignMessage").innerText =
            "Please enter a valid number of test recipients.";
        return;
    }

    campaignStarted = true;

    // Safe demo metrics
    const sent = recipients;
    const opened = Math.floor(sent * 0.7);
    const clicked = Math.floor(sent * 0.3);
    const awareness = Math.round(((sent - clicked) / sent) * 100);

    // Dashboard
    document.getElementById("sent").innerText = sent;
    document.getElementById("opened").innerText = opened;
    document.getElementById("clicked").innerText = clicked;

    // Results
    document.getElementById("resultSent").innerText = sent;
    document.getElementById("resultOpened").innerText = opened;
    document.getElementById("resultClicked").innerText = clicked;
    document.getElementById("awareness").innerText =
        awareness + "%";

    // Report
    document.getElementById("reportCampaign").innerText =
        campaignName;

    document.getElementById("reportRecipients").innerText =
        recipients;

    document.getElementById("status").innerText =
        "Campaign Completed";

    document.getElementById("campaignMessage").innerText =
        "Campaign created successfully! This is a safe educational simulation.";

    // Scroll to results
    setTimeout(function () {
        document.getElementById("results").scrollIntoView({
            behavior: "smooth"
        });
    }, 500);
}