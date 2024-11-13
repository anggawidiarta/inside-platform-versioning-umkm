import { Col, Image, Row, Space, Typography } from 'antd';
import styles from './Footer.module.scss';
import classNames from 'classnames';
import Link from 'next/link';
const Footer = () => {
  return (
    <div className={classNames(styles.footer, 'font-text')}>
      <Row className={styles.footer__container}>
        <Col xs={24} md={6} lg={6}></Col>
        <Col xs={24} md={6} lg={6} className={styles.footer__information}>
          <Typography.Paragraph strong className="text-lg">
            Tentang
          </Typography.Paragraph>
          <Typography.Paragraph className="text-muted">
            Prosedur
          </Typography.Paragraph>
          <Typography.Paragraph className="text-muted">
            Keunggulan
          </Typography.Paragraph>
          <Typography.Paragraph className="text-muted">
            ​Kemitraan
          </Typography.Paragraph>
          <Typography.Paragraph className="text-muted">
            Hubungan Bisnis
          </Typography.Paragraph>
        </Col>

        <Col xs={24} md={6} lg={6} className={styles.footer__information}>
          <Typography.Paragraph strong className="text-lg">
            Social Media
          </Typography.Paragraph>
          <Typography.Paragraph className="text-muted">
            <Link
              href="https://www.facebook.com/insidelomboknews"
              target="_blank"
            >
              Facebook
            </Link>
          </Typography.Paragraph>
          <Typography.Paragraph className="text-muted">
            <Link
              href="https://www.linkedin.com/company/pt-lombok-media-utama"
              target="_blank"
            >
              Linkedin
            </Link>
          </Typography.Paragraph>
          <Typography.Paragraph className="text-muted">
            <Link
              href="https://www.instagram.com/insidelombok/"
              target="_blank"
            >
              Instagram
            </Link>
          </Typography.Paragraph>
          <Typography.Paragraph className="text-muted">
            <Link href="https://www.youtube.com/@InsideLombok" target="_blank">
              Youtube
            </Link>
          </Typography.Paragraph>
          <Typography.Paragraph className="text-muted">
            <Link href="" target="_blank">
              Twitter
            </Link>
          </Typography.Paragraph>
          <Typography.Paragraph className="text-muted">
            <Link href="https://www.tiktok.com/@insidelombok" target="_blank">
              Tiktok
            </Link>
          </Typography.Paragraph>
        </Col>

        <Col xs={24} md={6} lg={6} className={styles.footer__information}>
          <Typography.Paragraph strong className="text-lg">
            Komunitas
          </Typography.Paragraph>
          <Typography.Paragraph className="text-muted">
            <Link
              href="https://youtube.com/playlist?list=PL7SMjgslhf_jf6XjaUGRuSreymKFP5yzo&si=YLE9LhTNIRzDbX-s"
              target="_blank"
            >
              Inside Talk
            </Link>
          </Typography.Paragraph>
          <Typography.Paragraph className="text-muted">
            <Link href="https://www.insidelombok.id/" target="_blank">
              Berita Terkini
            </Link>
          </Typography.Paragraph>
          <Typography.Paragraph className="text-muted">
            <Link
              href="https://youtube.com/playlist?list=PL7SMjgslhf_hP_2yxYK_nGG4tbswp6zn3&si=AsmP3ImYwWQGix1m"
              target="_blank"
            >
              Liputan Khusus
            </Link>
          </Typography.Paragraph>
        </Col>

        {/* <Col xs={24} lg={24}>
          <Typography.Paragraph strong className="text-lg">
            Social Media
          </Typography.Paragraph>
          <Space className={styles.footer__icons} size="large">
            <a href="https://www.instagram.com/insidelombok/" target="_blank">
              <InstagramFilled />
            </a>
            <a
              href="https://www.linkedin.com/company/pt-lombok-media-utama"
              target="_blank"
            >
              <LinkedinFilled />
            </a>
            <a href="https://www.youtube.com/@InsideLombok" target="_blank">
              <YoutubeFilled />
            </a>
            <a href="https://www.facebook.com/insidelomboknews" target="_blank">
              <FacebookFilled />
            </a>
          </Space>
        </Col> */}
      </Row>
      <div className={styles.footer__ribbon}>
        <Typography.Text>
          Copyright © {new Date().getFullYear()} Inside Lombok. All Rights
          Reserved.
        </Typography.Text>
      </div>
    </div>
  );
};

export default Footer;
