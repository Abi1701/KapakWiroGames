import FileUploadIcon from "@mui/icons-material/FileUpload";
import React, { useState } from "react";
import Table from "../src/component/table";
import style from "./../styles/profilePage.module.css";
import { uploadImages } from "../src/store/actions/authActions"

export default function profilePage() {
  const [isUpload, setIsUpload] = useState(false);
  const [isUploaded, setIsUploaded] = useState(false);

  const handleClick = () => {
    setIsUpload(true);
    setTimeout(() => {
      setIsUpload(false);
      setIsUploaded(true);
      setTimeout(() => setIsUploaded(false), 2500);
    }, 2000);
    console.log('clicked')
  };
  const updateImages =(data)=>{
    dispatch(uploadImages(data))
  }
  return (
    <div className={style.main}>
      <div className={style.root}>
        <div className={style.card}>
          <div className={style.cardProfile}>
            <label className={style.label}>
              Username
              <input
                className={style.user}
                type="text"
                placeholder="Username"
              />
            </label>
            <label className={style.label}>
              Email
              <input
                className={style.user}
                type="text"
                placeholder="Example@gmail.com"
              />
            </label>
            <button
              type="submit"
              onClick={handleClick}
              className={
                isUpload || isUploaded ? `${style.btn}` : `${style.btn}`
              }
            >
              <FileUploadIcon
                className={isUpload ? "" : isUploaded ? `${style.icon}` : ""}
              />
              {isUpload || isUploaded ? "Loading" : "Upload"}
            </button>
          </div>
          <div className={style.table}>
            <Table />
          </div>
        </div>
        <div className={style.cardMissi}>
          <div className={style.percent}>
            <div>87%</div>
          </div>
          <div className={style.mission}>Mission:</div>
        </div>
      </div>
      <div class={style.customshapedividerbottom1668858171}>
        <svg
          data-name="Layer 1"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1200 120"
          preserveAspectRatio="none"
        >
          <path
            d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z"
            class={style.shapefill}
          ></path>
        </svg>
      </div>
    </div>
  );
}
