package com.idriveyou

import android.os.Bundle
import com.facebook.react.ReactActivity
import com.facebook.react.ReactActivityDelegate
import com.facebook.react.ReactRootView
import com.swmansion.gesturehandler.react.RNGestureHandlerEnabledRootView
import com.facebook.react.defaults.DefaultReactActivityDelegate
import com.facebook.react.defaults.DefaultNewArchitectureEntryPoint

class MainActivity : ReactActivity() {

    override fun onCreate(savedInstanceState: Bundle?) {
        super.onCreate(null)
    }

    override fun getMainComponentName(): String {
        return "IdriveYOu" // Ensure this matches your app's name
    }

      override fun createReactActivityDelegate(): ReactActivityDelegate {
        return DefaultReactActivityDelegate(
            this,
            mainComponentName,
            false
        )
    }
}
