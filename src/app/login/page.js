import Image from 'next/image'
import React from 'react'

function LoginPage() {
    return (
        <div className='bg-gray-100 font-sans'>
            <div class="container mx-auto max-w-md rounded-lg p-6 px-4 py-14">
                {/* <h2 class="mb-4 text-center text-2xl font-bold text-gray-800">Damelo</h2> */}
                <div className='w-full flex items-center justify-center'>

                <Image height={200} width={200} className='self-center object-cover ' src={"/damelo-logo.png"} />
                </div>
               
                <p class="mb-4 text-left text-2xl font-bold text-gray-600">Login</p>
                <form>
                    <div class="mb-4">
                        <label for="email" class="font-m mb-2 block font-bold text-gray-700">Email address</label>
                        <input type="email" id="email" name="email" class="w-full border px-3 py-2 focus:border-[#b1d004] focus:outline-none active:border-solid active:border-[#b1d004]" />
                    </div>
                    <div class="mb-4">
                        <label for="password" class="mb-2 block font-bold text-gray-700">Password</label>
                        <input type="password" id="password" name="password" class="w-full border px-3 py-2 focus:border-[#b1d004] focus:outline-none active:border-solid active:border-[#b1d004]" />
                        <a href="#" class="align-baseline text-lg font-semibold text-[#145bc7] hover:underline">Forgot your password?</a>
                    </div>

                    <div class="mb-6 flex items-center">
                        <input type="checkbox" id="remember" name="remember" class="mr-2 size-5 border-gray-300 text-[#b1d004]" />
                        <label for="remember" class="text-lg font-semibold text-[#b62682]">Remember your details</label>
                    </div>

                    <button type="submit" class="w-full bg-[#b62682] px-4 py-2 font-bold text-white hover:bg-[#8c1d64] focus:outline-none focus:ring focus:ring-pink-200">Enter Damelo</button>
                </form>
                <div class="mt-8 text-center">
                    <p class="font-semibold text-black">You can also</p>
                    <button class="mt-4 flex w-full items-center justify-center rounded-md border border-gray-300 px-4 py-2 hover:bg-gray-50"><img src="https://img.icons8.com/color/16/000000/google-logo.png" class="mr-2" />Continue with Google</button>
                    <button class="mt-2 flex w-full items-center justify-center rounded-md border border-gray-300 px-4 py-2 hover:bg-gray-50"><img src="https://img.icons8.com/ios-filled/16/000000/mac-os.png" class="mr-2" />Continue with Apple</button>
                </div>

                <div class="py-10 text-center">
                    <p class="text-xl font-semibold text-gray-600">Don't have an account? <a href="#" class="align-baseline text-xl font-semibold text-[#145bc7] hover:underline">Create account</a></p>
                </div>
            </div>
        </div>
    )
}

export default LoginPage