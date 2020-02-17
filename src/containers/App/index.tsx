import React, { useState } from 'react'
import { SafeAreaView, StatusBar } from 'react-native'
import { Header } from 'react-native/Libraries/NewAppScreen'
import Button from 'components/Button'
import {
  ContainerScrollView,
  Body,
  SectionContainer,
  SectionTitle,
  SectionDescription,
} from './styled'

const App = () => {
  const [count, setCount] = useState(0)
  const resetCount = () => setCount(0)

  return (
    <>
      <StatusBar barStyle="dark-content" />
      <SafeAreaView>
        <ContainerScrollView contentInsetAdjustmentBehavior="automatic">
          <Header />
          <Body>
            <SectionContainer>
              <SectionTitle>Counter App</SectionTitle>
              <SectionDescription>This is a simple counter project!</SectionDescription>
            </SectionContainer>
            <SectionContainer>
              <SectionTitle>{count}</SectionTitle>
            </SectionContainer>
            <SectionContainer>
              <Button onPress={() => setCount(count + 1)} title="Contar" />
              <Button onPress={resetCount} title="Zerar" />
            </SectionContainer>
          </Body>
        </ContainerScrollView>
      </SafeAreaView>
    </>
  )
}

export default App
