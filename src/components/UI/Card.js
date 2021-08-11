import './assets/Card.css';

const Card = (props) => {
    // Pull in the classes defined on the Card component instances and add them along with 'card':
    const classes = `card ${props.className}`;

    return <div className={classes}>{props.children}</div>
}

export default Card;