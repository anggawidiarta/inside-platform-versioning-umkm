import { fetcher } from '@configs/fetcher';
import {
  TReqLoginParams,
  TLoginResponse,
  TReqRegisterParams,
  IResponseProfile,
  TReqUpdateProfileParams,
  TReqChangePasswordParams,
} from '@lib/entities/Auth';
import { getSession } from 'next-auth/react';
import { getErrorMessage, isAxiosError } from '@utils/utils';
import { TCommonError } from '@lib/entities/Common';

const loginRequest = async (
  params: TReqLoginParams
): Promise<TLoginResponse> => {
  let data = null;
  try {
    const res = await fetcher({
      method: 'POST',
      url: 'auth/login',
      data: params,
    });

    if (res) {
      data = res?.data;
    }
  } catch (error) {
    data = getErrorMessage(error);
  }

  return data;
};

const registerAccountRequest = async (
  params: TReqRegisterParams
): Promise<IResponseProfile> => {
  let data = null;
  try {
    const res = await fetcher({
      method: 'POST',
      url: 'auth/register',
      data: params,
    });

    if (res) {
      data = res?.data;
    }
  } catch (error) {
    data = getErrorMessage(error);
  }

  return data;
};

const loginRequestAuth0 = async (params: {
  token: string;
}): Promise<TLoginResponse> => {
  let data = null;
  try {
    const res = await fetcher({
      method: 'POST',
      url: 'auth/auth0-login',
      data: params,
    });

    if (res) {
      data = res?.data;
    }
  } catch (error) {
    data = getErrorMessage(error);
  }

  return data;
};

const verifyEmail = async (params: {
  token: string;
}): Promise<TLoginResponse> => {
  let data = null;
  try {
    const res = await fetcher({
      method: 'POST',
      url: 'auth/verify-email',
      data: params,
    });

    if (res) {
      data = res?.data;
    }
  } catch (error) {
    data = getErrorMessage(error);
  }

  return data;
};

const resendEmailVerification = async (params: {
  email: string;
}): Promise<TLoginResponse> => {
  let data = null;
  try {
    const res = await fetcher({
      method: 'POST',
      url: 'auth/resend-email-verification',
      data: params,
    });

    if (res) {
      data = res?.data;
    }
  } catch (error) {
    data = getErrorMessage(error);
  }

  return data;
};

const getUserProfile = async (): Promise<IResponseProfile> => {
  const session = await getSession();
  try {
    const res = await fetcher({
      method: 'GET',
      url: '/auth/user',
      headers: {
        Authorization: `Bearer ${session?.token}`,
      },
    });
    return res?.data;
  } catch (error) {
    if (isAxiosError<TCommonError>(error)) {
      throw new Error(error?.response?.data?.message);
    } else {
      throw new Error(error as unknown as string);
    }
  }
};

const forgotPassword = async (params: { email: string }) => {
  try {
    const res = await fetcher({
      method: 'POST',
      url: '/auth/forgot-password',
      data: params,
    });
    return res?.data;
  } catch (error) {
    if (isAxiosError<TCommonError>(error)) {
      throw new Error(error?.response?.data?.message);
    } else {
      throw new Error(error as unknown as string);
    }
  }
};

const resetPassword = async (params: { token: string; password: string }) => {
  try {
    const res = await fetcher({
      method: 'POST',
      url: '/auth/reset-password',
      data: params,
    });
    return res?.data;
  } catch (error) {
    if (isAxiosError<TCommonError>(error)) {
      throw new Error(error?.response?.data?.message);
    } else {
      throw new Error(error as unknown as string);
    }
  }
};

// update profile
const updateProfile = async (params: TReqUpdateProfileParams) => {
  const session = await getSession();
  let data = null;
  try {
    const res = await fetcher({
      method: 'PUT',
      url: `/users/profile/update`,
      headers: {
        Authorization: `Bearer ${session?.token}`,
      },
      data: params,
    });

    if (res) {
      data = res?.data;
    }
  } catch (error) {
    data = getErrorMessage(error);
  }

  return data;
};

// update password
const updatePassword = async (params: TReqChangePasswordParams) => {
  const session = await getSession();
  let data = null;
  try {
    const res = await fetcher({
      method: 'PUT',
      url: `/users/password/update`,
      headers: {
        Authorization: `Bearer ${session?.token}`,
      },
      data: params,
    });

    if (res) {
      data = res?.data;
    }
  } catch (error) {
    data = getErrorMessage(error);
  }

  return data;
};

const healthCheck = async (): Promise<void> => {
  try {
    const res = await fetcher({
      method: 'GET',
      url: '/health/check-maintenance',
    });
    return res?.data;
  } catch (error) {
    throw new Error(error as unknown as string);
  }
};

export {
  loginRequest,
  registerAccountRequest,
  loginRequestAuth0,
  verifyEmail,
  resendEmailVerification,
  getUserProfile,
  forgotPassword,
  resetPassword,
  updateProfile,
  updatePassword,
  healthCheck,
};
