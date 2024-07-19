import './card.css';

export default function Card(props) {
  let badgeText;
  if (props.openSpots === 0) {
    badgeText = 'Sold Out';
  } else if (props.location === 'Online') {
    badgeText = 'ONLINE';
  } else if (props.statusbar === 'Join Now') {
    badgeText = 'Join Now';
  } else {
    badgeText = 'Explore';
  }
  return (
    <section className="card-container">
      {badgeText && (
        <div className="card-header">
          <h2>{badgeText}</h2>
        </div>
      )}

      <div className="card-body">
        <img src={props.coverImage} alt={props.title} className="card-image" />
      </div>
      <div className="card-footer">
        <div className="card-stats">
          <img src="/svgs/Star.svg" alt="Star" />
          <small className="rating">{props.stats.rating}</small>
          <small>({props.stats.reviewCount}). </small>
          <small>{props.location}</small>
        </div>
        <div className="text-container">
          <h2 className="title">{props.title}</h2>
          <p>
            <span className="price">From ${props.price} </span>/ person
          </p>
        </div>
      </div>
    </section>
  );
}
