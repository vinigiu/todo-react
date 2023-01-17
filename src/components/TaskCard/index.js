import React from 'react';
import * as S from './styles';

import typeIcons from '../../utils/typeIcons';

function TaskCard(props) {

  return (
    <S.Container done={props.done}>
      <S.TopCard>
        <img src={typeIcons[props.type]} alt="Icone da Tarefa"/>
        <h3>{props.title}</h3>
      </S.TopCard>
      <S.BottomCard>
        <strong>{props.when}</strong>
      </S.BottomCard>
    </S.Container>
  )
}

export default TaskCard;
