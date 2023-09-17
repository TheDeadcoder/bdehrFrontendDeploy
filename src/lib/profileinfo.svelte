<!-- User.svelte -->
<script>
    import User from "./user.svelte";

    let selectedOption = "Profile";
    let isEditing = false;

    const changeOption = (option) => {
        selectedOption = option;
    };
    const handleLogout = () => {
        // Add your logout logic here
        // For example, redirect to the login page
        window.location.href = "/userlogin"; // Change the URL to your login page
    };
    let userProfile = {
        user_id: "NDLKX6781TT",
        name: "Nazmus Sakib",
        dob: "1990-01-15",
        address: "Suhrawardy Hall, Dhaka",
        nid: "123456789",
        phone: "+8801716171819",
        email: "sakib@gmail.com",
        userImage: "./src/assets/images/userdefault.png",
    };
    let medications = [
        {
            name: "Medication 1",
            date: "2023-09-10",
            googleDriveUrl:
                "https://docs.google.com/document/d/1u7ysQh19u9yeWHlN4rguck8yw4qe1f69VYYX9vE1VDA/edit?usp=sharing",
        },
        {
            name: "Medication 1",
            date: "2023-09-10",
            googleDriveUrl:
                "https://docs.google.com/document/d/1u7ysQh19u9yeWHlN4rguck8yw4qe1f69VYYX9vE1VDA/edit?usp=sharing",
        },
        {
            name: "Medication 1",
            date: "2023-09-10",
            googleDriveUrl:
                "https://docs.google.com/document/d/1u7ysQh19u9yeWHlN4rguck8yw4qe1f69VYYX9vE1VDA/edit?usp=sharing",
        },
        {
            name: "Medication 1",
            date: "2023-09-10",
            googleDriveUrl:
                "https://docs.google.com/document/d/1u7ysQh19u9yeWHlN4rguck8yw4qe1f69VYYX9vE1VDA/edit?usp=sharing",
        },
        {
            name: "Medication 1",
            date: "2023-09-10",
            googleDriveUrl:
                "https://docs.google.com/document/d/1u7ysQh19u9yeWHlN4rguck8yw4qe1f69VYYX9vE1VDA/edit?usp=sharing",
        },
        // Add more medication items as needed
    ];
    function calculateAge(dob) {
        const today = new Date();
        const birthDate = new Date(dob);
        let age = today.getFullYear() - birthDate.getFullYear();
        const monthDiff = today.getMonth() - birthDate.getMonth();
        if (
            monthDiff < 0 ||
            (monthDiff === 0 && today.getDate() < birthDate.getDate())
        ) {
            age--;
        }
        return age;
    }
    const handleImageChange = (event) => {
        const file = event.target.files[0];
        if (file) {
            const reader = new FileReader();
            reader.onload = () => {
                userProfile.userImage = reader.result;
            };
            reader.readAsDataURL(file);
        }
    };
    const toggleEditMode = () => {
        isEditing = !isEditing;
    };

    const handleSaveChanges = () => {
        // Add your logic to save changes
        // Update userProfile object with new values
        // For now, we'll just toggle back to view mode
        toggleEditMode();
    };
</script>

<div class="min-h-screen flex bg-gray-100">
    <!-- Side panel -->
    <div class="w-1/4 bg-gray-800 text-white p-4 flex flex-col justify-between">
        <div>
            <h2 class="text-2xl font-semibold">User Options</h2>
            <ul class="mt-10 space-y-6">
                <li>
                    <div class="flex space-x-3 cursor-pointer group">
                        <p
                            class="transition font-heading group-hover:font-bold"
                            on:click={() => changeOption("Profile")}
                        >
                            Profile Info
                        </p>
                        <img
                            src="./src/assets/icons/arrow.svg"
                            class="transition transform group-hover:translate-x-1"
                            alt="Arrow Icon"
                        />
                    </div>
                </li>
                <li>
                    <div class="flex space-x-3 cursor-pointer group">
                        <p
                            class="transition font-heading group-hover:font-bold"
                            on:click={() => changeOption("Medication")}
                        >
                            Medication Info
                        </p>
                        <img
                            src="./src/assets/icons/arrow.svg"
                            class="transition transform group-hover:translate-x-1"
                            alt="Arrow Icon"
                        />
                    </div>
                </li>
                <li>
                    <div class="flex space-x-3 cursor-pointer group">
                        <p
                            class="transition font-heading group-hover:font-bold"
                            on:click={() => changeOption("Test Reports")}
                        >
                            Test Reports
                        </p>
                        <img
                            src="./src/assets/icons/arrow.svg"
                            class="transition transform group-hover:translate-x-1"
                            alt="Arrow Icon"
                        />
                    </div>
                </li>
            </ul>
        </div>

        <!-- Logout button at the bottom with hover effect -->
        <button
            class="bg-blue-500 text-white rounded-full py-2 px-4 mt-4 transition duration-300 hover:bg-blue-700"
            on:click={handleLogout}
        >
            Logout
        </button>
    </div>
    <style>
        /* Add custom styles for the medication list */
        .medication-list {
            list-style: none;
            padding: 0;
        }

        .medication-list li {
            display: flex;
            align-items: center;
            background-color: #beced0; /* Add cyan background color to rows */
            border-radius: 5px; /* Add border-radius for rounded corners */
            cursor: pointer; /* Add a pointer cursor to indicate clickable rows */
            border: 3px solid transparent; /* Add a transparent border to reserve space */
            margin-bottom: 15px; /* Increase vertical margin for larger gap between rows */
            transition: background-color 0.2s ease-in-out; /* Smoothly transition background color */
            position: relative; /* Set the position to relative */
        }

        .medication-list li:hover {
            background-color: lightcyan; /* Change background color on hover */
            transform: translateY(-5px); /* Uplift the row on hover */
            border-color: transparent; /* Make the border transparent on hover to maintain space */
        }

        /* Style the invisible anchor element */
        .medication-list li a {
            position: absolute;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            z-index: 1; /* Ensure anchor is clickable and appears above other elements */
        }
    </style>
    <!-- Content area -->
    <div class="flex w-3/4 p-4 space-y-6 mx-2">
        {#if selectedOption === "Profile"}
            <div class="w-2/3 pr-8">
                <h2 class="text-2xl font-semibold">Profile</h2>

                <!-- Edit button -->
                {#if !isEditing}
                    <button
                        class="bg-blue-500 hover:bg-blue-700 text-white rounded-full py-2 px-4 mt-4 focus:outline-none"
                        on:click={toggleEditMode}
                    >
                        Edit
                    </button>
                {/if}

                <!-- Profile information (editable) -->
                <div class="mt-4">
                    <div class="mb-2">
                        <strong class="text-gray-700">User ID:</strong>
                        <span class="ml-2">{userProfile.user_id}</span>
                    </div>
                    <div class="mb-2">
                        <strong class="text-gray-700">Name:</strong>
                        {#if isEditing}
                            <input
                                type="text"
                                bind:value={userProfile.name}
                                class="ml-2 px-4 py-2 border rounded-lg focus:outline-none focus:border-blue-500"
                            />
                        {:else}
                            <span class="ml-2">{userProfile.name}</span>
                        {/if}
                    </div>

                    <!-- Date of Birth (editable) -->
                    <div class="mb-2">
                        <strong class="text-gray-700">Date of Birth:</strong>
                        {#if isEditing}
                            <input
                                type="date"
                                bind:value={userProfile.dob}
                                class="ml-2 px-4 py-2 border rounded-lg focus:outline-none focus:border-blue-500"
                            />
                        {:else}
                            <span class="ml-2">{userProfile.dob}</span>
                        {/if}
                    </div>

                    <!-- Calculate and display Age -->
                    {#if !isEditing}
                        <div class="mb-2">
                            <strong class="text-gray-700">Age:</strong>
                            <span class="ml-2"
                                >{calculateAge(userProfile.dob)}</span
                            >
                        </div>
                    {/if}

                    <!-- Repeat the same structure for other profile fields -->

                    <!-- NID Number (not editable) -->
                    <div class="mb-2">
                        <strong class="text-gray-700">NID Number:</strong>
                        <span class="ml-2">{userProfile.nid}</span>
                    </div>

                    <!--Address editable-->
                    <div class="mb-2">
                        <strong class="text-gray-700">Address:</strong>
                        {#if isEditing}
                            <input
                                type="text"
                                bind:value={userProfile.address}
                                class="ml-2 px-4 py-2 border rounded-lg focus:outline-none focus:border-blue-500"
                            />
                        {:else}
                            <span class="ml-2">{userProfile.address}</span>
                        {/if}
                    </div>
                    <div class="mb-2">
                        <strong class="text-gray-700">Phone Number:</strong>
                        {#if isEditing}
                            <input
                                type="text"
                                bind:value={userProfile.phone}
                                class="ml-2 px-4 py-2 border rounded-lg focus:outline-none focus:border-blue-500"
                            />
                        {:else}
                            <span class="ml-2">{userProfile.phone}</span>
                        {/if}
                    </div>
                    <div class="mb-2">
                        <strong class="text-gray-700">Email Address:</strong>
                        {#if isEditing}
                            <input
                                type="text"
                                bind:value={userProfile.email}
                                class="ml-2 px-4 py-2 border rounded-lg focus:outline-none focus:border-blue-500"
                            />
                        {:else}
                            <span class="ml-2">{userProfile.email}</span>
                        {/if}
                    </div>
                    <!-- Save button -->
                    {#if isEditing}
                        <div class="mt-4">
                            <button
                                class="bg-green-500 hover:bg-green-700 text-white rounded-full py-2 px-4 focus:outline-none"
                                on:click={handleSaveChanges}
                            >
                                Save
                            </button>
                        </div>
                    {/if}
                </div>
            </div>
            <div class="w-1/3 items-center justify-center">
                <div class="mt-4 w-80 h-80 mx-2">
                    <!-- Display the user image or default image -->
                    {#if !isEditing}
                        <!-- svelte-ignore a11y-img-redundant-alt -->
                        <img
                            src={userProfile.userImage}
                            alt="User Image"
                            class="w-80 h-80 rounded-full"
                        />
                    {:else}
                        <!-- Input for uploading an image -->
                        <input
                            type="file"
                            accept="image/*"
                            on:change={handleImageChange}
                            class="hidden"
                            id="userImageInput"
                        />
                        <label
                            for="userImageInput"
                            class="cursor-pointer w-80 h-80 flex items-center justify-center rounded-full border border-blue-500 hover:border-blue-700"
                        >
                            Upload Image
                        </label>
                    {/if}
                </div>
            </div>
        {:else if selectedOption === "Medication"}
            <!-- Medication content -->
            <h2 class="text-3xl font-semibold">Medication</h2>

            <!-- Medication list -->
            <ul class="mt-4">
                {#each medications as medication}
                    <li>
                        <a
                            href={medication.googleDriveUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            class="text-blue-500 hover:underline"
                        >
                            <div class="flex items-center hover:translate-x-1">
                                <span
                                    >{medication.name} ({medication.date})</span
                                >
                            </div>
                        </a>
                    </li>
                {/each}
            </ul>
            <!-- Add your Medication content here -->
        {:else if selectedOption === "Test Reports"}
            <!-- Test Reports content -->
            <h2 class="text-2xl font-semibold">Test Reports</h2>
            <!-- Add your Test Reports content here -->
        {/if}
    </div>
</div>
