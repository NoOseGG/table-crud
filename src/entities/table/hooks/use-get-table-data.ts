import { useQuery } from "@tanstack/react-query";

import { axiosClient } from "../../../shared/client";
import type { TableItem } from "../types/types";

export const useGetTableData = () => {
  return useQuery({
    queryKey: ["items"],
    queryFn: async () => {
      const response = await axiosClient.get<TableItem[]>("/items");

      return response.data;
    },
  });
};
