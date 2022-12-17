import React from 'react'

export default ({ option, optionIndex, fromChildToParentCallback, maxOptionIndex }) => {
    return (<div>
        <label style={{ display: "block" }}>Select {option.name}</label>
        <div className="btn-group btn-group-toggle" data-toggle="buttons">
            {option.type === 'dropdown' || option.type === 'radio' ? option.values.map((data, index) => {
                return (
                    <label className={index === maxOptionIndex[optionIndex]? "active btn btn-secondary":"btn btn-secondary"} key={index} htmlFor={`optionfor${index}`} onClick={e => { fromChildToParentCallback(optionIndex, index) }}>
                        <input type="radio" checked name={option.name} id={option.name + option.id} autoComplete="off" id={`optionfor${index}`} />
                        {data.label}
                    </label>
                )
            })
                : null
            }
        </div>
    </div>)
}