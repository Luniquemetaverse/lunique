import React from 'react'
import { Unity, useUnityContext } from 'react-unity-webgl'

export default function DemoPage() {
  const { unityProvider, isLoaded, loadingProgression } = useUnityContext({
    loaderUrl: 'game/build/Build.loader.js',
    dataUrl: 'game/build/Build.data',
    frameworkUrl: 'game/build/Build.framework.js',
    codeUrl: 'game/build/Build.wasm',
    streamingAssetsUrl: 'StreamingAssets',
    companyName: 'Vaionex',
    productName: 'Lunique',
    productVersion: '1',
  })

  // We'll round the loading progression to a whole number to represent the
  // percentage of the Unity Application that has loaded.
  const loadingPercentage = Math.round(loadingProgression * 100)

  return (
    <div className="containerDemo">
      {isLoaded === false && (
        // We'll conditionally render the loading overlay if the Unity
        // Application is not loaded.
        <div className="loading-overlay">
          <p>Loading... ({loadingPercentage}%)</p>
        </div>
      )}
      <Unity className="unity" unityProvider={unityProvider} />
    </div>
  )
}
