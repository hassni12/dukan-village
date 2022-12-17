import React, { useContext, useState, useEffect } from 'react';
import CheckoutCard from '../mics/CheckoutCard';
import { AuthContext } from '../../context/AuthContext';
import http from '../../config/axios';
import { toast } from 'react-toastify';
import { withRouter } from 'react-router-dom';
import { useForm } from "react-hook-form";
import StatesList from '../../utils/country_states';
import CityList from '../../utils/country_city';
import SelectSearch from 'react-select-search';
import { useSelect } from 'react-select-search';
import CustomSelect from '../includes/CustomSelect';
import Select from 'react-select';
import { Dropdown } from 'semantic-ui-react';
import 'semantic-ui-css/semantic.min.css';
import Axios from 'axios';

let errorsMessage = [];
const Checkout = (props) => {
    const { handleSubmit, register, errors } = useForm();
    const cart = useContext(AuthContext);


    const { user, settings } = cart;
    const [subTotal, setSubTotal] = useState(0);
    const [shippingCost, setShippingcost] = useState(0);
    const [serviceCost, setServiceCost] = useState(0);

    const [billError, setbillErr] = useState('');
    const [shipError, setshipErr] = useState('');

    const [total, setTotal] = useState(0);
    const [stripeToken, setStripeToken] = useState('');
    const [paymentid, setPaymentId] = useState('');
    const [terms, setTerms] = useState(false);
    const [next, setNext] = useState(false);
    const [useExistingBillingAddress, setUseExistingBillingAddress] = useState(false);
    const [useExistingShippingAddress, setUseExistingShippingAddress] = useState(false);
    // const [errors, setErrors] = useState({});

    const [phone, setPhone] = useState('');
    const [msg, setMsg] = useState('');
    const [address, setaddress] = useState('');
    const [city, setCity] = useState('');
    const [zipcode, setZipcode] = useState('');
    const [state, setstate] = useState('');
    const [country, setcountry] = useState('IN');

    const [address1, setaddress1] = useState('');
    const [city1, setCity1] = useState('');
    const [zipcode1, setZipcode1] = useState('');
    const [state1, setstate1] = useState('');
    const [country1, setcountry1] = useState('IN');

    const [card, setCard] = useState('razorpay');
    const [cardNumber, setCardNumber] = useState('');
    const [holderName, setHolderName] = useState('');
    const [expiryMonth, setExpiryMonth] = useState('');
    const [expiryYear, setExpiryYear] = useState('');
    const [cvv, setCvv] = useState('');

    const [indiaMsg, setIndiamsg] = useState('');
    const [worldMsg, setWorldmsg] = useState('');
    const [allStates, setAllStates] = useState(null);
    const [allCities, setAllCities] = useState(null);
    const [localCheck, setLocalCheck] = useState(false);

    const [allStates1, setAllStates1] = useState(null);
    const [allCities1, setAllCities1] = useState(null);



    //loading stripe start
    const loadStripe = () => {

        if (!window.document.getElementById('stripe-script')) {
            var s = window.document.createElement("script");
            s.id = "stripe-script";
            s.type = "text/javascript";
            s.src = "https://js.stripe.com/v2/";
            s.onload = () => {
              //  window['Stripe'].setPublishableKey('pk_live_BY2EC6jyTqKuTtNBMJhifEFM00Iue9Q4qo');
                window['Stripe'].setPublishableKey('pk_test_HAorAMBpZdnSy3XeSoEc7EHZ00GmySthxL');
            }
            window.document.body.appendChild(s);
        }
    }
    //loading stripe end
    const onAddShippingValues = () => {
        setaddress1(user.shipping_address);
        setCity1(user.shipping_city);
        setZipcode1(user.shipping_zip);
        setstate1(user.shipping_state);
        setcountry1(user.shipping_country ? user.shipping_country : "IN");
        setPhone(user.phone);
    }
    useEffect(() => {
        onAddShippingValues();
        errorsMessage = [];
    }, []);

    useEffect(() => {
        window.scrollTo(0, 0);
        loadStripe();
        setSubTotal(cart.cart.reduce((redTotal, item) => redTotal + (item.qty * parseFloat(item.option ? item.option.price.amount : 0)), 0));
        // console.log("Sub Total: ",cart.cart.reduce((redTotal, item) => redTotal + (item.qty * Math.ceil(parseFloat(item.product.price.amount) + parseFloat(item.option ? item.option.price.amount : 0))), 0));
    }, [cart, user]);

    useEffect(() => {
        if (country)
            onGetState();
    }, [country])

    useEffect(() => {
        if (state)
            onGetCity();
    }, [state])

    useEffect(() => {
        if (country1)
            onGetState1();
    }, [country1])

    useEffect(() => {
        if (state1)
            onGetCity1();
    }, [state1])

    const onGetState = async () => {
        try {
            let country_id = settings.countries.filter((item) => item.value === country)[0].id;
            const { data } = await http.get(`/settings/states/${country_id}`);
            setAllStates(data);

        } catch (error) {
            // toast.error("States Not Found");
        }
    }

    const onGetCity = async () => {
        try {
            let state_id = allStates.filter((item) => item.value === state)[0].id;
            const { data } = await http.get(`/settings/cities/${state_id}`);
            setAllCities(data);

        } catch (error) {
            // toast.error("Cities Not Found");
        }
    }

    const onGetState1 = async () => {
        try {
            let country_id = settings.countries.filter((item) => item.value === country1)[0].id;
            const { data } = await http.get(`/settings/states/${country_id}`);
            setAllStates1(data);

        } catch (error) {
            // toast.error("States Not Found");
        }
    }

    const onGetCity1 = async () => {
        try {
            let state_id = allStates1.filter((item) => item.value === state1)[0].id;
            const { data } = await http.get(`/settings/cities/${state_id}`);
            setAllCities1(data);
        } catch (error) {
            // toast.error("Cities Not Found");
        }
    }

    const onCheckout = (razorpayID) => {

        if (!terms) {
            setMsg('Please agree terms of use, rules of flight and privacy policy');
            return;
        }
        if (card === "razorpay") {
            if (paymentid) {

            } else {
                onRazorPay();
                // toast.error("Please Complete the razorpay details to proceed further.");
                return;
            }
        }
        if (card === "stripe") {
            if (!cardNumber) {
                toast.error("Please Enter Card Number!");
                return;
            }
            if (!expiryMonth) {
                toast.error("Please select expiry Month!");
                return;
            }
            if (!expiryYear) {
                toast.error("Please select expiry Year!");
                return;
            }
        }
        try {
            if (card === 'stripe') {
                window.Stripe.card.createToken({
                    number: cardNumber,
                    exp_month: expiryMonth,
                    exp_year: expiryYear,
                    cvc: cvv,
                }, (status, response) => {
                    if (status === 200) {
                        setStripeToken(response.id);
                        placeOrder(response.id);
                    } else {
                        toast.error("Invalid payment details.");
                        
                    }
                });
            } else {
                placeOrder();
            }

        } catch (error) {
           // toast.error('Something Went Wrong');
           toast.error(error);
        }
    }

    const placeOrder = async (stripeID , order_id , signature) => {
        const total = subTotal + parseInt(shippingCost) + parseInt(serviceCost) + parseInt(((parseInt(settings.gst) / 100) * (parseInt(shippingCost) + parseInt(serviceCost))));
        const tax = parseInt(((settings.gst / 100) * (shippingCost + parseInt(serviceCost))));
        const delivery_time = cart.cart.map(item => {
            const x = {
                "date": item.delivery_time.date || 'N/A',
                "min_time": item.delivery_time.min_time,
                "max_time": item.delivery_time.max_time
            }
            return x;
        });
        const items = cart.cart.map(item => {
            const x = {
                "product_id": item.product.id,
                "qty": item.qty,
                "price": item.option && item.option.price.amount,
                "option_value": item.option && item.option.label,
                "preorder_date": item.preorder_date && item.preorder_date,

            }
            if (item.option) {
                x.options = {
                    "0": {
                        "option_id": item.option.option_id,
                        "value_id": item.option.id,
                    }
                }
            }
            return x;
        })

        const payload = {
            customer_email: user.email,
            customer_phone: phone,
            customer_id: user.id,
            use_existing_shipping_address: useExistingShippingAddress,
            use_existing_billing_address: useExistingBillingAddress,
            delivery_time: delivery_time[0],
            is_billing: useExistingBillingAddress,
            is_shipping: useExistingShippingAddress,
            existing: useExistingBillingAddress,
            charge_id: stripeID || '',
            razorpay_payment_id: stripeID || '',
            razorpay_order_id: order_id || '',
            razorpay_signature: signature || '',
            token: stripeID || '',
            billing: {
                first_name: user.first_name,
                last_name: user.last_name || "",
                address_1: address,
                address_2: address,
                city: city,
                zip: zipcode,
                country: country,
                state: state
            },
            ship_to_a_different_address: "0",
            shipping: {
                first_name: user.first_name,
                last_name: user.last_name || "",
                address_1: address1,
                address_2: address1,
                city: city1,
                zip: zipcode1,
                country: country1,
                state: state1
            },
            items: items,
            payment_method: card,
            shipping_method: card,
            shipping_cost: shippingCost,
            service_charge: serviceCost,
            tax: tax,
            sub_total: subTotal,
            discount: 0.0,
            total: total,
            currency: "INR",
            currency_rate: 0.0,
            terms_and_conditions: terms
        };
        try {
            const { data } = await http.post('/checkout?updated=true', payload);
            toast.success('Thank you for your order.');
            cart.onClearCartItems();
            props.history.push({ pathname: `/order-detail/${data.id}` });
        } catch (error) {
            toast.error('Something went wrong');
        }
    }

    const onRazorPay = async() => {
        const total = subTotal + parseInt(shippingCost) + parseInt(serviceCost) + parseInt(((settings.gst / 100) * (shippingCost + parseInt(serviceCost))));
        try {
            const { data } = await http.post('/razorpay-response' , { total });
            onRazorPayAfter(data)
        } catch (error) {
            toast.error("Please check your internet connection.");
        }   
    }

    const onRazorPayAfter = (res) => {
        const total = subTotal + parseInt(shippingCost) + parseInt(serviceCost) + parseInt(((settings.gst / 100) * (shippingCost + parseInt(serviceCost))));
        const API_URL = 'https://villagedukaan.com/'
        if(res.error){
            toast.error(res.error.description);
            return;
        }
        let options = {
            key: "rzp_live_8OWFhYSVX0pam4",
            key_secret: "9dbcwWyY3QBPCAr5gWX6PI13",
            // amount: total * 100, // 2000 paise = INR 20, amount in paisa
            order_id : res.id,
            amount : res.amount,
            name: `${user.first_name} ${user.last_name}`,
            description: "Purchase Description",
            image: user.image,
            payment_capture: 1,
            handler: (response) => {
                if(response.razorpay_payment_id){
                    setPaymentId(response.razorpay_payment_id);
                    setTimeout( () => {
                        placeOrder(response.razorpay_payment_id , response.razorpay_order_id , response.razorpay_signature );
                    },700)
                }else {
                    toast.error("Please enter correct details.");
                }
            },
            prefill: {
                name: `${user.first_name} ${user.last_name}`,
                email: `${user.email}`
            },
            notes: {
                "address": "Village Dukan"
            },
            theme: {
                "color": "#F37254"
            }
        }
        let rzp = new window.Razorpay(options);
        rzp.open();
    }

    const onCheckAddress = (formData) => {
        const { shipping_address, shipping_city, shipping_country, shipping_state, shipping_zip, billing_address, billing_city, billing_country, billing_state, billing_zip } = cart.user;
        setshipErr('');
        setbillErr('');
        if (useExistingShippingAddress) {
            if (!shipping_address || !shipping_city || !shipping_country || !shipping_state || !shipping_zip) {
                setshipErr("Cannot find existing Shipping address");
                return;
            }
        }
        if (useExistingBillingAddress) {
            if (!billing_address || !billing_city || !billing_country || !billing_state || !billing_zip) {
                setbillErr("Cannot find existing Billing address");
                return;
            }
        }
        const shippingCountry = country1 || cart.user.shipping_country;
        if(!shippingCountry){
            setshipErr("Cannot find Shipping Country");
            return;
        }

        let service_Cost = 0;
        let cnt = 0;
        
        const shippingCost = calculateShippingCost();
        // console.log("shippingCost: ",shippingCost);
        if (shippingCost === false) {
            setNext(false);
            return;
        }

        setShippingcost(parseInt(shippingCost));
        
        // cart.cart.forEach((product) => {
        if (shippingCountry === "IN") {
            for (let product of cart.cart) {
                if (service_Cost <= parseInt(settings.service_max_rate))
                    if (product.product.detail.provider === "another" && cnt < 2) {
                        if (cnt === 0) { service_Cost += parseInt(settings.service_flat_rate) }
                        else if (cnt > 0) { service_Cost += parseInt(settings.service_flat_rate) }
                        cnt = cnt + 1;
                    }
            }
            setServiceCost(service_Cost);
            setNext(true);
            return;
        }
        if (shippingCountry !== "IN") {
            service_Cost = 300;
            // for (let product of cart.cart) {
            //         if (product.product.detail.provider === "another" && cnt < 2) {
            //             if (cnt === 0) { service_Cost += parseInt(settings.service_flat_rate) }
            //             else if (cnt > 0) { service_Cost += parseInt(settings.service_flat_rate) }
            //             cnt = cnt + 1;
            //         }
            // }
            setServiceCost(service_Cost);
            setNext(true);
            return;
        }
        // });
        setServiceCost(service_Cost);
        setNext(true);

    }

    const calculateShippingCost = () => {
        const shippingState = state1 || cart.user.shipping_state;
        const shippingCountry = country1 || cart.user.shipping_country;
       // const shippingCity = city1;
        const shippingCity = city1 || cart.user.shipping_city;

        setMsg('');
        errorsMessage = [];

        let er = false;
        let checkIndia = false;
        let checkWorld = false;
        let flag = 0;
        let cities=0;

        const isLocalState = ['Andhra Pradesh', 'Telangana','Karnataka','Tamil Nadu'].includes(shippingState && shippingState.toLowerCase());
        //const isLocalCity = ['Rajahmundry','Kakinada','Hyderabad','Secunderabad','Kovvur','Guntur'].includes(shippingCity);
       // const isLocalCity = [product.detail.city].includes(shippingCity);

        cart.cart.forEach(({ product }) => {
            if(product.detail.city==null){
                er = false;
                errorsMessage.push({ id: product.id, message: `Please remove ${product.name}. This product is not supported in this Local area` });
                return false; 
            }else if(product.detail.local_area && product.detail.city!==null){
                var cities = JSON.stringify(product.detail.city.split(','));
               // console.log(cities, cart.settings.local_areas.includes(shippingCity));
                let len = cart.settings.cities.filter((item) => { return item.name == shippingCity; } ).length;
               // console.log(len, cities, cart.settings.cities, shippingCity, cart.settings.cities.includes(shippingCity));
               // console.log(cart.settings.local_areas.includes(shippingCity),cart.settings.local_areas.includes(cities));
                if(cart.settings.local_areas.includes(shippingCity) && cities.includes(shippingCity)){
                    er = true;                    
                }
                else{
                    if(cart.settings.local_areas.includes(shippingCity)){
                        er = false;
                        errorsMessage.push({ id: product.id, message: `Please remove ${product.name}. This product is not supported in this Local area` });
                        return false; 
                    }else{
                        if(product.detail.all_over_india){
                            er=true;
                        }else{
                            er = false;
                            errorsMessage.push({ id: product.id, message: `Please remove ${product.name}. This product is not supported in all over India ` });
                            return false;
                        }
                       
                    }
                    
                }

            }
            else{
                    er = false;
                    errorsMessage.push({ id: product.id, message: `Please remove ${product.name}. This product is not supported in all over India ` });
                    return false; 
            }
           

        })

        // product.detail.local_area && isLocalState);
        if (er && errorsMessage.length === 0) {
            flag = 0;

        } else {
            cart.cart.forEach(({ product }) => {
            //if (isLocalState && isLocalCity) {
            if (isLocalState && [product.detail.city]) {
                flag = 1;
                return false;
            } else {
                errorsMessage = [];
                if (shippingCountry.toLowerCase() === 'in') {

                    cart.cart.forEach(({ product }) => {
                        if (product.detail.all_over_india) {
                            flag = 0;
                        } else {
                            errorsMessage.push({ id: product.id, message: `Please remove ${product.name}. This product is not supported in all over India` });
                            flag = 1;
                            return false;
                        }
                    })
                } else {

                    cart.cart.forEach(({ product }) => {
                        if (product.detail.all_over_world && shippingCountry !== 'in') {
                            flag = 0;
                        } else {
                            errorsMessage.push({ id: product.id, message: `Please remove ${product.name}. This product is not supported in all over World` });
                            flag = 1;
                        }
                    })
                }
            }
            });
        }

        if (flag === 1) {
            return false;
        }

        const shippingCosts = {
            'IN': parseInt(cart.settings.other_first_kg),
            'US': parseInt(cart.settings.per_kg_usa),
            'SG': parseInt(cart.settings.per_kg_singapore),
            'UK': parseInt(cart.settings.per_kg_uk),
            'GB': parseInt(cart.settings.per_kg_uk),
            'AE': parseInt(cart.settings.per_kg_uae),
            'CA': parseInt(cart.settings.per_kg_ca)
        };

        const shippingKgs = {
            'US': parseInt(cart.settings.minimum_kg_usa),
            'SG': parseInt(cart.settings.minimum_kg_singapore),
            'UK': parseInt(cart.settings.minimum_kg_uk),
            'GB': parseInt(cart.settings.minimum_kg_uk),
            'AE': parseInt(cart.settings.minimum_kg_uae),
            'CA': parseInt(cart.settings.minimum_kg_ca)
        };
        let TotalQTY = 0;
        let gm = 0;
        let killogram = 0;

        cart.cart.forEach(({ qty }) => TotalQTY += qty);

        cart.cart.forEach(product => {
            let gram = parseInt(product.option.label.match(/(\d+)/)) * product.qty;
            gm = gm + parseInt(gram);
        });

        killogram = Math.ceil(gm / 1000);
        // setKillogram();
    
        let cost = 0;
    //    console.log("Country: ",shippingCountry);
        
        if (shippingCountry.toLowerCase() === 'in' &&
            //['andhra pradesh', 'telangana'].includes(shippingState && shippingState.toLowerCase()) && ['Rajahmundry', 'Kakinada'].includes(shippingCity)) {
            ['Andhra Pradesh', 'Telangana','Karnataka','Tamil Nadu'].includes(shippingState && shippingState.toLowerCase()) && cart.settings.local_areas.includes(shippingCity) ) {
         
            if (cart.settings.local_free_status === "yes") {
                if (subTotal >= parseInt(cart.settings.local_free_minimum)) {
                    setLocalCheck(true);
                    return cost;
                } else {
                    cost += parseInt(cart.settings.local_flat_amount);
                }
            } else {
                cost += parseInt(cart.settings.local_flat_amount);
            }
            setLocalCheck(true);
            return cost;
        }
        else if (shippingCountry === 'IN' && !['Andhra Pradesh', 'Telangana','Karnataka','Tamil Nadu'].includes(shippingState)) {
             console.log('all over india', cart.settings.india_free_status);
             console.log('total', parseInt(cart.settings.india_free_minimum));
            if (cart.settings.india_free_status === "yes") {
                if (subTotal >= parseInt(cart.settings.india_free_minimum)) {
                    return cost;
                } else {
                   
                    for (let index = 0; index < killogram; index++) {
                        if (index === 0) {
                            cost += parseInt(cart.settings.other_first_kg)
                        } else {
                            cost += parseInt(cart.settings.other_additional_kg)
                        }
                         console.log('all over india cost1',cost);
                    }
                    if (parseInt(gm) >= 800) {
                        cost = cost + parseInt(cart.settings.india_flat_minimum)
                    }
                }
               
                return cost;
            }
            else {
                console.log('else', killogram);
                for (let index = 0; index < killogram; index++) {
                    if (index === 0) {
                        cost += parseInt(cart.settings.other_first_kg)
                    } else {
                        cost += parseInt(cart.settings.other_additional_kg)
                    }
                    console.log('all over india cost2',cost);
                }
                if (parseInt(gm) >= 800) {
                    cost = cost + parseInt(cart.settings.india_flat_minimum)
                }

            }
            console.log('all over india cost', cost);
            return cost;
        }

        else if (shippingCountry === 'IN' && ['Andhra Pradesh', 'Telangana','Karnataka','Tamil Nadu'].includes(shippingState)) {
       // else if (shippingCountry === 'IN' && len==0) {
           if(cart.settings.local_areas.includes(shippingCity)){
                if (cart.settings.local_free_status === "yes") {
                    if (subTotal >= parseInt(cart.settings.local_free_minimum)) {
                        setLocalCheck(true);
                        return cost;
                    } else {
                        cost += parseInt(cart.settings.local_flat_amount);
                    }
                } else {
                    cost += parseInt(cart.settings.local_flat_amount);
                }
                setLocalCheck(true);
                return cost;
           }else{
                for (let index = 0; index < killogram; index++) {
                    if (index === 0) {
                        cost += parseInt(cart.settings.andra_telanga_first_kg)
                    } else {
                        cost += parseInt(cart.settings.andra_telanga_additional_kg)
                    }
                }
                if (parseInt(gm) >= 800) {
                    cost = cost + parseInt(cart.settings.india_flat_minimum)
                }

                return cost;
           }

            
        }
        else if (killogram < shippingKgs[shippingCountry]) {
            setNext(false);

            setMsg(`Minimum Quantity ${shippingKgs[shippingCountry]}Kgs are required to have in your cart in order to ship ${shippingCountry}`);
            return false;
        }
        

        for (let index = 0; index < killogram; index++) {
            if (cart.settings.world_free_status === "yes") {
                if (subTotal >= parseInt(cart.settings.world_free_minimum)) {
                    return parseInt(cost);
                }
                else {
                    if (index === 0) {
                        cost += parseInt(shippingCosts[shippingCountry]);
                    } else {
                        cost += parseInt(shippingCosts[shippingCountry]);
                    }
                }
            } else {
                if (index === 0) {
                    cost += parseInt(shippingCosts[shippingCountry]);
                } else {
                    cost += parseInt(shippingCosts[shippingCountry]);
                }
            }
            // cost += shippingCosts[shippingCountry];
        }
        if (shippingCountry === "US") {
            let gmCalculate = parseInt(cart.settings.packing_amount_usa);
            cost += gmCalculate;
        }
        else if (shippingCountry === "UK") {
            let gmCalculate = parseInt(cart.settings.packing_amount_uk);
            cost += gmCalculate
        }
        else if (shippingCountry === "GB") {
            let gmCalculate = parseInt(cart.settings.packing_amount_uk);
            cost += gmCalculate
        }
        else if (shippingCountry === "AE") {
            let gmCalculate = parseInt(cart.settings.packing_amount_uae);
            cost += gmCalculate
        }
        else if (shippingCountry === "CA") {
            let gmCalculate = parseInt(cart.settings.packing_amount_ca);
            cost += gmCalculate
        }
        else if (shippingCountry === "SG") {
            let gmCalculate = parseInt(cart.settings.packing_amount_singapore);
            cost += gmCalculate
        }
        return parseInt(cost);
    }
    return (
        <div>
            <section className="inner-header-section">

                <div className="container">
                    <div className="row">
                        <div className="col-xl-7 col-lg-9 col-12">
                            <h1>Checkout</h1>
                            <h4 className="pink">Discover the unique village items!</h4>
                        </div>
                    </div>
                </div>
            </section>
            <section className="check-out p-70">
                <div className="container">
                    <form autoComplete="off" className="regform" onSubmit={next ? handleSubmit(onCheckout) : handleSubmit(onCheckAddress)}>
                        {next === false ? <div className="tab">
                            <div className="row">
                                <div className="col-12">
                                    <h3>Shipping Details </h3>
                                </div>
                            </div>
                            <div className="row">
                                <div className="col-12 col-lg-8">
                                    <div className="left">
                                        <div className="row">
                                            <div className="col-12">
                                                <h6 className="yel">Contact Details</h6>
                                                <div className="row">
                                                    <div className="col-12 col-md-10 form-group">
                                                        <label>Email</label>
                                                        <p className="mt-2 email">{user && user.email}</p>
                                                    </div>
                                                </div>
                                                <div className="row">
                                                    <div className="col-12 col-md-10 form-group">
                                                        <label>Phone Number</label>
                                                        <input type="text"
                                                            defaultValue={phone}
                                                            onChange={e => setPhone(e.target.value)}
                                                            className="form-control"
                                                            placeholder="000-000-0000"
                                                            name="phone"
                                                            ref={register({ required: true })}
                                                        />
                                                        {errors.phone && <span className="text-danger">This field is required</span>}
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        {msg && <div className="alert alert-danger">{msg}</div>}
                                        {errorsMessage.map((error, index) => (<div key={index} className="alert alert-danger">{error.message}</div>))}
                                        {indiaMsg && <div className="alert alert-danger">{indiaMsg}</div>}
                                        {worldMsg && <div className="alert alert-danger">{worldMsg}</div>}
                                        <div className="shipping">
                                            <div className="row">
                                                <div className="col-12">
                                                    <a style={{ color: 'red' }}>{shipError}</a>
                                                    <h6 className="yel">Shipping Address</h6>
                                                </div>
                                                <div className="col-12 form-group">
                                                    {/* <label className="login-check">Use existing Billing address
                                                        <input type="checkbox" onChange={e => setUseExistingShippingAddress(e.target.checked)} />
                                                        <span className="checkmark" />
                                                    </label> */}
                                                </div>
                                                {useExistingShippingAddress ? null :
                                                    <div className="col-12"><div className="row">
                                                        <div className="col-12 form-group">
                                                            <label>Address</label>
                                                            <input type="text"
                                                               // defaultValue={address1}
                                                                onChange={e => setaddress1(e.target.value)}
                                                                className="form-control"
                                                                name="S_address"
                                                                placeholder="Enter Address"
                                                                ref={register({ required: !useExistingShippingAddress })}
                                                            />
                                                            {errors.S_address && <span className="text-danger">Address is needed.</span>}
                                                        </div>
                                                        <div className="col-12 col-md-6 form-group">
                                                            <label>Country</label>
                                                            <Dropdown
                                                                placeholder='Select Country'
                                                                search
                                                                selection
                                                                fluid
                                                                name="S_country"
                                                                ref={register({ required: !useExistingShippingAddress })}
                                                                value={country1}
                                                                onChange={(e, { value, id }) => {
                                                                    setcountry1(value)
                                                                }}
                                                                autoComplete="off"
                                                                options={settings.countries}
                                                            />
                                                            
                                                            {errors.S_country && <span className="text-danger">This field is required</span>}
                                                        </div>
                                                        <div className="col-12 col-md-6 form-group">
                                                            <label>State</label>
                                                            <Dropdown
                                                                placeholder='Select State'
                                                                fluid
                                                                selection
                                                                search
                                                                value={state1}
                                                                name="S_state"
                                                                autoComplete="off"
                                                                ref={register({ required: !useExistingShippingAddress })}
                                                                options={allStates1}
                                                                onChange={(e, { value }) => setstate1(value)}
                                                            />
                                                            
                                                            {errors.S_state && <span className="text-danger">This field is required</span>}
                                                        </div>
                                                        <div className="col-12 col-md-6 form-group">
                                                            <label>City </label>
                                                            <Dropdown
                                                                placeholder='Select State'
                                                                fluid
                                                                selection
                                                                search
                                                                value={city1}
                                                                autoComplete="off"
                                                                name="S_city"
                                                                options={allCities1}
                                                                onChange={(e, { value }) => setCity1(value)}
                                                            />
                                                            
                                                        </div>
                                                        <div className="col-12 col-md-6 form-group">
                                                            <label>Zipcode</label>
                                                            <input type="text"
                                                                defaultValue={zipcode1}
                                                                name="S_zipcode"
                                                                onChange={e => setZipcode1(e.target.value)}
                                                                className="form-control"
                                                                placeholder="Enter Zip Code"
                                                                ref={register({ required: !useExistingShippingAddress })}
                                                            />
                                                            {errors.S_zipcode && <span className="text-danger">Zipcode is needed.</span>}
                                                        </div>
                                                    </div>
                                                    </div>}
                                            </div>
                                        </div>
                                        {/* <div className="billing">
                                            <div className="row">
                                                <div className="col-12">
                                                    <a style={{ color: 'red' }}>{billError}</a>
                                                    <h6 className="yel">Billing Address</h6>
                                                </div>
                                                <div className="col-12 form-group">
                                                  
                                                </div>
                                                {useExistingBillingAddress ? null : <div className="col-12">
                                                    <div className="row">
                                                        <div className="col-12 form-group">
                                                            <label>Address</label>
                                                            <input type="text"
                                                                name="B_address"
                                                                defaultValue={address}
                                                                onChange={e => setaddress(e.target.value)}
                                                                className="form-control"
                                                                placeholder="Enter Address"
                                                                ref={register({ required: !useExistingBillingAddress })}
                                                            />
                                                            {errors.B_address && <span className="text-danger">Address is needed.</span>}
                                                        </div>
                                                        <div className="col-12 col-md-6 form-group">
                                                            <label>Country</label>
                                                            <Dropdown
                                                                placeholder='Select Country'
                                                                fluid
                                                                search
                                                                selection
                                                                name="country"
                                                                ref={register({ required: !useExistingBillingAddress })}
                                                                value={country}
                                                                autoComplete="off"
                                                                options={settings.countries}
                                                                onChange={(e, { value }) => setcountry(value)}
                                                            />
                                                            
                                                            {errors.country && <span className="text-danger">This field is required</span>}
                                                        </div>
                                                        <div className="col-12 col-md-6 form-group">
                                                            <label>State</label>
                                                            <Dropdown
                                                                placeholder='Select State'
                                                                fluid
                                                                search
                                                                selection
                                                                value={state}
                                                                name="state"
                                                                autoComplete="off"
                                                                ref={register({ required: !useExistingBillingAddress })}
                                                                options={allStates}
                                                                onChange={(e, { value }) => setstate(value)}
                                                            />
                                                            
                                                            {errors.state && <span className="text-danger">This field is required</span>}
                                                        </div>
                                                        <div className="col-12 col-md-6 form-group">
                                                            <label>City</label>
                                                            <Dropdown
                                                                placeholder='Select City'
                                                                fluid
                                                                selection
                                                                search
                                                                value={city}
                                                                autoComplete="off"
                                                                options={allCities}
                                                                onChange={(e, { value }) => setCity(value)}
                                                            />
                                                            
                                                        </div>
                                                        <div className="col-12 col-md-6 form-group">
                                                            <label>Zipcode</label>
                                                            <input type="text"
                                                                defaultValue={zipcode}
                                                                onChange={e => setZipcode(e.target.value)}
                                                                className="form-control"
                                                                placeholder="Enter Zip Code"
                                                                name="zipcode"
                                                                ref={register({ required: !useExistingBillingAddress })}
                                                            />
                                                            {errors.zipcode && <span className="text-danger">Zipcode is needed.</span>}
                                                        </div>


                                                    </div></div>}

                                            </div>
                                        </div> */}
                                    </div>
                                </div>
                                <CheckoutCard shipping={shippingCost} service={serviceCost} showEdit={false} />
                            </div>
                        </div> : null}
                        {next ? <div className="tab tab-2">
                            <div className="row">
                                <div className="col-12">
                                    <h3>Payment</h3>
                                </div>
                            </div>
                            <div className="row">
                                <div className="col-12 col-lg-8">
                                    <div className="left">
                                        <div className="row">
                                            <div className="col-12">
                                                <h6 className="yel">Add Credit Card Details</h6>
                                                <div className="row">
                                                    <div className="col-12 col-md-10 form-group">
                                                        <div className="sort-ban">
                                                            <label className="ban">Indian Payment Gateway
                                                            {/* <img src="images/ro.png" className="img-fluid" alt="" /> */}
                                                                <input spellCheck="true" checked={card === 'razorpay' ? true : false} type="radio" onChange={ () => setCard('razorpay')} name="radio" />
                                                                <span className="checkmark" />
                                                            </label>
                                                            {/* <label className="ban">Credit/Debit Card 
                                                                <input spellCheck="true" defaultChecked="checked" onChange={e => setCard('stripe')} type="radio" name="radio" />
                                                                <span className="checkmark" />
                                                            </label> */}
                                                            {localCheck ? <label className="ban">Cash On Delivery
                                                                <input spellCheck="true" onChange={e => setCard('cod')} type="radio" name="radio" />
                                                                <span className="checkmark" />
                                                            </label> : null}
                                                           
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        {card === 'stripe' ? <><div className="credit-info">
                                            <div className="row">
                                                <div className="col-12 d-flex justify-content-between align-items-center">
                                                    <h4>Credit Card Information </h4>
                                                    <img src="images/visa-1.png" className="img-fluid" alt="" />
                                                </div>
                                            </div>
                                        </div>
                                            <div className="billing card-info">
                                                <div className="row">
                                                    <div className="col-12 form-group">
                                                        <label>Card Number <span className="pink">*</span></label>
                                                        <input type="number" name="cardnumber" value={cardNumber} onChange={e => setCardNumber(e.target.value)} className="form-control" placeholder="Enter your card number" />
                                                        <img src="images/visa-2.png" className="i position-absolute" alt="" />
                                                    </div>
                                                    <div className="col-12 form-group position-relative">
                                                        <label>Card Holder Name <span className="pink">*</span> </label>
                                                        <input type="text" value={holderName} onChange={e => setHolderName(e.target.value)} className="form-control" placeholder="Enter Name" />
                                                    </div>
                                                    <div className="col-12 col-md-4 form-group">
                                                        <label>Expiry Date  <span className="pink">*</span></label>
                                                        <select value={expiryMonth} onChange={e => setExpiryMonth(e.target.value)} className="form-control">
                                                            <option>- Month -</option>
                                                            <option value="01">01</option>
                                                            <option value="02">02</option>
                                                            <option value="03">03</option>
                                                            <option value="04">04</option>
                                                            <option value="05">05</option>
                                                            <option value="06">06</option>
                                                            <option value="07">07</option>
                                                            <option value="08">08</option>
                                                            <option value="09">09</option>
                                                            <option value="10">10</option>
                                                            <option value="11">11</option>
                                                            <option value="12">12</option>
                                                        </select>
                                                    </div>
                                                    <div className="col-12 col-md-4 form-group mt-4">
                                                        <select value={expiryYear} onChange={e => setExpiryYear(e.target.value)} className="form-control">
                                                            <option>- Years -</option>
                                                            <option value="2020">2020</option>
                                                            <option value="2021">2021</option>
                                                            <option value="2022">2022</option>
                                                            <option value="2023">2023</option>
                                                            <option value="2024">2024</option>
                                                            <option value="2025">2025</option>
                                                            <option value="2026">2026</option>
                                                            <option value="2027">2027</option>
                                                            <option value="2028">2028</option>
                                                            <option value="2029">2029</option>
                                                            <option value="2030">2030</option>
                                                            <option value="2031">2031</option>
                                                            <option value="2032">2032</option>
                                                            <option value="2033">2033</option>
                                                            <option value="2034">2034</option>
                                                            <option value="2035">2035</option>
                                                            <option value="2036">2036</option>
                                                            <option value="2037">2037</option>
                                                            <option value="2038">2038</option>
                                                            <option value="2039">2039</option>
                                                            <option value="2040">2040</option>
                                                        </select>
                                                    </div>
                                                    <div className="col-12 col-md-4 form-group">
                                                        <label>CVV  <span className="pink">*</span></label>
                                                        <input type="number" value={cvv} onChange={e => setCvv(e.target.value)} className="form-control" placeholder="-" />
                                                    </div></div></div> </> : null}
                                        <div className="col-12 form-group">
                                            <label className="login-check">I have read and accept the terms of use, rules of flight and privacy policy
                                                    <input onChange={e => { setMsg(''); setTerms(!terms) }} type="checkbox" checked={terms} />
                                                <span className="checkmark" />
                                            </label>
                                        </div>


                                    </div>
                                </div>
                                {/* SECOND CART details HERE */}
                                <CheckoutCard shipping={shippingCost} service={serviceCost} showEdit={true} />
                            </div>
                        </div> : null}
                        {next ? <div style={{ overflow: 'auto' }}>
                            <div className="buttons">
                                <button type="submit" id="nextBtn" className="pink-btn-nr">Place Order</button>
                                <a style={{ color: 'red' }}>{msg}</a>
                            </div>
                        </div> : <div style={{ overflow: 'auto' }}>
                                <div className="buttons">
                                    <button type="submit" id="nextBtn" className="pink-btn-nr">Next</button>
                                </div>
                            </div>}
                    </form>
                </div>
            </section>
        </div>
    );
}
export default withRouter(Checkout);