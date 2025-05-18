import { Trash } from "phosphor-react-native";
import { ExampleProps } from "./props";
import * as S from "./styles";

export const Examples = ({ title, description, onDelete }: ExampleProps) => (
  <S.ExampleContainer>
    <S.ExCont>
      <S.ExampleTitle>{title}</S.ExampleTitle>
      <S.ExampleDescription>{description}</S.ExampleDescription>
      <S.ContIcons onPress={onDelete}>
        <Trash size={32} color="red" />
      </S.ContIcons>
    </S.ExCont>
  </S.ExampleContainer>
);
