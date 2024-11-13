import React, { useState } from 'react';
import { Row, Col, Image, Card } from 'antd';

interface ImageGalleryProps {
  images: string[];
}

const ImageGallery: React.FC<ImageGalleryProps> = ({ images }) => {
  const [highlightedImage, setHighlightedImage] = useState(images[0]);

  const handleImageClick = (image: string) => {
    setHighlightedImage(image);
  };

  return (
    <div>
      <Row
        style={{
          position: 'relative',
          width: '100%',
          height: 'auto',
          margin: 'auto',
        }}
        justify={'center'}
        align={'middle'}
      >
        <Card
          style={{
            margin: 'auto',
            justifyContent: 'center',
            justifyItems: 'center',
          }}
        >
          <Image
            src={highlightedImage}
            alt="highlighted_image"
            style={{
              width: '100%',
              height: '400px',
              alignItems: 'center',
              alignContent: 'center',
            }}
          />
        </Card>
      </Row>
      {images.length >= 1 && (
        <>
          <Row
            gutter={[16, 16]}
            style={{ overflowX: 'auto', marginTop: '20px' }}
          >
            {images.map((image, index) => (
              <Col md={3} key={index} span={4}>
                <Card style={{ minHeight: '120px' }}>
                  <Image
                    src={image}
                    alt={`image_${index}`}
                    style={{
                      width: '100%',
                      maxHeight: '300px',
                      cursor: 'pointer',
                    }}
                    onClick={() => handleImageClick(image)}
                    preview={false}
                  />
                </Card>
              </Col>
            ))}
          </Row>
        </>
      )}
    </div>
  );
};

export default ImageGallery;
