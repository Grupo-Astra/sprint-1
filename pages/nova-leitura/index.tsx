import { NavBar } from '@/components/navbar/Navbar';
import { createSensorReading } from '@/services/api';
import React, { useState } from 'react';
import { Alert, StyleSheet, TextInput } from 'react-native';
import { SafeAreaProvider, SafeAreaView } from 'react-native-safe-area-context';
import * as S from './styles';

export const NovaLeitura = () => {
    const [name, setName] = useState('');
    const [currentValue, setCurrentValue] = useState('');
    const [currentStatus, setCurrentStatus] = useState('');
    const [isLoading, setIsLoading] = useState(false);

    const handleSubmit = async () => {
        if (!name.trim() || !currentValue.trim() || !currentStatus.trim()) {
            Alert.alert('Erro', 'Por favor, preencha todos os campos');
            return;
        }

        const numericValue = parseFloat(currentValue);
        if (isNaN(numericValue)) {
            Alert.alert('Erro', 'O valor atual deve ser um número');
            return;
        }

        setIsLoading(true);

        try {
            const sensorData = {
                name: name.trim(),
                currentValue: numericValue,
                currentStatus: currentStatus.trim()
            };

            console.log('Enviando dados:', sensorData); 

            await createSensorReading(sensorData);
            
            // Limpar o formulário
            setName('');
            setCurrentValue('');
            setCurrentStatus('');
            
            Alert.alert('Sucesso', 'Leitura cadastrada com sucesso!');
        } catch (error) {
            console.error('Erro ao cadastrar leitura:', error);
            Alert.alert('Erro', 'Não foi possível cadastrar a leitura. Tente novamente.');
        } finally {
            setIsLoading(false);
        }
    };

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
                            onChangeText={setName}
                            value={name}
                            placeholder="Nome do Sensor"
                            editable={!isLoading}
                        />
                        <TextInput
                            style={styles.input}
                            onChangeText={setCurrentValue}
                            value={currentValue}
                            placeholder="Valor atual"
                            keyboardType="numeric"
                            editable={!isLoading}
                        />
                        <TextInput
                            style={styles.input}
                            onChangeText={setCurrentStatus}
                            value={currentStatus}
                            placeholder="Status Atual"
                            editable={!isLoading}
                        />

                        <S.SentButton 
                            onPress={handleSubmit}
                            disabled={isLoading}
                            style={{ opacity: isLoading ? 0.6 : 1 }}
                        >
                            {isLoading ? 'Enviando...' : 'Enviar'}
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