import '../css/rating.css';

function Rater(props) {
    let items = [];
	for (var i = 1; i < props.maxlength; i++) {
		let clickHandler = props.onSelected && props.onSelected.bind(null, i);
		items.push(
		<li key={i} className={i <= props.value ? 'filled' : ''} onClick={clickHandler}>
			{'\u2605'}
		</li>
		)
    }
    return (
      <ul className="rating">{items}</ul>
    )

}

export default Rater;
