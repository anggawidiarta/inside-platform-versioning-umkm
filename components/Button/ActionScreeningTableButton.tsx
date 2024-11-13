import { EyeFilled } from '@ant-design/icons';
import { Button, Col, Row } from 'antd';
import styles from './Button.module.scss';

type TActionScreeningTableButton = {
  onReject: () => void;
  onConsider: () => void;
  onAccept: () => void;
  isJuryAccessed: boolean;
  isCommitStep?: boolean;
  onDetail: () => void;
  showAccept?: boolean;
  showConsider?: boolean;
  showReject?: boolean;
};

export const ActionScreeningTableButton = (
  props: TActionScreeningTableButton
) => {
  const {
    showAccept = true,
    showConsider = true,
    showReject = true,
    isCommitStep = false,
  } = props;
  return (
    <Row justify="start" gutter={[10, 12]} align="middle">
      {props.isJuryAccessed && (
        <>
          {showReject && (
            <Col xs={24} lg={6}>
              <Button
                type="primary"
                shape="round"
                danger
                onClick={props.onReject}
                block
              >
                TOLAK
              </Button>
            </Col>
          )}
          {showConsider && (
            <Col xs={24} lg={10}>
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
            <Col xs={24} lg={6}>
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
      <Col span={2}>
        <EyeFilled className={styles.buttonDetail} onClick={props.onDetail} />
      </Col>
    </Row>
  );
};
