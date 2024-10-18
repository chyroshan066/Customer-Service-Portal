import Login from './Login';

function LoginForm(props) {
    return (
        <>
            <div>
                <a href="/" style={{ "paddingLeft": "15px" }}>
                    <img alt="csp1" width="auto" height="75px" src="/images/csp1.png" />
                </a>
            </div>
            <div className="jumbotron" style={{ "opacity": "0.85" }}>
                <div className="container">
                    <h1>Customer Service Portal</h1>
                    <p>Your one point contact for issues related to the purchased products.</p>
                </div>
            </div>
            <div className="container" id="wrap">
                <div className={"row bgClass"} style={{ "marginTop": "15px", "marginBottom": "45px" }}>
                    <div className={"col-lg-5 offset-lg-7"}>
                        <Login history={props.history} />
                    </div>
                </div>
            </div>
        </>
    )
}
export default LoginForm;
