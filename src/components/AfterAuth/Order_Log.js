import React, { useEffect, useState } from 'react';
import { Link , withRouter } from 'react-router-dom';
import http from '../../config/axios';
import Pagination from '../mics/Pagination';
import TableHeader from '../mics/TableHeader';
import { toast } from 'react-toastify';

const Order_Log = (props) => {
    const [orders, setOrders] = useState(null);
    const [filter, setFilter] = useState("");
    const [per_page, setPerPage] = useState(10);
    const [page, setPage] = useState(1);

    const onOrderLog = async () => {
        const { data } = await http.get('/account/orders' , {params: {
            filter,
            per_page,
            page
        }});
        setOrders(data);
    }
    useEffect(() => {
        window.scrollTo(0, 0)
        onOrderLog();
    }, [filter, per_page, page]);

    const changePerPage = (e) => setPerPage(e.target.value);

    const onFilter = e => setFilter(e.target.value);

    const onPage = selectedPage => setPage(selectedPage.selected + 1);
    const onViewOrder = (id) => {
        try {
            props.history.push({
                pathname: `/order-detail/${id}`
            });
        } catch (error) {
            toast.error("Order Not Found");
        }
    }
    return (
        <div>
            <section className="inner-header-section">
                <div className="container">
                    <div className="row">
                        <div className="col-xl-7 col-lg-9 col-12">
                            <h1>Order log</h1>
                            <h4 className="pink">Discover the unique village items!</h4>
                        </div>
                    </div>
                </div>
            </section>
            <section className="order-log">
                <div className="container">
                    <div className="row">
                        <div className="col-12">
                            <h3>Order Log List</h3>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-12">
                            <div className="maain-tabble table-responsive">
                                <div id="DataTables_Table_0_wrapper" className="dataTables_wrapper container-fluid dt-bootstrap4 no-footer">
                                <TableHeader onChangePerPag={changePerPage} onFilter={onFilter} />
                                    <div className="row">
                                        <div className="col-sm-12">
                                            <table className="table table-striped zero-configuration dataTable no-footer" id="DataTables_Table_0" role="grid" aria-describedby="DataTables_Table_0_info">
                                                <thead>
                                                    <tr role="row">
                                                    <th className="sorting_asc" tabIndex={0} aria-controls="DataTables_Table_0" rowSpan={1} colSpan={1} aria-sort="ascending" aria-label="Order ID: activate to sort column descending" style={{ width: '198px' }}>Order ID</th><th className="sorting" tabIndex={0} aria-controls="DataTables_Table_0" rowSpan={1} colSpan={1} aria-label="price: activate to sort column ascending" style={{ width: '125px' }}>price</th><th className="sorting" tabIndex={0} aria-controls="DataTables_Table_0" rowSpan={1} colSpan={1} aria-label="Date: activate to sort column ascending" style={{ width: '117px' }}>Date</th><th className="sorting" tabIndex={0} aria-controls="DataTables_Table_0" rowSpan={1} colSpan={1} aria-label="oRDER sTATUS: activate to sort column ascending" style={{ width: '248px' }}>oRDER sTATUS</th></tr>
                                                </thead>
                                                <tbody>
                                                    {orders && orders.data.map(order => (
                                                        <tr style={{cursor: 'pointer'}} onClick={() => onViewOrder(order.id) } role="row" className="odd">
                                                            <td className="sorting_1">{order.id}</td>
                                                            <td>{order.sub_total && order.sub_total.formatted}</td>
                                                            <td>{order.created_at}</td>
                                                            <td>{order.status}</td>
                                                        </tr>
                                                    ))}
                                                </tbody>
                                            </table>
                                        </div>
                                    </div>
                                    {orders ? <Pagination records={orders} onPage={onPage} /> : null}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );

}

export default withRouter(Order_Log);