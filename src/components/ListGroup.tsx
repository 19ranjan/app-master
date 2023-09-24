function ListGroup() {
  let items = ["The 100", "Made in Heaven", "Downton Abbey", "The Crown"];
  //   items = [];

  //   const getMsg = () => {
  //     return items.length === 0 ? <p>No items found</p> : null;
  //   };

  return (
    <>
      <h1>List</h1>
      {items.length === 0 && <p>No items found</p>}
      <ul className="list-group">
        {items.map((item, index) => (
          <li
            className="list-group-item"
            key={item}
            onClick={() => console.log(item, index)} // here you can pass any msg "clicked"
          >
            {item}
          </li>
        ))}
      </ul>
    </>
  );
}

export default ListGroup;
