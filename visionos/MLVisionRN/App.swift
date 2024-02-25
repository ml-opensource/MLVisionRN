import SwiftUI
import React
import React_RCTSwiftExtensions

@main
struct MLVisionRNApp: App {
  @UIApplicationDelegateAdaptor var delegate: AppDelegate

  var body: some Scene {
    RCTMainWindow(moduleName: "MLVisionRN")
      .defaultSize(CGSize(width: 1280, height: 720))
  }
}
