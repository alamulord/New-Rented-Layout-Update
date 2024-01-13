import Link from 'next/link';
import Image from 'next/image';

const cart = () => {
	return (
		<>
			<section id="Property">
				<div className="container  max-w-7xl relative p-6 mx-auto my-9">
					<div className="text-left ">
						<h3 className="text-5xl mb-2 font-transform: capitalize font-medium">
							Property listing
						</h3>
					</div>
					<div className="grid grid-cols-1 lg:grid-cols-2 place-content-center place-items-center">
						<div className="hidden md:mb-7 opacity-60 md:block">
							<p>
								Lorem ipsum dolor, sit amet consectetur adipisicing elit. Saepe reprehenderit
								ullam cumque blanditiis unde consectetur amet nesciunt velit, tempora facere
								dolores architecto, quis quibusdam possimus, molestias magnam a vel quae.
							</p>
						</div>
						<div className="my-5 sm:grid-cols-1 place-items-end">
							<Link
								href="#"
								className="p-3 pt-2 px-6 text-white bg-fuchsia-700 mr-3 rounded-lg basline hover:bg-fuchsia-800">
								Featured
							</Link>
							<Link
								href="#"
								className="p-3 pt-2 px-6 border border-3 border-fuchsia-400 mr-3 bg-white-700 rounded-lg basline hover:outline-none hover:text-white hover:bg-fuchsia-800">
								For Sale
							</Link>
							<Link
								href="#"
								className="p-3 pt-2 px-6 border border-3 border-fuchsia-400 bg-white-700 rounded-lg basline hover:bg-fuchsia-800 hover:text-white">
								For Rent
							</Link>
						</div>
					</div>

					<div className="grid grid-auto-fit-lg gap-8">
						{/* <!-- Cart One--> */}
						<div className="flex flex-col shadow-xl rounded-2xl cart min-h-min: overflow-hidden">
							<div className="relative image">
								<Link href="/product-view">
									<Image
										src="/asset/img/property-3.jpg"
										width={200}
										height={200}
										className="w-full h-full object-cover hover:scale-x-110"
										alt="image"
									/>
									<div className="absolute top-3 left-3 bg-fuchsia-800 px-5 py-2 text-center rounded-md text-white">
										<p>For Sell</p>
									</div>
									<div className="absolute bottom-0 left-6 bg-white font-medium leading-3 p-3 text-fuchsia-500 rounded-t-md">
										<p>Appartment</p>
									</div>
								</Link>
							</div>
							<div className="px-8">
								<dl className="mt-4 text-xs font-medium flex items-center row-start-2 sm:mt-1 sm:row-start-3 md:mt-2.5 lg:row-start-2">
									<dt className="sr-only">Reviews</dt>
									<dd className="text-fuchsia-600 flex items-center dark:text-indigo-400">
										<svg
											width="24"
											height="24"
											fill="none"
											aria-hidden="true"
											className="mr-1 stroke-current dark:stroke-indigo-500">
											<path
												d="m12 5 2 5h5l-4 4 2.103 5L12 16l-5.103 3L9 14l-4-4h5l2-5Z"
												strokeWidth={2}
												strokeLinecap="round"
												strokeLinejoin="round"
											/>
										</svg>
										<span>
											4.89 <span className="text-slate-400 font-normal">(128)</span>
										</span>
									</dd>
									<dt className="sr-only">Location</dt>
									<dd className="flex items-center">
										<svg
											width="2"
											height="2"
											aria-hidden="true"
											fill="currentColor"
											className="mx-3 text-slate-300">
											<circle cx="1" cy="1" r="1" />
										</svg>
										<svg
											width="24"
											height="24"
											fill="none"
											stroke="currentColor"
											strokeWidth={2}
											strokeLinecap="round"
											strokeLinejoin="round"
											className="mr-1 text-fuchsia-400 dark:text-slate-500"
											aria-hidden="true">
											<path d="M18 11.034C18 14.897 12 19 12 19s-6-4.103-6-7.966C6 7.655 8.819 5 12 5s6 2.655 6 6.034Z" />
											<path d="M14 11a2 2 0 1 1-4 0 2 2 0 0 1 4 0Z" />
										</svg>
										Ogele, Eiyenkorin, Kwara State
									</dd>
								</dl>
								<div className="text-left">
									<h5 className="text-2xl my-5 font-medium text-fuchsia-700">$12,345</h5>
									<Link
										href="/product_details/product-view"
										className="block hover:text-fuchsia-600 md:text-2xl sm:text-xl lg:text-3xl text-transform: capitalize font-semibold mb-1">
										golden estate for sell
									</Link>
									<p>
										Lorem ipsum, dolor sit amet consectetur adipisicing elit. Doloribus veritatis
										eveniet cumque laudantium ipsum nobis officia qui unde, optio esse.
									</p>
								</div>
								<div className="text-left my-4 text-lg text-transform: capitalize text-fuchsia-700 font-medium">
									<h4>Land Space: 10plot.</h4>
								</div>
								<div className="my-5 flex gap-2">
									<Link
										href="/product_details/product-view"
										className="text-xl text-center bg-fuchsia-600 w-full hover:bg-fuchsia-500 px-6 py-2 rounded-md text-white font-medium tracking-wider transition">
										Buy Now
									</Link>
								</div>
							</div>
						</div>
						{/* Cart Two */}
						<div className="flex flex-col shadow-xl rounded-2xl cart min-h-min: overflow-hidden">
							<div className="relative image">
								<Link href="/product_details/product-view">
									<Image
										src="/asset/img/property-2.jpg"
										width={200}
										height={200}
										className="w-full h-full object-cover hover:scale-x-110"
										alt="image"
									/>
									<div className="absolute top-3 left-3 bg-fuchsia-800 px-5 py-2 text-center rounded-md text-white">
										<p>For Sell</p>
									</div>
									<div className="absolute bottom-0 left-6 bg-white font-medium leading-3 p-3 text-fuchsia-500 rounded-t-md">
										<p>Appartment</p>
									</div>
								</Link>
							</div>
							<div className="px-8">
								<dl className="mt-4 text-xs font-medium flex items-center row-start-2 sm:mt-1 sm:row-start-3 md:mt-2.5 lg:row-start-2">
									<dt className="sr-only">Reviews</dt>
									<dd className="text-fuchsia-600 flex items-center dark:text-indigo-400">
										<svg
											width="24"
											height="24"
											fill="none"
											aria-hidden="true"
											className="mr-1 stroke-current dark:stroke-indigo-500">
											<path
												d="m12 5 2 5h5l-4 4 2.103 5L12 16l-5.103 3L9 14l-4-4h5l2-5Z"
												strokeWidth={2}
												strokeLinecap="round"
												strokeLinejoin="round"
											/>
										</svg>
										<span>
											4.89 <span className="text-slate-400 font-normal">(128)</span>
										</span>
									</dd>
									<dt className="sr-only">Location</dt>
									<dd className="flex items-center">
										<svg
											width="2"
											height="2"
											aria-hidden="true"
											fill="currentColor"
											className="mx-3 text-slate-300">
											<circle cx="1" cy="1" r="1" />
										</svg>
										<svg
											width="24"
											height="24"
											fill="none"
											stroke="currentColor"
											strokeWidth={2}
											strokeLinecap="round"
											strokeLinejoin="round"
											className="mr-1 text-fuchsia-400 dark:text-slate-500"
											aria-hidden="true">
											<path d="M18 11.034C18 14.897 12 19 12 19s-6-4.103-6-7.966C6 7.655 8.819 5 12 5s6 2.655 6 6.034Z" />
											<path d="M14 11a2 2 0 1 1-4 0 2 2 0 0 1 4 0Z" />
										</svg>
										Ogele, Eiyenkorin, Kwara State
									</dd>
								</dl>
								<div className="text-left">
									<h5 className="text-2xl my-5 font-medium text-fuchsia-700">$12,345</h5>
									<Link
										href="/product_details/product-view"
										className="block hover:text-fuchsia-600 md:text-2xl sm:text-xl lg:text-3xl text-transform: capitalize font-semibold mb-1">
										golden estate for sell
									</Link>
									<p>
										Lorem ipsum, dolor sit amet consectetur adipisicing elit. Doloribus veritatis
										eveniet cumque laudantium ipsum nobis officia qui unde, optio esse.
									</p>
								</div>
								<div className="text-left my-4 text-lg text-transform: capitalize text-fuchsia-700 font-medium">
									<h4>Land Space: 10plot.</h4>
								</div>
								<div className="my-5 flex gap-2">
									<Link
										href="/product_details/product-view"
										className="text-xl text-center bg-fuchsia-600 w-full hover:bg-fuchsia-500 px-6 py-2 rounded-md text-white font-medium tracking-wider transition">
										Buy Now
									</Link>
								</div>
							</div>
						</div>
						{/* Cart Three */}
						<div className="flex flex-col shadow-xl rounded-2xl cart min-h-min: overflow-hidden">
							<div className="relative image">
								<Link href="/product_details/product-view">
									<Image
										src="/asset/img/property-5.jpg"
										width={200}
										height={200}
										className="w-full h-full object-cover hover:scale-x-110"
										alt="image"
									/>
									<div className="absolute top-3 left-3 bg-fuchsia-800 px-5 py-2 text-center rounded-md text-white">
										<p>For Sell</p>
									</div>
									<div className="absolute bottom-0 left-6 bg-white font-medium leading-3 p-3 text-fuchsia-500 rounded-t-md">
										<p>Appartment</p>
									</div>
								</Link>
							</div>
							<div className="px-8">
								<dl className="mt-4 text-xs font-medium flex items-center row-start-2 sm:mt-1 sm:row-start-3 md:mt-2.5 lg:row-start-2">
									<dt className="sr-only">Reviews</dt>
									<dd className="text-fuchsia-600 flex items-center dark:text-indigo-400">
										<svg
											width="24"
											height="24"
											fill="none"
											aria-hidden="true"
											className="mr-1 stroke-current dark:stroke-indigo-500">
											<path
												d="m12 5 2 5h5l-4 4 2.103 5L12 16l-5.103 3L9 14l-4-4h5l2-5Z"
												strokeWidth={2}
												strokeLinecap="round"
												strokeLinejoin="round"
											/>
										</svg>
										<span>
											4.89 <span className="text-slate-400 font-normal">(128)</span>
										</span>
									</dd>
									<dt className="sr-only">Location</dt>
									<dd className="flex items-center">
										<svg
											width="2"
											height="2"
											aria-hidden="true"
											fill="currentColor"
											className="mx-3 text-slate-300">
											<circle cx="1" cy="1" r="1" />
										</svg>
										<svg
											width="24"
											height="24"
											fill="none"
											stroke="currentColor"
											strokeWidth={2}
											strokeLinecap="round"
											strokeLinejoin="round"
											className="mr-1 text-fuchsia-400 dark:text-slate-500"
											aria-hidden="true">
											<path d="M18 11.034C18 14.897 12 19 12 19s-6-4.103-6-7.966C6 7.655 8.819 5 12 5s6 2.655 6 6.034Z" />
											<path d="M14 11a2 2 0 1 1-4 0 2 2 0 0 1 4 0Z" />
										</svg>
										Ogele, Eiyenkorin, Kwara State
									</dd>
								</dl>
								<div className="text-left">
									<h5 className="text-2xl my-5 font-medium text-fuchsia-700">$12,345</h5>
									<Link
										href="/product_details/product-view"
										className="block hover:text-fuchsia-600 md:text-2xl sm:text-xl lg:text-3xl text-transform: capitalize font-semibold mb-1">
										golden estate for sell
									</Link>
									<p>
										Lorem ipsum, dolor sit amet consectetur adipisicing elit. Doloribus veritatis
										eveniet cumque laudantium ipsum nobis officia qui unde, optio esse.
									</p>
								</div>
								<div className="text-left my-4 text-lg text-transform: capitalize text-fuchsia-700 font-medium">
									<h4>Land Space: 10plot.</h4>
								</div>
								<div className="my-5 flex gap-2">
									<Link
										href="/product_details/product-view"
										className="text-xl text-center bg-fuchsia-600 w-full hover:bg-fuchsia-500 px-6 py-2 rounded-md text-white font-medium tracking-wider transition">
										Buy Now
									</Link>
								</div>
							</div>
						</div>
						{/* Cart Four */}
						<div className="flex flex-col shadow-xl rounded-2xl cart min-h-min: overflow-hidden">
							<div className="relative image">
								<Link href="/product_details/product-view">
									<Image
										src="/asset/img/property-1.jpg"
										width={200}
										height={200}
										className="w-full h-full object-cover hover:scale-x-110"
										alt="image"
									/>
									<div className="absolute top-3 left-3 bg-fuchsia-800 px-5 py-2 text-center rounded-md text-white">
										<p>For Sell</p>
									</div>
									<div className="absolute bottom-0 left-6 bg-white font-medium leading-3 p-3 text-fuchsia-500 rounded-t-md">
										<p>Appartment</p>
									</div>
								</Link>
							</div>
							<div className="px-8">
								<dl className="mt-4 text-xs font-medium flex items-center row-start-2 sm:mt-1 sm:row-start-3 md:mt-2.5 lg:row-start-2">
									<dt className="sr-only">Reviews</dt>
									<dd className="text-fuchsia-600 flex items-center dark:text-indigo-400">
										<svg
											width="24"
											height="24"
											fill="none"
											aria-hidden="true"
											className="mr-1 stroke-current dark:stroke-indigo-500">
											<path
												d="m12 5 2 5h5l-4 4 2.103 5L12 16l-5.103 3L9 14l-4-4h5l2-5Z"
												strokeWidth={2}
												strokeLinecap="round"
												strokeLinejoin="round"
											/>
										</svg>
										<span>
											4.89 <span className="text-slate-400 font-normal">(128)</span>
										</span>
									</dd>
									<dt className="sr-only">Location</dt>
									<dd className="flex items-center">
										<svg
											width="2"
											height="2"
											aria-hidden="true"
											fill="currentColor"
											className="mx-3 text-slate-300">
											<circle cx="1" cy="1" r="1" />
										</svg>
										<svg
											width="24"
											height="24"
											fill="none"
											stroke="currentColor"
											strokeWidth={2}
											strokeLinecap="round"
											strokeLinejoin="round"
											className="mr-1 text-fuchsia-400 dark:text-slate-500"
											aria-hidden="true">
											<path d="M18 11.034C18 14.897 12 19 12 19s-6-4.103-6-7.966C6 7.655 8.819 5 12 5s6 2.655 6 6.034Z" />
											<path d="M14 11a2 2 0 1 1-4 0 2 2 0 0 1 4 0Z" />
										</svg>
										Ogele, Eiyenkorin, Kwara State
									</dd>
								</dl>
								<div className="text-left">
									<h5 className="text-2xl my-5 font-medium text-fuchsia-700">$12,345</h5>
									<Link
										href="/product_details/product-view"
										className="block hover:text-fuchsia-600 md:text-2xl sm:text-xl lg:text-3xl text-transform: capitalize font-semibold mb-1">
										golden estate for sell
									</Link>
									<p>
										Lorem ipsum, dolor sit amet consectetur adipisicing elit. Doloribus veritatis
										eveniet cumque laudantium ipsum nobis officia qui unde, optio esse.
									</p>
								</div>
								<div className="text-left my-4 text-lg text-transform: capitalize text-fuchsia-700 font-medium">
									<h4>Land Space: 10plot.</h4>
								</div>
								<div className="my-5 flex gap-2">
									<Link
										href="/product_details/product-view"
										className="text-xl text-center bg-fuchsia-600 w-full hover:bg-fuchsia-500 px-6 py-2 rounded-md text-white font-medium tracking-wider transition">
										Buy Now
									</Link>
								</div>
							</div>
						</div>
						{/* Cart Five */}
						<div className="flex flex-col shadow-xl rounded-2xl cart min-h-min: overflow-hidden">
							<div className="relative image">
								<Link href="/product_details/product-view">
									<Image
										src="/asset/img/property-6.jpg"
										width={200}
										height={200}
										className="w-full h-full object-cover hover:scale-x-110"
										alt="image"
									/>
									<div className="absolute top-3 left-3 bg-fuchsia-800 px-5 py-2 text-center rounded-md text-white">
										<p>For Sell</p>
									</div>
									<div className="absolute bottom-0 left-6 bg-white font-medium leading-3 p-3 text-fuchsia-500 rounded-t-md">
										<p>Appartment</p>
									</div>
								</Link>
							</div>
							<div className="px-8">
								<dl className="mt-4 text-xs font-medium flex items-center row-start-2 sm:mt-1 sm:row-start-3 md:mt-2.5 lg:row-start-2">
									<dt className="sr-only">Reviews</dt>
									<dd className="text-fuchsia-600 flex items-center dark:text-indigo-400">
										<svg
											width="24"
											height="24"
											fill="none"
											aria-hidden="true"
											className="mr-1 stroke-current dark:stroke-indigo-500">
											<path
												d="m12 5 2 5h5l-4 4 2.103 5L12 16l-5.103 3L9 14l-4-4h5l2-5Z"
												strokeWidth={2}
												strokeLinecap="round"
												strokeLinejoin="round"
											/>
										</svg>
										<span>
											4.89 <span className="text-slate-400 font-normal">(128)</span>
										</span>
									</dd>
									<dt className="sr-only">Location</dt>
									<dd className="flex items-center">
										<svg
											width="2"
											height="2"
											aria-hidden="true"
											fill="currentColor"
											className="mx-3 text-slate-300">
											<circle cx="1" cy="1" r="1" />
										</svg>
										<svg
											width="24"
											height="24"
											fill="none"
											stroke="currentColor"
											strokeWidth={2}
											strokeLinecap="round"
											strokeLinejoin="round"
											className="mr-1 text-fuchsia-400 dark:text-slate-500"
											aria-hidden="true">
											<path d="M18 11.034C18 14.897 12 19 12 19s-6-4.103-6-7.966C6 7.655 8.819 5 12 5s6 2.655 6 6.034Z" />
											<path d="M14 11a2 2 0 1 1-4 0 2 2 0 0 1 4 0Z" />
										</svg>
										Ogele, Eiyenkorin, Kwara State
									</dd>
								</dl>
								<div className="text-left">
									<h5 className="text-2xl my-5 font-medium text-fuchsia-700">$12,345</h5>
									<Link
										href="/product_details/product-view"
										className="block hover:text-fuchsia-600 md:text-2xl sm:text-xl lg:text-3xl text-transform: capitalize font-semibold mb-1">
										golden estate for sell
									</Link>
									<p>
										Lorem ipsum, dolor sit amet consectetur adipisicing elit. Doloribus veritatis
										eveniet cumque laudantium ipsum nobis officia qui unde, optio esse.
									</p>
								</div>
								<div className="text-left my-4 text-lg text-transform: capitalize text-fuchsia-700 font-medium">
									<h4>Land Space: 10plot.</h4>
								</div>
								<div className="my-5 flex gap-2">
									<Link
										href="/product_details/product-view"
										className="text-xl text-center bg-fuchsia-600 w-full hover:bg-fuchsia-500 px-6 py-2 rounded-md text-white font-medium tracking-wider transition">
										Buy Now
									</Link>
								</div>
							</div>
						</div>
						{/* Caert Six */}
						<div className="flex flex-col shadow-xl rounded-2xl cart min-h-min: overflow-hidden">
							<div className="relative image">
								<Link href="/product-view">
									<Image
										src="/asset/img/property-4.jpg"
										width={200}
										height={200}
										className="w-full h-full object-cover hover:scale-x-110"
										alt="image"
									/>
									<div className="absolute top-3 left-3 bg-fuchsia-800 px-5 py-2 text-center rounded-md text-white">
										<p>For Sell</p>
									</div>
									<div className="absolute bottom-0 left-6 bg-white font-medium leading-3 p-3 text-fuchsia-500 rounded-t-md">
										<p>Appartment</p>
									</div>
								</Link>
							</div>
							<div className="px-8">
								<dl className="mt-4 text-xs font-medium flex items-center row-start-2 sm:mt-1 sm:row-start-3 md:mt-2.5 lg:row-start-2">
									<dt className="sr-only">Reviews</dt>
									<dd className="text-fuchsia-600 flex items-center dark:text-indigo-400">
										<svg
											width="24"
											height="24"
											fill="none"
											aria-hidden="true"
											className="mr-1 stroke-current dark:stroke-indigo-500">
											<path
												d="m12 5 2 5h5l-4 4 2.103 5L12 16l-5.103 3L9 14l-4-4h5l2-5Z"
												strokeWidth={2}
												strokeLinecap="round"
												strokeLinejoin="round"
											/>
										</svg>
										<span>
											4.89 <span className="text-slate-400 font-normal">(128)</span>
										</span>
									</dd>
									<dt className="sr-only">Location</dt>
									<dd className="flex items-center">
										<svg
											width="2"
											height="2"
											aria-hidden="true"
											fill="currentColor"
											className="mx-3 text-slate-300">
											<circle cx="1" cy="1" r="1" />
										</svg>
										<svg
											width="24"
											height="24"
											fill="none"
											stroke="currentColor"
											strokeWidth={2}
											strokeLinecap="round"
											strokeLinejoin="round"
											className="mr-1 text-fuchsia-400 dark:text-slate-500"
											aria-hidden="true">
											<path d="M18 11.034C18 14.897 12 19 12 19s-6-4.103-6-7.966C6 7.655 8.819 5 12 5s6 2.655 6 6.034Z" />
											<path d="M14 11a2 2 0 1 1-4 0 2 2 0 0 1 4 0Z" />
										</svg>
										Ogele, Eiyenkorin, Kwara State
									</dd>
								</dl>
								<div className="text-left">
									<h5 className="text-2xl my-5 font-medium text-fuchsia-700">$12,345</h5>
									<Link
										href="/product-view"
										className="block hover:text-fuchsia-600 lg:text-5xl sm:text-xl md:text-3xl text-transform: capitalize font-semibold mb-1">
										golden estate for sell
									</Link>
									<p>
										Lorem ipsum, dolor sit amet consectetur adipisicing elit. Doloribus veritatis
										eveniet cumque laudantium ipsum nobis officia qui unde, optio esse.
									</p>
								</div>
								<div className="text-left my-4 text-lg text-transform: capitalize text-fuchsia-700 font-medium">
									<h4>Land Space: 10plot.</h4>
								</div>
								<div className="my-5 flex gap-2">
									<Link
										href="/product-view"
										className="text-xl text-center bg-fuchsia-600 w-full hover:bg-fuchsia-500 px-6 py-2 rounded-md text-white font-medium tracking-wider transition">
										Buy Now
									</Link>
								</div>
							</div>
						</div>
					</div>
					{/* 
            <div className="flex justify-center items-center">
                <Link href="property.html" className="bg-fuchsia-600 text-white hover:bg-fuchsia-500 rounded-lg mt-7 p-4">Browse More Property</Link>
            </div> */}
				</div>
			</section>
		</>
	);
};

export default cart;
