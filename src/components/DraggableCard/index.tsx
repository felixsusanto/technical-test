import { FC } from 'react'
import { useDrag } from 'react-dnd'

export interface DCProps {
  type: string;
}

export const DraggableCard: FC<DCProps> = ({
  type
}) => {
  const [{ isDragging }, drag] = useDrag(
    () => ({
      type: 'card',
      item: { top: window.top },
      collect: (monitor) => ({
        isDragging: monitor.isDragging(),
      }),
    }),
    [window.top],
  )

  // if (isDragging) {
  //   return <div ref={drag} />
  // }
  return (
    <div ref={drag} role="Box">
      <img src={`https://via.placeholder.com/150x230?text=${type}`} />
    </div>
  )
}

export default DraggableCard