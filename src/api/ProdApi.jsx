const getProduct = async ({ pageSize, order = "recent", offset }) => {
  const queryOffset = offset ? `&page=${offset}` : "";
  const query = `orderBy=${order}&pageSize=${pageSize}${queryOffset}`;
  const res = await fetch(
    `https://panda-market-api.vercel.app/products?${query}`
  );
  if (!res.ok) {
    throw new Error("페이지 로드에 실패했습니다.");
  }
  const data = await res.json();
  return data;
};

export default getProduct;
