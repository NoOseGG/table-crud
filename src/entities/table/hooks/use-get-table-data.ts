import { useQuery } from "@tanstack/react-query";

import { axiosClient } from "../../../shared/client";
import type { DataType } from "../types/types";

export const useGetTableData = () => {
  return useQuery({
    queryKey: ["items"],
    queryFn: async () => {
      const response = await axiosClient.get<DataType[]>("/items");

      return response.data;
    },
  });
};
