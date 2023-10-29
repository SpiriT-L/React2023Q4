import { Component } from 'react';
import Card from '../Card/Card';
import styles from './cardList.module.scss';
import IHeroes from '../../interface/interface';

export interface CarterList {
  charters: IHeroes[];
}

class CardList extends Component<CarterList> {
  render() {
    const { charters } = this.props;

    return (
      <div className={styles.cardList__container} data-testid="custom-element">
        {charters.map((charter) => {
          return <Card key={charter.id} {...charter} />;
        })}
      </div>
    );
  }
}

export default CardList;
