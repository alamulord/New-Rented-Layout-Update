export default function page() {
	return (
		<div className="grid lg:grid-cols-3 sm:grid-cols-1 md:grid-cols-2 ">
			<section className="col-span-2">
				<div className="container mx-auto p-6 flex flex-col md:flex-col justify-center items-center bg-fuchsia-100 rounded max-w-[1120px]">
					<div className="image-collection ">
						<img
							src="/asset/img/property-5.jpg"
							className="w-full h-full rounded-lg object-cover"
							alt=""
						/>
					</div>
					<div className="flex flex-row justify-center items-center md:flex-row mt-3 p-3 image-collection ">
						<a
							href="#"
							className="border-4 border-white rounded-lg mr-3 hover:border-fuchsia-500  active:border-fuchsia-300 md:border-8">
							<img src="/asset/img/property-1.jpg" className="object-cover rounded" alt="" />
						</a>
						<a
							href="#"
							className="border-4 border-white rounded-lg mr-3 hover:border-fuchsia-500  active:border-fuchsia-300 md:border-8">
							<img src="/asset/img/property-3.jpg" className="object-cover rounded" alt="" />
						</a>
						<a
							href="#"
							className="border-4 border-white rounded-lg mr-3 hover:border-fuchsia-500  active:border-fuchsia-300 md:border-8">
							<img src="/asset/img/property-6.jpg" className=" object-cover rounded" alt="" />
						</a>
						<a
							href="#"
							className="border-4 border-white rounded-lg mr-3 hover:border-fuchsia-500  active:border-fuchsia-300 md:border-8">
							<img src="/asset/img/property-2.jpg" className="object-cover rounded" alt="" />
						</a>
					</div>
				</div>
			</section>
			<aside className=" items-start md:justify-center">
				<div className="container flex flex-col flex-wrap my-6 p-6">
					<h2 className="text-4xl font-medium my-4">Golden Estate</h2>
					<p className="text-xl leading-3 font-medium mb-4">$320, 000</p>
					<div className="flex text-[16px] mb-4">
						<i className="bi bi-star-fill mr-1 text-fuchsia-600"></i>
						<i className="bi bi-star-fill mr-1 text-fuchsia-600"></i>
						<i className="bi bi-star-fill mr-1 text-fuchsia-600"></i>
						<i className="bi bi-star mr-1"></i>
						<i className="bi bi-star"></i>
						<span className="opacity-60 ms-2">3.4 reviews</span>
					</div>
					<p className="leading-8 text-md">
						Lorem ipsum dolor sit, amet consectetur adipisicing elit. Modi, harum. Aliquid
						consequuntur iusto quaerat excepturi id doloribus exercitationem at inventore.
						Aperiam nemo ea sit deleniti, dignissimos praesentium commodi tempore natus!
					</p>
					<a
						href="/product_details/checkout"
						className="text-xl mt-3 text-center bg-fuchsia-600 w-full hover:bg-fuchsia-500 px-6 py-2 rounded-md text-white font-medium tracking-wider transition">
						Checkout
					</a>
					<div className="dec mt-6">
						<h3 className="font-medium leading-8">Description:</h3>
						<p className="text-[14px] leading-5 opacity-60">
							Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint, impedit corrupti
							esse odit asperiores libero incidunt dolores repellat maiores atque modi
							aliquid, porro ut dignissimos <br /> <br /> aspernatur dolorem! Dolore at ipsam
							ad veritatis, placeat inventore maiores eligendi tempora dolor architecto
							voluptatibus aliquam laudantium illum quidem! Dolore eveniet esse aliquam
							molestiae vitae.
						</p>
					</div>
				</div>
			</aside>
		</div>
	);
}
