import { TReqRegisterParams } from '@lib/entities/Auth';
import {
  registerAccountRequest,
  verifyEmail,
  resendEmailVerification,
  getUserProfile,
  forgotPassword,
  resetPassword,
  updateProfile,
  updatePassword,
  healthCheck,
} from '@lib/repositories/Auth';
import { TCommonError } from '@lib/entities/Common';
import {
  IResponseProfile,
  TReqUpdateProfileParams,
  TReqChangePasswordParams,
} from '@lib/entities/Auth';
import {
  UseMutationResult,
  useMutation,
  UseQueryResult,
  useQuery,
} from 'react-query';

// register new account
const useRegisterAccount = (): UseMutationResult<
  IResponseProfile,
  Error,
  TReqRegisterParams,
  unknown
> => {
  return useMutation((params: TReqRegisterParams) =>
    registerAccountRequest(params)
  );
};

const useReqResetPassword = (): UseMutationResult<
  unknown,
  TCommonError,
  { token: string; password: string },
  null
> => {
  return useMutation({
    mutationFn: (params) => resetPassword(params),
  });
};

const useReqForgotPassword = (): UseMutationResult<
  unknown,
  TCommonError,
  { email: string },
  null
> => {
  return useMutation({
    mutationFn: (params) => forgotPassword(params),
  });
};

// get user profile
const useFetchUserProfile = (
  token: string
): UseQueryResult<IResponseProfile> => {
  return useQuery<IResponseProfile>(
    ['fetchUserProfile', token],
    async () => await getUserProfile(),
    {
      enabled: !!token,
    }
  );
};

const useVerifyEmail = (): UseMutationResult<
  unknown,
  TCommonError,
  { token: string },
  null
> => {
  return useMutation({
    mutationFn: (params) => verifyEmail(params),
  });
};

const useResendVerification = (): UseMutationResult<
  unknown,
  TCommonError,
  { email: string },
  null
> => {
  return useMutation({
    mutationFn: (params) => resendEmailVerification(params),
  });
};

// submit update profile
const useUpdateProfile = (): UseMutationResult<
  unknown,
  Error,
  TReqUpdateProfileParams,
  unknown
> => {
  return useMutation((params: TReqUpdateProfileParams) =>
    updateProfile(params)
  );
};

// submit change password
const useChangePassword = (): UseMutationResult<
  unknown,
  Error,
  TReqChangePasswordParams,
  unknown
> => {
  return useMutation((params: TReqChangePasswordParams) =>
    updatePassword(params)
  );
};

// health check for maintenance mode
const useHealthCheck = (): UseQueryResult<void> => {
  return useQuery<void>(['healthCheck'], async () => await healthCheck(), {
    enabled: false,
  });
};

export {
  useRegisterAccount,
  useReqResetPassword,
  useReqForgotPassword,
  useFetchUserProfile,
  useVerifyEmail,
  useResendVerification,
  useUpdateProfile,
  useChangePassword,
  useHealthCheck,
};
