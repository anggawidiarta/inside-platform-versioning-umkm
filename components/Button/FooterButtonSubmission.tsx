import { Button, Col, Row } from 'antd';

type TFooterButtonSubmission = {
  isLoading: boolean;
  onBack: () => void;
  onSubmit: () => void;
  onSaved: () => void;
};

const FooterButtonSubmission = (props: TFooterButtonSubmission) => {
  return (
    <Row justify="start" gutter={[12, 12]} style={{ marginTop: '1rem' }}>
      <Col xs={24} md={6}>
        <Button
          disabled={props.isLoading}
          block
          size="large"
          type="primary"
          ghost
          onClick={props.onBack}
        >
          {props.isLoading ? 'Loading...' : 'KEMBALI'}
        </Button>
      </Col>
      <Col xs={24} md={6}>
        <Button
          disabled={props.isLoading}
          block
          size="large"
          type="default"
          onClick={props.onSaved}
        >
          {props.isLoading ? 'Loading...' : 'SIMPAN'}
        </Button>
      </Col>
      <Col xs={24} md={6}>
        <Button
          disabled={props.isLoading}
          htmlType="submit"
          type="primary"
          block
          onClick={props.onSubmit}
          size="large"
        >
          {props.isLoading ? 'Loading...' : 'BERIKUTNYA'}
        </Button>
      </Col>
    </Row>
  );
};

export default FooterButtonSubmission;
