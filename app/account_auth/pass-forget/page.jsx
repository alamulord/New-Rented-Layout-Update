export default function page() {
	return (
		<div className="bg-fuchsia-300 py-5 mb-0">
			<form class="w-full max-w-lg mx-auto mt-10 bg-white rounded p-5">
				<p class="text-slate-600 text-2xl font-[800] leading-10 mb-10 text-center">
					Forget Password
				</p>

				<div class="flex flex-wrap -mx-3 mb-6">
					<div class="w-full px-3">
						<label
							class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
							for="grid-password">
							Forget Password
						</label>
						<input
							class="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
							id="grid-password"
							type="email"
							placeholder="Your Email Address"
							required
						/>
					</div>
				</div>

				<button
					type="submit"
					className="text-black p-2  bg-white w-full mt-3 font-[700] border-2 border-fuchsia-200 rounded-md basline hover:bg-fuchsia-500 hover:text-whites">
					Submit
				</button>
			</form>
		</div>
	);
}
