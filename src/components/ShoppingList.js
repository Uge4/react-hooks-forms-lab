import React, { useState } from "react";
import ItemForm from "./ItemForm";
import Filter from "./Filter";
import Item from "./Item";


function ShoppingList({ items, setItems }) {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [search, setSearch] = useState(null);
  const [filterType, setFilterType] = useState("filter")
  const [name, setName] = useState("")
  const [category, setCategory] = useState("Produce")
  // const [itemsToDisplay, setItemsToDisplay] = useState([])
  

  // filter code

  function handleChange(event){
    setFilterType(event.target.name)

    if(event.target.name === "search"){   
      setSearch(event.target.value.toLowerCase())
    }
    if(event.target.name === "filter"){
      setSelectedCategory(event.target.value);
    }
  }

  if(filterType === "filter"){
    // setItemsToDisplay(items.filter((item) => {
    setItems(items.filter((item) => {
      if (selectedCategory === "All") return true;
      return item.category === selectedCategory;
    }))
  }
  if(filterType === "search"){
    // setItemsToDisplay(items.filter((item) => {
    setItems(items.filter((item) => {
      if (search === '') return item;
      else {return item.name.toLowerCase().includes(search)}
    }))
  }


  // itemForm code

  function handleNewItemName(event){
    setName(event.target.value)
  }

  function handleNewItemCategory(event){
    setCategory(event.target.value)
  }

  function handleAddNewItem(event){
    event.preventDefault();
    console.log("inside handleNewItem: ");
    const newItemObj = { name: name, cagegory: category };
    const newItemsArr = ([...items, newItemObj])
    setItems(newItemsArr);
    setName("");
    setCategory("");
  }


  return (
    <div className="ShoppingList">
      <ItemForm 
        onNewItemName={handleNewItemName}
        onNewItemCategory={handleNewItemCategory}
        onAddNewItem={handleAddNewItem} />
      <Filter 
        onCategoryChange={handleChange} 
        onSearchChange={handleChange}/>
      <ul className="Items">
      {/* {itemsToDisplay.map((item) => ( */}
        {items.map((item) => (
          <Item key={item.id} name={item.name} category={item.category} />
        ))}
      </ul>
    </div>
  );
}

export default ShoppingList;
