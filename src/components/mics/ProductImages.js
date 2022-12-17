import React, { useState, useEffect } from 'react'

export default ({ files }) => {

    const [previewImage, setPreviewImage] = useState("");

    useEffect(() => {
        if (files.lenght === 0)
            return;

        files.forEach(file => {
            if (file.pivot && file.pivot.zone === 'base_image')
                setPreviewImage(file.path);
        });

    }, [files])

    return (<div className="row">
        <div className="col-md-4 col-lg-2 col-12">
            <ul className="min-img">
                {files.map((file, index) => (
                    <li onClick={e => setPreviewImage(file.path)} key={index}>
                        <img src={file.path} className="img-fluid" alt={file.filename} />
                    </li>))}

            </ul>
        </div>
        <div className="col-lg-10 col-md-8 col-12">
            <div className="max-img">
                <img src={previewImage} className="img-fluid big-img" alt="" />
            </div>
        </div>
    </div>)
}