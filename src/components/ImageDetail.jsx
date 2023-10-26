import { useState } from 'react';

function ImageDetailShow() {
  const [image, setImage] = useState(1);

  const images = [
    'https://carryboycaravan.com/motor-home/exterior/motorhome-for-sale-recreational-vehicle-campers-for-pickup-truck-toyota-hilux-revo-standard-cab-chassis-carryboy-rod-baan-next-gen-rv-go-to-travel-and-camping-2.jpg',
    'https://carryboycaravan.com/motor-home/toyota-hilux-revo/motorhomes-carryboy-rod-baan-for-camping-adventures-tours-trips-holidays-travel-campsite-party-hiking-recreation-amusement-entertainment-voyage-journey-1.jpg',
    'https://carryboycaravan.com/motor-home/interior/interior-motorhome-recreational-vehicle-rvs-sofa-beds-campers-rv-furniture-couches-sleeper-sofas-manufacturer-carryboy-rod-baan-1.jpg',
    'https://carryboycaravan.com/motor-home/interior/motorhome-interior-decoration-recreational-vehicle-rvs-sofa-beds-campers-rv-furniture-couches-sleeper-sofas-manufacturer-carryboy-rod-baan-1.jpg',
    'https://carryboycaravan.com/motor-home/interior/motorhome-interior-decoration-recreational-vehicle-rvs-sofa-beds-campers-rv-furniture-couches-sleeper-sofas-manufacturer-carryboy-rod-baan-1.jpg',
    'https://carryboycaravan.com/motor-home/interior/motorhome-interior-decoration-recreational-vehicle-rvs-sofa-beds-campers-rv-furniture-couches-sleeper-sofas-manufacturer-carryboy-rod-baan-1.jpg'
  ];

  return (
    <div>
      <div className="h-64 md:h-80 rounded-lg bg-gray-100 mb-4">
        {images.map((url, i) => (
          <div key={i} style={{ display: image === i + 1 ? 'flex' : 'none' }} className="h-64 md:h-80 rounded-lg bg-gray-100 mb-4 flex items-center justify-center">
            <img src={url} alt={`Image ${i + 1}`} className="max-w-full max-h-full" />
          </div>
        ))}
      </div>

      <div className={`flex -mx-2 mb-4 items-center justify-center ${images.length > 3 ? 'min-[300px]:flex-wrap' : ''}`}>
        {images.map((url, i) => (
          <div key={i} className="p-2 w-1/3">
            <button
              onClick={() => setImage(i + 1)}
              className={`focus:outline-none w-full rounded-lg h-24 md:h-32 bg-gray-100 flex items-center justify-center ${image === i + 1 ? 'ring-2 ring-indigo-300 ring-inset' : ''}`}
            >
              <img src={url} alt={`Image ${i + 1}`} className="max-w-full max-h-full" />
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}

export default ImageDetailShow;
