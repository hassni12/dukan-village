import React, { useState, useEffect, Fragment } from 'react'
import AvatarEditor from 'react-avatar-editor'

export default (props) => {

    const [position, setPosition] = useState({ x: 0.5, y: 0.5 });
    
    let editor = React.createRef();

    const [scale, setScale] = useState(1.2);
    
    useEffect(function () {
        if(props.shouldShow)
            window.$('#croppieModal').modal('show');
        else
            window.$('#croppieModal').modal('hide');
    }, [props.shouldShow]);

    return (
        <Fragment>
            {/* <button type="button" className="btn btn-primary" data-toggle="modal" data-target="#croppieModal">
                Launch demo modal
            </button> */}
            <div className="modal fade" data-backdrop="static" id="croppieModal" tabindex="-1" role="dialog" aria-labelledby="croppieModalLabel" aria-hidden="true">
                <div className="modal-dialog" role="document">
                    <div className="modal-content">
                        <div className="modal-header">
                            {/* <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                                <span aria-hidden="true">&times;</span>
                            </button> */}
                        </div>
                        <div className="modal-body text-center">
                        <AvatarEditor
                            ref={(e) => editor = e}
                            image={props.src}
                            width={props.width || 250}
                            height={props.height || 250}
                            borderRadius={(props.width || 250)/2}
                            scale={scale}
                            position={position}
                            onPositionChange={position => setPosition(position)}
                            />

                            <input type="range" min="1" max="3" step="0.1" value={scale} onChange={e=>setScale(parseFloat(e.target.value))}/>
                        
                        </div>

                        <div className="modal-footer">
                            <button type="button" className="btn btn-secondary" onClick={e => props.onCancel}>Cancel</button>
                            <button type="button" onClick={e => props.onCropped(editor.getImageScaledToCanvas().toDataURL()) } className="btn btn-primary">Save changes</button>
                        </div>
                    </div>
                </div>
            </div>
        </Fragment>
    );
}