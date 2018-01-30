//
//  CustomUserDefaults.swift
//  GlobalWalk
//
//  Created by Paula Sofianiuc on 02/11/2017.
//  Copyright © 2017 Paula Sofianiuc. All rights reserved.
//

import Foundation

struct UserDefaultsKeys {
    static let isFirstRunKey = "IsFirstRunKey"
    static let loginType = "LoginTypeKey"
}

struct UserType {
    static let user = "User"
    static let admin = "Admin"
}

class CustomUserDefaults: UserDefaults {
    static let shared: CustomUserDefaults = CustomUserDefaults()
    
    var userDefaults: UserDefaults {
        return UserDefaults.standard
    }
    
    var isFirstRun: Bool? {
        set {
            save(value: newValue ?? false, forKey: UserDefaultsKeys.isFirstRunKey)
        }
        get {
            return getObject(UserDefaultsKeys.isFirstRunKey) as? Bool
        }
    }
    
    var loginType: String? {
        set {
            save(value: newValue ?? "", forKey: UserDefaultsKeys.loginType)
        }
        get {
            return getObject(UserDefaultsKeys.loginType) as? String
        }
    }
    
    
    // MARK: Private methods
    
    private func save(value: Any, forKey key: String) {
        userDefaults.set(value, forKey: key)
        userDefaults.synchronize()
    }
    
    private func getObject(_ key:String) -> Any? {
        return userDefaults.value(forKey: key)
    }
}
