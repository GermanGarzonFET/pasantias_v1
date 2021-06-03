import '../styles/main.css';
import _ from 'lodash';
import {API_BASE_URL} from '../services/apiUrl'
import { Progress } from 'reactstrap';
import React, { useState } from 'react';
import uplodIcon from './img/upload.png';
import axios from 'axios';

const SingleUploader = (props) => {
    let { _id,id, label, uploadUrl } = props;
    const [isUploding, setUploding] = useState(false);
    const [uploadedImg, setUplodedImg] = useState("");
    const [uploadProgress, setProgress] = useState(0);

    const handleChange = async e => {
        let formData = new FormData();
        formData.append('file', e.target.files[0]);
        setUploding(true);
        console.log(formData);
        let { data } = await axios.post(`${API_BASE_URL}${uploadUrl}/${_id}`, formData, {
            onUploadProgress: ({ loaded, total }) => {
                let link = ((loaded / total) * 100).toFixed(2);
                setProgress(link);
            }
        });
        window.location.reload(true);
        setUplodedImg(data.imagePath);
        setUploding(false);
    }


    return (
        <div className="form-group">
            <label htmlFor={id} className="text-primary font-weight-bold">{label}</label>
            <div className="d-flex">
                <div className="d-flex">
                    <div className="file-uploader-mask d-flex justify-content-center align-items-center">
                        <img className="file-uploader-icon" src={uplodIcon} alt="Upload-Icon" />
                    </div>
                    <input className="file-input" type="file" id={id} onChange={handleChange} />
                </div>
                {
                    isUploding ? (
                        <div className="flex-grow-1 px-2">
                            <div className="text-center">{uploadProgress}%</div>
                            <Progress value={uploadProgress} />
                        </div>
                    ) : null
                }
                {
                    uploadedImg && !isUploding ? (
                        <img
                            src={uploadedImg}
                            alt="UploadedImage"
                            className="img-thumbnail img-fluid uploaded-img ml-3"
                        />
                    ) : null
                }

            </div>
        </div>
    )
}

export default SingleUploader;