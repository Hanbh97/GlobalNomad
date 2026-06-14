import { useMutation } from "@tanstack/react-query";
import updateProfileAction from "../actions/updateProfileAction";

const useUpdateProfile = () => {
  return useMutation({
    mutationFn: updateProfileAction,
  });
};

export default useUpdateProfile;
