import React, { useState } from "react";
import Compressor from "compressorjs";

import "./style/index.scss";
import Atach from "../../svg/atach.tsx";

const InputMedia = ({ field, form, valuesName }) => {
  const convertBase64 = (file) => {
    return new Promise((resolve, reject) => {
      const fileReader = new FileReader();
      fileReader.readAsDataURL(file);

      fileReader.onload = () => {
        resolve(fileReader.result);
      };

      fileReader.onerror = (error) => {
        reject(error);
      };
    });
  };

  const handleChange = (e) => {
    const file = e.target.files[0];

    if (field.value?.length < 10) {
      new Compressor(file, {
        quality: 0.3,
        success: (compressedFile) => {
          convertBase64(compressedFile).then((base64) => {
            const updatedArray = [base64, ...field.value];
            form.setFieldValue(field.name, updatedArray);
          });
        },
      });
    }
  };

  return (
    <div className="agent-store--ui-input-media-wallpaper">
      <div className="agent-store--ui-input-media">
        <h4>
          Import a photo image{" "}
          <span>
            {(Array.isArray(field?.value) ? field.value : [])?.length} / 10
          </span>
        </h4>
        <p>
          *Attention! You need to insert from 1 to 10 images. The image format
          is Png or Jpg. The file size must not exceed 10 MB
        </p>

        <div className="agent-store--ui-input-media-attachment">
          {(Array.isArray(field?.value) ? field.value : [])?.length < 10 ? (
            <div className="agent-store--ui-input-media__add-block">
              <input
                type="file"
                accept="image/*, .png, .jpg"
                onChange={handleChange}
              />
              <Atach />
            </div>
          ) : null}

          <div className="agent-store-ui-input-media-list_input-block-img-list">
            {(Array.isArray(field?.value) ? field.value : []).map((item, i) => (
              <div
                key={i}
                className="agent-store-ui-input-media-list_input-block-img-list-block"
              >
                <img src={item} alt="icon" />
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default InputMedia;
