import React from "react";
import { v4 as uuid } from "uuid";
import ShoppingList from "./ShoppingList";



function ItemForm({onNewItemName, onNewItemCategory, onAddNewItem}) {

  return (
    
    <form 
      className="NewItem" 
      // onSubmit={(event) => onAddNewItem(event)}>
      onSubmit={onAddNewItem}>

      <label>
        Name:
        <input 
          type="text" 
          name="name" 
          onChange={onNewItemName} />
      </label>

      <label>
        Category:
        <select name="category" onChange={onNewItemCategory}>
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
