import Image from 'next/image';

export default function page() {
	return (
		<div className="max-w-[1500px] mb-3">
			<div className="checkout_details mx-auto bg-white shadow-2xl rounded-2xl p-3">
				<h2 className="text-center my_top mb-5 text-fuchsia-600">Checkout page</h2>
				<div className="grid grid-auto-fit-lg my-3">
					<div className="img">
						<Image
							src="/asset/img/property-1.jpg"
							width={500}
							height={100}
							className="check-img w-full"
							alt="image"
						/>
					</div>
					<div className="content">
						<h5>Price: $36, 200</h5>
						<p>A beutiful two bed room flat. Nice house for your taste </p>
						<p>Located at Ilorin Kwara state</p>
					</div>
					<hr />
				</div>
				<div className="grid grid-auto-fit-lg mb-3">
					<div className="img">
						<Image
							src="/asset/img/property-1.jpg"
							width={500}
							height={100}
							className="check-img"
							alt="image"
						/>
					</div>
					<div className="content">
						<h5>Price: $36,200</h5>
						<p>A beutiful two bed room flat. Nice house for your taste </p>
						<p>Located at Ilorin Kwara state</p>
					</div>
					<hr />
				</div>
				<div className="grid grid-auto-fit-lg mb-3">
					<div className="img">
						<Image
							src="/asset/img/property-1.jpg"
							width={500}
							height={100}
							className="check-img"
							alt="image"
						/>
					</div>
					<div className="content">
						<h5>Price: $36, 200</h5>
						<p>A beutiful two bed room flat. Nice house for your taste </p>
						<p>Located at Ilorin Kwara state</p>
					</div>
					<hr />
				</div>
				<h1 className="text-md font-bold leading-5 float-right mr-6 mb-3">
					Total price: $600
				</h1>
				<div>
					<button
						type="submit"
						className="flex w-full text-uppercase justify-center rounded-md bg-slate-100 px-3 py-2 
                            text-sm font-semibold leading-6 text-fuchsia-700 shadow-sm hover:bg-fuchsia-500 focus-visible:outline 
                            focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600 hover:text-white ">
						Procced to payment
					</button>
				</div>
			</div>
		</div>
	);
}
