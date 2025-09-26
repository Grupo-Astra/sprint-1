import { NavBar } from '@/components/navbar/Navbar';
import React from 'react';
import { StyleSheet, TextInput } from 'react-native';
import { SafeAreaProvider, SafeAreaView } from 'react-native-safe-area-context';
import * as S from './styles';

export const NovaLeitura = () => {
    const [number, onChangeNumber] = React.useState('');
    
    return(
        <S.LeituraContainer>
            <SafeAreaProvider>
                <SafeAreaView style={{ flex: 1 }}>
                    <S.ContentContainer>
                        <S.TitleNovaLeitura>
                            Nova Leitura Forms
                        </S.TitleNovaLeitura>
                        
                        <TextInput
                            style={styles.input}
                            onChangeText={onChangeNumber}
                            value={number}
                            placeholder="Nome do Sensor"
                        />
                        <TextInput
                            style={styles.input}
                            onChangeText={onChangeNumber}
                            value={number}
                            placeholder="Valor atual"
                        />
                        <TextInput
                            style={styles.input}
                            onChangeText={onChangeNumber}
                            value={number}
                            placeholder="Status Atual"
                        />

                        <S.SentButton>
                            Enviar 
                        </S.SentButton>
                    </S.ContentContainer>
                    
                    <S.NavBarContainer>
                        <NavBar />
                    </S.NavBarContainer>
                </SafeAreaView>
            </SafeAreaProvider>
        </S.LeituraContainer>
    )
};

const styles = StyleSheet.create({
  input: {
    height: 40,
    margin: 12,
    borderWidth: 1,
    padding: 10,
  },
});
