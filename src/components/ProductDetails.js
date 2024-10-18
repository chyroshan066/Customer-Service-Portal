import { useEffect } from 'react';
import Product from './Product';
import Navigation from './Navigation';
import Footer from './Footer';
import Feedback from './Feedback';
import { connect, useSelector } from 'react-redux';
import { useParams } from 'react-router';
import { getFeedbackDetails, getProductDetails, submitFeedback } from '../actions/action';

function ProductDetails(props) {
    const productId = useParams().id;
    const productDetails  = useSelector(state => state.productDetail);
    const feedbackDetails  = useSelector(state => state.feedbackDetail.feedbackDetail);
    const login  = useSelector(state => state.login.user);

    useEffect(() => {
        props.getProductDetails({ pdtId: productId });
        props.getFeedbackDetails({ pdtId: productId });
    }, []);

    const handleSubmitFeedback = (rating, feedback, feedbackAck) => {
        const fbData = {
            'body': feedback,
            'user': login,
            'rating': rating,
            'feedbackAck': feedbackAck,
            'pdtCode': productId
        };
        props.submitFeedback(fbData);
        props.getProductDetails({ pdtId: productId })
    }
    return (
        <>
            <Navigation />
            <div className={"container-fluid"}>
                <div className={"row"} style={{ "maxWidth": "100%" }}>
                    <div className={"col-sm-8"}>
                        {
                            <Product {...productDetails} />
                        }
                    </div>
                    <div className={"col-sm-4"}>
                        {feedbackDetails.length === 0 ? '' : <Feedback feedbacks={feedbackDetails} onFeedback={handleSubmitFeedback} />}
                    </div>
                </div>
            </div>
            <Footer />
        </>
    )

}

const mapStateToProps = (state) => {
    return { }
};

const mapDispatchToProps = (dispatch) => {
    return {
        submitFeedback: (data) => dispatch(submitFeedback(data)),
        getFeedbackDetails: (data) => dispatch(getFeedbackDetails(data)),
        getProductDetails: (data) => dispatch(getProductDetails(data)),
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(ProductDetails);
