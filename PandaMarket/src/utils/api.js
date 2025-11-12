const BASE_URL = "https://panda-market-api.vercel.app/";

export async function fetchBestProducts({
  pageSize = 4,
  orderBy = "favorite",
} = {}) {
  const url = `${BASE_URL}products?pageSize=${pageSize}&orderBy=${orderBy}`;

  try {
    const response = await fetch(url);

    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }

    const data = await response.json();
    return data.list;
  } catch (error) {
    console.error("데이터 가져오기 오류:", error);
    throw error;
  }
}

export async function fetchAllProducts({
  page = 1,
  pageSize = 10,
  orderBy = "recent",
  keyword = "",
} = {}) {
  const url = `${BASE_URL}products?page=${page}&pageSize=${pageSize}&orderBy=${orderBy}&keyword=${keyword}`;

  try {
    const response = await fetch(url);

    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }

    const data = await response.json();

    return { list: data.list, totalCount: data.totalCount };
  } catch (error) {
    console.error("데이터 가져오기 오류:", error);
    throw error;
  }
}

// fetch(test)
//   .then((response) => {
//     if (!response.ok) {
//       throw new Error("ERROR:" + response.statusText);
//     }

//     return response.json();
//   })
//   .then((data) => {
//     console.log("가져온 데이터 확인:", data);
//   })
//   .catch((error) => {
//     console.error("데이터 가져오기 오류:", error);
//   });
