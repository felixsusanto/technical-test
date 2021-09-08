import { FC } from 'react'
import styled from 'styled-components';
import { useDrop } from 'react-dnd'

const DropAreaWrapper = styled.div`
  width: 80%;
  height: 500px;
  border: 3px dashed #ddd;
  margin: 0 auto;
`;

const DropArea: FC = () => {
  const [{ canDrop, isOver }, drop] = useDrop(() => ({
    accept: 'card',
    drop: () => ({ name: 'DropArea' }),
    collect: (monitor) => ({
      isOver: monitor.isOver(),
      canDrop: monitor.canDrop(),
    }),
  }))

  const isActive = canDrop && isOver
  let backgroundColor = '#222'
  if (isActive) {
    backgroundColor = 'darkgreen'
  } else if (canDrop) {
    backgroundColor = 'darkkhaki'
  }

  return (
    <DropAreaWrapper ref={drop} role={'DropArea'} style={{ backgroundColor }}>
      {isActive ? 'Release to drop' : 'Drag a box here'}
    </DropAreaWrapper>
  )
}

export default DropArea;
