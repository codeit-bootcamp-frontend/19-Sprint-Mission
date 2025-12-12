import api from "./api";

export async function PostImage(file) {
  const formData = new FormData();
  formData.append("image", file);

  try {
    const res = await api.post("/images/upload", formData);
    return res.data;
  } catch (e) {
    const errorMessage = e.response?.data?.message;
    throw new Error(errorMessage);
  }
}
