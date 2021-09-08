import { FC } from 'react'
import styled from 'styled-components';
import { useDrop } from 'react-dnd'

const DropAreaWrapper = styled.div`
  width: 80%;
  height: 500px;
  border: 3px dashed #ddd;
  margin: 0 auto;
`;

interface DropAreaProps {
}

const DropArea: FC<DropAreaProps> = () => {
  const [{ canDrop, isOver, dropResult }, drop] = useDrop(() => ({
    accept: 'card',
    drop: () => ({ name: 'DropArea' }),
    collect: (monitor) => ({  
      isOver: monitor.isOver(), 
      canDrop: monitor.canDrop(),
      dropResult: monitor.getDropResult()
    }),
  }))

  const isActive = canDrop && isOver
  let backgroundColor = '#222'
  if (isActive) {
    backgroundColor = 'darkgreen'
  } else if (canDrop) {
    backgroundColor = 'darkkhaki'
  }
  console.log(dropResult);
  return (
    <DropAreaWrapper ref={drop} role={'DropArea'} >
      {isActive ? 'Release to drop' : 'Drag a ticket or use the button below to draw your tickets'}
    </DropAreaWrapper>
  )
}

export default DropArea;
