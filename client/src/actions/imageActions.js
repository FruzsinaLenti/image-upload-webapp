import axios from "axios";
import {
	GET_ERRORS,
} from "./types";

export const uploadImage = (file, onUploadProgress) => dispatch => {
  let formData = new FormData();

  formData.append("file", file);

	axios
		.post("/api/upload-image", formData, {
      headers: {
        "Content-Type": "multipart/form-data",
      },
      onUploadProgress,
    })
		.catch(err =>
			dispatch({
				type: GET_ERRORS,
				payload: err.response.data
			})
		);
};

export const getFiles = () => dispatch => {
	axios
		.get("/api/files")
		.catch(err =>
			dispatch({
				type: GET_ERRORS,
				payload: err.response.data
			})
		);
};