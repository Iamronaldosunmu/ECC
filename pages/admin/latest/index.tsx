import ScamTable from "../../../Components/Admin/Latest/ScamTable";
import Wrapper from "../../../Components/Admin/Navs/navWrapper";
import ScamData from "../../../Components/LatestScams/ScamData";
import { useState, useEffect } from "react";
import PaginationSection from "../../../Components/LatestScams/PaginationSection";
import SearchBar from "../../../Components/Admin/searchbar";

const Latest = () => {
	const [scamData, setScamData] = useState(ScamData);
	const [maxNumber, setMaxNumber] = useState(8);
	const [pageNumber, setPageNumber] = useState(1);
	const [value, setValue] = useState("");
	useEffect(() => {
		function filterBySearch() {
			const filteredData = scamData.filter((scam) => scam.website.toLowerCase().includes(value.toLowerCase()) || scam.scammer.toLowerCase().includes(value.toLowerCase()) || scam.phoneNumber.toLowerCase().includes(value.toLowerCase()));
			if (filteredData.length > 0) {
				setScamData(filteredData);
			} else setScamData(ScamData);
			if (value.length === 0) {
				setScamData(ScamData);
			}
			setPageNumber(1);
		}

		filterBySearch();
	}, [value]);
	return (
		<Wrapper>
			<div>
				{scamData.length > 0 && (
					<>
						<div className="bg-white rounded-[15px]">
							<div className="w-full h-[100px] flex flext-col items-center justify-between px-4">
								<div>
									<SearchBar
										value={value}
										setValue={setValue}
									/>
								</div>
								<button
									//disabled={isOperation}
									// onClick={() => {
									// 	setOperation(true);
									// 	setOperationType("add");
									// 	setUserId("");
									// }}
									className={`h-[50px] ${false ? "bg-[#838181]" : "bg-eccblue"}  flex flex-row items-center gap-x-4 rounded-md text-white w-auto px-2`}
								>
									<img
										src="../icons/admin-icons/userPlus.svg"
										alt=""
									/>
									Add Scam
								</button>
							</div>
							<ScamTable
								ScamData={scamData}
								maxNumber={maxNumber}
								pageNumber={pageNumber}
							/>
							<div className="bg-white rounded-b-[15px] px-4 justify-between flex flex-row items-center ">
								{maxNumber <= 5 ? (
									<div className="mb-6">
										<PaginationSection
											setSearchResults={undefined}
											pageSize={true}
											searchResults={scamData}
											maxResultsPerPage={maxNumber}
											currentSearchPage={pageNumber}
											setCurrentSearchPage={setPageNumber}
											numberOfPages={Math.ceil(scamData.length / maxNumber)}
										/>
									</div>
								) : (
									<div className="mb-6">
										<PaginationSection
											setSearchResults={undefined}
											pageSize={false}
											searchResults={scamData}
											maxResultsPerPage={maxNumber}
											currentSearchPage={pageNumber}
											setCurrentSearchPage={setPageNumber}
											numberOfPages={Math.ceil(scamData.length / maxNumber)}
										/>
									</div>
								)}

								<div>
									<p>{`Showing ${(pageNumber - 1) * maxNumber + 1} to ${(pageNumber - 1) * maxNumber + 1 + (maxNumber - 1) > scamData.length ? scamData.length : (pageNumber - 1) * maxNumber + 1 + (maxNumber - 1)} of ${scamData.length}`}</p>
								</div>

								<div className=" flex flex-row items-center">
									<div>
										<p>Rows per page</p>
									</div>
									<div>
										<input
											className="w-[30px] focus:outline-none border border-solid border-black ml-4"
											type="number"
											max={9}
											min={1}
											value={maxNumber}
											onChange={(e) => setMaxNumber(parseInt(e.target.value))}
										/>
									</div>
								</div>
							</div>
						</div>
					</>
				)}
			</div>
		</Wrapper>
	);
};

export default Latest;
