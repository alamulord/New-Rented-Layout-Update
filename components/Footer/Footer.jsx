import {
	faFacebook,
	faTwitter,
	faTelegram,
	faTiktok,
} from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Link from 'next/link';

const Footer = () => {
	return (
		<>
			<footer className="bg-fuchsia-400">
				<div className="container flex flex-col max-w-7xl justify-between md:flex-row mx-auto py-10 px-6 space-y-8 md:space-y-0">
					<div className="flex flex-col items-justify-between space-y-0 md:flex-col md:space-y-12 md:items-start">
						<div className="logo">
							<Link href="/" className="text-3xl font-medium text-white">
								Ren<span className="text-3xl text-fuchsia-900">T</span>ed
							</Link>
						</div>
						<div className="flex space-x-4 text-3xl">
							<Link href="#">
								<FontAwesomeIcon
									icon={faTwitter}
									className="hover:text-white hover:transition-all"
								/>
							</Link>
							<Link href="#">
								<FontAwesomeIcon
									icon={faFacebook}
									className="hover:text-white hover:transition-all"
								/>
							</Link>
							<Link href="#">
								<FontAwesomeIcon
									icon={faTelegram}
									className="hover:text-white hover:transition-all"
								/>
							</Link>
							<Link href="#">
								<FontAwesomeIcon
									icon={faTiktok}
									className="hover:text-white hover:transition-all"
								/>
							</Link>
						</div>
					</div>
					<div className="flex justify-start md:justify-around space-y-32">
						<div className="flex flex-col space-y-3 text-white">
							<Link
								href="#"
								className="text-xl  hover:text-fuchsia-200  hover:transition-all">
								HOME
							</Link>
							<Link
								href="#Property"
								className="text-xl  hover:text-fuchsia-200  hover:transition-all">
								PROPERTY
							</Link>
							<Link href="#" className="text-xl hover:text-fuchsia-200 hover:transition-all">
								ABOUT
							</Link>
						</div>
					</div>
					<div className="flex justify-start md:justify-around space-y-32">
						<div className="flex flex-col space-y-3 text-white">
							<h3 className="text-xl font-medium">Get In Touch</h3>
							<span className="text-xl">
								<i className="mr-3 bi bi-envelope-at"></i>123example@gmial.com
							</span>
							<span className="text-xl">
								<i className="mr-3 bi bi-geo-alt"></i>123, Moon and Star
							</span>
							<span className="text-xl">
								<i className="mr-3 bi bi-telephone"></i>1234-2345-3456
							</span>
						</div>
					</div>
				</div>
				<div className="text-center mx-auto mt-6 p-6">
					<hr className="w-full mb-3" />
					<h3>Futca Accademy &copy; All right | Reserved</h3>
				</div>
			</footer>
		</>
	);
};

export default Footer;
