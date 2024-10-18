import { useEffect, useState } from 'react';
import Products from './Products';
import Navigation from './Navigation';
import Footer from './Footer';
import { connect } from 'react-redux';
import { getPurchasedProductList } from '../actions/action';
import { getProductList } from '../reducers/index';

function PurchasedItems(props) {
    const [items, setItems] = useState([]);

    useEffect(() => {
        document.body.style.backgroundImage = "none";
        props.getProductList();
    }, [])

    useEffect(() => {
        let items = props.productList.map((item, index) => {
            return <div key={index} className="col col-md-4 col-lg-4">
                <Products {...item} />
            </div>
        })
        setItems(items);
    }, [props.productList])

    return (
        <>
            <Navigation />
            <div className="container">
                <div className="row">
                    {items}
                </div>
            </div>
            <Footer />
        </>
    );
}

const mapStateToProps = (state) => {
    return {
        productList: getProductList(state)
    }
};

const mapDispatchToProps = (dispatch) => {
    return {
        getProductList: () => dispatch(getPurchasedProductList())
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(PurchasedItems);
