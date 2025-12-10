import api from "./api";

export async function PostImage(file) {
  const formData = new FormData();
  formData.append("image", file);

  try {
    const res = await api.post("/images/upload", formData);
    return res.data;
  } catch (error) {
    console.error("에러 상세:", error);
    console.error("응답:", error.response?.data);
    console.error("상태 코드:", error.response?.status);
    console.error("요청 설정:", error.config);

    throw new Error("이미지 업로드에 실패했습니다.");
  }
}
