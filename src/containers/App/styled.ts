import styled from 'styled-components/native'
import { Colors } from 'react-native/Libraries/NewAppScreen'

export const ContainerScrollView = styled.ScrollView`
  background-color: ${Colors.lighter};
`

export const Body = styled.View`
  background-color: ${Colors.white};
`

export const SectionContainer = styled.View`
  margin-top: 32px;
  padding: 24px;
`

export const SectionTitle = styled.Text`
  font-size: 24;
  font-weight: 800;
  color: ${Colors.black};
`

export const SectionDescription = styled.Text`
  margin-top: 20px;
  font-size: 18;
  font-weight: 400;
  color: ${Colors.dark};
`
