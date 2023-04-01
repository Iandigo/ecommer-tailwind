const Item = ({ selectedOption, items }) => {
  const filteredItems = selectedOption
    ? items.filter((item) => item.category === selectedOption)
    : items;

  return (
    <div className="w-full md:w-5/7 grid grid-cols-4 gap-5 md:gap-10 mx-auto mt-10 md:mt-20 md:px-20">
      {filteredItems.length
        ? filteredItems.map((item) => {
            return (
              <div className="w-full text-[12px] sm:text-base " key={item.id}>
                <img src={item.url} alt="item" className="w-full" />
                <div className="mt-2 sm:mt-0 sm:ml-2">
                  <p className="text-gray-600">{item.category}</p>
                  <h4 className="text-[14px] sm:text-lg font-medium mt-1">
                    {item.name}
                  </h4>
                  <h4 className="text-[14px] sm:text-base mt-1">
                    ${item.price}
                  </h4>
                </div>
              </div>
            );
          })
        : "No items found"}
    </div>
  );
};

export default Item;
