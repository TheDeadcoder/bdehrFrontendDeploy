<script>
    import Link from "svelte-spa-router";
    import navigate from "svelte-spa-router";
    let drawerOpen = false;
    let typingText = "";

    function toggleDrawer() {
        drawerOpen = !drawerOpen;
    }

    // Function to simulate typing animation

    let typingIndex = 0;

    // Function to simulate typing animation
    function typeText() {
        const messages = [
            "Access Sync Surveillance Precaution",
            "Another Message to Type",
            // Add more messages here
        ];

        let currentIndex = 0;

        function typeNextMessage() {
            if (currentIndex < messages.length) {
                typingText = "";
                typingIndex = 0;
                const message = messages[currentIndex];
                const typingInterval = setInterval(() => {
                    if (typingIndex < message.length) {
                        typingText += message.charAt(typingIndex);
                        typingIndex++;
                    } else {
                        clearInterval(typingInterval);
                        setTimeout(() => {
                            eraseText(message);
                        }, 1000); // Wait for 1 second before erasing
                    }
                }, 100); // Adjust typing speed here (e.g., 100ms for faster typing)
                currentIndex++;
            } else {
                currentIndex = 0; // Restart from the beginning
                typeNextMessage();
            }
        }

        typeNextMessage(); // Start typing the first message
    }

    function eraseText(message) {
        const erasingInterval = setInterval(() => {
            if (typingIndex > 0) {
                typingText = message.slice(0, typingIndex - 1);
                typingIndex--;
            } else {
                clearInterval(erasingInterval);
                setTimeout(() => {
                    typeText();
                }, 500); // Wait for 0.5 seconds before typing the next message
            }
        }, 50); // Adjust erasing speed here (e.g., 50ms for faster erasing)
    }

    typeText(); // Start the typing animation when the page loads
</script>

<div class="navbar bg-base-100 w-full">
    <button class="btn btn-square btn-ghost" on:click={toggleDrawer}>
        <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            class="inline-block w-5 h-5 stroke-current"
        >
            <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M4 6h16M4 12h16M4 18h16"
            />
        </svg>
    </button>
    <img
        src="./src/assets/images/mainlogo.png"
        alt="BDeHR Logo"
        width={125}
        height={25}
        class="mx-0 my-0"
    />

    <!-- About option on the left -->
    <div class="typing-text">
        <div>{typingText}</div>
    </div>
    <a href="#/about" class="btn btn-outline ml-auto">About</a>
</div>

<div class="drawer-container" style="left: {drawerOpen ? '0' : '-300px'}">
    <div class="drawer-content p-4" style="background-color: #BECED0;">
        <button class="btn btn-square btn-outline" on:click={toggleDrawer}>
            <svg
                xmlns="http://www.w3.org/2000/svg"
                class="h-4 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                ><path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M6 18L18 6M6 6l12 12"
                /></svg
            >
        </button>
        <img
            src="./src/assets/images/mainlogo.png"
            alt="BDeHR Logo"
            width={100}
            height={15}
            class="mx-0 my-0"
        />
        <div class="flex flex-col space-y-7">
            <a href="#" class="text-lg font-bold">User</a>
            <a href="#" class="text-lg font-bold">Hospital</a>
            <a href="#" class="text-lg font-bold">Doctor</a>
            <a href="#" class="text-lg font-bold">Laboratory</a>
            <a href="#" class="text-lg font-bold">Admin</a>
        </div>
    </div>
</div>

<div class="overlay" class:active={drawerOpen} on:click={toggleDrawer} />

<style>
    .navbar {
        display: flex;
        justify-content: space-between;
        align-items: center;
        background-color: #f5f8ee; /* Make the navbar transparent */
        padding: 1rem;
        position: fixed;
        left: 0;
        right: 0;
        z-index: 900;
    }

    .drawer-container {
        position: fixed;
        top: 0;
        left: -300px; /* Initial position off-screen */
        width: 300px;
        height: 100%;
        transition: left 0.3s ease-in-out; /* Transition for smooth sliding */
        z-index: 999;
    }

    .drawer-content {
        padding: 1rem;
    }

    .overlay {
        position: fixed;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background: rgba(0, 0, 0, 0.5); /* Semi-transparent overlay */
        display: none;
        z-index: 998; /* Ensure overlay is below the drawer */
    }

    .overlay.active {
        display: block;
    }

    /* Add hover effect for drawer links */
    .drawer-content a:hover {
        transform: translateY(-4px);
        transition: transform 0.2s ease-in-out;
    }
    @keyframes typing {
        from {
            width: 0;
        }
        to {
            width: 100%;
        }
    }

    /* Apply the animation to the text */
    .typing-text {
        display: flex;
        align-items: center; /* Center vertically */
        font-size: 26px; /* Increase font size */
        overflow: hidden; /* Hide overflowing text */
        white-space: nowrap; /* Prevent line breaks */
        margin-left: auto; /* Push text to the right */
    }

    /* Add cursor animation */
    .typing-text::after {
        content: "|"; /* Display the cursor */
        animation: blink 1s step-end infinite; /* Blinking cursor */
        margin-left: 0.2rem; /* Adjust cursor placement */
    }

    @keyframes blink {
        0%,
        100% {
            opacity: 1;
        }
        50% {
            opacity: 0;
        }
    }
</style>
