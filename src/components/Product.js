import Rater from './Rater';
import { Link } from 'react-router-dom';

function Product(props) {
    let items;
    const { pdtCode, pdtPrice, pdtName, pdtImg, pdtDescription, avgFeedback: rating, pdtFeatures} = props.productDetail;

    if (pdtFeatures !== undefined) {
        items = pdtFeatures.split(',').map(function (feature, index) {
            return <li key={index}>{feature}</li>
        })
    }
    return (
        <div className="thumbnail">
            <div className="row>">
                <div className="col-sm-6">
                    <img src={`http://localhost:4000${pdtImg}`} alt="product" style={{ "width": "100%" }} className={"img img-rounded img-responsive"} />
                </div>
                <div className="col-sm-6">
                    <div className={"caption"} >
                        <Link to={`/productDetails/${pdtCode}`}><h3>{pdtName}</h3></Link>
                        <h4><span style={{ "color": "red" }}>Rs.{pdtPrice}</span></h4>
                        {props.status ? <h5 style={{ "color": "red", "font-weight": "bold" }}>The product is discontinued.</h5> : <p className={"description"}>{pdtDescription}</p>}
                        <Rater value={rating} maxlength="6" />&nbsp;&nbsp;
                        <span style={{ "fontSize": "9px" }}>{rating} /5 </span>
                    </div>
                    <ul>{items}</ul>
                    <br />
                </div>
            </div><br />
        </div>
    )
}

export default Product;
