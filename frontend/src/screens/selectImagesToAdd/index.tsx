import { Ionicons } from '@expo/vector-icons';
import { AssetsSelector } from 'expo-images-picker';
import React, { useMemo } from 'react';

import { Alert, CameraRollAssetType, View } from 'react-native';
import { getStatusBarHeight } from 'react-native-iphone-x-helper';
import { usePropertyFormData } from '../../contexts/propertyFormData';
import { fonts } from '../../global/styles/fonts';

export function SelectImagesToAdd({ navigation }: any) {
  const widgetSettings = useMemo(
    () => ({
      getImageMetaData: false,
      initialLoad: 100,
      assetsType: ['photo'],
      minSelection: 1,
      maxSelection: 10,
      portraitCols: 4,
      landscapeCols: 4,
    }),
    []
  );

  const widgetErrors = useMemo(
    () => ({
      errorTextColor: "red",
      errorMessages: {
        hasErrorWithPermissions: "Você precisa habilitar a permissão para as fotos!",
        hasErrorWithLoading: "Ocorreu um erro ao carregar!",
        hasErrorWithResizing: "Ocorreu um erro ao carregar!",
        hasNoAssets: "Nenhuma imagem selecionada.",
      },
    }),
    []
  );

  const widgetStyles = useMemo(
    () => ({
      margin: 2,
      bgColor: "#fff",
      spinnerColor: "#764D35",
      widgetWidth: 99,
      videoIcon: {
        Component: Ionicons,
        iconName: 'ios-videocam',
        color: "black",
        size: 20,
      },
      selectedIcon: {
        Component: Ionicons,
        iconName: 'ios-checkmark-circle-outline',
        color: 'white',
        bg: "#764D35",
        size: 26,
      },
    }),
    ["#fff", "#764D35"]
  );

  const widgetNavigator = useMemo(
    () => ({
      Texts: {
        finish: 'Finalizar',
        back: 'Voltar',
        selected: 'selected',
      },
      midTextColor: "#fff",
      minSelection: 1,
      maxSelection: 10,
      buttonTextStyle: { fontFamily: fonts.raj400 },
      buttonStyle: { borderColor: "#764D35", borderWidth: 1 },
      onBack: () => navigation.goBack(),
      onSuccess: (data: CameraRollAssetType[]) => onSuccess(data),
    }),
    []
  );

  const { sendImages } = usePropertyFormData();

  function onSuccess(data: CameraRollAssetType[]) {
    sendImages(data);
  }

  return (
    <View style={{ flex: 1, marginTop: getStatusBarHeight() + 15 }}>
      <AssetsSelector
        Settings={widgetSettings as any}
        Errors={widgetErrors}
        Styles={widgetStyles}
        Navigator={widgetNavigator}
      />
    </View>
  );
}