"use server";

import serverFetchAuth from "@/lib/http/serverFetchAuth";
import { MyProfileImageResponse } from "../type";

const uploadProfileImageAction = async (
  formData: FormData,
): Promise<MyProfileImageResponse> => {
  return serverFetchAuth<MyProfileImageResponse>("/users/me/image", {
    method: "POST",
    body: formData,
    headers: {
      "Content-Type": "", // FormData Content-Type은 자동 설정되도록 지정 X
    },
  });
};

export default uploadProfileImageAction;
