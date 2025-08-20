import { useMutation } from "@tanstack/react-query";

import { axiosClient } from "../../../shared/client";
import type { TableItem } from "../types/types";

export const useAddItem = () => {
  return useMutation({
    mutationFn: async (item: TableItem) => {
      const response = await axiosClient.post("items", item);

      return response.data;
    },
  });
};
