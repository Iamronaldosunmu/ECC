import type { NextPage } from "next";
import Link from "next/link";
import Details from "../PersonalDetails";
import { useState, useEffect } from "react";
import { format, parse } from "fecha";

import ComplaintsCardSection from "./../../../../Sections/ComplaintsCardSection/index";
import { useCookies } from "react-cookie";
const profile: NextPage = (props) => {
	const [cookie, setCookie] = useCookies(["user"]);
	const [user, setUser] = useState({
		firstName: "",
		lastName: "",
		email: "",
		phoneNumber: "",
		createdAt: "",
		address: "",
		state: "",
	});
	useEffect(() => {
		setUser(cookie.user);
	}, []);
	const [isShowing, setIsShowing] = useState("personal");
	return (
		<div>
			<div className=" lg:block hidden w-full bg-white rounded-[20px] pb-[30px]">
				<img
					src="/icons/dashboard-icons/profile-header.svg"
					className="rounded-t-[20px] w-full"
					alt=""
				/>
				<div className="mx-auto w-[158px] h-[158px] -mt-[115px] relative">
					<img
						src="/images/dummy-profile.png"
						alt=""
					/>
					<img
						src="/icons/dashboard-icons/camera.svg"
						className="absolute bottom-0 right-0 cursor-pointer"
						alt=""
					/>
				</div>
				<div className="text-center mt-[19px] ">
					<p className="text-[24px] font-[500]">{`${user.firstName} ${user.lastName}`}</p>
					<p className="mt-[10px] text-[18px] font-[500]">{`${user.email}`}</p>
				</div>
				<div className="mx-[74.5px] mt-[29px] flex flex-col space-y-[96px]">
					<div className="flex flex-row space-x-[156px]">
						<div>
							<div>
								<div className="border-b-[0.5px] border-b-[#C5C5C5] w-[165px]">
									<p className="text-eccblue text-[16px]">Phone Number</p>
								</div>
								<div className="mt-[10px]">
									<p className="text-[18px]">{`${user.phoneNumber}`}</p>
								</div>
							</div>
						</div>
						<div>
							<div>
								<div className="border-b-[0.5px] border-b-[#C5C5C5] w-[122px]">
									<p className="text-eccblue text-[16px]">Date of Birth</p>
								</div>
								<div className="mt-[10px]">{user.createdAt && <p className="text-[18px]">{`${format(parse(user.createdAt, "isoDateTime")!, "isoDate")}`}</p>}</div>
							</div>
						</div>
					</div>
					<div className="flex flex-row space-x-[81px]">
						<div>
							<div>
								<div className="border-b-[0.5px] border-b-[#C5C5C5] w-[240px]">
									<p className="text-eccblue text-[16px]">Address</p>
								</div>
								<div className="mt-[10px]">
									<p className="text-[18px] w-[219px]">{`${user.address}`}</p>
								</div>
							</div>
						</div>
						<div>
							<div>
								<div className="border-b-[0.5px] border-b-[#C5C5C5] w-[103px]">
									<p className="text-eccblue text-[16px]">State</p>
								</div>
								<div className="mt-[10px]">
									<p className="text-[18px]">{`${user.state}`}</p>
								</div>
							</div>
						</div>
					</div>
				</div>
				<div className="px-[73px] bg-eccblue mx-[73px] rounded-xl mt-[70px] flex flex-row justify-center">
					<img
						className="mr-4"
						src="/icons/dashboard-icons/camera-01.svg"
						alt=""
					/>
					<p className="text-center text-white font-[600] py-[16.5px]">Change Photo</p>
				</div>
			</div>

			<div className="lg:hidden w-full bg-clearblue">
				<img
					src="/icons/dashboard-icons/profile-header.svg"
					className="rounded-t-[20px] w-full"
					alt=""
				/>
				<div className="mx-auto w-[120px] h-[120px] -mt-[70px] relative">
					<img
						src="/images/dummy-profile.png"
						alt=""
					/>
					<img
						src="/icons/dashboard-icons/camera.svg"
						className="absolute bottom-0 right-0 cursor-pointer"
						alt=""
					/>
				</div>
				<div className="text-center mt-[19px] ">
					<p className="text-[18px] font-[600]">Voke Onoriode</p>
					<p className="mt-[10px] text-[16px] text-gray-500 font-[500]">Vokeonoriode@gmail.com</p>
				</div>
				<div className="w-[90%] mt-8 mx-auto flex flex-row items-center justify-between text-sm border-b border-gray-500">
					<div
						onClick={() => {
							setIsShowing("personal");
						}}
						style={{ borderBottomColor: isShowing === "personal" ? "rgb(11,99,197)" : "transparent" }}
						className=" border-b-[2px] "
					>
						Personal Information
					</div>
					<div
						style={{ borderBottomColor: isShowing === "complaints" ? "rgb(11,99,197)" : "transparent" }}
						className="border-b-[2px]"
						onClick={() => {
							setIsShowing("complaints");
						}}
					>
						Complaint Statistics
					</div>
				</div>

				{isShowing === "personal" ? (
					<div className="bg-clearblue">
						<ul>
							<Details
								label="
						Phone Number"
								text="09065748390"
							/>
							<Details
								label="
						Date of Birth"
								text="12-01-2001"
							/>
							<Details
								label="Address"
								text="4. jubril Adejumobi Street Lagos, Nigeria"
							/>
							<Details
								label="State"
								text="Lagos"
							/>
						</ul>
					</div>
				) : (
					<div className="my-6">
						<ComplaintsCardSection />
					</div>
				)}
			</div>
		</div>
	);
};

export default profile;
