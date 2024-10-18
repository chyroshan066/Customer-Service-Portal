import Rater from './Rater';
import { Link } from 'react-router-dom';

function Products(props) {
    const { pdtCode, pdtPrice, pdtName, pdtDescription, pdtImg, avgFeedback, isDiscontinued } = props;
    return (
        <div className={"thumbnail"}>
            <img src={pdtImg} alt="products" className={"img img-rounded img-responsive"} />
            <div className={"caption"} style={{ "textAlign": "center" }}>
                <Link to={`/productDetails/${pdtCode}`}>
                    <h3>{pdtName}</h3>
                </Link>
                <h4>
                    <span style={{ "color": "red" }}>Rs.{pdtPrice}</span>
                </h4>
                {isDiscontinued ? <h5 style={{ "color": "red", "font-weight": "bold" }}>The product is discontinued.</h5> : <p className={"description"}>{pdtDescription}</p>}
                <Rater value={avgFeedback} maxlength="6" />&nbsp;&nbsp;
                <span style={{ "fontSize": "9px" }}>{avgFeedback}/5</span>
            </div>
        </div>
    )
}

export default Products;
