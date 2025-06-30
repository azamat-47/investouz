import React, { useState, ChangeEvent } from 'react';

const ImgUploader: React.FC = () => {
  const [imagePreview, setImagePreview] = useState<string | null>(null);

  const handleImageChange = (e: ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setImagePreview(reader.result as string);
      };
      reader.readAsDataURL(file);
    }
  };

  return (
    <div className="flex flex-col items-center gap-4 my-2 border rounded-lg shadow-md w-full max-w-md mx-auto">
      <input
        type="file"
        accept="image/*"
        onChange={handleImageChange}
        className="file:mr-4 file:py-2 file:px-4
                   file:rounded-full file:border-0
                   file:text-sm file:font-semibold
                   file:bg-blue-50 file:text-blue-700
                   hover:file:bg-blue-100"
      />
      {imagePreview && (
        <img
          src={imagePreview}
          alt="Yuklangan rasm"
          className="w-full max-w-xs rounded-lg mb-2 shadow-md"
        />
      )}
    </div>
  );
};

export default ImgUploader;
