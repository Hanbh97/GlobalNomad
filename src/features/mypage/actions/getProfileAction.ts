"use server";

import { cookies } from "next/headers";
import axios from "axios";
import { MyProfileResponse } from "../type";

const SERVER_URL = process.env.NEXT_PUBLIC_API_BASE_URL;

export const getProfileAction = async (): Promise<MyProfileResponse> => {
  const cookiesStorage = await cookies();
  const accessToken = cookiesStorage.get("accessToken")?.value;
  try {
    const response = await axios.get(`${SERVER_URL}/users/me`, {
      headers: { Authorization: `Bearer ${accessToken}` },
    });
    return response.data;
  } catch (error) {
    let errorMessage = "내 정보 조회에 실패했습니다.";

    if (axios.isAxiosError(error)) {
      const statusCode = error.response?.status;
      if (statusCode === 401) {
        errorMessage = "로그인 후 이용해 주세요.";
      } else if (statusCode === 404) {
        errorMessage = "존재하지 않는 유저입니다.";
      }
    }
    throw new Error(errorMessage);
  }
};
