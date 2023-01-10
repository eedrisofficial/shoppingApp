import Footer from "./Footer";
import Header from "./Header";
import Content from "./Content";
import React, { useEffect, useState } from "react";
import AddItem from "./AddItem";
import { LoaderSpinner } from "./LoaderSpinner";
import { toast, ToastContainer } from "react-toastify";
 import "react-toastify/dist/ReactToastify.css";
import ApiRequest from "./ApiRequest";

function App() {
  //LOCAL API FROM DATA FOLDER
  const API_URL = "http://localhost:3500/items";


  const [items, setItems] = useState([]);
  const[newItem, setNewItem] = useState('');
  const [flagError, setFlagError] = useState("");
  const [isLoading, setIsLoading] = useState(true)



  useEffect(()=> {
    
    const fetchItems = async () => {
      try {
        const response = await fetch(API_URL);
        if(!response.ok) throw Error ("There is an error while fetching");
        const listItems = await response.json();
        setItems(listItems);
        setFlagError(null);
      } catch (error) {
        setFlagError(error.message);
      }finally{
        setIsLoading(false)
      }
    }
    //SETTING TIMEOUT TO SEE LOADER-SPINNER EFFECT 
    setTimeout (()=>{
      (async () => await fetchItems())()
    }, 2000)
  }, []);

  
 //ADD FUNCTION
  const addItem = async (item) =>{
      const id = items.length ? items [items.length - 1].id + 1 : 1;
      const inputNewItem = {id, checked:false, item};
      const listItems = [...items, inputNewItem]
      setItems(listItems);
      toast.success("list updated")
      
      const postOptions = {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(inputNewItem),
      };
      const result = await ApiRequest(API_URL, postOptions);
      if (result) setFlagError(result);
  }

  //CHECKED FUNCTION
  const handleCheck = async (id) => {
    const listItems = items.map((item) => item.id === id ? { ...item, checked: !item.checked } : item );
     setItems(listItems);

     const CheckedItem = listItems.filter((item) => item.id === id);
      const updatedOption = {
        method: "PATCH",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({checked: CheckedItem[0].checked}),
      };
        const reqURL = `${API_URL}/${id}`;
        const result = await ApiRequest(reqURL, updatedOption);
        if (result) setFlagError(result);
  };

  //DELETE FUNCTION
  const handleDelete = async (id) => {
    const listItems = items.filter((item) => item.id !== id);
    setItems(listItems);
    toast.success("item deleted successfully")

    const deleteOption = {method:'DELETE'};
     const reqURL = `${API_URL}/${id}`;
     const result = await ApiRequest(reqURL, deleteOption);
        if (result) setFlagError(result);
  };


  const handleSubmit = (e) => {
    e.preventDefault();
    if (!newItem) return;
    setNewItem("");
    addItem(newItem);
  }

  return (
    <React.Fragment>
      <ToastContainer/>
      <Header />

      <AddItem
        newItem={newItem}
        setNewItem={setNewItem}
        handleSubmit={handleSubmit}
      />

   

      <main>
        {isLoading && <LoaderSpinner/> }
        {flagError && <p style={{ color: "red" }}> {`Error: ${flagError}`} </p>}
        {!flagError &&  !isLoading &&  (
          <Content
            items={items}
            handleCheck={handleCheck}
            handleDelete={handleDelete}
          />
        )}
      </main>

      <Footer length={items.length} />
    </React.Fragment>
  );
}

export default App;
