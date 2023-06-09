# ER 다이어그램
![image](https://github.com/codesquad-members-2023-proj02-team04/second-hand/assets/91525492/72c7342a-ec6a-4f18-8ce8-3591f776dd2e)


# DDL 쿼리
```sql
-- -----------------------------------------------------
-- Table `second_hand`.`category`
-- -----------------------------------------------------
DROP TABLE IF EXISTS `second_hand`.`category` ;

CREATE TABLE IF NOT EXISTS `second_hand`.`category` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `name` VARCHAR(50) NOT NULL,
  PRIMARY KEY (`id`))
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `second_hand`.`location`
-- -----------------------------------------------------
DROP TABLE IF EXISTS `second_hand`.`location` ;

CREATE TABLE IF NOT EXISTS `second_hand`.`location` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `district` VARCHAR(10) NOT NULL,
  `city` VARCHAR(10) NOT NULL,
  `town` VARCHAR(45) NOT NULL,
  PRIMARY KEY (`id`))
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `second_hand`.`product`
-- -----------------------------------------------------
DROP TABLE IF EXISTS `second_hand`.`product` ;

CREATE TABLE IF NOT EXISTS `second_hand`.`product` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `title` VARCHAR(50) NOT NULL,
  `contents` TEXT NOT NULL,
  `price` DECIMAL(10,2) NOT NULL,
  `created_at` DATETIME NULL,
  `modified_at` DATETIME NULL,
  `views` INT NULL,
  `status` VARCHAR(10) NULL,
  `deleted` VARCHAR(45) NULL,
  `category_id` INT NOT NULL,
  `location_id` INT NOT NULL,
  PRIMARY KEY (`id`),
  INDEX `fk_product_category_idx` (`category_id` ASC) VISIBLE,
  INDEX `fk_product_location1_idx` (`location_id` ASC) VISIBLE,
  CONSTRAINT `fk_product_category`
    FOREIGN KEY (`category_id`)
    REFERENCES `second_hand`.`category` (`id`)
    ON DELETE NO ACTION
    ON UPDATE CASCADE,
  CONSTRAINT `fk_product_location1`
    FOREIGN KEY (`location_id`)
    REFERENCES `second_hand`.`location` (`id`)
    ON DELETE NO ACTION
    ON UPDATE CASCADE)
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `second_hand`.`product_image`
-- -----------------------------------------------------
DROP TABLE IF EXISTS `second_hand`.`product_image` ;

CREATE TABLE IF NOT EXISTS `second_hand`.`product_image` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `image_url` VARCHAR(100) NULL,
  `product_id` INT NOT NULL,
  PRIMARY KEY (`id`),
  INDEX `fk_product_image_product1_idx` (`product_id` ASC) VISIBLE,
  CONSTRAINT `fk_product_image_product1`
    FOREIGN KEY (`product_id`)
    REFERENCES `second_hand`.`product` (`id`)
    ON DELETE CASCADE
    ON UPDATE CASCADE)
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `second_hand`.`user`
-- -----------------------------------------------------
DROP TABLE IF EXISTS `second_hand`.`user` ;

CREATE TABLE IF NOT EXISTS `second_hand`.`user` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `avatar` VARCHAR(100) NULL,
  `username` VARCHAR(50) NOT NULL,
  `primary_location_id` INT NOT NULL,
  `secondary_location_id` INT NULL,
  PRIMARY KEY (`id`),
  INDEX `fk_user_location1_idx` (`primary_location_id` ASC) VISIBLE,
  INDEX `fk_user_location2_idx` (`secondary_location_id` ASC) VISIBLE,
  CONSTRAINT `fk_user_location1`
    FOREIGN KEY (`primary_location_id`)
    REFERENCES `second_hand`.`location` (`id`)
    ON DELETE NO ACTION
    ON UPDATE CASCADE,
  CONSTRAINT `fk_user_location2`
    FOREIGN KEY (`secondary_location_id`)
    REFERENCES `second_hand`.`location` (`id`)
    ON DELETE NO ACTION
    ON UPDATE CASCADE)
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `second_hand`.`watchlist`
-- -----------------------------------------------------
DROP TABLE IF EXISTS `second_hand`.`watchlist` ;

CREATE TABLE IF NOT EXISTS `second_hand`.`watchlist` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `product_id` INT NOT NULL,
  `user_id` INT NOT NULL,
  PRIMARY KEY (`id`),
  INDEX `fk_watchlist_product1_idx` (`product_id` ASC) VISIBLE,
  INDEX `fk_watchlist_user1_idx` (`user_id` ASC) VISIBLE,
  CONSTRAINT `fk_watchlist_product1`
    FOREIGN KEY (`product_id`)
    REFERENCES `second_hand`.`product` (`id`)
    ON DELETE CASCADE
    ON UPDATE CASCADE,
  CONSTRAINT `fk_watchlist_user1`
    FOREIGN KEY (`user_id`)
    REFERENCES `second_hand`.`user` (`id`)
    ON DELETE CASCADE
    ON UPDATE CASCADE)
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `second_hand`.`chatroom`
-- -----------------------------------------------------
DROP TABLE IF EXISTS `second_hand`.`chatroom` ;

CREATE TABLE IF NOT EXISTS `second_hand`.`chatroom` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `created_at` DATETIME NULL,
  `deleted` TINYINT NULL,
  `seller_id` INT NOT NULL,
  `buyer_id` INT NOT NULL,
  `product_id` INT NOT NULL,
  PRIMARY KEY (`id`),
  INDEX `fk_chatroom_user1_idx` (`seller_id` ASC) VISIBLE,
  INDEX `fk_chatroom_user2_idx` (`buyer_id` ASC) VISIBLE,
  INDEX `fk_chatroom_product1_idx` (`product_id` ASC) VISIBLE,
  CONSTRAINT `fk_chatroom_user1`
    FOREIGN KEY (`seller_id`)
    REFERENCES `second_hand`.`user` (`id`)
    ON DELETE NO ACTION
    ON UPDATE CASCADE,
  CONSTRAINT `fk_chatroom_user2`
    FOREIGN KEY (`buyer_id`)
    REFERENCES `second_hand`.`user` (`id`)
    ON DELETE NO ACTION
    ON UPDATE CASCADE,
  CONSTRAINT `fk_chatroom_product1`
    FOREIGN KEY (`product_id`)
    REFERENCES `second_hand`.`product` (`id`)
    ON DELETE NO ACTION
    ON UPDATE CASCADE)
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `second_hand`.`chat`
-- -----------------------------------------------------
DROP TABLE IF EXISTS `second_hand`.`chat` ;

CREATE TABLE IF NOT EXISTS `second_hand`.`chat` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `contents` TEXT NOT NULL,
  `created_at` DATETIME NULL,
  `deleted` TINYINT NULL,
  `user_id` INT NOT NULL,
  `chatroom_id` INT NOT NULL,
  PRIMARY KEY (`id`),
  INDEX `fk_chat_user1_idx` (`user_id` ASC) VISIBLE,
  INDEX `fk_chat_chatroom1_idx` (`chatroom_id` ASC) VISIBLE,
  CONSTRAINT `fk_chat_user1`
    FOREIGN KEY (`user_id`)
    REFERENCES `second_hand`.`user` (`id`)
    ON DELETE NO ACTION
    ON UPDATE CASCADE,
  CONSTRAINT `fk_chat_chatroom1`
    FOREIGN KEY (`chatroom_id`)
    REFERENCES `second_hand`.`chatroom` (`id`)
    ON DELETE CASCADE
    ON UPDATE CASCADE)
ENGINE = InnoDB;


```