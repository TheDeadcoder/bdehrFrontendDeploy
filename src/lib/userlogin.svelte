<div class="flex items-center justify-center min-h-screen relative">
    <div class="card lg:card-side bg-ash shadow-xl z-50">
        <figure>
            <img src="./src/assets/images/loginCard4.jpg" alt="Album" />
        </figure>
        <div class="card-body flex flex-col items-center absolute inset-0">
            <img
                src="./src/assets/images/mainlogoBag.png"
                alt="Album"
                width={145}
                height={20}
                class="mt-5 mb-10 z-100"
            />
            <h5 class="text-3xl font-bold" style="color: #FFFFFF;">
                Sign In to your Account
            </h5>
            <div>
                <input
                    type="text"
                    placeholder="Enter ID"
                    class="input input-bordered w-full max-w-xs"
                />
            </div>
            <div>
                <input
                    type="text"
                    placeholder="Enter Password"
                    class="w-full input input-bordered w-full max-w-xs"
                />
            </div>
            <div>
                <a href="#/usersignup" class="link link-hover text-white">
                    Don't Have an Account? Sign Up Here
                </a>
            </div>

            <div class="card-actions justify-end mt-5">
                <a
                    href="#/user"
                    class="w-full btn btn-outline btn-md hover:bg-red-500 text-white"
                >
                    Login
                </a>
            </div>
        </div>
    </div>
</div>
