create database urban_trends;
use urban_trends;

CREATE TABLE products (
    prod_id INT AUTO_INCREMENT PRIMARY KEY,
    product_name VARCHAR(255) NOT NULL,
    price DECIMAL(10, 2) NOT NULL,
    description VARCHAR(255),
    category VARCHAR(100),
    subcategory VARCHAR(100),
    colors VARCHAR(255),
    tags VARCHAR(255),
    image_link VARCHAR(255)
);

-- women
INSERT INTO products (product_name, price, description, category, subcategory, colors, tags, image_link)
VALUES 
('Casual Dress', 49.99, 'A lightweight summer dress for casual outings.', 'Women', 'Casual Wear', 'Red,Blue', 'casual,summer,offer', 'https://images.unsplash.com/photo-1572696731081-c5e50cc17700?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8Q2FzdWFsJTIwRHJlc3N8ZW58MHx8MHx8fDA%3D'),
('Evening Gown', 199.99, 'A luxurious gown perfect for evening events.', 'Women', 'Evening Gowns', 'Black,Gold', 'formal,evening', 'https://images.unsplash.com/photo-1623601922193-9feb7f743b88?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTF8fGV2ZW5pbmclMjBnb3dufGVufDB8fDB8fHww'),
('Business Suit', 149.99, 'A classic business suit for formal occasions.', 'Women', 'Formal Wear', 'Black,Gray', 'formal,office', 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=1376&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'),
('Loungewear Set', 29.99, 'Soft and cozy loungewear set for home.', 'Women', 'Loungewear', 'Gray,Blue', 'lounge,home', 'https://plus.unsplash.com/premium_photo-1682965453798-8de79207c1d9?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'),
('Denim Jacket', 89.99, 'Stylish denim jacket with a vintage feel.', 'Women', 'Denim Styles', 'Blue,Black', 'denim,vintage', 'https://images.unsplash.com/photo-1521755985926-3433a1d0a769?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTF8fGRlbmltJTIwamFja2V0d29tZW58ZW58MHx8MHx8fDA%3D'),
('Floral Maxi Dress', 79.99, 'A long floral dress perfect for the summer.', 'Women', 'Summer Dresses', 'Floral,Green', 'floral,summer', 'https://images.unsplash.com/photo-1499887142886-791eca5918cd?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8RmxvcmFsJTIwTWF4aSUyMERyZXNzfGVufDB8fDB8fHww'),
('Wool Coat', 129.99, 'A warm wool coat for the cold season.', 'Women', 'Outerwear', 'Black,Gray', 'outerwear,winter', 'https://images.unsplash.com/photo-1620247405612-18f042ea68cf?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8V29vbCUyMENvYXR8ZW58MHx8MHx8fDA%3D'),
('Work Blazer', 89.99, 'An essential work blazer for a professional look.', 'Women', 'Workwear', 'Navy,Black', 'workwear,formal,offer', 'https://images.unsplash.com/photo-1653669486397-b802144ae64a?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8V29yayUyMEJsYXplcnxlbnwwfHwwfHx8MA%3D%3D'),
('Party Dress', 119.99, 'A vibrant party dress for fun night outs.', 'Women', 'Party Wear', 'Red,Gold', 'party,nightlife', 'https://images.unsplash.com/photo-1681380212006-4b2a0b887244?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTJ8fFBhcnR5JTIwRHJlc3N8ZW58MHx8MHx8fDA%3D');

-- men
INSERT INTO products (product_name, price, description, category, subcategory, colors, tags, image_link)
VALUES 
('Casual Shirt', 29.99, 'A versatile casual shirt for everyday wear.', 'Men', 'Casual Shirts', 'White,Blue', 'casual,summer', 'https://images.unsplash.com/photo-1653146886577-0ea51f5b36f5?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTF8fENhc3VhbCUyMFNoaXJ0fGVufDB8fDB8fHww'),
('Formal Shirt', 49.99, 'A formal shirt suitable for business or special events.', 'Men', 'Formal Shirts', 'White,Gray', 'formal,business', 'https://images.unsplash.com/photo-1516399677720-a9edd66e55e2?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8Zm9ybWFsJTIwU2hpcnQlMjBtYW58ZW58MHx8MHx8fDA%3D'),
('Denim Jeans', 69.99, 'Classic denim jeans with a slim fit.', 'Men', 'Jeans & Denim', 'Blue,Black', 'denim,slim-fit', 'https://plus.unsplash.com/premium_photo-1673735186578-1a6cd08b8100?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mjl8fGRlbmltJTIwamVhbnMlMjBtYW58ZW58MHx8MHx8fDA%3D'),
('Blazer', 119.99, 'A tailored blazer for formal occasions.', 'Men', 'Suits & Blazers', 'Navy,Gray', 'formal,business', 'https://images.unsplash.com/photo-1700190830254-a14b5c66395b?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDN8fHxlbnwwfHx8fHw%3D'),
('Track Pants', 39.99, 'Comfortable track pants for workouts.', 'Men', 'Activewear', 'Gray,Black', 'activewear,fitness', 'https://plus.unsplash.com/premium_photo-1677360678350-80685676c6d4?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OXx8VHJhY2slMjBQYW50cyUyMG1hbnxlbnwwfHwwfHx8MA%3D%3D'),
('Winter Jacket', 129.99, 'A warm jacket for cold weather.', 'Men', 'Outerwear', 'Black,Blue', 'winter,outerwear', 'https://images.unsplash.com/photo-1516384903227-139a8cf0ec21?q=80&w=1374&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'),
('Streetwear Hoodie', 49.99, 'A stylish hoodie for street fashion.', 'Men', 'Streetwear', 'Black,Gray', 'streetwear,casual', 'https://images.unsplash.com/photo-1542406775-ade58c52d2e4?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8U3RyZWV0d2VhciUyMEhvb2RpZXxlbnwwfHwwfHx8MA%3D%3D'),
('Leather Jacket', 149.99, 'A classic leather jacket for stylish outings.', 'Men', 'Leather Jackets', 'Black,Brown', 'leather,cool', 'https://images.unsplash.com/photo-1486648855265-390f3951358d?q=80&w=1374&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D');

 -- accessories
INSERT INTO products (product_name, price, description, category, subcategory, colors, tags, image_link)
VALUES 
('Leather Handbag', 129.99, 'A stylish leather handbag for daily use.', 'Accessories', 'Handbags', 'Black,Brown', 'leather,stylish', 'https://images.unsplash.com/photo-1523779105320-d1cd346ff52b?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8TGVhdGhlciUyMEhhbmRiYWd8ZW58MHx8MHx8fDI%3D'),
('Luxury Watch', 299.99, 'A high-end watch for formal events.', 'Accessories', 'Watches', 'Silver,Gold', 'luxury,formal', 'https://images.unsplash.com/photo-1667483629944-6414ad0648c5?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTR8fEx1eHVyeSUyMFdhdGNofGVufDB8fDB8fHwy'),
('Gold Earrings', 79.99, 'Elegant gold earrings for special occasions.', 'Accessories', 'Jewelry', 'Gold,Rose Gold', 'jewelry,elegant', 'https://images.unsplash.com/photo-1653903414925-adfc47c69b3c?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'),
('Sunglasses', 49.99, 'Trendy sunglasses with UV protection.', 'Accessories', 'Sunglasses', 'Black,Brown', 'sunglasses,trendy', 'https://images.unsplash.com/photo-1508296695146-257a814070b4?q=80&w=1480&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'),
('Leather Belt', 39.99, 'A classic leather belt for formal wear.', 'Accessories', 'Belts', 'Black,Brown', 'formal,leather', 'https://images.unsplash.com/photo-1684510334550-0c4fa8aaffd1?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'),
('Wallet', 69.99, 'A compact leather wallet for men.', 'Accessories', 'Wallets', 'Black,Brown', 'leather,compact', 'https://images.unsplash.com/photo-1531190260877-c8d11eb5afaf?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'),
('Running Shoes', 89.99, 'Comfortable running shoes for fitness enthusiasts.', 'Accessories', 'Footwear', 'White,Black', 'fitness,shoes', 'https://images.unsplash.com/photo-1529339944280-1a37d3d6fa8c?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'),
('Phone Case', 19.99, 'A stylish and protective phone case.', 'Accessories', 'Tech Accessories', 'Blue,Red', 'tech,protective', 'https://images.unsplash.com/photo-1577954732026-2071521acdfb?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTN8fFBob25lJTIwQ2FzZXxlbnwwfHwwfHx8Mg%3D%3D'),
('Travel Backpack', 119.99, 'A spacious backpack for travelers.', 'Accessories', 'Travel Bags', 'Black,Gray', 'travel,spacious', 'https://images.unsplash.com/photo-1491637639811-60e2756cc1c7?q=80&w=1456&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'),
('Perfume', 69.99, 'A luxurious perfume with a floral scent.', 'Accessories', 'Fragrances', 'N/A', 'floral,luxury', 'https://images.unsplash.com/photo-1547887537-6158d64c35b3?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8UGVyZnVtZXxlbnwwfHwwfHx8Mg%3D%3D');

-- kids
INSERT INTO products (product_name, price, description, category, subcategory, colors, tags, image_link)
VALUES 
('Cotton T-shirt', 14.99, 'A comfortable cotton t-shirt for everyday wear.', 'Kids', 'Casual Wear', 'Red,Blue', 'casual,everyday', 'https://images.unsplash.com/photo-1628195267183-831f2b190c03?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTR8fGtpZCUyMHN0YW5kaW5nJTIwYm95fGVufDB8fDB8fHwy'),
('Jogger Pants', 22.99, 'Comfortable jogger pants for daily activities.', 'Kids', 'Casual Wear', 'Gray,Navy', 'casual,comfortable', 'https://images.unsplash.com/photo-1611735341450-74d61e660ad2?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NTB8fGtpZCUyMHdlYXJpbmclMjBwYW50fGVufDB8fDB8fHwy'),
('Party Dress', 49.99, 'A cute dress for special occasions.', 'Kids', 'Party Wear', 'Pink,White', 'party,formal', 'https://images.unsplash.com/photo-1601299124383-d65f0339d910?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTM0fHxraWQlMjB3ZWFyaW5nJTIwZHJlc3N8ZW58MHx8MHx8fDI%3D'),
('Bowtie Shirt', 29.99, 'A formal shirt with a bowtie for boys.', 'Kids', 'Party Wear', 'White,Black', 'formal,party', 'https://images.unsplash.com/photo-1519238263530-99bdd11df2ea?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTE0fHxraWQlMjB3ZWFyaW5nJTIwZHJlc3N8ZW58MHx8MHx8fDI%3D'),
('Track Jacket', 29.99, 'A lightweight track jacket for kids.', 'Kids', 'Activewear', 'Black,Red', 'activewear,fitness', 'https://images.unsplash.com/photo-1492950232015-cfc8b8d9d41c?q=80&w=1472&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'),
('Sports Shorts', 19.99, 'Breathable shorts for outdoor sports.', 'Kids', 'Activewear', 'Blue,Gray', 'sports,activewear', 'https://images.unsplash.com/photo-1618681867507-6a51ed8719ec?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8a2lkJTIwc3BvcnRzfGVufDB8fDB8fHwy'),
('Running Sneakers', 49.99, 'Comfortable running shoes for kids.', 'Kids', 'Activewear', 'White,Black', 'fitness,shoes', 'https://images.unsplash.com/photo-1515349541556-ef8cc276e382?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjN8fGtpZCUyMHNwb3J0c3xlbnwwfHwwfHx8Mg%3D%3D'),
('Gym T-shirt', 12.99, 'A moisture-wicking t-shirt for active kids.', 'Kids', 'Activewear', 'Blue,Green', 'activewear,sports', 'https://images.unsplash.com/photo-1539154684642-19547b0bf519?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjI0fHxraWQlMjB0JTIwc2hpcnR8ZW58MHx8MHx8fDI%3D'),
('Sweatpants', 24.99, 'Cozy sweatpants for play and workouts.', 'Kids', 'Activewear', 'Gray,Black', 'fitness,casual', 'https://images.unsplash.com/photo-1628195267205-ce9a0953233e?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTM0fHxraWQlMjBzcG9ydHN8ZW58MHx8MHx8fDI%3D'),
('Puffer Jacket', 59.99, 'A warm puffer jacket for winter.', 'Kids', 'Outerwear', 'Navy,Red', 'winter,outerwear', 'https://images.unsplash.com/photo-1524603876100-57a8fc4b5af0?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8a2lkJTIwd2ludGVyfGVufDB8fDB8fHwy'),
('Raincoat', 29.99, 'Waterproof raincoat for wet weather.', 'Kids', 'Outerwear', 'Yellow,Blue', 'rain,outerwear', 'https://images.unsplash.com/photo-1623604407441-c024bd992e63?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8a2lkJTIwcmFpbmNvYXR8ZW58MHx8MHx8fDI%3D');


-- BestSeller Table
CREATE TABLE bestsellers (
    prod_id INT,
    quantities_sold INT,
    PRIMARY KEY (prod_id),
    FOREIGN KEY (prod_id) REFERENCES products(prod_id)
);

INSERT INTO bestsellers (prod_id, quantities_sold) VALUES
-- Women's products
(1, 150),  
(2, 120),  
(3, 200),  
(4, 80),   
(5, 95),   
(6, 110),  

-- Men's products
(10, 180), 
(11, 90),  
(12, 130), 
(13, 140), 
(14, 75),  
(15, 160), 

-- Accessories
(18, 100), 
(19, 220), 
(20, 80),  
(21, 150), 
(22, 65),  
(23, 110); 

INSERT INTO bestsellers (prod_id, quantities_sold) VALUES
-- kids
(31, 240), 
(33, 80),  
(36, 150), 
(37, 65),
(28, 77),  
(29, 110); 

CREATE TABLE newsletter_subscribers (
    id INT PRIMARY KEY AUTO_INCREMENT,
    email VARCHAR(255) UNIQUE NOT NULL,
    subscription_date TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    status ENUM('subscribed', 'unsubscribed') DEFAULT 'subscribed'
);

CREATE TABLE users (
    user_id INT AUTO_INCREMENT PRIMARY KEY,
    full_name VARCHAR(255) NOT NULL,
    username VARCHAR(50) UNIQUE NOT NULL,
    email VARCHAR(100) UNIQUE NOT NULL,
    password_hash VARCHAR(255) NOT NULL,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
    is_active BOOLEAN DEFAULT 1,
    role VARCHAR(20) DEFAULT 'user'
);


INSERT INTO products (product_name, price, description, category, subcategory, colors, tags, image_link)
VALUES
('Classic Formal Shirt', 49.99, 'A classic white shirt for formal occasions.', 'men', 'Formal Shirts', 'white', 'formal, office, new, offer', 'https://images.unsplash.com/flagged/photo-1577996693134-e50d294a665f?q=80&w=1374&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'),
('Summer Dress', 79.99, 'A light and breezy dress for summer.', 'women', 'Summer Dresses', 'blue', 'new, summer', 'https://images.unsplash.com/photo-1520026582657-4daf5bb60adb?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'),
('Kids Party T-shirt', 19.99, 'Colorful T-shirt for kids parties.', 'kids', 'Party Wear', 'red', 'party, casual, new, offer', 'https://images.unsplash.com/photo-1519308664584-c4542cf79810?q=80&w=1374&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'),
('Leather Wallet', 29.99, 'Durable leather wallet.', 'accessories', 'Wallets', 'brown', 'leather, gift, new', 'https://images.unsplash.com/photo-1624538000860-24716b9050f2?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTR8fHdhbGxldHxlbnwwfHwwfHx8Mg%3D%3D'),
('Women’s Floral Scarf', 24.99, 'Soft scarf with floral patterns.', 'accessories', 'Scarves', 'pink', 'floral, lightweight', 'https://images.unsplash.com/photo-1715881634020-82b54253cc64?q=80&w=1474&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'),
('Casual Trousers', 39.99, 'Comfortable trousers for daily wear.', 'men', 'bottoms', 'black', 'casual, daily, offer', 'https://images.unsplash.com/photo-1706177208693-2e3c68e5f0f2?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8Q2FzdWFsJTIwVHJvdXNlcnN8ZW58MHx8MHx8fDI%3D'),
('Women’s Heels', 59.99, 'Elegant heels for formal occasions.', 'women', 'Footwear', 'black', 'formal, elegant, new', 'https://images.unsplash.com/photo-1618274158630-bc47a614b3a5?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'),
('Baby Blanket', 19.99, 'Soft and warm blanket for babies.', 'kids', 'Bedding', 'cream', 'warm, cozy, new', 'https://images.unsplash.com/photo-1505679428249-ebe9559320a0?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'),
('Women’s Floral Top', 34.99, 'Floral top for casual outings.', 'women', 'Casual Wear', 'purple', 'floral, casual, new', 'https://images.unsplash.com/photo-1699907888833-8d50ce6d96a5?q=80&w=1527&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'),
('Kid’s Fancy Cap', 14.99, 'Fun cap for sunny days.', 'kids', 'Hats', 'green', 'fun, summer', 'https://images.unsplash.com/photo-1513105737059-ff0cf0580ae6?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8RmFuY3klMjBDYXAlMjBraWRzfGVufDB8fDB8fHwy'),
('Women’s Office Bag', 64.99, 'Spacious bag suitable for office.', 'accessories', 'Bags', 'black', 'office, formal', 'https://images.unsplash.com/photo-1554632084-1dcbc408d11d?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OXx8T2ZmaWNlJTIwQmFnfGVufDB8fDB8fHwy'),
('Kids Fun Socks', 9.99, 'Colorful socks for kids.', 'kids', 'socks', 'multi', 'fun, cozy', 'https://images.unsplash.com/photo-1636130748629-655be0c60041?q=80&w=1374&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'),
('Men’s Summer Hat', 19.99, 'Lightweight hat for sunny days.', 'men', 'Hats', 'beige', 'summer, beach', 'https://images.unsplash.com/photo-1711292045829-fa9a89616b0d?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MzZ8fFN1bW1lciUyMEhhdCUyMG1hbnxlbnwwfHwwfHx8Mg%3D%3D;'),
('Elegant Evening Gown', 129.99, 'Perfect for evening events.', 'women', 'Evening Gowns', 'red', 'evening, formal, new', 'https://images.unsplash.com/photo-1562349486-3355f0c8cefa?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjF8fHJlZCUyMGdvd258ZW58MHx8MHx8fDI%3D');

CREATE TABLE wishlist (
    wishlist_id INT AUTO_INCREMENT PRIMARY KEY,
    user_id INT NOT NULL,
    prod_id INT NOT NULL,
    date_added TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    FOREIGN KEY (user_id) REFERENCES users(user_id) ON DELETE CASCADE,
    FOREIGN KEY (prod_id) REFERENCES products(prod_id) ON DELETE CASCADE
);


CREATE TABLE cart (
    id INT AUTO_INCREMENT PRIMARY KEY,        
    user_id INT NOT NULL,                     
    prod_id INT NOT NULL,                     
    quantity INT DEFAULT 1, 
    color VARCHAR(50) DEFAULT 'any',
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP, 
    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP, 
    FOREIGN KEY (user_id) REFERENCES users(user_id) ON DELETE CASCADE, 
    FOREIGN KEY (prod_id) REFERENCES products(prod_id) ON DELETE CASCADE
);
