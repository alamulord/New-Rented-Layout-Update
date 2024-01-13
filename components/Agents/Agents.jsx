import Image from 'next/image';
import {
	faFacebook,
	faTwitter,
	faTelegram,
} from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const Agents = () => {
	return (
		<>
			{/* <!-- Our Agent --> */}
			<section>
				<div className="text-center mt-[7rem] flex justify-center items-center flex-col">
					<h2 className="text-5xl mb-5 font-semibold">Property Agents</h2>
					<p className="w-1/2 text-center text-2xl text-gray-400 hidden md:block">
						Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quia ea fuga sint est
						quasi amet iste ad nulla exercitationem voluptatem tenetur et autem nisi
						temporibus, illo delectus. Assumenda, necessitatibus nobis.
					</p>
				</div>
				<div className="max-w-[1100px] grid grid-auto-fit mx-auto py-6 gap-3 place-items-center">
					<div className="card shadow-xl w-[15rem]">
						<div className="relative">
							<Image
								src="/asset/img/team-1.jpg"
								alt=""
								width={400}
								height={400}
								className="w-full h-full object-cover"
							/>
							<div className="absolute -bottom-2 left-10 text-center">
								<span className="w-24 h-24 p-3 shadow-md mr-5 hover:bg-fuchsia-300 hover:text-white bg-white rounded-full">
									<FontAwesomeIcon icon={faFacebook} className="" />
								</span>
								<span className="w-24 h-24 p-3 shadow-md mr-5 bg-white rounded-full hover:bg-fuchsia-300 hover:text-white">
									<FontAwesomeIcon icon={faTwitter} className="" />
								</span>
								<span className="w-24 h-24 p-3 shadow-md  bg-white rounded-full hover:bg-fuchsia-300 hover:text-white">
									<FontAwesomeIcon icon={faTelegram} className="" />
								</span>
							</div>
						</div>
						<div className="text-center my-11">
							<h3 className="text-2xl  font-bold">Full Name</h3>
							<h5>Designation</h5>
						</div>
					</div>
					<div className="card shadow-xl w-[15rem]">
						<div className="relative">
							<Image
								src="/asset/img/team-2.jpg"
								alt=""
								width={400}
								height={400}
								className="w-full h-full object-cover"
							/>
							<div className="absolute -bottom-2 left-10 text-center">
								<span className="w-24 h-24 p-3 shadow-md mr-5 hover:bg-fuchsia-300 hover:text-white bg-white rounded-full">
									<FontAwesomeIcon icon={faFacebook} className="" />
								</span>
								<span className="w-24 h-24 p-3 shadow-md mr-5 bg-white rounded-full hover:bg-fuchsia-300 hover:text-white">
									<FontAwesomeIcon icon={faTwitter} />
								</span>
								<span className="w-24 h-24 p-3 shadow-md  bg-white rounded-full hover:bg-fuchsia-300 hover:text-white">
									<FontAwesomeIcon icon={faTelegram} className="" />
								</span>
							</div>
						</div>
						<div className="text-center my-11">
							<h3 className="text-2xl  font-bold">Full Name</h3>
							<h5>Designation</h5>
						</div>
					</div>
					<div className="card shadow-xl w-[15rem]">
						<div className="relative">
							<Image
								src="/asset/img/team-4.jpg"
								alt=""
								width={400}
								height={400}
								className="w-full h-full object-cover"
							/>
							<div className="absolute -bottom-2 left-10 text-center text-xl">
								<span className="w-24 h-24 p-3 shadow-md mr-5 hover:bg-fuchsia-300 hover:text-white bg-white rounded-full">
									<FontAwesomeIcon icon={faFacebook} className="" />
								</span>
								<span className="w-24 h-24 p-3 shadow-md mr-5 bg-white rounded-full hover:bg-fuchsia-300 hover:text-white">
									<FontAwesomeIcon icon={faTwitter} className="" />
								</span>
								<span className="w-24 h-24 p-3 shadow-md  bg-white rounded-full hover:bg-fuchsia-300 hover:text-white">
									<FontAwesomeIcon icon={faTelegram} className="" />
								</span>
							</div>
						</div>
						<div className="text-center my-11">
							<h3 className="text-2xl  font-bold">Full Name</h3>
							<h5>Designation</h5>
						</div>
					</div>
					<div className="card shadow-xl w-[15rem]">
						<div className="relative">
							<Image
								src="/asset/img/team-3.jpg"
								alt=""
								width={400}
								height={400}
								className="w-full h-full object-cover"
							/>
							<div className="absolute -bottom-2 left-10 text-xl text-center">
								<span className="w-24 h-24 p-3 shadow-md mr-5 hover:bg-fuchsia-300 hover:text-white bg-white rounded-full">
									<FontAwesomeIcon icon={faFacebook} className="" />
								</span>
								<span className="w-24 h-24 p-3 shadow-md mr-5 bg-white rounded-full hover:bg-fuchsia-300 hover:text-white">
									<FontAwesomeIcon icon={faTwitter} className="" />
								</span>
								<span className="w-24 h-24 p-3 shadow-md  bg-white rounded-full hover:bg-fuchsia-300 hover:text-white">
									<FontAwesomeIcon icon={faTelegram} className="" />
								</span>
							</div>
						</div>
						<div className="text-center my-11">
							<h3 className="text-2xl  font-bold">Full Name</h3>
							<h5>Designation</h5>
						</div>
					</div>
				</div>
			</section>
		</>
	);
};

export default Agents;
