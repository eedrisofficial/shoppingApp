import { useRef } from 'react'


const AddItem = ({newItem, setNewItem, handleSubmit}) => {
    const add_ref = useRef();

  return (
    <form className='addForm' onSubmit={handleSubmit} >
        <label htmlFor="addItem">Add Item</label>
        <input 
            type="text"
            id='addItem'
            placeholder='Add item'
            required
            value={newItem}
            onChange = {(e) => setNewItem(e.target.value)}
            add_ref = {add_ref}
        />
        <button
            type='submit'
            aria-label='Add item'
            onClick={add_ref}
            >
                Add
        </button>
    </form>
  )
}

export default AddItem