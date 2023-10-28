import { Component } from 'react';
import IHeroes from '../../interface/interface';
import styles from './card.module.scss';

class Card extends Component<IHeroes> {
  render() {
    const { image, name, description, belonging, cost, upload, frame } =
      this.props;
    const imgSrc = upload ? URL.createObjectURL(upload) : image;

    return (
      <div className={styles.card__container}>
        <div className={styles.card__img}>
          <div
            className={frame || frame === undefined ? styles.golder__board : ''}
          />
          <img src={imgSrc} alt="movie picter" />
        </div>
        <div className={styles.card__text}>
          <div className={styles.card__context}>
            <h3 className={styles.card__h3}>
              <span className={styles.card__name}>Card name: </span>
              {name}
            </h3>
            <p>
              <span className={styles.card__name}>Fraction: </span>
              {belonging[0].toUpperCase() + belonging.slice(1)}
            </p>
            <p>
              <span className={styles.card__name}>Cost: </span>
              {cost}$
            </p>
          </div>
          <div className={styles.card__description}>
            {this.props.date ? (
              <div>
                Date of creation: <p>{this.props.date}</p>
              </div>
            ) : (
              description
            )}
          </div>
        </div>
      </div>
    );
  }
}

export default Card;
