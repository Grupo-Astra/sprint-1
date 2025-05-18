import { ReactElement } from "react";
import { ListRenderItem, FlatList as RNFlatList } from "react-native";
import { FlatListProps } from "./props";

export const FlatListSensor = ({ data }: FlatListProps) => {
  const renderItem: ListRenderItem<ReactElement> = ({ item }) => item;

  return (
    <RNFlatList
      data={data}
      horizontal
      keyExtractor={(_, index) => index.toString()}
      showsHorizontalScrollIndicator={false}
      contentContainerStyle={{ paddingHorizontal: 16 }}
      renderItem={renderItem}
    />
  );
};
