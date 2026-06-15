"use server";

import { cookies } from "next/headers";
import axios from "axios";
import { MyProfileImageResponse } from "../type";

const SERVER_URL = process.env.NEXT_PUBLIC_API_BASE_URL;

const uploadProfileImageAction = async (
  formData: FormData,
): Promise<MyProfileImageResponse> => {
  const cookiesStorage = await cookies();
  const accessToken = cookiesStorage.get("accessToken")?.value;

  try {
    const response = await axios.post(
      `${SERVER_URL}/users/me/image`,
      formData,
      {
        headers: { Authorization: `Bearer ${accessToken}` },
      },
    );
    return response.data;
  } catch (error) {
    let errorMessage = "프로필 이미지 변경에 실패했습니다.";
    if (axios.isAxiosError(error)) {
      const statusCode = error.response?.status;
      if (statusCode === 401) {
        errorMessage = "로그인 후 이용해 주세요.";
      } else {
        errorMessage = error.response?.data?.message ?? errorMessage;
      }
    }
    throw new Error(errorMessage);
  }
};

export default uploadProfileImageAction;
