
window.onload = function () {
    console.log("Page loaded");

    // Initialize Google OAuth
    google.accounts.id.initialize({
        client_id: "699050552382-4vttoettkmb3au3bm1kstbdd0b31k1as.apps.googleusercontent.com", // <-- Replace with your Client ID
        callback: handleCredentialResponse
    });

    console.log("Google initialized");

    // Render Google button
    google.accounts.id.renderButton(
        document.getElementById("googleBtn"),
        {
            theme: "outline",
            size: "medium",
            text: "continue_with"
        }
    );
};

// Called after successful login
function handleCredentialResponse(response) {
    console.log("Login success");

    const user = parseJwt(response.credential);
    console.log(user);

    alert("Welcome " + user.name);
}

// Decode JWT
function parseJwt(token) {
    const base64Url = token.split('.')[1];
    const base64 = base64Url.replace(/-/g, '+').replace(/_/g, '/');
    return JSON.parse(atob(base64));
}

