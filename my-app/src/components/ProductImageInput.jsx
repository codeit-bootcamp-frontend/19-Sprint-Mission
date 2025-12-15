import { useRef, useState } from 'react';

export default function ProductImageInput({ onImageUpload }) {
  const inputRef = useRef(null);
  const [preview, setPreview] = useState(null);
  const [isDragging, setIsDragging] = useState(false);

  const handleFile = (file) => {
    if (!file) return;
    if (!file.type.startsWith('image/')) return;

    setPreview(URL.createObjectURL(file));
    onImageUpload?.(file);
  };

  const handleChange = (e) => {
    const file = e.target.files[0];
    handleFile(file);
  };

  const handleClick = () => {
    inputRef.current?.click();
  };

  // Drag & Drop
  const handleDragOver = (e) => {
    e.preventDefault();
    setIsDragging(true);
  };

  const handleDragLeave = () => {
    setIsDragging(false);
  };

  const handleDrop = (e) => {
    e.preventDefault();
    setIsDragging(false);

    const file = e.dataTransfer.files[0];
    handleFile(file);
  };

  return (
    <div
      onClick={handleClick}
      onDragOver={handleDragOver}
      onDragLeave={handleDragLeave}
      onDrop={handleDrop}
      className={`
        w-72 h-72 rounded-lg border-2 border-dashed
        flex flex-col justify-center items-center
        cursor-pointer transition
        ${
          isDragging
            ? 'border-blue-500 bg-blue-50'
            : 'border-gray-300 bg-gray-200'
        }
      `}
    >
      {preview ? (
        <img
          src={preview}
          alt="상품 이미지 미리보기"
          className="w-full h-full object-cover rounded-lg"
        />
      ) : (
        <>
          <span className="text-4xl text-gray-500">+</span>
          <p className="mt-2 text-gray-500">이미지 등록</p>
        </>
      )}

      <input
        ref={inputRef}
        type="file"
        accept="image/*"
        className="hidden"
        onChange={handleChange}
      />
    </div>
  );
}
