const ProductListPage = () => {
  return(
    <div>
      {ProductListPage.map(({id, name, images, favoriteContent})=> (
        <li key={id}>
          <ProductCard id={id}/>
        </li>
      ))}
    </div>
  );
}