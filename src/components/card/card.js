import "./card.styles.css";

export const Card = (props) => {
    return <div class="card-container">
    <img className="image-style" alt="monster" 
    src={`https://robohash.org/${props.monster.id}?set=set2`} />
    <h2>{props.monster.name}</h2>
    <h5>{props.monster.email}</h5>
    </div>
}