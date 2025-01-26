import Image from "next/image";

const page = ({ images }) => {
  return (
    <div className="flex items-center">
      {images.map((image, index) => (
        <div
          key={index}
          className="w-12 h-12 rounded-full border-2 border-white overflow-hidden -ml-4 first:ml-0 shadow-md"
          style={{ zIndex: images.length - index }}
        >
          <Image
            src={image}
            alt={`Reviewer ${index + 1}`}
            className="w-full h-full object-cover"
            width={48}
            height={48}
          />
        </div>
      ))}
    </div>
  );
};

export default page;
