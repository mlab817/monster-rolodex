import { Monster } from "../../App";

import './card.styles.css'
import {FC} from "react";

type CardProps = {
  monster: Monster
}

const Card: FC<CardProps> = ({ monster }) => {
  const { id, name, email } = monster

  return (
    <div className="card-container">
      <img alt={`monster ${name}`} src={`https://robohash.org/${id}?set=set2&size=180x180`} />
      <h2 data-testid="monster-name">{name}</h2>
      <p data-testid="monster-email">{email}</p>
    </div>
  )
}

export default Card