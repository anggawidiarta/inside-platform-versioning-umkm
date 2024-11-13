import { Typography, Image, UploadFile } from 'antd';
import { checkFileImageType, isImage } from '@utils/utils';

type ViewImageFileListPropsType = {
  fileList: UploadFile[];
};

const ViewImageFileList = (props: ViewImageFileListPropsType) => {
  return (
    <>
      {checkFileImageType(props?.fileList) && (
        <Typography.Paragraph
          style={{ fontFamily: 'Calibri Light', fontSize: '16px' }}
        >
          Ilustrasi gambar:
        </Typography.Paragraph>
      )}
      {props?.fileList.map((file, index) => {
        if (isImage(file.linkProps)) {
          return (
            <Image
              key={index}
              src={file.url}
              alt={file.name}
              style={{ width: '100%', marginBottom: 10 }}
              loading="lazy"
            />
          );
        }
      })}
    </>
  );
};

export default ViewImageFileList;
