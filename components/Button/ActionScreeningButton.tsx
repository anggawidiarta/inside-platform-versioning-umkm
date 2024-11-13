import { CloudDownloadOutlined } from '@ant-design/icons';
import { Button, Col, Row } from 'antd';

type TActionScreeningButton = {
  isAnySelectedRow: boolean;
  onReject: () => void;
  onConsider: () => void;
  onAccept: () => void;
  isLoadingExport: boolean;
  onExport: () => void;
  showAccept?: boolean;
  showConsider?: boolean;
  isCommitStep?: boolean;
};

export const ActionScreeningButton = (props: TActionScreeningButton) => {
  const {
    showAccept = true,
    showConsider = true,
    isCommitStep = false,
  } = props;
  return (
    <Row justify="start" style={{ marginBottom: 10 }} gutter={[6, 24]}>
      {props.isAnySelectedRow && (
        <>
          <Col xs={24} lg={2}>
            <Button
              type="primary"
              danger
              shape="round"
              onClick={props.onReject}
              block
            >
              TOLAK
            </Button>
          </Col>
          {showConsider && (
            <Col xs={24} lg={3}>
              <Button
                type="primary"
                shape="round"
                onClick={props.onConsider}
                block
                style={{ backgroundColor: '#fc8108' }}
              >
                PERTIMBANGKAN
              </Button>
            </Col>
          )}
          {showAccept && (
            <Col xs={24} lg={2}>
              <Button
                type="primary"
                shape="round"
                style={{ background: '#52c41a', borderColor: '#52c41a' }}
                onClick={props.onAccept}
                block
              >
                {isCommitStep ? 'COMMIT' : 'TERIMA'}
              </Button>
            </Col>
          )}
        </>
      )}
      <Col xs={24} lg={3}>
        <Button
          disabled={props.isLoadingExport}
          icon={<CloudDownloadOutlined />}
          type="primary"
          shape="round"
          onClick={props.onExport}
          block
        >
          {props.isLoadingExport ? `loading...` : `DOWNLOAD`}
        </Button>
      </Col>
    </Row>
  );
};
