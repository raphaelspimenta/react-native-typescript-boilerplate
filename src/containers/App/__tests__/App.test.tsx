import React from 'react'
import renderer, { act } from 'react-test-renderer'
import { Button, Text } from 'react-native'
import App from '..'

describe('App Counter Test', () => {
  it('should renders correctly', () => {
    renderer.create(<App />)
  })

  it('should click on counter button', () => {
    const component = renderer.create(<App />)
    const testComponent = component.root
    const button = testComponent.findAllByType(Button)[0]
    act(() => {
      button.props.onPress()
    })
    expect(testComponent.findAllByType(Text)[3].props.children).toBe(1)
  })

  it('should click on reset counter button', () => {
    const component = renderer.create(<App />)
    const testComponent = component.root
    const button = testComponent.findAllByType(Button)[1]
    act(() => {
      button.props.onPress()
    })
    expect(testComponent.findAllByType(Text)[3].props.children).toBe(0)
  })
})
