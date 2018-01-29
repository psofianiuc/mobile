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
    case logOut
}

class ViewController: UIViewController {
    
    @IBOutlet var menuItemCollectionCell: UICollectionView!
    
    let userMenuItems = [PSMenuItem.feedback, PSMenuItem.logOut]
    let adminMenuItems = [PSMenuItem.logOut]
    
    var menuItems = [PSMenuItem.logOut]
    
    override func viewDidLoad() {
        super.viewDidLoad()
        print(CustomUserDefaults.shared.loginType)
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
    
    func askToLogOut() {
        let alertController = UIAlertController(title: "Are you sure?", message: "You are about to log out.", preferredStyle: .alert)
        
        let yes = UIAlertAction(title: "Yes", style: .default) { (action) in
            print("Action for log out")
        }
        alertController.addAction(yes)
        
        let no = UIAlertAction(title: "No", style: .cancel, handler: nil)
        alertController.addAction(no)
        
        self.present(alertController, animated: true, completion: nil)
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
        case .logOut:
            self.askToLogOut()
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


