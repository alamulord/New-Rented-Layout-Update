import Image from 'next/image';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCalendar } from '@fortawesome/free-regular-svg-icons';
import { faPhone } from '@fortawesome/free-solid-svg-icons';

const Agent_call = () => {
	return (
		<>
			{/* <!-- Agent Call --> */}
			<section>
				<div className="container max-w-[1100px] flex flex-col-reverse justify-between items-center md:flex-row mx-auto p-6 mt-[7rem] border-dashed bg-gray-50 border-fuchsia-300 border rounded-lg outline-[1.2rem] outline-fuchsia-200 outline">
					<div className="img-left mr-11">
						<Image
							src="/asset/img/call-to-action.jpg"
							width={700}
							height={700}
							className="w-full h-full object-cover rounded-lg"
							alt="image"
						/>
					</div>
					<div className="text-left flex-col ">
						<h1 className="font-semibold text-[3.3rem] leading-tight">
							Contact With <br />
							Our Certified Agent
						</h1>
						<p className="text-gray-500 my-3 text-xl">
							Eirmod sed ipsum dolor sit rebum magna erat. Tempor lorem kasd vero ipsum sit
							sit diam justo sed vero dolor duo.
						</p>
						<div className="flex my-3 gap-5">
							<button className="bg-white text-fuchsia-700 p-4 outline-none border-2 font-medium text-xl border-fuchsia-300 rounded-lg hover:bg-fuchsia-500 hover:text-white">
								<FontAwesomeIcon icon={faPhone} className="mr-3" />
								Call Us Now
							</button>
							<button className="bg-fuchsia-600 text-white p-4 outline-none border-2 font-medium text-xl border-fuchsia-300 rounded-lg hover:bg-fuchsia-400 hover:text-white">
								<FontAwesomeIcon icon={faCalendar} className=" mr-3" />
								Get Appointment
							</button>
						</div>
					</div>
				</div>
			</section>
		</>
	);
};

export default Agent_call;
