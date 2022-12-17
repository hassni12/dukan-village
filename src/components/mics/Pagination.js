import React, { useState } from 'react';
import ReactPaginate from 'react-paginate';

const Pagination = ({ records, onPage }) => {
    const [page, setPage] = useState(1);
    return (
        <div className="row">
            <div className="col-sm-12 col-md-5">
                <div className="dataTables_info" id="DataTables_Table_0_info" role="status" aria-live="polite">{records ? `Showing ${records.from !== null ? records.from : '0'} to ${records.to !== null ? records.to : '0'} of ${records.total} entries` : '0'}</div>
            </div>
            <div className="col-sm-12 col-md-7">
                <div className="dataTables_paginate paging_simple_numbers" id="DataTables_Table_0_paginate">
                    <ReactPaginate
                        containerClassName="pagination"
                        pageClassName="paginate_button page-item"
                        pageLinkClassName="page-link"
                        activeClassName="active"
                        previousClassName="paginate_button page-item previous"
                        previousLinkClassName="page-link"
                        nextClassName="paginate_button page-item next"
                        nextLinkClassName="page-link"
                        activeLinkClassName="paginate_button page-item"
                        pageCount={records && records.last_page}
                        onPageChange={onPage}
                    />
                </div>
            </div>
        </div>
    );
}

export default Pagination;