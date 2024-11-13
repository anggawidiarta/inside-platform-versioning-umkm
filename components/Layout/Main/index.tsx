import { Fragment, ReactNode } from 'react';
import Footer from '../Footer';
import Header from '../Header';
import styles from './Main.module.scss';
import classNames from 'classnames';
import { Button, Typography, Spin } from 'antd';
import { LeftOutlined } from '@ant-design/icons';
import { useRouter } from 'next/router';
import { UserContext } from '@lib/context/UserContext';

export type MainLayoutPropsType = {
  children: ReactNode;
  withBackground?: 'small' | 'large';
  backgroundType?:
    | 'default'
    | 'cyan'
    | 'purple'
    | 'red'
    | 'notes'
    | 'drawing'
    | 'detail'
    | 'white';
  container?: boolean;
  withBackButton?: boolean;
  pageTitle?: string;
  hideHeader?: boolean;
  hideFooter?: boolean;
  title?: string;
  targetBackButton?: string;
  imageMetaUrl?: string;
  isLoading?: boolean;
  hideMenuBar?: boolean;
  isUMKM?: boolean;
  style?: React.CSSProperties;
  value?: string;
  onChange?: any;
  onSearch?: (value: string) => void;
};

const MainLayout = (props: MainLayoutPropsType) => {
  const { backgroundType = 'default' } = props;
  const router = useRouter();
  const { isLoading = false } = props;

  const backButtonHandler = () => {
    if (props?.targetBackButton) {
      router.push(props.targetBackButton);
    } else {
      router.back();
    }
  };

  return (
    <UserContext.Provider value={undefined}>
      <Fragment>
        {!props.hideHeader && (
          <Header
            isUMKM={props?.isUMKM}
            title={props?.title}
            imageMetaUrl={props?.imageMetaUrl}
            value={props.value}
            onChange={props.onChange}
            onSearch={props.onSearch}
          />
        )}
        <Spin spinning={isLoading}>
          {props.withBackground && (
            <div
              className={classNames({
                [styles.mainLayout__background]:
                  props.withBackground === 'large',
                [styles.mainLayout__background__small]:
                  props.withBackground === 'small',
                [styles[`mainLayout__background__${backgroundType}`]]:
                  backgroundType,
              })}
            ></div>
          )}
          {props.pageTitle && (
            <div className={styles.mainLayout__pageTitle}>
              <div
                className={classNames({
                  [styles.mainLayout__container]: props.container,
                })}
              >
                {props.withBackButton && (
                  <Button
                    className={styles.mainLayout__buttonBack}
                    icon={<LeftOutlined />}
                    onClick={backButtonHandler}
                  >
                    Back
                  </Button>
                )}
                <Typography.Text strong>{props?.pageTitle}</Typography.Text>
              </div>
            </div>
          )}
          {!props.pageTitle && props.withBackButton && (
            <div
              className={classNames({
                [styles.mainLayout__backButtonContainer]: props.container,
              })}
            >
              {props.withBackButton && (
                <Button
                  className={styles.mainLayout__buttonBack}
                  icon={<LeftOutlined />}
                  onClick={backButtonHandler}
                >
                  BACK
                </Button>
              )}
            </div>
          )}
          <div className={styles.mainLayout__backdrop} style={props.style}>
            <div
              className={classNames({
                [styles.mainLayout__container]: props.container,
              })}
            >
              {props.children}
            </div>
          </div>
        </Spin>
        {!props.hideFooter && <Footer />}
        {/* {!props.hideMenuBar && isMobile && (
          <>
            <MenuBar />
          </>
        )} */}
      </Fragment>
    </UserContext.Provider>
  );
};

export default MainLayout;
