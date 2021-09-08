import { FC } from 'react'
import { useDrag } from 'react-dnd'

export interface DCProps {
  valueType: string;
}

interface DropResult {
  name: string;
  silver: number;
}

export const DraggableCard: FC<DCProps> = ({
  valueType
}) => {
  const [{ isDragging }, drag] = useDrag(
    () => ({
      type: 'card',
      item: { top: window.top, valueType },
      collect: (monitor) => ({
        isDragging: monitor.isDragging(),
      }),
      end: (item, monitor) => {
        const dropResult = monitor.getDropResult<DropResult>();
        if (item && dropResult) {
          // alert(`You dropped ${item.valueType} into ${dropResult.name}!`)
          // onDrop(dropResult.silver);          
        }
      },
    }),
    [window.top],
  )

  // if (isDragging) {
  //   return <div ref={drag} />
  // }
  return (
    <div ref={drag} role="Box">
      <img src={`https://via.placeholder.com/150x230?text=${valueType}`} />
    </div>
  )
}

export default DraggableCard