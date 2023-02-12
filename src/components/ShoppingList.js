import React, { useState } from "react";
import ItemForm from "./ItemForm";
import Filter from "./Filter";
import Item from "./Item";

function ShoppingList({ items }) {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [search, setSearch] = useState(null);
  const [filterType, setFilterType] = useState("filter")

  let itemsToDisplay = ""
  
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
    itemsToDisplay = items.filter((item) => {
      if (selectedCategory === "All") return true;
      return item.category === selectedCategory;
    })
  }
  if(filterType === "search"){
     itemsToDisplay = items.filter((item) => {
      if (search === '') return item;
      else {return item.name.toLowerCase().includes(search)}
  })}


  return (
    <div className="ShoppingList">
      <ItemForm />
      <Filter onCategoryChange={handleChange} onSearchChange={handleChange}/>
      <ul className="Items">
        {itemsToDisplay.map((item) => (
          <Item key={item.id} name={item.name} category={item.category} />
        ))}
      </ul>
    </div>
  );
}

export default ShoppingList;
