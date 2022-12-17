import React, { useState } from 'react';

const TableHeader = ({ onChangePerPag, onFilter}) => {
    const [filter, setFilter] = useState("")
    return (<div className="row">
        <div className="col-sm-12 col-md-6">
            <div className="dataTables_length" id="DataTables_Table_0_length">
                <label>Show
                <select aria-controls="DataTables_Table_0" className="form-control form-control-sm"
                        onChange={onChangePerPag}>
                        <option value={10}>10</option>
                        <option value={25}>25</option>
                        <option value={50}>50</option>
                        <option value={100}>100</option>
                    </select> entries</label>
            </div>
        </div>
        <div className="col-sm-12 col-md-6">
            <div id="DataTables_Table_0_filter" className="dataTables_filter">
                <label>Search:<input spellCheck="true" type="search" value={filter} onChange={e => {
                    setFilter(e.target.value);
                    onFilter(e)
                }} className="form-control form-control-sm" placeholder="Search" aria-controls="DataTables_Table_0" /></label>
            </div>
        </div>
    </div>)
}

export default TableHeader;