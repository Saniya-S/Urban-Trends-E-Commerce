import './home.css';

//List of category title banner
const categories = [{title: 'Shop for Kids', path: '/kids', backgroundImg: 'https://images.unsplash.com/photo-1507036066871-b7e8032b3dea?q=80&w=1374&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'},
    {title: 'Shop for Women', path: '/women', backgroundImg: 'https://images.unsplash.com/photo-1712652517126-2e94d47f0cc9?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8d29tZW4lMjBmYXNoaW9ufGVufDB8fDB8fHww'},
    {title: 'Shop for Men', path: '/men', backgroundImg: 'https://images.unsplash.com/photo-1710145605252-913f6251027b?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTR8fG1lbiUyMGZhc2hpb258ZW58MHx8MHx8fDA%3D'},
    {title: 'Shop for Accessories', path: '/accessories', backgroundImg: 'https://plus.unsplash.com/premium_photo-1681276170683-706111cf496e?w=700&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8YWNjZXNzb3JpZXN8ZW58MHx8MHx8fDA%3D'}
];

const CategoriesBanner = () => {
    return(
        <div className="banner-container">
            {categories && categories.map((category) => 
            
                <div className='category-container' style={{backgroundImage: `url(${category.backgroundImg})`}}>
                    <div>
                    <h2>{category.title}</h2>
                    </div>
                </div>

            )}
        </div>
    )
}

export default CategoriesBanner;