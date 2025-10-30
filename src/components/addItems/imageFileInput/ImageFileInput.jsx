import { useEffect, useRef, useState } from 'react';
import Icons from '@/assets/icons/icons';
import Label from '@/components/common/label/Label';
import styles from './ImageFileInput.module.css';

const ImageFileInput = () => {
  const fileInputRef = useRef(null);
  const [image, setImage] = useState(null);
  const [previewUrl, setPreviewUrl] = useState(null);
  const [error, setError] = useState('');

  useEffect(() => {
    if (!image) {
      return;
    }

    const url = URL.createObjectURL(image);
    setPreviewUrl(url);

    return () => URL.revokeObjectURL(url);
  }, [image]);

  const handleFileInputClick = () => {
    if (image) {
      setError('*이미지 등록은 최대 1개까지 가능합니다.');
      return;
    }

    fileInputRef.current.click();
  };

  const handleFileInputChange = (e) => {
    const selectedFile = e.target.files[0];

    if (!selectedFile) {
      return;
    }

    setImage(selectedFile);
    setError('');
  };

  const handleResetFileInput = () => {
    setImage(null);
    setPreviewUrl(null);
    setError('');
    if (fileInputRef.current) {
      fileInputRef.current.value = '';
    }
  };

  return (
    <div className={styles.container}>
      <div className={styles['input-area']}>
        <Label label={'상품 이미지'} />
        <button
          type="button"
          className={`${styles['custom-file-button']} ${styles['common-layout']}`}
          onClick={handleFileInputClick}>
          <Icons.PlusIcon />
          이미지 등록
        </button>
        <input
          className={styles['file-input']}
          type="file"
          onChange={handleFileInputChange}
          accept="image/*"
          ref={fileInputRef}
        />
        {error && <span className={styles.error}>{error}</span>}
      </div>
      {previewUrl && (
        <div
          className={`${styles['img-preview-area']} ${styles['common-layout']}`}>
          <button
            type="button"
            className={styles['remove-button']}
            onClick={handleResetFileInput}>
            <Icons.RemoveIcon />
          </button>
          <img
            className={styles['preview-img']}
            src={previewUrl}
            alt="이미지 프리뷰"
          />
        </div>
      )}
    </div>
  );
};

export default ImageFileInput;
