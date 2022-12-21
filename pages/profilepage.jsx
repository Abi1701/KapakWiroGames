import ContentTable from "../src/component/table.jsx";
import React, { useState } from "react";
import {
	ContainerPage,
	ContentContainer,
	ContentContainerPage,
	ProfileContent,
} from "../src/component/profilePage";
import OutlinedCard from "../src/component/cardProfile";
export default function profilePage() {
	// const [isUpload, setIsUpload] = useState(false);
	// const [isUploaded, setIsUploaded] = useState(false);

	// const handleClick = () => {
	//   setIsUpload(true);
	//   setTimeout(() => {
	//     setIsUpload(false);
	//     setIsUploaded(true);
	//     setTimeout(() => setIsUploaded(false), 2500);
	//   }, 2000);
	//   console.log('clicked')
	// };
	// const updateImages =(data)=>{
	//   dispatch(uploadImages(data))
	// }
	return (
		<ContainerPage>
			<ContentContainerPage>
				<OutlinedCard />
				<ContentTable />
			</ContentContainerPage>
		</ContainerPage>
	);
}
