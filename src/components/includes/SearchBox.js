import React, { useState, Component } from 'react';
import { useHistory, withRouter, Redirect } from 'react-router-dom';

class SearchBox extends Component {
    state = {
        open: false,
        data: '',
    }

    onSearch = (e) => {
        e.preventDefault();
       // console.log('search', this.state.data);
     
      //  this.props.history.push(`/products?location=current_location&query=${this.state.data}`);
        this.props.history.push({
            pathname: `/products`,
            search: `query=${this.state.data}`
        });
        this.setState({
            open: false
        });
        this.props.onToggleNav();
        // window.location.reload();
    }
    render() {
        const { open, data } = this.state;
        return (
            <li className={open ? 'search-main search-open' : 'search-main'}>
                <div className="main-header__searchbar focus">
                    <div className="main-header__searchbar__curtain main-header__searchbar__curtain--1" />
                    <div className="main-header__searchbar__cont main-header__searchbar__curtain main-header__searchbar__curtain--2">
                        <div className="main-header__searchbar__input">
                            <form id='form' onSubmit={this.onSearch}>
                                <input id="searchBox" value={data} onChange={e => this.setState({ data: e.target.value }, () => {
                                                                            console.log(this.state.data, 'data');
                                                                            })} type="text" placeholder="Start typing to search" />
                                <input type="submit" defaultValue="Submit" className="hidden" />
                            </form>
                            <div onClick={e => this.setState({ open: false })} className="main-header__searchbar__close">
                                <img src={`${process.env.PUBLIC_URL}/images/close-icon.png`} alt="" />
                            </div>
                        </div>
                    </div>
                </div>
                <div onClick={e => this.setState({ open: true })} className="main-header__search__toggle wow slideInDown">
                    <span className="icon-search">
                        <i className="fas fa-search" />
                    </span>
                </div>
            </li>
        );
    }
}

export default withRouter(SearchBox);