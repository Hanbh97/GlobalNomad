"use server";

import { cookies } from "next/headers";
import axios from "axios";
import { MyProfileRequestBody, MyProfileResponse } from "../type";

const SERVER_URL = process.env.NEXT_PUBLIC_API_BASE_URL;

const updateProfileAction = async (
  body: MyProfileRequestBody,
): Promise<MyProfileResponse> => {
  const cookiesStorage = await cookies();
  const accessToken = cookiesStorage.get("accessToken")?.value;

  try {
    const response = await axios.patch(`${SERVER_URL}/users/me`, body, {
      headers: { Authorization: `Bearer ${accessToken}` },
    });
    return response.data;
  } catch (error) {
    let errorMessage = "내 정보 수정에 실패했습니다.";
    if (axios.isAxiosError(error)) {
      const statusCode = error.response?.status;
      if (statusCode === 400) {
        errorMessage =
          error.response?.data?.message ?? "요청 형식이 올바르지 않습니다.";
      } else if (statusCode === 401) {
        errorMessage = "로그인 후 이용해 주세요.";
      }
    }
    throw new Error(errorMessage);
  }
};

export default updateProfileAction;
