<script>
    let username = "";
    let nid = "";
    let dob = "";
    let address = "";
    let phoneNumber = "";
    let gender = "";
    let password = "";
    let mail = "";
    let profilePicture = null;

    function handleSubmit() {
        // Handle form submission here
        // You can access the form values using the above variables
        console.log("Form submitted");
    }
</script>

<main
    class="flex justify-center items-center min-h-screen"
    style="background-image: url('./src/assets/images/blurblue.jpg'); background-size: cover; backdrop-filter: blur(0px);"
>
    <div
        class="shadow-md rounded px-8 pt-6 pb-8 mb-4 w-full sm:w-1/2 md:w-1/3 lg:w-1/4"
        style="background-color: #B1E6F3 ;"
    >
        <div class="flex justify-center">
            <img
                src="./src/assets/images/mainlogo.png"
                alt="Album"
                width={145}
                height={20}
            />
        </div>
        <h2 class="text-2xl text-center font-bold mb-4">Sign Up</h2>
        <form on:submit={handleSubmit}>
            <div class="mb-4">
                <label
                    class="block text-gray-700 text-sm font-bold mb-2"
                    for="username"
                >
                    User Name
                </label>
                <input
                    class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                    id="username"
                    type="text"
                    placeholder="User Name"
                    bind:value={username}
                />
            </div>
            <div class="mb-4">
                <label
                    class="block text-gray-700 text-sm font-bold mb-2"
                    for="nid"
                >
                    NID Number
                </label>
                <input
                    class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                    id="nid"
                    type="text"
                    placeholder="NID Number"
                    bind:value={nid}
                />
            </div>
            <div class="mb-4">
                <label
                    class="block text-gray-700 text-sm font-bold mb-2"
                    for="dob"
                >
                    Date of Birth
                </label>
                <input
                    class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                    id="dob"
                    type="date"
                    placeholder="Date of Birth"
                    bind:value={dob}
                />
            </div>
            <div class="mb-4">
                <label
                    class="block text-gray-700 text-sm font-bold mb-2"
                    for="address"
                >
                    Address
                </label>
                <input
                    class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                    id="address"
                    type="text"
                    placeholder="Address"
                    bind:value={address}
                />
            </div>
            <div class="mb-4">
                <label
                    class="block text-gray-700 text-sm font-bold mb-2"
                    for="phoneNumber"
                >
                    Phone Number
                </label>
                <input
                    class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                    id="phoneNumber"
                    type="text"
                    placeholder="Phone Number"
                    bind:value={phoneNumber}
                />
            </div>

            <div class="mb-4">
                <label
                    class="block text-gray-700 text-sm font-bold mb-2"
                    for="mail"
                >
                    Email
                </label>
                <input
                    class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                    id="mail"
                    type="text"
                    placeholder="Email"
                    bind:value={mail}
                />
            </div>

            <div class="mb-4">
                <label class="block text-gray-700 text-sm font-bold mb-2"
                    >Gender</label
                >
                <div class="flex items-center">
                    <input
                        class="mr-2 leading-tight"
                        type="radio"
                        id="male"
                        name="gender"
                        value="male"
                        bind:group={gender}
                    />
                    <label class="text-sm" for="male">Male</label>
                    <input
                        class="mx-4 leading-tight"
                        type="radio"
                        id="female"
                        name="gender"
                        value="female"
                        bind:group={gender}
                    />
                    <label class="text-sm" for="female">Female</label>
                    <input
                        class="mx-4 leading-tight"
                        type="radio"
                        id="other"
                        name="gender"
                        value="other"
                        bind:group={gender}
                    />
                    <label class="text-sm" for="other">Rather Not Say</label>
                </div>
            </div>
            <div class="mb-4">
                <label
                    class="block text-gray-700 text-sm font-bold mb-2"
                    for="password"
                >
                    Password
                </label>
                <input
                    class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                    id="password"
                    type="password"
                    placeholder="Password"
                    bind:value={password}
                />
            </div>
            <div class="mb-4">
                <label
                    class="block text-gray-700 text-sm font-bold mb-2"
                    for="profilePicture"
                >
                    Profile Picture
                </label>
                <input
                    class="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                    id="profilePicture"
                    type="file"
                    accept="image/*"
                    bind:this={profilePicture}
                />
            </div>

            <div class="flex items-center justify-between">
                <button
                    class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                    type="submit"
                >
                    Sign Up
                </button>
            </div>
        </form>
    </div>
</main>

<style>
    /* Add your custom styles here */
</style>
