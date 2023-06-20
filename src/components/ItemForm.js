import React from "react";
import { v4 as uuid } from "uuid";
import {useState} from "react"

function ItemForm({ onItemFormSubmit}) {
const [itemName, setNewItem] = useState("")

const [itemCategory, setCategory] = useState("Produce")

function handleFormSubmit(event){
  event.preventDefault()
  const newItem ={
    id: uuid(),
    name: itemName,
    category: itemCategory
  }
  onItemFormSubmit(newItem)
  setNewItem("")
  setCategory("Produce")
}

function handleNewItem(e){
  setNewItem(e.target.value) 
}

function handleCategoryChange(e){
  
  setCategory(e.target.value)
}

  return (
    <form onSubmit={handleFormSubmit} className="NewItem">
      <label>
        Name:
        <input onChange={handleNewItem} value={itemName} type="text" name="name" />
      </label>

      <label>
        Category:
        <select onChange={handleCategoryChange} value={itemCategory} name="category">
          <option value="Produce">Produce</option>
          <option value="Dairy">Dairy</option>
          <option value="Dessert">Dessert</option>
        </select>
      </label>

      <button type="submit">Add to List</button>
    </form>
  );
}

export default ItemForm;
