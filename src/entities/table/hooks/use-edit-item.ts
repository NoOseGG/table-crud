import { useMutation, useQueryClient } from "@tanstack/react-query";

import { axiosClient } from "../../../shared/client";
import type { DataType } from "../types/types";

export const useEditItem = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: async (item: DataType) => {
      const response = await axiosClient.put(`/items/${item.id}`, item);

      return response.data;
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["items"] });
    },
  });
};
