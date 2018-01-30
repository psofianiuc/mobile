//
//  ViewController.swift
//  Exam
//
//  Created by Paula Sofianiuc on 29/01/2018.
//  Copyright © 2018 Paula Sofianiuc. All rights reserved.
//

import UIKit
import MessageUI

private let reuseIdentifier = "PSMenuItemCell"

public enum PSMenuItem {
    case feedback
    case switchType
}

class ViewController: UIViewController {
    
    @IBOutlet var menuItemCollectionCell: UICollectionView!    
    @IBOutlet var mainMenuTitleLabel: UILabel!
    
    let userMenuItems = [PSMenuItem.feedback, PSMenuItem.switchType]
    let adminMenuItems = [PSMenuItem.switchType]
    
    var menuItems = [PSMenuItem.switchType]
    
    override func viewDidLoad() {
        super.viewDidLoad()
        
        mainMenuTitleLabel.text = CustomUserDefaults.shared.loginType
        
        if CustomUserDefaults.shared.loginType == UserType.admin {
            menuItems = adminMenuItems
        } else {
            menuItems = userMenuItems
        }
        
        menuItemCollectionCell.delegate = self
        menuItemCollectionCell.dataSource = self
        
        let itemNib = UINib(nibName: "PSMenuItemViewCell", bundle: nil)
        menuItemCollectionCell.register(itemNib, forCellWithReuseIdentifier: reuseIdentifier)
        menuItemCollectionCell.showsVerticalScrollIndicator = false
        menuItemCollectionCell.showsHorizontalScrollIndicator = false
        
    }
    
    override func viewDidAppear(_ animated: Bool) {
        super.viewDidAppear(animated)
    }
    
    // MARK: Show screen actions
    
    func showFeedbackMail() {
        if !MFMailComposeViewController.canSendMail() {
            print("Mail services are not available")
            return
        }
        
        let composeVC = MFMailComposeViewController()
        composeVC.mailComposeDelegate = self
        
        // Configure the fields of the interface.
        composeVC.setToRecipients(["sofianiucpaula@gmail.com"])
        composeVC.setSubject("GlobalWalk feedback")
        
        self.present(composeVC, animated: true) {
            
        }
    }
    
    func askToSwitchType() {
        let alertController = UIAlertController(title: "Are you sure?", message: "You are about to switch user type.", preferredStyle: .alert)
        
        let yes = UIAlertAction(title: "Yes", style: .default) { (action) in
            self.switchType()
        }
        alertController.addAction(yes)
        
        let no = UIAlertAction(title: "No", style: .cancel, handler: nil)
        alertController.addAction(no)
        
        self.present(alertController, animated: true, completion: nil)
    }
    
    func switchType() {
        if CustomUserDefaults.shared.loginType == UserType.user {
            CustomUserDefaults.shared.loginType = UserType.admin
            menuItems = adminMenuItems
        } else {
            CustomUserDefaults.shared.loginType = UserType.user
            menuItems = userMenuItems
        }
        mainMenuTitleLabel.text = CustomUserDefaults.shared.loginType
        menuItemCollectionCell.reloadData()
    }
    
}

extension ViewController: UICollectionViewDelegate, UICollectionViewDataSource, UICollectionViewDelegateFlowLayout {
    func numberOfSections(in collectionView: UICollectionView) -> Int {
        return 1
    }
    
    
    func collectionView(_ collectionView: UICollectionView, numberOfItemsInSection section: Int) -> Int {
        return menuItems.count
    }
    
    func collectionView(_ collectionView: UICollectionView, cellForItemAt indexPath: IndexPath) -> UICollectionViewCell {
        guard let cell = collectionView.dequeueReusableCell(withReuseIdentifier: reuseIdentifier, for: indexPath) as? PSMenuItemViewCell else {
            return UICollectionViewCell()
        }
        
        cell.prepreForType(menuItems[indexPath.row])
        
        return cell
    }
    
    // MARK: UICollectionViewDelegateFlowLayout
    
    func collectionView(_ collectionView: UICollectionView, layout collectionViewLayout: UICollectionViewLayout, sizeForItemAt indexPath: IndexPath) -> CGSize {
        return CGSize(width: self.view.frame.width/2-20, height: 50)
    }
    
    // MARK: UICollectionViewDelegate
    
    func collectionView(_ collectionView: UICollectionView, didSelectItemAt indexPath: IndexPath) {
        
        switch menuItems[indexPath.row] {
        case .feedback:
            self.showFeedbackMail()
        case .switchType:
            self.askToSwitchType()
        }
    }
}

extension ViewController: MFMailComposeViewControllerDelegate {
    public func mailComposeController(_ controller: MFMailComposeViewController, didFinishWith result: MFMailComposeResult, error: Error?) {
        // Check the result or perform other tasks.
        // Dismiss the mail compose view controller.
        controller.dismiss(animated: true) {
        }
    }
}


