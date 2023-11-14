

export default function Action({moveRight, moveLeft}) {
  return (
    <div className='actions'>

        <button onClick={moveRight}>&gt;</button>
        <button onClick={moveLeft}>&lt;</button>

    </div>
  )
}
