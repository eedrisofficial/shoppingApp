import ItemsList from './ItemsList';

const Content = ({items, handleCheck, handleDelete, }) => {

  
  return (
    <>
      {items.length ? (
        <ItemsList
         handleCheck={handleCheck}
         handleDelete={handleDelete}
         items={items}
        />
      ) : (
        <p style={{marginTop : '2rem'}}> Empty List</p>
      )}
    </>
  )
}

export default Content