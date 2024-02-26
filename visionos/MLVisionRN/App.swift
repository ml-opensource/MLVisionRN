import SwiftUI
import React
import React_RCTSwiftExtensions

@main
struct MLVisionRNApp: App {
  @UIApplicationDelegateAdaptor var delegate: AppDelegate

  @State private var orbitImmersionStyle: ImmersionStyle = .mixed
  @State private var solarImmersionStyle: ImmersionStyle = .full

  var body: some Scene {
    RCTMainWindow(moduleName: "MLVisionRN")
      .defaultSize(CGSize(width: 1280, height: 720))

    /* ImmersiveSpace(id: Module.orbit.name) {
        Orbit()
            .environment(model)
    }
    .immersionStyle(selection: $orbitImmersionStyle, in: .mixed)

    ImmersiveSpace(id: Module.solar.name) {
        SolarSystem()
            .environment(model)
    }
    .immersionStyle(selection: $solarImmersionStyle, in: .full) */
  }
}
