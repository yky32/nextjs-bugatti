import {IProduct} from '../types/catalog/product';
import {IPagination} from 'boundless-api-client/dist/types/common';
import {TPublishingStatus} from '../@types/common';
import {TLabelIcon} from 'boundless-api-client';



export const _productsWithPagination: {
	products: IProduct[];
	pagination: IPagination;
} = {
	products: [
		{
			'product_id': 157,
			'sku': 'iphone-notebook',
			'title': 'Case Notebook',
			'url_key': 'chekhol-tetrad',
			'has_variants': true,
			'item_id': 3555,
			'commodity_group': {
				'group_id': 61,
				'title': 'Cases for mobile phones',
				'type': 'material',
				'track_inventory': true
			},
			'manufacturer_id': 34,
			'manufacturer': {
				'manufacturer_id': 34,
				'title': 'Anymode',
				'url_key': 'anymode',
				'image': 'images/90/9d/0ebaa202ce868ecafb2f4d2ed9a3.jpeg'
			},
			'price_id': 7,
			'price_alias': 'selling_price',
			'point_id': 1,
			'price': {
				'value': null,
				'min': 7,
				'max': 7,
				'old': null,
				'old_min': 9,
				'old_max': 9,
				'currency_alias': 'rub'
			},
			'props': {
				'available_qty': 64,
				'country_of_origin': null,
				'extra': null,
				'size': {
					'weight': 0.1
				}
			},
			'default_category': {
				'category_id': 103,
				'title': 'iPhone 7',
				'url_key': 'iphone-7'
			},
			'images': [
				{
					'image_id': 216,
					'path': 'images/60/2b/128a6f53e723b243109d5f8c941a.jpeg',
					'width': 1051,
					'height': 1051,
					'is_default': false,
					'description': null,
					'alt': null,
					'tags': null
				},
				{
					'image_id': 217,
					'path': 'images/6f/ad/eb339bb1b4c994fb9384a25ad494.jpeg',
					'width': 1501,
					'height': 1501,
					'is_default': true,
					'description': null,
					'alt': null,
					'tags': null
				}
			],
			'labels': [
				{
					'label_id': 3,
					'title': 'Sale',
					'color': '#bfd4f2',
					'text_color': '#000000',
					'icon': TLabelIcon.heart
				}
			],
			'sort_price': '7.00',
			'sort_in_stock': 1,
			'status': TPublishingStatus.published,
			'deleted_at': null,
			'in_stock': true
		},
		{
			'product_id': 162,
			'sku': 'iphone-case-fuck',
			'title': 'Case Fuck',
			'url_key': 'chekhol-fuck',
			'has_variants': true,
			'item_id': 3580,
			'commodity_group': {
				'group_id': 61,
				'title': 'Cases for mobile phones',
				'type': 'material',
				'track_inventory': true
			},
			'manufacturer_id': 34,
			'manufacturer': {
				'manufacturer_id': 34,
				'title': 'Anymode',
				'url_key': 'anymode',
				'image': 'images/90/9d/0ebaa202ce868ecafb2f4d2ed9a3.jpeg'
			},
			'price_id': 7,
			'price_alias': 'selling_price',
			'point_id': 1,
			'price': {
				'value': null,
				'min': 7.5,
				'max': 7.5,
				'old': null,
				'old_min': 15,
				'old_max': 15,
				'currency_alias': 'rub'
			},
			'props': {
				'available_qty': 27,
				'country_of_origin': null,
				'extra': null,
				'size': {
					'weight': 0.1
				}
			},
			'default_category': {
				'category_id': 103,
				'title': 'iPhone 7',
				'url_key': 'iphone-7'
			},
			'images': [
				{
					'image_id': 226,
					'path': 'images/26/0e/7b0f95f7e69ea79069aca4d613df.jpeg',
					'width': 1501,
					'height': 1501,
					'is_default': true,
					'description': null,
					'alt': null,
					'tags': null
				},
				{
					'image_id': 227,
					'path': 'images/19/8a/edc71f630f689a1b40cc2f01dcd0.jpeg',
					'width': 1051,
					'height': 1051,
					'is_default': false,
					'description': null,
					'alt': null,
					'tags': null
				}
			],
			'labels': [
				{
					'label_id': 3,
					'title': 'Sale',
					'color': '#bfd4f2',
					'text_color': '#000000',
					'icon': TLabelIcon.heart
				},
				{
					'label_id': 2,
					'title': 'Hot!',
					'color': '#fbca04',
					'text_color': '#000000',
					'icon': TLabelIcon.fire
				}
			],
			'sort_price': '7.50',
			'sort_in_stock': 1,
			'status': TPublishingStatus.published,
			'deleted_at': null,
			'in_stock': true
		},
		{
			'product_id': 158,
			'sku': 'iphone-case-cake',
			'title': 'Case Brownie',
			'url_key': 'chekhol-pirozhnoe',
			'has_variants': true,
			'item_id': 3560,
			'commodity_group': {
				'group_id': 61,
				'title': 'Cases for mobile phones',
				'type': 'material',
				'track_inventory': true
			},
			'manufacturer_id': 34,
			'manufacturer': {
				'manufacturer_id': 34,
				'title': 'Anymode',
				'url_key': 'anymode',
				'image': 'images/90/9d/0ebaa202ce868ecafb2f4d2ed9a3.jpeg'
			},
			'price_id': 7,
			'price_alias': 'selling_price',
			'point_id': 1,
			'price': {
				'value': null,
				'min': 8.5,
				'max': 8.5,
				'old': null,
				'old_min': null,
				'old_max': null,
				'currency_alias': 'rub'
			},
			'props': {
				'available_qty': 37,
				'country_of_origin': null,
				'extra': null,
				'size': {
					'weight': 0.1
				}
			},
			'default_category': {
				'category_id': 103,
				'title': 'iPhone 7',
				'url_key': 'iphone-7'
			},
			'images': [
				{
					'image_id': 218,
					'path': 'images/ea/61/d9ade852ee5027185bb0c9b3d786.jpeg',
					'width': 1501,
					'height': 1501,
					'is_default': true,
					'description': null,
					'alt': null,
					'tags': null
				},
				{
					'image_id': 219,
					'path': 'images/56/56/f04d1fe7242cb61b8ffdd05caf0f.jpeg',
					'width': 1051,
					'height': 1051,
					'is_default': false,
					'description': null,
					'alt': null,
					'tags': null
				}
			],
			'labels': [
				{
					'label_id': 2,
					'title': 'Hot!',
					'color': '#fbca04',
					'text_color': '#000000',
					'icon': TLabelIcon.fire
				},
				{
					'label_id': 1,
					'title': 'New!',
					'color': '#b60205',
					'text_color': '#ffffff',
					'icon': TLabelIcon.flag
				}
			],
			'sort_price': '8.50',
			'sort_in_stock': 1,
			'status': TPublishingStatus.published,
			'deleted_at': null,
			'in_stock': true
		},
		{
			'product_id': 165,
			'sku': 'iphone-case-explorer-wanted',
			'title': 'Case Explorer wanted',
			'url_key': 'chekhol-explorer-wanted',
			'has_variants': true,
			'item_id': 3595,
			'commodity_group': {
				'group_id': 61,
				'title': 'Cases for mobile phones',
				'type': 'material',
				'track_inventory': true
			},
			'manufacturer_id': 34,
			'manufacturer': {
				'manufacturer_id': 34,
				'title': 'Anymode',
				'url_key': 'anymode',
				'image': 'images/90/9d/0ebaa202ce868ecafb2f4d2ed9a3.jpeg'
			},
			'price_id': 7,
			'price_alias': 'selling_price',
			'point_id': 1,
			'price': {
				'value': null,
				'min': 8.99,
				'max': 8.99,
				'old': null,
				'old_min': 12,
				'old_max': 12,
				'currency_alias': 'rub'
			},
			'props': {
				'available_qty': 38,
				'country_of_origin': null,
				'extra': null,
				'size': {
					'weight': 0.1
				}
			},
			'default_category': {
				'category_id': 103,
				'title': 'iPhone 7',
				'url_key': 'iphone-7'
			},
			'images': [
				{
					'image_id': 232,
					'path': 'images/42/8c/fc30842678a18574925d97e9aa91.jpeg',
					'width': 1501,
					'height': 1501,
					'is_default': true,
					'description': null,
					'alt': null,
					'tags': null
				},
				{
					'image_id': 233,
					'path': 'images/49/54/c4db23339fc41237bab64127ff69.jpeg',
					'width': 1051,
					'height': 1051,
					'is_default': false,
					'description': null,
					'alt': null,
					'tags': null
				}
			],
			'labels': [
				{
					'label_id': 4,
					'title': 'Best choice',
					'color': '#0e8a16',
					'text_color': '#000000',
					'icon': null
				}
			],
			'sort_price': '8.99',
			'sort_in_stock': 1,
			'status': TPublishingStatus.published,
			'deleted_at': null,
			'in_stock': true
		},
		{
			'product_id': 173,
			'sku': 'SCC-001',
			'title': 'Samsung clear cover',
			'url_key': 'samsung-clear-cover',
			'has_variants': true,
			'item_id': 3631,
			'commodity_group': {
				'group_id': 61,
				'title': 'Cases for mobile phones',
				'type': 'material',
				'track_inventory': true
			},
			'manufacturer_id': 32,
			'manufacturer': {
				'manufacturer_id': 32,
				'title': 'Love MEI',
				'url_key': 'love-mei',
				'image': 'images/d4/71/70901570ccfdd55ceef9d66508f9.png'
			},
			'price_id': 7,
			'price_alias': 'selling_price',
			'point_id': 1,
			'price': {
				'value': 1000,
				'min': 8.99,
				'max': 9.99,
				'old': null,
				'old_min': 11.99,
				'old_max': 12.99,
				'currency_alias': 'rub'
			},
			'props': {
				'available_qty': 27,
				'country_of_origin': null,
				'extra': null,
				'size': {
					'weight': 0.1
				}
			},
			'default_category': {
				'category_id': 101,
				'title': 'Cases for Samsung',
				'url_key': 'chekhly-dlya-samsung'
			},
			'images': [
				{
					'image_id': 260,
					'path': 'images/5c/86/16c8af9ea61552b6cbe56042a1bc.jpeg',
					'width': 504,
					'height': 504,
					'is_default': true,
					'description': null,
					'alt': null,
					'tags': null
				},
				{
					'image_id': 261,
					'path': 'images/8a/74/6ed0ae9af5475628b8b7018f0e9c.jpeg',
					'width': 504,
					'height': 504,
					'is_default': false,
					'description': null,
					'alt': null,
					'tags': null
				},
				{
					'image_id': 262,
					'path': 'images/31/dd/3e993f91a5af1846dbf21e82e271.jpeg',
					'width': 504,
					'height': 504,
					'is_default': false,
					'description': null,
					'alt': null,
					'tags': null
				}
			],
			'labels': [
				{
					'label_id': 3,
					'title': 'Sale',
					'color': '#bfd4f2',
					'text_color': '#000000',
					'icon': TLabelIcon.heart
				},
				{
					'label_id': 2,
					'title': 'Hot!',
					'color': '#fbca04',
					'text_color': '#000000',
					'icon': TLabelIcon.fire
				}
			],
			'sort_price': '8.99',
			'sort_in_stock': 1,
			'status': TPublishingStatus.published,
			'deleted_at': null,
			'in_stock': true
		},
		{
			'product_id': 155,
			'sku': 'pink-with-girl',
			'title': 'Case Pink with girl',
			'url_key': 'chekhol-rozovyi-s-devushkoi',
			'has_variants': true,
			'item_id': 3545,
			'commodity_group': {
				'group_id': 61,
				'title': 'Cases for mobile phones',
				'type': 'material',
				'track_inventory': true
			},
			'manufacturer_id': 34,
			'manufacturer': {
				'manufacturer_id': 34,
				'title': 'Anymode',
				'url_key': 'anymode',
				'image': 'images/90/9d/0ebaa202ce868ecafb2f4d2ed9a3.jpeg'
			},
			'price_id': 7,
			'price_alias': 'selling_price',
			'point_id': 1,
			'price': {
				'value': 900,
				'min': 9,
				'max': 9,
				'old': null,
				'old_min': 14,
				'old_max': 14,
				'currency_alias': 'rub'
			},
			'props': {
				'available_qty': 60,
				'country_of_origin': null,
				'extra': null,
				'size': {
					'weight': 0.1
				}
			},
			'default_category': {
				'category_id': 103,
				'title': 'iPhone 7',
				'url_key': 'iphone-7'
			},
			'images': [
				{
					'image_id': 212,
					'path': 'images/3f/cb/2da8b3d892b069a64f76b48560dd.jpeg',
					'width': 1501,
					'height': 1501,
					'is_default': true,
					'description': null,
					'alt': null,
					'tags': null
				},
				{
					'image_id': 213,
					'path': 'images/71/48/4bcc3d63eaf65eb4b65e904a904d.jpeg',
					'width': 1051,
					'height': 1051,
					'is_default': false,
					'description': null,
					'alt': null,
					'tags': null
				}
			],
			'labels': [
				{
					'label_id': 1,
					'title': 'New!',
					'color': '#b60205',
					'text_color': '#ffffff',
					'icon': TLabelIcon.flag
				}
			],
			'sort_price': '9.00',
			'sort_in_stock': 1,
			'status': TPublishingStatus.published,
			'deleted_at': null,
			'in_stock': true
		},
		{
			'product_id': 167,
			'sku': 'iphone-case-blonde-with-wineglass',
			'title': 'Case Blonde with a glass',
			'url_key': 'chekhol-blondinka-s-bokalom',
			'has_variants': true,
			'item_id': 3605,
			'commodity_group': {
				'group_id': 61,
				'title': 'Cases for mobile phones',
				'type': 'material',
				'track_inventory': true
			},
			'manufacturer_id': 34,
			'manufacturer': {
				'manufacturer_id': 34,
				'title': 'Anymode',
				'url_key': 'anymode',
				'image': 'images/90/9d/0ebaa202ce868ecafb2f4d2ed9a3.jpeg'
			},
			'price_id': 7,
			'price_alias': 'selling_price',
			'point_id': 1,
			'price': {
				'value': null,
				'min': 9,
				'max': 9,
				'old': null,
				'old_min': null,
				'old_max': null,
				'currency_alias': 'rub'
			},
			'props': {
				'available_qty': 0,
				'country_of_origin': null,
				'extra': null,
				'size': {
					'weight': 0.1
				}
			},
			'default_category': {
				'category_id': 103,
				'title': 'iPhone 7',
				'url_key': 'iphone-7'
			},
			'images': [
				{
					'image_id': 236,
					'path': 'images/b8/7b/5bf852662576ad0acf1e1166e168.jpeg',
					'width': 1501,
					'height': 1501,
					'is_default': true,
					'description': null,
					'alt': null,
					'tags': null
				}
			],
			'labels': [],
			'sort_price': '9.00',
			'sort_in_stock': 0,
			'status': TPublishingStatus.published,
			'deleted_at': null,
			'in_stock': false
		},
		{
			'product_id': 159,
			'sku': 'girl-with-cake',
			'title': 'Girl with a cake',
			'url_key': 'devushka-s-tortom',
			'has_variants': true,
			'item_id': 3565,
			'commodity_group': {
				'group_id': 61,
				'title': 'Cases for mobile phones',
				'type': 'material',
				'track_inventory': true
			},
			'manufacturer_id': 34,
			'manufacturer': {
				'manufacturer_id': 34,
				'title': 'Anymode',
				'url_key': 'anymode',
				'image': 'images/90/9d/0ebaa202ce868ecafb2f4d2ed9a3.jpeg'
			},
			'price_id': 7,
			'price_alias': 'selling_price',
			'point_id': 1,
			'price': {
				'value': null,
				'min': 9.9,
				'max': 9.9,
				'old': null,
				'old_min': 12.99,
				'old_max': 12.99,
				'currency_alias': 'rub'
			},
			'props': {
				'available_qty': 35,
				'country_of_origin': null,
				'extra': null,
				'size': {
					'weight': 0.1
				}
			},
			'default_category': {
				'category_id': 103,
				'title': 'iPhone 7',
				'url_key': 'iphone-7'
			},
			'images': [
				{
					'image_id': 220,
					'path': 'images/02/96/263b9fbc82877f7bb73e09c5966d.jpeg',
					'width': 1051,
					'height': 1051,
					'is_default': false,
					'description': null,
					'alt': null,
					'tags': null
				},
				{
					'image_id': 221,
					'path': 'images/e8/11/0e121a813117f0cee6b518eb790d.jpeg',
					'width': 1501,
					'height': 1501,
					'is_default': true,
					'description': null,
					'alt': null,
					'tags': null
				}
			],
			'labels': [
				{
					'label_id': 3,
					'title': 'Sale',
					'color': '#bfd4f2',
					'text_color': '#000000',
					'icon': TLabelIcon.heart
				},
				{
					'label_id': 2,
					'title': 'Hot!',
					'color': '#fbca04',
					'text_color': '#000000',
					'icon': TLabelIcon.fire
				}
			],
			'sort_price': '9.90',
			'sort_in_stock': 1,
			'status': TPublishingStatus.published,
			'deleted_at': null,
			'in_stock': true
		},
		{
			'product_id': 161,
			'sku': 'strength-above-all',
			'title': 'Case Strength above all',
			'url_key': 'chekhol-strength-above-all',
			'has_variants': true,
			'item_id': 3575,
			'commodity_group': {
				'group_id': 61,
				'title': 'Cases for mobile phones',
				'type': 'material',
				'track_inventory': true
			},
			'manufacturer_id': null,
			'manufacturer': null,
			'price_id': 7,
			'price_alias': 'selling_price',
			'point_id': 1,
			'price': {
				'value': null,
				'min': 9.9,
				'max': 9.9,
				'old': null,
				'old_min': null,
				'old_max': null,
				'currency_alias': 'rub'
			},
			'props': {
				'available_qty': 40,
				'country_of_origin': null,
				'extra': null,
				'size': {
					'weight': 0.1
				}
			},
			'default_category': {
				'category_id': 103,
				'title': 'iPhone 7',
				'url_key': 'iphone-7'
			},
			'images': [
				{
					'image_id': 224,
					'path': 'images/c4/b6/398ed7ba4334cf657e7de12486d3.jpeg',
					'width': 1501,
					'height': 1501,
					'is_default': true,
					'description': null,
					'alt': null,
					'tags': null
				},
				{
					'image_id': 225,
					'path': 'images/61/23/e68dc959ad6d1165d9c7d57f40b9.jpeg',
					'width': 1051,
					'height': 1051,
					'is_default': false,
					'description': null,
					'alt': null,
					'tags': null
				}
			],
			'labels': [],
			'sort_price': '9.90',
			'sort_in_stock': 1,
			'status': TPublishingStatus.published,
			'deleted_at': null,
			'in_stock': true
		},
		{
			'product_id': 166,
			'sku': 'iphone-case-cakes-and-girl',
			'title': 'Case Cakes and girl',
			'url_key': 'chekhol-pirozhnye-i-devushka',
			'has_variants': true,
			'item_id': 3600,
			'commodity_group': {
				'group_id': 61,
				'title': 'Cases for mobile phones',
				'type': 'material',
				'track_inventory': true
			},
			'manufacturer_id': 34,
			'manufacturer': {
				'manufacturer_id': 34,
				'title': 'Anymode',
				'url_key': 'anymode',
				'image': 'images/90/9d/0ebaa202ce868ecafb2f4d2ed9a3.jpeg'
			},
			'price_id': 7,
			'price_alias': 'selling_price',
			'point_id': 1,
			'price': {
				'value': null,
				'min': 9.9,
				'max': 9.9,
				'old': null,
				'old_min': null,
				'old_max': null,
				'currency_alias': 'rub'
			},
			'props': {
				'available_qty': 31,
				'country_of_origin': null,
				'extra': null,
				'size': {
					'weight': 0.1
				}
			},
			'default_category': {
				'category_id': 103,
				'title': 'iPhone 7',
				'url_key': 'iphone-7'
			},
			'images': [
				{
					'image_id': 235,
					'path': 'images/7b/82/4682f2e114c341d6779122ce1fa9.jpeg',
					'width': 1501,
					'height': 1501,
					'is_default': true,
					'description': null,
					'alt': null,
					'tags': null
				},
				{
					'image_id': 234,
					'path': 'images/02/17/5771ce0840b4c8e951588a6b75d7.jpeg',
					'width': 1051,
					'height': 1051,
					'is_default': false,
					'description': null,
					'alt': null,
					'tags': null
				}
			],
			'labels': [
				{
					'label_id': 2,
					'title': 'Hot!',
					'color': '#fbca04',
					'text_color': '#000000',
					'icon': TLabelIcon.fire
				}
			],
			'sort_price': '9.90',
			'sort_in_stock': 1,
			'status': TPublishingStatus.published,
			'deleted_at': null,
			'in_stock': true
		},
		{
			'product_id': 164,
			'sku': 'iphone-case-red',
			'title': 'Case Red',
			'url_key': 'chekhol-krasnyi',
			'has_variants': true,
			'item_id': 3590,
			'commodity_group': {
				'group_id': 61,
				'title': 'Cases for mobile phones',
				'type': 'material',
				'track_inventory': true
			},
			'manufacturer_id': 34,
			'manufacturer': {
				'manufacturer_id': 34,
				'title': 'Anymode',
				'url_key': 'anymode',
				'image': 'images/90/9d/0ebaa202ce868ecafb2f4d2ed9a3.jpeg'
			},
			'price_id': 7,
			'price_alias': 'selling_price',
			'point_id': 1,
			'price': {
				'value': null,
				'min': 9.95,
				'max': 9.95,
				'old': null,
				'old_min': null,
				'old_max': null,
				'currency_alias': 'rub'
			},
			'props': {
				'available_qty': 100,
				'country_of_origin': null,
				'extra': null,
				'size': {
					'weight': 0.1
				}
			},
			'default_category': {
				'category_id': 103,
				'title': 'iPhone 7',
				'url_key': 'iphone-7'
			},
			'images': [
				{
					'image_id': 230,
					'path': 'images/b7/2f/8c939b27fb115f47b30b517f922e.jpeg',
					'width': 1501,
					'height': 1501,
					'is_default': true,
					'description': null,
					'alt': null,
					'tags': null
				},
				{
					'image_id': 231,
					'path': 'images/d3/c8/bec562f274498c47674d8750ed4c.jpeg',
					'width': 1051,
					'height': 1051,
					'is_default': false,
					'description': null,
					'alt': null,
					'tags': null
				}
			],
			'labels': [],
			'sort_price': '9.95',
			'sort_in_stock': 1,
			'status': TPublishingStatus.published,
			'deleted_at': null,
			'in_stock': true
		},
		{
			'product_id': 168,
			'sku': 'iphone-case-lovely-girl',
			'title': 'Case Lovely girl',
			'url_key': 'chekhol-lovely-girl',
			'has_variants': true,
			'item_id': 3610,
			'commodity_group': {
				'group_id': 61,
				'title': 'Cases for mobile phones',
				'type': 'material',
				'track_inventory': true
			},
			'manufacturer_id': 34,
			'manufacturer': {
				'manufacturer_id': 34,
				'title': 'Anymode',
				'url_key': 'anymode',
				'image': 'images/90/9d/0ebaa202ce868ecafb2f4d2ed9a3.jpeg'
			},
			'price_id': 7,
			'price_alias': 'selling_price',
			'point_id': 1,
			'price': {
				'value': null,
				'min': 9.99,
				'max': 9.99,
				'old': null,
				'old_min': 12.99,
				'old_max': 12.99,
				'currency_alias': 'rub'
			},
			'props': {
				'available_qty': 44,
				'country_of_origin': null,
				'extra': null,
				'size': {
					'weight': 0.1
				}
			},
			'default_category': {
				'category_id': 103,
				'title': 'iPhone 7',
				'url_key': 'iphone-7'
			},
			'images': [
				{
					'image_id': 237,
					'path': 'images/80/3f/8f005e32857ffbf182c58eb009b9.jpeg',
					'width': 1501,
					'height': 1501,
					'is_default': true,
					'description': null,
					'alt': null,
					'tags': null
				}
			],
			'labels': [
				{
					'label_id': 2,
					'title': 'Hot!',
					'color': '#fbca04',
					'text_color': '#000000',
					'icon': TLabelIcon.fire
				}
			],
			'sort_price': '9.99',
			'sort_in_stock': 1,
			'status': TPublishingStatus.published,
			'deleted_at': null,
			'in_stock': true
		},
		{
			'product_id': 177,
			'sku': 'sob-008',
			'title': 'Samsung orange book',
			'url_key': 'samsung-orange-book-1',
			'has_variants': true,
			'item_id': 3644,
			'commodity_group': {
				'group_id': 61,
				'title': 'Cases for mobile phones',
				'type': 'material',
				'track_inventory': true
			},
			'manufacturer_id': 33,
			'manufacturer': {
				'manufacturer_id': 33,
				'title': 'Spigen',
				'url_key': 'spigen',
				'image': 'images/a6/6d/b439f0c671af28330ffc76f4ee01.png'
			},
			'price_id': 7,
			'price_alias': 'selling_price',
			'point_id': 1,
			'price': {
				'value': null,
				'min': 12,
				'max': 12,
				'old': null,
				'old_min': null,
				'old_max': null,
				'currency_alias': 'rub'
			},
			'props': {
				'available_qty': 39,
				'country_of_origin': null,
				'extra': null,
				'size': {
					'weight': 0.1
				}
			},
			'default_category': {
				'category_id': 101,
				'title': 'Cases for Samsung',
				'url_key': 'chekhly-dlya-samsung'
			},
			'images': [
				{
					'image_id': 272,
					'path': 'images/c4/17/ec6f041a20decd9e1f0022024faf.jpeg',
					'width': 767,
					'height': 767,
					'is_default': false,
					'description': null,
					'alt': null,
					'tags': null
				},
				{
					'image_id': 273,
					'path': 'images/3e/08/b005a99a6abeb6739765cbfeaf9a.jpeg',
					'width': 725,
					'height': 725,
					'is_default': true,
					'description': null,
					'alt': null,
					'tags': null
				},
				{
					'image_id': 274,
					'path': 'images/e9/ad/e8f92cb3ec505d76c59b76affab9.jpeg',
					'width': 815,
					'height': 815,
					'is_default': false,
					'description': null,
					'alt': null,
					'tags': null
				}
			],
			'labels': [],
			'sort_price': '12.00',
			'sort_in_stock': 1,
			'status': TPublishingStatus.published,
			'deleted_at': null,
			'in_stock': true
		},
		{
			'product_id': 175,
			'sku': 'SPK-003',
			'title': 'Samsung pink cover',
			'url_key': 'samsung-pink-cover',
			'has_variants': true,
			'item_id': 3637,
			'commodity_group': {
				'group_id': 61,
				'title': 'Cases for mobile phones',
				'type': 'material',
				'track_inventory': true
			},
			'manufacturer_id': 32,
			'manufacturer': {
				'manufacturer_id': 32,
				'title': 'Love MEI',
				'url_key': 'love-mei',
				'image': 'images/d4/71/70901570ccfdd55ceef9d66508f9.png'
			},
			'price_id': 7,
			'price_alias': 'selling_price',
			'point_id': 1,
			'price': {
				'value': null,
				'min': 12.9,
				'max': 12.9,
				'old': null,
				'old_min': null,
				'old_max': null,
				'currency_alias': 'rub'
			},
			'props': {
				'available_qty': 174,
				'country_of_origin': null,
				'extra': null,
				'size': {
					'weight': 0.1
				}
			},
			'default_category': {
				'category_id': 101,
				'title': 'Cases for Samsung',
				'url_key': 'chekhly-dlya-samsung'
			},
			'images': [
				{
					'image_id': 266,
					'path': 'images/6e/48/8f7a4014228a5f188f7b74d7f1d2.jpeg',
					'width': 504,
					'height': 504,
					'is_default': false,
					'description': null,
					'alt': null,
					'tags': null
				},
				{
					'image_id': 267,
					'path': 'images/2a/9a/91344c994d33f23cea1787fd1528.jpeg',
					'width': 504,
					'height': 504,
					'is_default': true,
					'description': null,
					'alt': null,
					'tags': null
				},
				{
					'image_id': 268,
					'path': 'images/67/0d/e0681b7fd131446ac9c4d30ae2cc.jpeg',
					'width': 504,
					'height': 504,
					'is_default': false,
					'description': null,
					'alt': null,
					'tags': null
				}
			],
			'labels': [
				{
					'label_id': 1,
					'title': 'New!',
					'color': '#b60205',
					'text_color': '#ffffff',
					'icon': TLabelIcon.flag
				}
			],
			'sort_price': '12.90',
			'sort_in_stock': 1,
			'status': TPublishingStatus.published,
			'deleted_at': null,
			'in_stock': true
		},
		{
			'product_id': 156,
			'sku': 'santa-matrioshka',
			'title': 'Case Santa matryoshka',
			'url_key': 'chekhol-santa-matreshka',
			'has_variants': true,
			'item_id': 3546,
			'commodity_group': {
				'group_id': 61,
				'title': 'Cases for mobile phones',
				'type': 'material',
				'track_inventory': true
			},
			'manufacturer_id': 34,
			'manufacturer': {
				'manufacturer_id': 34,
				'title': 'Anymode',
				'url_key': 'anymode',
				'image': 'images/90/9d/0ebaa202ce868ecafb2f4d2ed9a3.jpeg'
			},
			'price_id': 7,
			'price_alias': 'selling_price',
			'point_id': 1,
			'price': {
				'value': 900,
				'min': 12.99,
				'max': 12.99,
				'old': null,
				'old_min': 15.99,
				'old_max': 15.99,
				'currency_alias': 'rub'
			},
			'props': {
				'available_qty': 0,
				'country_of_origin': null,
				'extra': null,
				'size': {
					'weight': 0.1
				}
			},
			'default_category': {
				'category_id': 103,
				'title': 'iPhone 7',
				'url_key': 'iphone-7'
			},
			'images': [
				{
					'image_id': 214,
					'path': 'images/66/19/1ebf20697aeb0d43716500b1291c.jpeg',
					'width': 1051,
					'height': 1051,
					'is_default': false,
					'description': null,
					'alt': null,
					'tags': null
				},
				{
					'image_id': 215,
					'path': 'images/77/a6/f116626e0b649cbfd2d4f6652ca5.jpeg',
					'width': 1501,
					'height': 1501,
					'is_default': true,
					'description': null,
					'alt': null,
					'tags': null
				}
			],
			'labels': [
				{
					'label_id': 2,
					'title': 'Hot!',
					'color': '#fbca04',
					'text_color': '#000000',
					'icon': TLabelIcon.fire
				},
				{
					'label_id': 3,
					'title': 'Sale',
					'color': '#bfd4f2',
					'text_color': '#000000',
					'icon': TLabelIcon.heart
				}
			],
			'sort_price': '12.99',
			'sort_in_stock': 0,
			'status': TPublishingStatus.published,
			'deleted_at': null,
			'in_stock': false
		},
		{
			'product_id': 163,
			'sku': 'the-amity-affliction',
			'title': 'Case The Amity Affliction',
			'url_key': 'chekhol-the-amity-affliction',
			'has_variants': true,
			'item_id': 3585,
			'commodity_group': {
				'group_id': 61,
				'title': 'Cases for mobile phones',
				'type': 'material',
				'track_inventory': true
			},
			'manufacturer_id': 34,
			'manufacturer': {
				'manufacturer_id': 34,
				'title': 'Anymode',
				'url_key': 'anymode',
				'image': 'images/90/9d/0ebaa202ce868ecafb2f4d2ed9a3.jpeg'
			},
			'price_id': 7,
			'price_alias': 'selling_price',
			'point_id': 1,
			'price': {
				'value': null,
				'min': 12.99,
				'max': 12.99,
				'old': null,
				'old_min': 15,
				'old_max': 15,
				'currency_alias': 'rub'
			},
			'props': {
				'available_qty': 33,
				'country_of_origin': null,
				'extra': null,
				'size': {
					'weight': 0.1
				}
			},
			'default_category': {
				'category_id': 103,
				'title': 'iPhone 7',
				'url_key': 'iphone-7'
			},
			'images': [
				{
					'image_id': 228,
					'path': 'images/2d/df/34781b8456ab97fa501023d2db92.jpeg',
					'width': 1501,
					'height': 1501,
					'is_default': true,
					'description': null,
					'alt': null,
					'tags': null
				},
				{
					'image_id': 229,
					'path': 'images/5b/8c/d52ec924457a48cac3c8534c659d.jpeg',
					'width': 1051,
					'height': 1051,
					'is_default': false,
					'description': null,
					'alt': null,
					'tags': null
				}
			],
			'labels': [
				{
					'label_id': 1,
					'title': 'New!',
					'color': '#b60205',
					'text_color': '#ffffff',
					'icon': TLabelIcon.flag
				},
				{
					'label_id': 2,
					'title': 'Hot!',
					'color': '#fbca04',
					'text_color': '#000000',
					'icon': TLabelIcon.fire
				}
			],
			'sort_price': '12.99',
			'sort_in_stock': 1,
			'status': TPublishingStatus.published,
			'deleted_at': null,
			'in_stock': true
		},
		{
			'product_id': 174,
			'sku': 'SOB-002',
			'title': 'Samsung orange book',
			'url_key': 'samsung-orange-book',
			'has_variants': true,
			'item_id': 3632,
			'commodity_group': {
				'group_id': 61,
				'title': 'Cases for mobile phones',
				'type': 'material',
				'track_inventory': true
			},
			'manufacturer_id': 32,
			'manufacturer': {
				'manufacturer_id': 32,
				'title': 'Love MEI',
				'url_key': 'love-mei',
				'image': 'images/d4/71/70901570ccfdd55ceef9d66508f9.png'
			},
			'price_id': 7,
			'price_alias': 'selling_price',
			'point_id': 1,
			'price': {
				'value': null,
				'min': 13,
				'max': 14.8,
				'old': null,
				'old_min': null,
				'old_max': null,
				'currency_alias': 'rub'
			},
			'props': {
				'available_qty': 10,
				'country_of_origin': null,
				'extra': null,
				'size': {
					'weight': 0.1
				}
			},
			'default_category': {
				'category_id': 101,
				'title': 'Cases for Samsung',
				'url_key': 'chekhly-dlya-samsung'
			},
			'images': [
				{
					'image_id': 263,
					'path': 'images/3b/04/0ffc13555443cd3956b8ef04b76b.jpeg',
					'width': 759,
					'height': 759,
					'is_default': false,
					'description': null,
					'alt': null,
					'tags': null
				},
				{
					'image_id': 264,
					'path': 'images/31/f7/cca18e7b2e09e2c350b916e1d03e.jpeg',
					'width': 725,
					'height': 725,
					'is_default': true,
					'description': null,
					'alt': null,
					'tags': null
				},
				{
					'image_id': 265,
					'path': 'images/18/a3/d552150b25e778727618995eccb8.jpeg',
					'width': 772,
					'height': 772,
					'is_default': false,
					'description': null,
					'alt': null,
					'tags': null
				}
			],
			'labels': [],
			'sort_price': '13.00',
			'sort_in_stock': 1,
			'status': TPublishingStatus.published,
			'deleted_at': null,
			'in_stock': true
		},
		{
			'product_id': 169,
			'sku': 'ipad-case-pink',
			'title': 'Case Pink',
			'url_key': 'chekhol-rozovyi',
			'has_variants': true,
			'item_id': 3615,
			'commodity_group': {
				'group_id': 61,
				'title': 'Cases for mobile phones',
				'type': 'material',
				'track_inventory': true
			},
			'manufacturer_id': null,
			'manufacturer': null,
			'price_id': 7,
			'price_alias': 'selling_price',
			'point_id': 1,
			'price': {
				'value': null,
				'min': 14.9,
				'max': 14.9,
				'old': null,
				'old_min': 15.9,
				'old_max': 15.9,
				'currency_alias': 'rub'
			},
			'props': {
				'available_qty': 30,
				'country_of_origin': null,
				'extra': null,
				'size': []
			},
			'default_category': {
				'category_id': 112,
				'title': 'iPad mini 3/ mini 2/ mini',
				'url_key': 'ipad-mini-3-mini-2-mini'
			},
			'images': [
				{
					'image_id': 238,
					'path': 'images/4c/cd/654dea365ec72d048b890afe42c4.jpeg',
					'width': 600,
					'height': 600,
					'is_default': false,
					'description': null,
					'alt': null,
					'tags': null
				},
				{
					'image_id': 240,
					'path': 'images/f6/ad/44f434c1a3817224482a15cce8b7.jpeg',
					'width': 600,
					'height': 600,
					'is_default': true,
					'description': null,
					'alt': null,
					'tags': null
				}
			],
			'labels': [
				{
					'label_id': 2,
					'title': 'Hot!',
					'color': '#fbca04',
					'text_color': '#000000',
					'icon': TLabelIcon.fire
				}
			],
			'sort_price': '14.90',
			'sort_in_stock': 1,
			'status': TPublishingStatus.published,
			'deleted_at': null,
			'in_stock': true
		},
		{
			'product_id': 170,
			'sku': 'ipad-case-gray',
			'title': 'Case Gray',
			'url_key': 'chekhol-seryi',
			'has_variants': true,
			'item_id': 3619,
			'commodity_group': {
				'group_id': 61,
				'title': 'Cases for mobile phones',
				'type': 'material',
				'track_inventory': true
			},
			'manufacturer_id': 35,
			'manufacturer': {
				'manufacturer_id': 35,
				'title': 'Element Case',
				'url_key': 'element-case',
				'image': 'images/ae/7d/8a78a1f5f51504181d4780888f1a.png'
			},
			'price_id': 7,
			'price_alias': 'selling_price',
			'point_id': 1,
			'price': {
				'value': null,
				'min': 14.99,
				'max': 14.99,
				'old': null,
				'old_min': 16,
				'old_max': 16,
				'currency_alias': 'rub'
			},
			'props': {
				'available_qty': 22,
				'country_of_origin': null,
				'extra': null,
				'size': {
					'weight': 0.1
				}
			},
			'default_category': {
				'category_id': 112,
				'title': 'iPad mini 3/ mini 2/ mini',
				'url_key': 'ipad-mini-3-mini-2-mini'
			},
			'images': [
				{
					'image_id': 243,
					'path': 'images/48/08/21b56959f683ebe3f4edc122bd47.jpeg',
					'width': 600,
					'height': 600,
					'is_default': false,
					'description': null,
					'alt': null,
					'tags': null
				},
				{
					'image_id': 241,
					'path': 'images/be/ac/65424993485e2d022a3502d76b7f.jpeg',
					'width': 600,
					'height': 600,
					'is_default': true,
					'description': null,
					'alt': null,
					'tags': null
				}
			],
			'labels': [
				{
					'label_id': 2,
					'title': 'Hot!',
					'color': '#fbca04',
					'text_color': '#000000',
					'icon': TLabelIcon.fire
				}
			],
			'sort_price': '14.99',
			'sort_in_stock': 1,
			'status': TPublishingStatus.published,
			'deleted_at': null,
			'in_stock': true
		},
		{
			'product_id': 172,
			'sku': 'ipad-case-black',
			'title': 'Case Black',
			'url_key': 'chekhol-chernyi',
			'has_variants': true,
			'item_id': 3627,
			'commodity_group': {
				'group_id': 61,
				'title': 'Cases for mobile phones',
				'type': 'material',
				'track_inventory': true
			},
			'manufacturer_id': 35,
			'manufacturer': {
				'manufacturer_id': 35,
				'title': 'Element Case',
				'url_key': 'element-case',
				'image': 'images/ae/7d/8a78a1f5f51504181d4780888f1a.png'
			},
			'price_id': 7,
			'price_alias': 'selling_price',
			'point_id': 1,
			'price': {
				'value': null,
				'min': 14.99,
				'max': 14.99,
				'old': null,
				'old_min': 18.99,
				'old_max': 18.99,
				'currency_alias': 'rub'
			},
			'props': {
				'available_qty': 30,
				'country_of_origin': null,
				'extra': null,
				'size': {
					'weight': 0.1
				}
			},
			'default_category': {
				'category_id': 112,
				'title': 'iPad mini 3/ mini 2/ mini',
				'url_key': 'ipad-mini-3-mini-2-mini'
			},
			'images': [
				{
					'image_id': 259,
					'path': 'images/45/e8/a4d2e72bf9d9202e02de7a4f6777.jpeg',
					'width': 600,
					'height': 600,
					'is_default': true,
					'description': null,
					'alt': null,
					'tags': null
				},
				{
					'image_id': 258,
					'path': 'images/c2/ca/7e93a3a34b1fb67347ad16501eb5.jpeg',
					'width': 600,
					'height': 600,
					'is_default': false,
					'description': null,
					'alt': null,
					'tags': null
				}
			],
			'labels': [
				{
					'label_id': 3,
					'title': 'Sale',
					'color': '#bfd4f2',
					'text_color': '#000000',
					'icon': TLabelIcon.heart
				}
			],
			'sort_price': '14.99',
			'sort_in_stock': 1,
			'status': TPublishingStatus.published,
			'deleted_at': null,
			'in_stock': true
		},
		{
			'product_id': 176,
			'sku': 'stc-008',
			'title': 'Samsung transparent case',
			'url_key': 'samsung-transparent-case',
			'has_variants': true,
			'item_id': 3640,
			'commodity_group': {
				'group_id': 61,
				'title': 'Cases for mobile phones',
				'type': 'material',
				'track_inventory': true
			},
			'manufacturer_id': 32,
			'manufacturer': {
				'manufacturer_id': 32,
				'title': 'Love MEI',
				'url_key': 'love-mei',
				'image': 'images/d4/71/70901570ccfdd55ceef9d66508f9.png'
			},
			'price_id': 7,
			'price_alias': 'selling_price',
			'point_id': 1,
			'price': {
				'value': null,
				'min': 14.99,
				'max': 14.99,
				'old': null,
				'old_min': 18.99,
				'old_max': 18.99,
				'currency_alias': 'rub'
			},
			'props': {
				'available_qty': 32,
				'country_of_origin': null,
				'extra': null,
				'size': {
					'weight': 0.1
				}
			},
			'default_category': {
				'category_id': 101,
				'title': 'Cases for Samsung',
				'url_key': 'chekhly-dlya-samsung'
			},
			'images': [
				{
					'image_id': 269,
					'path': 'images/e2/15/9bb81c482dc6f537f855662226de.jpeg',
					'width': 725,
					'height': 725,
					'is_default': false,
					'description': null,
					'alt': null,
					'tags': null
				},
				{
					'image_id': 270,
					'path': 'images/7b/f7/1ccd3ea235093d00f731c4f3920b.jpeg',
					'width': 725,
					'height': 725,
					'is_default': true,
					'description': null,
					'alt': null,
					'tags': null
				},
				{
					'image_id': 271,
					'path': 'images/c8/9d/a379b2cd739fb514e0f171734650.jpeg',
					'width': 725,
					'height': 725,
					'is_default': false,
					'description': null,
					'alt': null,
					'tags': null
				}
			],
			'labels': [
				{
					'label_id': 3,
					'title': 'Sale',
					'color': '#bfd4f2',
					'text_color': '#000000',
					'icon': TLabelIcon.heart
				}
			],
			'sort_price': '14.99',
			'sort_in_stock': 1,
			'status': TPublishingStatus.published,
			'deleted_at': null,
			'in_stock': true
		},
		{
			'product_id': 171,
			'sku': 'ipad-case-turquoise',
			'title': 'Case Turquoise',
			'url_key': 'chekhol-biryuzovyi',
			'has_variants': true,
			'item_id': 3623,
			'commodity_group': {
				'group_id': 61,
				'title': 'Cases for mobile phones',
				'type': 'material',
				'track_inventory': true
			},
			'manufacturer_id': 35,
			'manufacturer': {
				'manufacturer_id': 35,
				'title': 'Element Case',
				'url_key': 'element-case',
				'image': 'images/ae/7d/8a78a1f5f51504181d4780888f1a.png'
			},
			'price_id': 7,
			'price_alias': 'selling_price',
			'point_id': 1,
			'price': {
				'value': null,
				'min': 15,
				'max': 15,
				'old': null,
				'old_min': null,
				'old_max': null,
				'currency_alias': 'rub'
			},
			'props': {
				'available_qty': 30,
				'country_of_origin': null,
				'extra': null,
				'size': {
					'weight': 0.1
				}
			},
			'default_category': {
				'category_id': 112,
				'title': 'iPad mini 3/ mini 2/ mini',
				'url_key': 'ipad-mini-3-mini-2-mini'
			},
			'images': [
				{
					'image_id': 257,
					'path': 'images/2e/82/1f3fb49e832792aaadbf7031490a.jpeg',
					'width': 600,
					'height': 600,
					'is_default': false,
					'description': null,
					'alt': null,
					'tags': null
				},
				{
					'image_id': 256,
					'path': 'images/d7/cf/2a294d7108fd8f1cd13b147af962.jpeg',
					'width': 600,
					'height': 600,
					'is_default': true,
					'description': null,
					'alt': null,
					'tags': null
				}
			],
			'labels': [],
			'sort_price': '15.00',
			'sort_in_stock': 1,
			'status': TPublishingStatus.published,
			'deleted_at': null,
			'in_stock': true
		},
		{
			'product_id': 179,
			'sku': '32017252',
			'title': 'Battery Case Spigen MetPower for Apple iPhone 5/5S Gray',
			'url_key': 'chekhol-akkumulyator-spigen-metpower-dlya-apple-iphone-5-5s-seryi',
			'has_variants': false,
			'item_id': 3649,
			'commodity_group': {
				'group_id': 61,
				'title': 'Cases for mobile phones',
				'type': 'material',
				'track_inventory': true
			},
			'manufacturer_id': 33,
			'manufacturer': {
				'manufacturer_id': 33,
				'title': 'Spigen',
				'url_key': 'spigen',
				'image': 'images/a6/6d/b439f0c671af28330ffc76f4ee01.png'
			},
			'price_id': 7,
			'price_alias': 'selling_price',
			'point_id': 1,
			'price': {
				'value': 25,
				'min': null,
				'max': null,
				'old': null,
				'old_min': null,
				'old_max': null,
				'currency_alias': 'usd'
			},
			'props': {
				'available_qty': 20,
				'country_of_origin': null,
				'extra': null,
				'size': {
					'weight': 0.3
				}
			},
			'default_category': {
				'category_id': 106,
				'title': 'iPhone 5/5s',
				'url_key': 'iphone-5-5s'
			},
			'images': [
				{
					'image_id': 280,
					'path': 'images/bd/56/286e3d68096052756e4cc209adcf.jpeg',
					'width': 725,
					'height': 725,
					'is_default': false,
					'description': null,
					'alt': null,
					'tags': null
				},
				{
					'image_id': 279,
					'path': 'images/70/da/edd94f183d954a9f407b69e39619.jpeg',
					'width': 725,
					'height': 725,
					'is_default': false,
					'description': null,
					'alt': null,
					'tags': null
				},
				{
					'image_id': 281,
					'path': 'images/fe/47/748a6ce872cfaacacd579fcae3a8.jpeg',
					'width': 725,
					'height': 725,
					'is_default': true,
					'description': null,
					'alt': null,
					'tags': null
				}
			],
			'labels': [],
			'sort_price': '25.00',
			'sort_in_stock': 1,
			'status': TPublishingStatus.published,
			'deleted_at': null,
			'in_stock': true
		},
		{
			'product_id': 178,
			'sku': '3201725',
			'title': 'Battery Case Spigen MetPower for Apple iPhone 5/5s Silver',
			'url_key': 'chekhol-akkumulyator-spigen-metpower-dlya-apple-iphone-5-5s-serebristyi',
			'has_variants': false,
			'item_id': 3648,
			'commodity_group': {
				'group_id': 61,
				'title': 'Cases for mobile phones',
				'type': 'material',
				'track_inventory': true
			},
			'manufacturer_id': 33,
			'manufacturer': {
				'manufacturer_id': 33,
				'title': 'Spigen',
				'url_key': 'spigen',
				'image': 'images/a6/6d/b439f0c671af28330ffc76f4ee01.png'
			},
			'price_id': 7,
			'price_alias': 'selling_price',
			'point_id': 1,
			'price': {
				'value': 25.99,
				'min': null,
				'max': null,
				'old': null,
				'old_min': null,
				'old_max': null,
				'currency_alias': 'usd'
			},
			'props': {
				'available_qty': 25,
				'country_of_origin': null,
				'extra': null,
				'size': {
					'weight': 0.3
				}
			},
			'default_category': {
				'category_id': 111,
				'title': 'With charger',
				'url_key': 's-akkumulyatorom'
			},
			'images': [
				{
					'image_id': 277,
					'path': 'images/93/e5/6d76b691b30f877b533cda65cb56.jpeg',
					'width': 725,
					'height': 725,
					'is_default': false,
					'description': null,
					'alt': null,
					'tags': null
				},
				{
					'image_id': 276,
					'path': 'images/dd/c7/1c9d8c3faa9bddd2a6956696a9c3.jpeg',
					'width': 725,
					'height': 725,
					'is_default': true,
					'description': null,
					'alt': null,
					'tags': null
				},
				{
					'image_id': 278,
					'path': 'images/81/de/554e1e25ee02a156fd33a8ac1ae2.jpeg',
					'width': 725,
					'height': 725,
					'is_default': false,
					'description': null,
					'alt': null,
					'tags': null
				}
			],
			'labels': [],
			'sort_price': '25.99',
			'sort_in_stock': 1,
			'status': TPublishingStatus.published,
			'deleted_at': null,
			'in_stock': true
		},
		{
			'product_id': 181,
			'sku': '3271820',
			'title': 'Samsung Backpack для Galaxy S7 Edge (black)',
			'url_key': 'samsung-backpack-dlya-galaxy-s7-edge-chernyi',
			'has_variants': false,
			'item_id': 3651,
			'commodity_group': {
				'group_id': 61,
				'title': 'Cases for mobile phones',
				'type': 'material',
				'track_inventory': true
			},
			'manufacturer_id': 33,
			'manufacturer': {
				'manufacturer_id': 33,
				'title': 'Spigen',
				'url_key': 'spigen',
				'image': 'images/a6/6d/b439f0c671af28330ffc76f4ee01.png'
			},
			'price_id': 7,
			'price_alias': 'selling_price',
			'point_id': 1,
			'price': {
				'value': 39.9,
				'min': null,
				'max': null,
				'old': null,
				'old_min': null,
				'old_max': null,
				'currency_alias': 'usd'
			},
			'props': {
				'available_qty': 20,
				'country_of_origin': null,
				'extra': null,
				'size': {
					'weight': 0.4
				}
			},
			'default_category': {
				'category_id': 101,
				'title': 'Cases for Samsung',
				'url_key': 'chekhly-dlya-samsung'
			},
			'images': [
				{
					'image_id': 285,
					'path': 'images/f0/88/10c3a350940b6b48e9ba5bcef38b.jpeg',
					'width': 725,
					'height': 725,
					'is_default': false,
					'description': null,
					'alt': null,
					'tags': null
				},
				{
					'image_id': 286,
					'path': 'images/31/18/bcea09082a820b2425eca7a882be.jpeg',
					'width': 861,
					'height': 861,
					'is_default': false,
					'description': null,
					'alt': null,
					'tags': null
				},
				{
					'image_id': 287,
					'path': 'images/c6/1e/dc031b19981275880fabf2346fb3.jpeg',
					'width': 725,
					'height': 725,
					'is_default': true,
					'description': null,
					'alt': null,
					'tags': null
				}
			],
			'labels': [
				{
					'label_id': 4,
					'title': 'Best choice',
					'color': '#0e8a16',
					'text_color': '#000000',
					'icon': null
				}
			],
			'sort_price': '39.90',
			'sort_in_stock': 1,
			'status': TPublishingStatus.published,
			'deleted_at': null,
			'in_stock': true
		},
		{
			'product_id': 180,
			'sku': '2667209',
			'title': 'Battery Case Odoyo Power+Shell for iPhone 6/6S',
			'url_key': 'chekhol-akkumulyator-odoyo-power-shell-dlya-iphone-6-6s',
			'has_variants': false,
			'item_id': 3650,
			'commodity_group': {
				'group_id': 61,
				'title': 'Cases for mobile phones',
				'type': 'material',
				'track_inventory': true
			},
			'manufacturer_id': 33,
			'manufacturer': {
				'manufacturer_id': 33,
				'title': 'Spigen',
				'url_key': 'spigen',
				'image': 'images/a6/6d/b439f0c671af28330ffc76f4ee01.png'
			},
			'price_id': 7,
			'price_alias': 'selling_price',
			'point_id': 1,
			'price': {
				'value': 45,
				'min': null,
				'max': null,
				'old': null,
				'old_min': null,
				'old_max': null,
				'currency_alias': 'usd'
			},
			'props': {
				'available_qty': 20,
				'country_of_origin': null,
				'extra': null,
				'size': {
					'weight': 0.3
				}
			},
			'default_category': {
				'category_id': 105,
				'title': 'iPhone 6',
				'url_key': 'iphone-6'
			},
			'images': [
				{
					'image_id': 283,
					'path': 'images/7a/d7/4c521a00abcbb3c33578fb23b0e8.jpeg',
					'width': 870,
					'height': 870,
					'is_default': false,
					'description': null,
					'alt': null,
					'tags': null
				},
				{
					'image_id': 282,
					'path': 'images/6b/22/e2a813547476d03afb9aedba4780.jpeg',
					'width': 725,
					'height': 725,
					'is_default': false,
					'description': null,
					'alt': null,
					'tags': null
				},
				{
					'image_id': 284,
					'path': 'images/a1/ae/ace20b14fe947ff13822f97a82ac.jpeg',
					'width': 725,
					'height': 725,
					'is_default': true,
					'description': null,
					'alt': null,
					'tags': null
				}
			],
			'labels': [],
			'sort_price': '45.00',
			'sort_in_stock': 1,
			'status': TPublishingStatus.published,
			'deleted_at': null,
			'in_stock': true
		}
	],
	pagination: {
		'totalCount': 26,
		'pageCount': 1,
		'currentPage': 1,
		'perPage': 100
	}
};

export const _products : IProduct[] = [
	{
		'product_id': 165,
		'sku': 'iphone-case-explorer-wanted',
		'title': 'Case Explorer wanted',
		'url_key': 'chekhol-explorer-wanted',
		'has_variants': true,
		'item_id': 3595,
		'commodity_group': {
			'group_id': 61,
			'title': 'Cases for mobile phones',
			'type': 'material',
			'track_inventory': true
		},
		'manufacturer_id': 34,
		'manufacturer': {
			'manufacturer_id': 34,
			'title': 'Anymode',
			'url_key': 'anymode',
			'image': 'images/90/9d/0ebaa202ce868ecafb2f4d2ed9a3.jpeg'
		},
		'price_id': 7,
		'price_alias': 'selling_price',
		'point_id': 1,
		'price': {
			'value': null,
			'min': 8.99,
			'max': 8.99,
			'old': null,
			'old_min': 12,
			'old_max': 12,
			'currency_alias': 'rub'
		},
		'props': {
			'available_qty': 38,
			'country_of_origin': null,
			'extra': null,
			'size': {
				'weight': 0.1
			}
		},
		'default_category': {
			'category_id': 103,
			'title': 'iPhone 7',
			'url_key': 'iphone-7'
		},
		'images': [
			{
				'image_id': 232,
				'path': 'images/42/8c/fc30842678a18574925d97e9aa91.jpeg',
				'width': 1501,
				'height': 1501,
				'is_default': true,
				'description': null,
				'alt': null,
				'tags': null
			},
			{
				'image_id': 233,
				'path': 'images/49/54/c4db23339fc41237bab64127ff69.jpeg',
				'width': 1051,
				'height': 1051,
				'is_default': false,
				'description': null,
				'alt': null,
				'tags': null
			}
		],
		'labels': [
			{
				'label_id': 4,
				'title': 'Best choice',
				'color': '#0e8a16',
				'text_color': '#000000',
				'icon': null
			}
		],
		'sort_price': '8.99',
		'sort_in_stock': 1,
		'status': TPublishingStatus.published,
		'deleted_at': null,
		'in_stock': true
	},
	{
		'product_id': 156,
		'sku': 'santa-matrioshka',
		'title': 'Case Santa matryoshka',
		'url_key': 'chekhol-santa-matreshka',
		'has_variants': true,
		'item_id': 3546,
		'commodity_group': {
			'group_id': 61,
			'title': 'Cases for mobile phones',
			'type': 'material',
			'track_inventory': true
		},
		'manufacturer_id': 34,
		'manufacturer': {
			'manufacturer_id': 34,
			'title': 'Anymode',
			'url_key': 'anymode',
			'image': 'images/90/9d/0ebaa202ce868ecafb2f4d2ed9a3.jpeg'
		},
		'price_id': 7,
		'price_alias': 'selling_price',
		'point_id': 1,
		'price': {
			'value': 900,
			'min': 12.99,
			'max': 12.99,
			'old': null,
			'old_min': 15.99,
			'old_max': 15.99,
			'currency_alias': 'rub'
		},
		'props': {
			'available_qty': 0,
			'country_of_origin': null,
			'extra': null,
			'size': {
				'weight': 0.1
			}
		},
		'default_category': {
			'category_id': 103,
			'title': 'iPhone 7',
			'url_key': 'iphone-7'
		},
		'images': [
			{
				'image_id': 214,
				'path': 'images/66/19/1ebf20697aeb0d43716500b1291c.jpeg',
				'width': 1051,
				'height': 1051,
				'is_default': false,
				'description': null,
				'alt': null,
				'tags': null
			},
			{
				'image_id': 215,
				'path': 'images/77/a6/f116626e0b649cbfd2d4f6652ca5.jpeg',
				'width': 1501,
				'height': 1501,
				'is_default': true,
				'description': null,
				'alt': null,
				'tags': null
			}
		],
		'labels': [
			{
				'label_id': 2,
				'title': 'Hot!',
				'color': '#fbca04',
				'text_color': '#000000',
				'icon': TLabelIcon.fire
			},
			{
				'label_id': 3,
				'title': 'Sale',
				'color': '#bfd4f2',
				'text_color': '#000000',
				'icon': TLabelIcon.heart
			}
		],
		'sort_price': '12.99',
		'sort_in_stock': 0,
		'status': TPublishingStatus.published,
		'deleted_at': null,
		'in_stock': false
	},
	{
		'product_id': 163,
		'sku': 'the-amity-affliction',
		'title': 'Case The Amity Affliction',
		'url_key': 'chekhol-the-amity-affliction',
		'has_variants': true,
		'item_id': 3585,
		'commodity_group': {
			'group_id': 61,
			'title': 'Cases for mobile phones',
			'type': 'material',
			'track_inventory': true
		},
		'manufacturer_id': 34,
		'manufacturer': {
			'manufacturer_id': 34,
			'title': 'Anymode',
			'url_key': 'anymode',
			'image': 'images/90/9d/0ebaa202ce868ecafb2f4d2ed9a3.jpeg'
		},
		'price_id': 7,
		'price_alias': 'selling_price',
		'point_id': 1,
		'price': {
			'value': null,
			'min': 12.99,
			'max': 12.99,
			'old': null,
			'old_min': 15,
			'old_max': 15,
			'currency_alias': 'rub'
		},
		'props': {
			'available_qty': 33,
			'country_of_origin': null,
			'extra': null,
			'size': {
				'weight': 0.1
			}
		},
		'default_category': {
			'category_id': 103,
			'title': 'iPhone 7',
			'url_key': 'iphone-7'
		},
		'images': [
			{
				'image_id': 228,
				'path': 'images/2d/df/34781b8456ab97fa501023d2db92.jpeg',
				'width': 1501,
				'height': 1501,
				'is_default': true,
				'description': null,
				'alt': null,
				'tags': null
			},
			{
				'image_id': 229,
				'path': 'images/5b/8c/d52ec924457a48cac3c8534c659d.jpeg',
				'width': 1051,
				'height': 1051,
				'is_default': false,
				'description': null,
				'alt': null,
				'tags': null
			}
		],
		'labels': [
			{
				'label_id': 2,
				'title': 'Hot!',
				'color': '#fbca04',
				'text_color': '#000000',
				'icon': TLabelIcon.fire
			},
			{
				'label_id': 1,
				'title': 'New!',
				'color': '#b60205',
				'text_color': '#ffffff',
				'icon': TLabelIcon.flag
			}
		],
		'sort_price': '12.99',
		'sort_in_stock': 1,
		'status': TPublishingStatus.published,
		'deleted_at': null,
		'in_stock': true
	},
	{
		'product_id': 162,
		'sku': 'iphone-case-fuck',
		'title': 'Case Fuck',
		'url_key': 'chekhol-fuck',
		'has_variants': true,
		'item_id': 3580,
		'commodity_group': {
			'group_id': 61,
			'title': 'Cases for mobile phones',
			'type': 'material',
			'track_inventory': true
		},
		'manufacturer_id': 34,
		'manufacturer': {
			'manufacturer_id': 34,
			'title': 'Anymode',
			'url_key': 'anymode',
			'image': 'images/90/9d/0ebaa202ce868ecafb2f4d2ed9a3.jpeg'
		},
		'price_id': 7,
		'price_alias': 'selling_price',
		'point_id': 1,
		'price': {
			'value': null,
			'min': 7.5,
			'max': 7.5,
			'old': null,
			'old_min': 15,
			'old_max': 15,
			'currency_alias': 'rub'
		},
		'props': {
			'available_qty': 27,
			'country_of_origin': null,
			'extra': null,
			'size': {
				'weight': 0.1
			}
		},
		'default_category': {
			'category_id': 103,
			'title': 'iPhone 7',
			'url_key': 'iphone-7'
		},
		'images': [
			{
				'image_id': 226,
				'path': 'images/26/0e/7b0f95f7e69ea79069aca4d613df.jpeg',
				'width': 1501,
				'height': 1501,
				'is_default': true,
				'description': null,
				'alt': null,
				'tags': null
			},
			{
				'image_id': 227,
				'path': 'images/19/8a/edc71f630f689a1b40cc2f01dcd0.jpeg',
				'width': 1051,
				'height': 1051,
				'is_default': false,
				'description': null,
				'alt': null,
				'tags': null
			}
		],
		'labels': [
			{
				'label_id': 2,
				'title': 'Hot!',
				'color': '#fbca04',
				'text_color': '#000000',
				'icon': TLabelIcon.fire
			},
			{
				'label_id': 3,
				'title': 'Sale',
				'color': '#bfd4f2',
				'text_color': '#000000',
				'icon': TLabelIcon.heart
			}
		],
		'sort_price': '7.50',
		'sort_in_stock': 1,
		'status': TPublishingStatus.published,
		'deleted_at': null,
		'in_stock': true
	},
	{
		'product_id': 168,
		'sku': 'iphone-case-lovely-girl',
		'title': 'Case Lovely girl',
		'url_key': 'chekhol-lovely-girl',
		'has_variants': true,
		'item_id': 3610,
		'commodity_group': {
			'group_id': 61,
			'title': 'Cases for mobile phones',
			'type': 'material',
			'track_inventory': true
		},
		'manufacturer_id': 34,
		'manufacturer': {
			'manufacturer_id': 34,
			'title': 'Anymode',
			'url_key': 'anymode',
			'image': 'images/90/9d/0ebaa202ce868ecafb2f4d2ed9a3.jpeg'
		},
		'price_id': 7,
		'price_alias': 'selling_price',
		'point_id': 1,
		'price': {
			'value': null,
			'min': 9.99,
			'max': 9.99,
			'old': null,
			'old_min': 12.99,
			'old_max': 12.99,
			'currency_alias': 'rub'
		},
		'props': {
			'available_qty': 44,
			'country_of_origin': null,
			'extra': null,
			'size': {
				'weight': 0.1
			}
		},
		'default_category': {
			'category_id': 103,
			'title': 'iPhone 7',
			'url_key': 'iphone-7'
		},
		'images': [
			{
				'image_id': 237,
				'path': 'images/80/3f/8f005e32857ffbf182c58eb009b9.jpeg',
				'width': 1501,
				'height': 1501,
				'is_default': true,
				'description': null,
				'alt': null,
				'tags': null
			}
		],
		'labels': [
			{
				'label_id': 2,
				'title': 'Hot!',
				'color': '#fbca04',
				'text_color': '#000000',
				'icon': TLabelIcon.fire
			}
		],
		'sort_price': '9.99',
		'sort_in_stock': 1,
		'status': TPublishingStatus.published,
		'deleted_at': null,
		'in_stock': true
	},
	{
		'product_id': 172,
		'sku': 'ipad-case-black',
		'title': 'Case Black',
		'url_key': 'chekhol-chernyi',
		'has_variants': true,
		'item_id': 3627,
		'commodity_group': {
			'group_id': 61,
			'title': 'Cases for mobile phones',
			'type': 'material',
			'track_inventory': true
		},
		'manufacturer_id': 35,
		'manufacturer': {
			'manufacturer_id': 35,
			'title': 'Element Case',
			'url_key': 'element-case',
			'image': 'images/ae/7d/8a78a1f5f51504181d4780888f1a.png'
		},
		'price_id': 7,
		'price_alias': 'selling_price',
		'point_id': 1,
		'price': {
			'value': null,
			'min': 14.99,
			'max': 14.99,
			'old': null,
			'old_min': 18.99,
			'old_max': 18.99,
			'currency_alias': 'rub'
		},
		'props': {
			'available_qty': 30,
			'country_of_origin': null,
			'extra': null,
			'size': {
				'weight': 0.1
			}
		},
		'default_category': {
			'category_id': 112,
			'title': 'iPad mini 3/ mini 2/ mini',
			'url_key': 'ipad-mini-3-mini-2-mini'
		},
		'images': [
			{
				'image_id': 259,
				'path': 'images/45/e8/a4d2e72bf9d9202e02de7a4f6777.jpeg',
				'width': 600,
				'height': 600,
				'is_default': true,
				'description': null,
				'alt': null,
				'tags': null
			},
			{
				'image_id': 258,
				'path': 'images/c2/ca/7e93a3a34b1fb67347ad16501eb5.jpeg',
				'width': 600,
				'height': 600,
				'is_default': false,
				'description': null,
				'alt': null,
				'tags': null
			}
		],
		'labels': [
			{
				'label_id': 3,
				'title': 'Sale',
				'color': '#bfd4f2',
				'text_color': '#000000',
				'icon': TLabelIcon.heart
			}
		],
		'sort_price': '14.99',
		'sort_in_stock': 1,
		'status': TPublishingStatus.published,
		'deleted_at': null,
		'in_stock': true
	},
	{
		'product_id': 176,
		'sku': 'stc-008',
		'title': 'Samsung transparent case',
		'url_key': 'samsung-transparent-case',
		'has_variants': true,
		'item_id': 3640,
		'commodity_group': {
			'group_id': 61,
			'title': 'Cases for mobile phones',
			'type': 'material',
			'track_inventory': true
		},
		'manufacturer_id': 32,
		'manufacturer': {
			'manufacturer_id': 32,
			'title': 'Love MEI',
			'url_key': 'love-mei',
			'image': 'images/d4/71/70901570ccfdd55ceef9d66508f9.png'
		},
		'price_id': 7,
		'price_alias': 'selling_price',
		'point_id': 1,
		'price': {
			'value': null,
			'min': 14.99,
			'max': 14.99,
			'old': null,
			'old_min': 18.99,
			'old_max': 18.99,
			'currency_alias': 'rub'
		},
		'props': {
			'available_qty': 32,
			'country_of_origin': null,
			'extra': null,
			'size': {
				'weight': 0.1
			}
		},
		'default_category': {
			'category_id': 101,
			'title': 'Cases for Samsung',
			'url_key': 'chekhly-dlya-samsung'
		},
		'images': [
			{
				'image_id': 269,
				'path': 'images/e2/15/9bb81c482dc6f537f855662226de.jpeg',
				'width': 725,
				'height': 725,
				'is_default': false,
				'description': null,
				'alt': null,
				'tags': null
			},
			{
				'image_id': 270,
				'path': 'images/7b/f7/1ccd3ea235093d00f731c4f3920b.jpeg',
				'width': 725,
				'height': 725,
				'is_default': true,
				'description': null,
				'alt': null,
				'tags': null
			},
			{
				'image_id': 271,
				'path': 'images/c8/9d/a379b2cd739fb514e0f171734650.jpeg',
				'width': 725,
				'height': 725,
				'is_default': false,
				'description': null,
				'alt': null,
				'tags': null
			}
		],
		'labels': [
			{
				'label_id': 3,
				'title': 'Sale',
				'color': '#bfd4f2',
				'text_color': '#000000',
				'icon': TLabelIcon.heart
			}
		],
		'sort_price': '14.99',
		'sort_in_stock': 1,
		'status': TPublishingStatus.published,
		'deleted_at': null,
		'in_stock': true
	},
	{
		'product_id': 181,
		'sku': '3271820',
		'title': 'Samsung Backpack для Galaxy S7 Edge (black)',
		'url_key': 'samsung-backpack-dlya-galaxy-s7-edge-chernyi',
		'has_variants': false,
		'item_id': 3651,
		'commodity_group': {
			'group_id': 61,
			'title': 'Cases for mobile phones',
			'type': 'material',
			'track_inventory': true
		},
		'manufacturer_id': 33,
		'manufacturer': {
			'manufacturer_id': 33,
			'title': 'Spigen',
			'url_key': 'spigen',
			'image': 'images/a6/6d/b439f0c671af28330ffc76f4ee01.png'
		},
		'price_id': 7,
		'price_alias': 'selling_price',
		'point_id': 1,
		'price': {
			'value': 39.9,
			'min': null,
			'max': null,
			'old': null,
			'old_min': null,
			'old_max': null,
			'currency_alias': 'usd'
		},
		'props': {
			'available_qty': 20,
			'country_of_origin': null,
			'extra': null,
			'size': {
				'weight': 0.4
			}
		},
		'default_category': {
			'category_id': 101,
			'title': 'Cases for Samsung',
			'url_key': 'chekhly-dlya-samsung'
		},
		'images': [
			{
				'image_id': 285,
				'path': 'images/f0/88/10c3a350940b6b48e9ba5bcef38b.jpeg',
				'width': 725,
				'height': 725,
				'is_default': false,
				'description': null,
				'alt': null,
				'tags': null
			},
			{
				'image_id': 286,
				'path': 'images/31/18/bcea09082a820b2425eca7a882be.jpeg',
				'width': 861,
				'height': 861,
				'is_default': false,
				'description': null,
				'alt': null,
				'tags': null
			},
			{
				'image_id': 287,
				'path': 'images/c6/1e/dc031b19981275880fabf2346fb3.jpeg',
				'width': 725,
				'height': 725,
				'is_default': true,
				'description': null,
				'alt': null,
				'tags': null
			}
		],
		'labels': [
			{
				'label_id': 4,
				'title': 'Best choice',
				'color': '#0e8a16',
				'text_color': '#000000',
				'icon': null
			}
		],
		'sort_price': '39.90',
		'sort_in_stock': 1,
		'status': TPublishingStatus.published,
		'deleted_at': null,
		'in_stock': true
	}
];