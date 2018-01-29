//
//  PSMenuItemViewCell.swift
//  GlobalWalk
//
//  Created by Paula Sofianiuc on 23/12/2017.
//  Copyright © 2017 Paula Sofianiuc. All rights reserved.
//

import UIKit

class PSMenuItemViewCell: UICollectionViewCell {

    @IBOutlet var menuItemTitle: UILabel!
    
    override func awakeFromNib() {
        super.awakeFromNib()
        self.layer.cornerRadius = 4
        self.layer.borderWidth = 2
        self.layer.borderColor = UIColor.green.cgColor
    }
    
    override func prepareForReuse() {
        menuItemTitle.text = ""
    }

    public func prepreForType(_ type: PSMenuItem) {
        var title = ""
        switch type {
        case .feedback:
            title = "Feedback"
        case .logOut:
            title = "Log out"
        }
        
        menuItemTitle.text = title
    }
    
}
