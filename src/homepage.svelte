<script>
    import TotalFlow from "./assets/images/totalFlow.png";
    import svelteLogo from "./assets/images/mainlogo.png";
    import Navbar from "./lib/navbarlanding.svelte";
    import Footer from "./lib/footer.svelte";
    import { onMount } from "svelte";

    let animateCard = false;
    let isHovered = false;
    let isHoveredDoctor = false;
    let isHoveredHospital = false;
    let isHoveredLab = false;
    let isHoveredAdmin = false;

    function toggleHover() {
        isHovered = !isHovered;
    }

    function toggleHoverDoctor() {
        isHoveredDoctor = !isHoveredDoctor;
    }
    function toggleHoverHospital() {
        isHoveredHospital = !isHoveredHospital;
    }
    function toggleHoverLab() {
        isHoveredLab = !isHoveredLab;
    }
    function toggleHoverAdmin() {
        isHoveredAdmin = !isHoveredAdmin;
    }

    // Function to handle intersection
    function handleIntersection(entries) {
        entries.forEach((entry) => {
            if (entry.isIntersecting) {
                animateCard = true;
            }
        });
    }

    // Create an Intersection Observer
    const options = {
        root: null,
        rootMargin: "0px",
        threshold: 0.5, // Adjust this threshold as needed
    };

    const observer = new IntersectionObserver(handleIntersection, options);

    // Function to initialize the Intersection Observer
    function initIntersectionObserver() {
        const cardElement = document.getElementById("animated-card");
        if (cardElement) {
            observer.observe(cardElement);
        }
    }

    // Start observing when the component is mounted
    //onMount(initIntersectionObserver);

    async function test() {
        await fetch(
            "https://cors-anywhere.herokuapp.com/https://bdehr-backend.onrender.com/test"
        )
            .then((response) => {
                console.log(response);
                return response.json();
            })
            .then((data) => {
                console.log(data);
            });
    }

    onMount(() => {
        //console.log("Here");
        initIntersectionObserver();
        test();
    });
</script>

<main>
    <!-- Navbar Component -->
    <Navbar />

    <!-- Flowchart Component -->
    <section
        class="py-20"
        style="background-color: #FFFFFF ; color: black; padding: 1.5rem; z-index: 10;"
    >
        <div class="max-w-screen-xl mx-auto mt-48">
            <div class="flex items-center space-x-24">
                <div class="flex flex-col w-1/2">
                    <div class="flex flex-col space-y-4">
                        <h1 class="text-6xl font-bold font-heading">
                            Rethink your healthcare facilities with BDeHR
                        </h1>

                        <p class="text-1xl">
                            The BDeHR ecosystem is designed to help you manage
                            your medical records. Empower yourself by accesing
                            all your records at once in a way you have never
                            seen before. Ensure better healthcare by proper
                            monitoring.
                        </p>
                    </div>
                    <div class="flex mt-12 space-x-3">
                        <button class="w-2/3 btn btn-outline"
                            >Get Started</button
                        >
                    </div>
                </div>
                <div class="relative w-1/2">
                    <img
                        src="./src/assets/images/hero-image-desktop.png"
                        class="w-full h-full"
                        alt="Hero"
                    />
                    <img
                        src="./src/assets/images/hero-image-mobile.png"
                        class="absolute -bottom-4 -left-3"
                        alt="Hero"
                    />
                </div>
            </div>
        </div>
    </section>

    <div
        class="relative flex card lg:card-side bg-base-100 shadow-xl px-4"
        id="animated-card"
        class:animate-left-to-right={animateCard}
    >
        <figure style="height: 500px;">
            <!-- Set the height here -->
            <img
                src="./src/assets/images/totalFlow.png"
                alt="Doctor"
                class="w-full h-full"
                style="background-color: #F5F8EE;"
            />
        </figure>
        <div
            class="card-body animate-right-to-left"
            style="background-color: #E9E6F7;"
        >
            <h1 class="text-4xl font-bold font-heading">Our Services</h1>
            <p>
                You take care your health and let us take care of everything
                else
            </p>
            <div class="flex mt-4 space-x-3">
                <!-- Adjust the margin-top here -->
                <button class="w-full btn btn-outline">Administrator</button>
            </div>
            <div class="flex mt-4 space-x-3">
                <!-- Adjust the margin-top here -->
                <button class="w-full btn btn-outline">User</button>
            </div>
            <div class="flex mt-4 space-x-3">
                <!-- Adjust the margin-top here -->
                <button class="w-full btn btn-outline">Doctor</button>
            </div>
            <div class="flex mt-4 space-x-3">
                <!-- Adjust the margin-top here -->
                <button class="w-full btn btn-outline">Hospital</button>
            </div>
            <div class="flex mt-4 space-x-3">
                <!-- Adjust the margin-top here -->
                <button class="w-full btn btn-outline">Laboratory</button>
            </div>
        </div>
    </div>
    <!-- svelte-ignore a11y-no-static-element-interactions -->
    <div
        class="card lg:card-side bg-base-100 shadow-xl p-4 gap-x-60"
        on:mouseenter={toggleHover}
        on:mouseleave={toggleHover}
    >
        <div
            class="card-body flex flex-col justify-center {isHovered
                ? 'animate-left-to-right'
                : ''}"
        >
            <h5 class="text-6xl font-bold mt-20" style="color: #8000FF;">
                User Module
            </h5>
            <h5 class="text-3xl font-bold" style="color: #8000FF;">
                You are in Charge
            </h5>
            <p class="text-2xl" style="color: #000000;">
                You have your medical records all to yourself.
                <br />
                Access your health data instantly anytime, anywhere.
                <br />
                Organize your files & authorize access to your files.
            </p>
            <a href="#/userlogin" class="w-2/3 btn btn-outline btn-primary"
                >Get Started</a
            >
        </div>

        <figure
            style="height: 500px;"
            class={isHovered ? "animate-right-to-left" : ""}
        >
            <img
                src="./src/assets/images/userCard2.png"
                alt="User"
                class="w-full h-full"
                style="background-color: #FFFFFF;"
            />
        </figure>
    </div>

    <!-- svelte-ignore a11y-no-static-element-interactions -->
    <div
        class="flex card lg:card-side bg-base-100 shadow-xl p-4 gap-x-60 mt-10"
        on:mouseenter={toggleHoverDoctor}
        on:mouseleave={toggleHoverDoctor}
    >
        <figure
            style="height: 500px;"
            class={isHoveredDoctor ? "animate-right-to-left" : ""}
        >
            <img
                src="./src/assets/images/doctorCard.png"
                alt="User"
                class="w-full h-full"
                style="background-color: #FFFFFF;"
            />
        </figure>
        <div
            class="card-body flex flex-col justify-center {isHoveredDoctor
                ? 'animate-left-to-right'
                : ''}"
        >
            <h5 class="text-6xl font-bold mt-20" style="color: #FF7903;">
                Doctor Module
            </h5>
            <h5 class="text-3xl font-bold" style="color: #FF7903;">
                Easily Ensure Effective Treatment
            </h5>
            <p class="text-2xl" style="color: #000000;">
                Access patient's medical records.
                <br />
                Give Proper investigations
                <br />
                Provide treatment considering every details
            </p>
            <a href="#/doctorlogin" class="w-full btn btn-outline btn-warning"
                >Get Started</a
            >
        </div>
    </div>

    <!-- svelte-ignore a11y-no-static-element-interactions -->
    <div
        class="card lg:card-side bg-base-100 shadow-xl p-4 gap-x-60 mt-10"
        on:mouseenter={toggleHoverHospital}
        on:mouseleave={toggleHoverHospital}
    >
        <div
            class="card-body flex flex-col justify-center {isHoveredHospital
                ? 'animate-left-to-right'
                : ''}"
        >
            <h5 class="text-6xl font-bold mt-20" style="color: #03FDFF;">
                Hospital Module
            </h5>
            <h5 class="text-3xl font-bold" style="color: #03FDFF;">
                Ensure one stop service point for patient
            </h5>
            <p class="text-2xl" style="color: #000000;">
                Systematic flow of patient management
                <br />
                Synchronize activities between Admin, Doctors & Labs
                <br />
                From hospital door to getting clearnace, fulfill the requirements
                of a patient.
                <br />
                Organize your files & authorize access to your files.
            </p>
            <a href="#/hospitalogin" class="w-2/3 btn btn-outline btn-accent"
                >Get Started</a
            >
        </div>
        <figure
            style="height: 500px;"
            class={isHoveredHospital ? "animate-right-to-left" : ""}
        >
            <img
                src="./src/assets/images/hospitalCard.png"
                alt="User"
                class="w-full h-full"
                style="background-color: #FFFFFF;"
            />
        </figure>
    </div>

    <!-- svelte-ignore a11y-no-static-element-interactions -->
    <div
        class="card lg:card-side bg-base-100 shadow-xl p-4 gap-x-60 mt-10"
        on:mouseenter={toggleHoverLab}
        on:mouseleave={toggleHoverLab}
    >
        <figure
            style="height: 500px;"
            class={isHoveredLab ? "animate-right-to-left" : ""}
        >
            <img
                src="./src/assets/images/labCard.png"
                alt="User"
                class="w-full h-full"
                style="background-color: #FFFFFF;"
            />
        </figure>
        <div
            class="card-body flex flex-col justify-center {isHoveredLab
                ? 'animate-left-to-right'
                : ''}"
        >
            <h5 class="text-6xl font-bold mt-20" style="color: #D6069F;">
                Lab Module
            </h5>
            <h5 class="text-3xl font-bold" style="color: #D6069F;">
                Insert Lab reports in patients records
            </h5>
            <p class="text-2xl" style="color: #000000;">
                Kisu kotha lekhbo
                <br />
                Aro kotha lekhbo
                <br />
                pore lekhbo
            </p>
            <button class="w-2/3 btn btn-outline btn-secondary"
                >Secondary</button
            >
        </div>
    </div>

    <!-- svelte-ignore a11y-no-static-element-interactions -->
    <div
        class="card lg:card-side bg-base-100 shadow-xl p-4 gap-x-60 mt-10"
        on:mouseenter={toggleHoverAdmin}
        on:mouseleave={toggleHoverAdmin}
    >
        <div
            class="card-body flex flex-col justify-center {isHoveredAdmin
                ? 'animate-left-to-right'
                : ''}"
        >
            <h5 class="text-6xl font-bold mt-20" style="color: #000000;">
                Admin Module
            </h5>
            <h5 class="text-3xl font-bold" style="color: #000000;">
                Central Control Point
            </h5>
            <p class="text-2xl" style="color: #000000;">
                Patient Database management
                <br />
                Doctor Registration & validation
                <br />
                Hospital data report management
                <br />
                Data analysis & action
            </p>
            <button class="w-2/3 btn btn-outline">Get Started</button>
        </div>
        <figure
            style="height: 500px;"
            class={isHoveredAdmin ? "animate-right-to-left" : ""}
        >
            <img
                src="./src/assets/images/adminCard.png"
                alt="User"
                class="w-full h-full"
                style="background-color: #FFFFFF;"
            />
        </figure>
    </div>
    <Footer />
</main>

<style>
    /* Add your global styles here */
    @keyframes left-to-right {
        from {
            transform: translateX(-100%);
            opacity: 0;
        }
        to {
            transform: translateX(0);
            opacity: 1;
        }
    }

    @keyframes right-to-left {
        from {
            transform: translateX(100%);
            opacity: 0;
        }
        to {
            transform: translateX(0);
            opacity: 1;
        }
    }

    .animate-left-to-right {
        animation: left-to-right 1s ease forwards;
    }

    .animate-right-to-left {
        animation: right-to-left 1s ease forwards;
    }
</style>
