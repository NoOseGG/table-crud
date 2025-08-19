import { Container, Title } from "../../shared/ui";
import { CrudTable } from "../../widgets/crud-table/ui/crud-table";

export const HomePage = () => {
  return (
    <Container>
      <Title />
      <CrudTable />
    </Container>
  );
};
