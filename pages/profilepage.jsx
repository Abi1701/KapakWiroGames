import FileUploadIcon from "@mui/icons-material/FileUpload";
import Image from "next/image";
import ContentTable from '../src/component/table'
import React, { useState } from "react";
import { ContainerPage, ContentContainer, InputContainer, ProfileContent, ProfileContentInner, ProfileContentInput, UpdateImage, UpdateImageContainer } from "../src/component/profilePage";

import { width } from "@mui/system";
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
      <ContentContainer>
      <ProfileContent>
      <OutlinedCard />
      </ProfileContent>
      <ContentTable />
      </ContentContainer>
          </ContainerPage>
  );
}
