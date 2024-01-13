const AgentSignIn = () => {
	return (
		<section className="bg-fuchsia-300 py-5 min-h-[50vh]">
			<h3 className="text-3xl text-center font-[600]">Login to your Dashboard</h3>
			<form class="w-full flex items-center justify-center max-w-md mx-auto mt-6 flex-col bg-white p-5 rounded-lg">
				<div class="flex items-center justify-center border-b w-full border-fuchsia-500 py-2">
					<input
						class="appearance-none bg-transparent border-none w-full text-gray-700 mr-3 py-1 px-2 leading-tight focus:outline-none"
						type="text"
						placeholder="Your Email"
						aria-label="Full name"
						required
					/>
					<button
						class="flex-shrink-0 bg-white hover:bg-fuchsia-700 border-fuchsia-500 hover:border-fuchsia-700 text-sm hover:text-white border-2 text-black font-[500] py-1 px-2 rounded"
						type="submit">
						Sign In
					</button>
				</div>
			</form>
		</section>
	);
};

export default AgentSignIn;
