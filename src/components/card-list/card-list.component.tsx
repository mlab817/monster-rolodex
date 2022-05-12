import { Monster } from "../../App";

import Card from "../card/card.component";

import {CardListContainer} from './card-list.styles'
import {FC} from "react";

type CardListProps = {
  monsters: Monster[]
}

const CardList: FC<CardListProps> = ({ monsters }) => (
  <CardListContainer>
    {
      monsters.map(monster => {
        return <Card key={monster.id} monster={monster}/>
      })
    }
  </CardListContainer>
)

export default CardList