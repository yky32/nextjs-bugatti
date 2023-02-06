import {IProduct} from 'boundless-api-client';
import {GetServerSideProps, InferGetServerSidePropsType} from 'next';
import ProductsList from '../components/ProductsList';
import MainLayout from '../layouts/Main';
import {apiClient} from '../lib/api';
import {makeAllMenus} from '../lib/menu';
import {IMenuItem} from '../@types/components';
import bgImg from '../assets/cover-bg.jpeg';
import bgPortraitImg from '../assets/cover-bg-portrait.jpg';
import CoverTextInCenter from '../components/CoverTextInCenter';
import ProductsSliderByQuery from '../components/ProductsSliderByQuery';
import {_categoryTree} from '../data/categoryTree';
import {_products} from '../data/products';

export default function IndexPage({products, mainMenu, footerMenu}: InferGetServerSidePropsType<typeof getServerSideProps>) {
	return (
		<MainLayout mainMenu={mainMenu} footerMenu={footerMenu} classes={{layoutMain: 'pt-0'}}>
			<CoverTextInCenter
				showChevronDown
				img={bgImg.src}
				imgPortrait={bgPortraitImg.src}
				content={{
					intro: 'Muhammad Ali',
					head: 'Impossible is nothing!',
					subHead: 'Impossible is not a fact. It’s an opinion. Impossible is not a declaration. It’s a dare. Impossible is potential. Impossible is temporary.'
				}}
				shadow={{
					opacity: 0.5,
					backgroundColor: '#000'
				}}
				link={'https://google.com'}
			/>
			<div className='container'>
				<h1 className='page-heading page-heading_h1  page-heading_m-h1'>Boundless store</h1>
				<ProductsList products={products} query={{}}/>
				<h2 className='page-heading page-heading_h1  page-heading_m-h1'>Products carousel:</h2>
				<ProductsSliderByQuery
					query={{collection: ['main-page'], sort: 'in_collection'}}
					wrapperClassName='page-block'
				/>
			</div>
		</MainLayout>
	);
}

export const getServerSideProps: GetServerSideProps<IIndexPageProps> = async () => {
	const categoryTree = _categoryTree;
	const products = _products;

	const menus = makeAllMenus({categoryTree});

	return {
		props: {
			products,
			...menus
		}
	};
};

interface IIndexPageProps {
	products: IProduct[];
	mainMenu: IMenuItem[];
	footerMenu: IMenuItem[];
}