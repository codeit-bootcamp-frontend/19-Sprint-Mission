const BASE_URL = 'https://panda-market-api.vercel.app';

export async function getProducts(page, pageSize, orderBy) {
  const res = await fetch(
    `${BASE_URL}/products?page=${page}&pageSize=${pageSize}&orderBy=${orderBy}`
  );
  if (!res.ok) {
    const text = await res.text();
    throw new Error(`${text}`);
  }
  return res.json();
}
