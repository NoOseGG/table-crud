import { useQuery } from "@tanstack/react-query";

import { axiosClient } from "../../../shared/client";
import type { TableItems } from "../types/types";

export const useGetTableData = () => {
  return useQuery({
    queryKey: ["items"],
    queryFn: async () => {
      const response = await axiosClient.get<TableItems[]>("/items");

      return response.data;
    },
  });
};
