const Hero = () => {
	return (
		<section className="">
			<div className="min-h-screen relative flex justify-center items-center bg-center bg-cover hero-bg-image">
				<div className="max-w-7xl absolute container text-white p-6 mx-auto my-0 flex flex-col justify-center items-center ">
					<div className="text-start md:text-center">
						<h3 className="font-transform: uppercase font-medium text-5xl my-5 leading-140 dave">
							BEST PLACE TO <span className="text-fuchsia-700">FIND</span> AND{' '}
							<span className="text-fuchsia-700"> EXPLORE</span> THAT ALL YOU NEED
						</h3>
						<p className="hidden text-1xl opacity-70 md:block">
							Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima distinctio at
							illo unde deserunt accusantium animi possimus pariatur tenetur et! Lorem ipsum
							dolor sit amet consectetur adipisicing elit. Minima distinctio at illo unde
							deserunt accusantium animi possimus pariatur tenetur et!
						</p>
					</div>
					<div className="my-5 w-full">
						<form className="flex items-center justify-center flex-wrap">
							<input
								type="text"
								placeholder="Looking for a Land...?"
								className=" mt-1 block h-14 w-3/4 px-3 py-2 border border-fuchsia-300 rounded-md text-lg shadow-lg placeholder-slate-400
                    opacity-60
                    text-black
                    focus:outline-none focus:border-fuchsia-300 focus:ring-1 focus:opacity-75 focus:ring-fuchsia-800
                    invalid:border-pink-500 invalid:text-pink-600
                    focus:invalid:border-pink-500 focus:invalid:ring-pink-500"
							/>
							<button className="bg-white text-black rounded px-3 py-2 h-14 my-3 md:space-y-0 mx-3 hover:bg-fuchsia-500 focus:outline-none hover:text-white ">
								Search by location
							</button>
						</form>
					</div>
				</div>
			</div>
		</section>
	);
};

export default Hero;
