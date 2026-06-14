export interface ProfileEditFormValues {
  nickname: string;
  email: string;
  newPassword: string;
  newPasswordConfirm: string;
}

export interface MyProfileRequestBody {
  nickname: string;
  profileImageUrl: string;
  newPassword: string;
}
