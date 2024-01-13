import Image from 'next/image';
import Link from 'next/link';

const UserProfile = () => {
	return (
		<main className="user_profile">
			<div className="profile">
				<div className="profile_cover">
					<Image
						src="/asset/img/header.jpg"
						className="cover_picture bg-cover bg-center"
						alt="profile_cover"
						width={500}
						height={500}
					/>
				</div>
				<div className="profile_pic">
					<Image
						src="/asset/img/testimonial-1.jpg"
						width={500}
						height={500}
						className="profile_picture"
						alt="profile_cover"
					/>
				</div>
			</div>
			<div className="container">
				<div className="user-details w-2/4 mx-auto max-w-[620px] my-3">
					<div className="bg-white rounded-2xl shadow-2xl p-4">
						<h1 className="heading uppercase text-center py-1 text-xl font-bold mb-5">
							users details
						</h1>
						<div className="flex justify-between">
							<h2 className="font-bold text-md">Firstname:</h2>
							<h2>Aderigbigbe</h2>
						</div>
						<div className="flex justify-between">
							<h2 className="font-bold text-md">Lastname:</h2>
							<h2>Deborah</h2>
						</div>
						<div className="flex justify-between">
							<h2 className="font-bold text-md">Email:</h2>
							<h2>aderigbigbedeborah@rented.com.ng</h2>
						</div>
						<div className="flex justify-between">
							<h2 className="font-bold text-md">Tel:</h2>
							<h2>+234 0000000000</h2>
						</div>
						<div className="edit_btn">
							<Link
								href="/user_profile/1/user-profile-edit"
								className="flex justify-center w-2/4 rounded-md bg-fuchsia-600 px-3 py-2 mt-4	
                            text-base font-semibold leading-6 text-white shadow-sm hover:bg-white hover:shadow-lg focus-visible:outline 
                            focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600 hover:text-fuchsia-500 ">
								Edit Profile
							</Link>
						</div>
					</div>
				</div>
			</div>
		</main>
	);
};

export default UserProfile;
