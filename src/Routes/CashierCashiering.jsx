import { useState, useEffect } from 'react';

import AddShoppingCartOutlinedIcon from '@mui/icons-material/AddShoppingCartOutlined';
import ShoppingCartCheckoutOutlinedIcon from '@mui/icons-material/ShoppingCartCheckoutOutlined';
import AddOutlinedIcon from '@mui/icons-material/AddOutlined';
import RemoveOutlinedIcon from '@mui/icons-material/RemoveOutlined';
import RemoveShoppingCartOutlinedIcon from '@mui/icons-material/RemoveShoppingCartOutlined';

import {
  CashierNav,
  TopBar,
  PageHeader,
  InputData,
  List,
} from '../myComponents';
import { useWidthResizeListener, useFormatNumber } from '../utils.js';

import {
  VStack,
  HStack,
  Heading,
  Button,
  useDisclosure,
  Modal,
  ModalCloseButton,
  ModalContent,
  ModalOverlay,
  ModalHeader,
  ModalBody,
  ModalFooter,
  Text,
  Input,
  Icon,
} from '@chakra-ui/react';

export default function CashierCashiering() {
  // Page Utils
  const screenWidth = useWidthResizeListener();
  const fn = useFormatNumber;

  // Page Datas
  const dummyListData = [
    {
      ID: 20,
      CreatedAt: '2023-02-25T13:55:16.024772+07:00',
      UpdatedAt: '2023-04-04T22:23:04.586542+07:00',
      DeletedAt: null,
      code: '8998866200318',
      name: 'Sedap Ayam Bawang',
      price: 3500,
      stock: 1068,
      user_id: 13,
      modal: 1000,
      category: 'Food',
      color: 'Yellow',
    },
    {
      ID: 14,
      CreatedAt: '2023-02-25T13:54:49.954006+07:00',
      UpdatedAt: '2023-04-04T22:23:51.492394+07:00',
      DeletedAt: null,
      code: '089686010046',
      name: 'Indomie Ayam Spesial',
      price: 3000,
      stock: 1075,
      user_id: 13,
      modal: 1000,
      category: 'Food',
      color: 'Orange',
    },
    {
      ID: 27,
      CreatedAt: '2023-02-25T13:55:33.968144+07:00',
      UpdatedAt: '2023-06-07T18:37:56.683919+07:00',
      DeletedAt: null,
      code: 'pasir1',
      name: 'Gula Pasir 1kg',
      price: 14500,
      stock: 1071,
      user_id: 13,
      modal: 1000,
      category: 'Food',
      color: 'White',
    },
    {
      ID: 24,
      CreatedAt: '2023-02-25T13:55:26.527913+07:00',
      UpdatedAt: '2023-04-10T14:08:28.68557+07:00',
      DeletedAt: null,
      code: 'ndog1',
      name: 'Telur 1kg',
      price: 27500,
      stock: 1020,
      user_id: 13,
      modal: 1000,
      category: 'Food',
      color: 'Brown',
    },
    {
      ID: 23,
      CreatedAt: '2023-02-25T13:55:23.750773+07:00',
      UpdatedAt: '2023-04-04T22:23:28.738711+07:00',
      DeletedAt: null,
      code: '8886008101091',
      name: 'Aqua 1500ml | 1.5L (besar)',
      price: 6000,
      stock: 1052,
      user_id: 13,
      modal: 5000,
      category: 'Drink',
      color: 'Blue',
    },
    {
      ID: 81,
      CreatedAt: '2023-03-27T13:40:18.029857+07:00',
      UpdatedAt: '2023-04-04T22:22:49.504233+07:00',
      DeletedAt: null,
      code: '8993189270338',
      name: 'Charm Extra Maxi Wing 23cm 10 pads',
      price: 9000,
      stock: 1094,
      user_id: 13,
      modal: 0,
      category: 'Hygiene',
      color: 'Orange',
    },
    {
      ID: 83,
      CreatedAt: '2023-03-27T13:49:43.208943+07:00',
      UpdatedAt: '2023-04-08T13:37:33.036705+07:00',
      DeletedAt: null,
      code: '899866679572',
      name: 'So Klin Lantai Rose Bouquet',
      price: 15000,
      stock: 1104,
      user_id: 13,
      modal: 0,
      category: 'Hygiene',
      color: 'Pink',
    },
    {
      ID: 18,
      CreatedAt: '2023-02-25T13:55:10.24359+07:00',
      UpdatedAt: '2023-04-09T22:41:29.78629+07:00',
      DeletedAt: null,
      code: '8998866203104',
      name: 'Sedap Singapore Spicy Laksa',
      price: 3500,
      stock: 1082,
      user_id: 13,
      modal: 1000,
      category: 'Food',
      color: 'White',
    },
    {
      ID: 28,
      CreatedAt: '2023-02-25T13:55:36.242393+07:00',
      UpdatedAt: '2023-04-04T22:23:11.922641+07:00',
      DeletedAt: null,
      code: 'pasir21',
      name: 'Gula Pasir 1/2kg',
      price: 7500,
      stock: 1085,
      user_id: 13,
      modal: 1000,
      category: 'Food',
      color: 'White',
    },
    {
      ID: 15,
      CreatedAt: '2023-02-25T13:55:02.70239+07:00',
      UpdatedAt: '2023-04-04T22:23:35.07204+07:00',
      DeletedAt: null,
      code: '089686010015',
      name: 'Indomie Ayam Bawang',
      price: 3000,
      stock: 1090,
      user_id: 13,
      modal: 1000,
      category: 'Food',
      color: 'Yellow',
    },
    {
      ID: 29,
      CreatedAt: '2023-02-25T13:55:39.094371+07:00',
      UpdatedAt: '2023-04-04T22:22:52.954591+07:00',
      DeletedAt: null,
      code: 'pasir4',
      name: 'Gula Pasir 1/4kg',
      price: 4000,
      stock: 1086,
      user_id: 13,
      modal: 1000,
      category: 'Food',
      color: 'White',
    },
    {
      ID: 126,
      CreatedAt: '2023-03-27T15:30:00.442364+07:00',
      UpdatedAt: '2023-03-27T15:30:00.442364+07:00',
      DeletedAt: null,
      code: '8992727005272',
      name: 'Attack Jazz1 45g',
      price: 1000,
      stock: 99,
      user_id: 13,
      modal: 0,
      category: 'Hygiene',
      color: 'Red',
    },
    {
      ID: 26,
      CreatedAt: '2023-02-25T13:55:31.463597+07:00',
      UpdatedAt: '2023-03-13T23:38:44.217755+07:00',
      DeletedAt: null,
      code: 'ndog4',
      name: 'Telur 1/4kg',
      price: 7500,
      stock: 45,
      user_id: 13,
      modal: 1000,
      category: 'Food',
      color: 'Brown',
    },
    {
      ID: 128,
      CreatedAt: '2023-03-27T15:34:34.889227+07:00',
      UpdatedAt: '2023-03-27T15:37:32.615692+07:00',
      DeletedAt: null,
      code: '899999027032',
      name: 'Lifebuoy Sampo Hijau Kuat & Berkilau 9ml',
      price: 500,
      stock: 98,
      user_id: 13,
      modal: 0,
      category: 'Hygiene',
      color: 'Green',
    },
    {
      ID: 91,
      CreatedAt: '2023-03-27T14:08:50.292408+07:00',
      UpdatedAt: '2023-03-27T14:08:50.292408+07:00',
      DeletedAt: null,
      code: '8994286120045',
      name: 'Dandang Teh Kepyur 40g',
      price: 3500,
      stock: 98,
      user_id: 13,
      modal: 0,
      category: 'Drink',
      color: 'Brown',
    },
    {
      ID: 129,
      CreatedAt: '2023-03-27T15:42:35.178394+07:00',
      UpdatedAt: '2023-03-27T15:42:35.178394+07:00',
      DeletedAt: null,
      code: '8999999529833',
      name: 'Clear Sampo Sachet Menthol Segar & Dingin 9ml',
      price: 500,
      stock: 95,
      user_id: 13,
      modal: 0,
      category: 'Hygiene',
      color: 'Green',
    },
    {
      ID: 114,
      CreatedAt: '2023-03-27T14:52:14.979539+07:00',
      UpdatedAt: '2023-03-27T14:52:14.979539+07:00',
      DeletedAt: null,
      code: '899866602563',
      name: 'Nuvo Family Nature Protect 72g',
      price: 3500,
      stock: 100,
      user_id: 13,
      modal: 0,
      category: 'Hygiene',
      color: 'Green',
    },
    {
      ID: 21,
      CreatedAt: '2023-02-25T13:55:18.643331+07:00',
      UpdatedAt: '2023-03-11T17:34:33.191008+07:00',
      DeletedAt: null,
      code: '8998866200301',
      name: 'Sedap Goreng',
      price: 3500,
      stock: 75,
      user_id: 13,
      modal: 3000,
      category: 'Food',
      color: 'White',
    },
    {
      ID: 90,
      CreatedAt: '2023-03-27T14:05:51.741856+07:00',
      UpdatedAt: '2023-03-27T14:05:51.741856+07:00',
      DeletedAt: null,
      code: '8997033700415',
      name: 'Poci Teh Kepyur 40g',
      price: 3500,
      stock: 99,
      user_id: 13,
      modal: 0,
      category: 'Drink',
      color: 'Brown',
    },
    {
      ID: 130,
      CreatedAt: '2023-03-27T15:46:50.192813+07:00',
      UpdatedAt: '2023-03-27T15:47:22.643828+07:00',
      DeletedAt: null,
      code: '8992772311014',
      name: 'Soffel Jeruk 6g',
      price: 1000,
      stock: 100,
      user_id: 13,
      modal: 0,
      category: 'Other',
      color: 'Orange',
    },
    {
      ID: 92,
      CreatedAt: '2023-03-27T14:10:39.801932+07:00',
      UpdatedAt: '2023-03-27T14:10:39.801932+07:00',
      DeletedAt: null,
      code: '8992936214014',
      name: 'Tong Tji Teh Kepyur 40g',
      price: 3500,
      stock: 99,
      user_id: 13,
      modal: 0,
      category: 'Drink',
      color: 'Green',
    },
    {
      ID: 124,
      CreatedAt: '2023-03-27T15:27:09.601254+07:00',
      UpdatedAt: '2023-03-27T15:27:09.601254+07:00',
      DeletedAt: null,
      code: '8999999526894',
      name: 'Rinso Cair + Molto Royal Gold 38ml',
      price: 1000,
      stock: 98,
      user_id: 13,
      modal: 0,
      category: 'Hygiene',
      color: 'Green',
    },
    {
      ID: 116,
      CreatedAt: '2023-03-27T14:57:01.83733+07:00',
      UpdatedAt: '2023-03-27T15:08:44.918827+07:00',
      DeletedAt: null,
      code: '8999999036607',
      name: 'Lux Botanicals Soft Rose 75g',
      price: 5000,
      stock: 98,
      user_id: 13,
      modal: 0,
      category: 'Hygiene',
      color: 'Pink',
    },
    {
      ID: 89,
      CreatedAt: '2023-03-27T14:02:43.011412+07:00',
      UpdatedAt: '2023-03-27T14:02:43.011412+07:00',
      DeletedAt: null,
      code: '8999999390198',
      name: 'Sunlight Jeruk Nipis 700 ml',
      price: 21000,
      stock: 97,
      user_id: 13,
      modal: 0,
      category: 'Hygiene',
      color: 'Green',
    },
    {
      ID: 30,
      CreatedAt: '2023-02-25T13:55:41.54716+07:00',
      UpdatedAt: '2023-03-12T14:17:24.561682+07:00',
      DeletedAt: null,
      code: 'beras1',
      name: 'Beras Stroberi 1kg',
      price: 12000,
      stock: 27,
      user_id: 13,
      modal: 1000,
      category: 'Food',
      color: 'Red',
    },
    {
      ID: 119,
      CreatedAt: '2023-03-27T15:17:02.469685+07:00',
      UpdatedAt: '2023-03-27T15:17:02.469685+07:00',
      DeletedAt: null,
      code: '8990011998880',
      name: 'Sabun Tawon 81g',
      price: 6500,
      stock: 99,
      user_id: 13,
      modal: 0,
      category: 'Hygiene',
      color: 'Brown',
    },
    {
      ID: 118,
      CreatedAt: '2023-03-27T15:10:28.234582+07:00',
      UpdatedAt: '2023-03-27T15:14:26.486168+07:00',
      DeletedAt: null,
      code: '8999999036638',
      name: 'Lux Botanicals Velvet Jasmine 75g',
      price: 5000,
      stock: 98,
      user_id: 13,
      modal: 0,
      category: 'Hygiene',
      color: 'Pink',
    },
    {
      ID: 96,
      CreatedAt: '2023-03-27T14:19:21.093536+07:00',
      UpdatedAt: '2023-03-27T14:19:21.093536+07:00',
      DeletedAt: null,
      code: '8991002101746',
      name: 'ABC Kopi Mocca 30g',
      price: 1500,
      stock: 99,
      user_id: 13,
      modal: 0,
      category: 'Drink',
      color: 'Brown',
    },
    {
      ID: 98,
      CreatedAt: '2023-03-27T14:22:58.517334+07:00',
      UpdatedAt: '2023-03-27T14:22:58.517334+07:00',
      DeletedAt: null,
      code: '8991002103238',
      name: 'Good Day Moccacinno 20g',
      price: 1500,
      stock: 99,
      user_id: 13,
      modal: 0,
      category: 'Drink',
      color: 'Red',
    },
    {
      ID: 95,
      CreatedAt: '2023-03-27T14:17:18.268016+07:00',
      UpdatedAt: '2023-03-27T14:17:18.268016+07:00',
      DeletedAt: null,
      code: '8991002101630',
      name: 'ABC Kopi Susu 30g',
      price: 1500,
      stock: 99,
      user_id: 13,
      modal: 0,
      category: 'Drink',
      color: 'Brown',
    },
    {
      ID: 104,
      CreatedAt: '2023-03-27T14:33:39.225271+07:00',
      UpdatedAt: '2023-03-27T14:33:39.225271+07:00',
      DeletedAt: null,
      code: '8992696521797',
      name: 'Milo 22g',
      price: 2500,
      stock: 98,
      user_id: 13,
      modal: 0,
      category: 'Drink',
      color: 'Green',
    },
    {
      ID: 103,
      CreatedAt: '2023-03-27T14:32:31.784459+07:00',
      UpdatedAt: '2023-03-27T14:34:59.850958+07:00',
      DeletedAt: null,
      code: '8992696525054',
      name: 'Dancow Putih 26g',
      price: 4000,
      stock: 99,
      user_id: 13,
      modal: 0,
      category: 'Drink',
      color: 'White',
    },
    {
      ID: 127,
      CreatedAt: '2023-03-27T15:32:41.320966+07:00',
      UpdatedAt: '2023-03-27T15:34:48.941879+07:00',
      DeletedAt: null,
      code: '4902430563871',
      name: 'Pantene Sampo Perawatan Rambut Rontok 5ml',
      price: 500,
      stock: 99,
      user_id: 13,
      modal: 0,
      category: 'Hygiene',
      color: 'White',
    },
    {
      ID: 141,
      CreatedAt: '2023-03-28T16:10:41.247986+07:00',
      UpdatedAt: '2023-03-28T16:10:41.247986+07:00',
      DeletedAt: null,
      code: '8996001440124',
      name: 'Energen 32g vanilla',
      price: 2000,
      stock: 999,
      user_id: 13,
      modal: 0,
      category: 'Drink',
      color: 'Yellow',
    },
    {
      ID: 25,
      CreatedAt: '2023-02-25T13:55:29.086595+07:00',
      UpdatedAt: '2023-03-16T14:05:25.957673+07:00',
      DeletedAt: null,
      code: 'ndog2',
      name: 'Telur 1/2kg',
      price: 14000,
      stock: 94,
      user_id: 13,
      modal: 1000,
      category: 'Food',
      color: 'Brown',
    },
    {
      ID: 87,
      CreatedAt: '2023-03-27T14:00:18.528133+07:00',
      UpdatedAt: '2023-03-27T14:00:18.528133+07:00',
      DeletedAt: null,
      code: '8999999059781',
      name: 'Sunlight Jeruk Nipis 210ml',
      price: 5500,
      stock: 98,
      user_id: 13,
      modal: 0,
      category: 'Hygiene',
      color: 'Green',
    },
    {
      ID: 88,
      CreatedAt: '2023-03-27T14:01:51.550514+07:00',
      UpdatedAt: '2023-03-27T17:52:11.320758+07:00',
      DeletedAt: null,
      code: '8999999572303',
      name: 'Sunlight Jeruk Nipis 460 ml',
      price: 10000,
      stock: 99,
      user_id: 13,
      modal: 0,
      category: 'Hygiene',
      color: 'Green',
    },
    {
      ID: 16,
      CreatedAt: '2023-02-25T13:55:05.290012+07:00',
      UpdatedAt: '2023-04-04T22:24:07.554526+07:00',
      DeletedAt: null,
      code: '089686010343',
      name: 'Indomie Soto',
      price: 3000,
      stock: 1069,
      user_id: 13,
      modal: 1000,
      category: 'Food',
      color: 'Yellow',
    },
    {
      ID: 22,
      CreatedAt: '2023-02-25T13:55:21.354785+07:00',
      UpdatedAt: '2023-02-25T13:55:21.354785+07:00',
      DeletedAt: null,
      code: '8886008101053',
      name: 'Aqua 600ml (tanggung)',
      price: 3000,
      stock: 26,
      user_id: 13,
      modal: 1000,
      category: 'Drink',
      color: 'Blue',
    },
    {
      ID: 99,
      CreatedAt: '2023-03-27T14:25:41.448749+07:00',
      UpdatedAt: '2023-03-27T14:25:41.448749+07:00',
      DeletedAt: null,
      code: '8991002103436',
      name: 'Good Day Coolin 20g',
      price: 1500,
      stock: 99,
      user_id: 13,
      modal: 0,
      category: 'Drink',
      color: 'Blue',
    },
    {
      ID: 101,
      CreatedAt: '2023-03-27T14:28:45.46406+07:00',
      UpdatedAt: '2023-03-27T14:28:45.46406+07:00',
      DeletedAt: null,
      code: '8991002103764',
      name: 'Good Day Cappuccino 25g',
      price: 2000,
      stock: 99,
      user_id: 13,
      modal: 0,
      category: 'Drink',
      color: 'Brown',
    },
    {
      ID: 100,
      CreatedAt: '2023-03-27T14:27:53.630791+07:00',
      UpdatedAt: '2023-03-27T14:28:55.881388+07:00',
      DeletedAt: null,
      code: '8991002103634',
      name: "Good Day Freeze Choc'orange 30g",
      price: 2000,
      stock: 99,
      user_id: 13,
      modal: 0,
      category: 'Drink',
      color: 'Blue',
    },
    {
      ID: 102,
      CreatedAt: '2023-03-27T14:30:48.126836+07:00',
      UpdatedAt: '2023-03-27T14:30:48.126836+07:00',
      DeletedAt: null,
      code: '8992775913000',
      name: 'Chocolatos Sachet 27g',
      price: 2000,
      stock: 99,
      user_id: 13,
      modal: 0,
      category: 'Drink',
      color: 'Black',
    },
    {
      ID: 121,
      CreatedAt: '2023-03-27T15:21:37.220082+07:00',
      UpdatedAt: '2023-03-27T15:21:37.220082+07:00',
      DeletedAt: null,
      code: '8999999509811',
      name: 'Wipol Sachet 36ml',
      price: 1000,
      stock: 95,
      user_id: 13,
      modal: 0,
      category: 'Hygiene',
      color: 'Green',
    },
    {
      ID: 105,
      CreatedAt: '2023-03-27T14:38:21.861592+07:00',
      UpdatedAt: '2023-03-27T14:38:21.861592+07:00',
      DeletedAt: null,
      code: '8992946512223',
      name: "Shinzu'i Hana",
      price: 5500,
      stock: 99,
      user_id: 13,
      modal: 0,
      category: 'Hygiene',
      color: 'White',
    },
    {
      ID: 106,
      CreatedAt: '2023-03-27T14:40:11.894477+07:00',
      UpdatedAt: '2023-03-27T14:40:11.894477+07:00',
      DeletedAt: null,
      code: '8992946512285',
      name: "Shinzu'i Kirei",
      price: 5500,
      stock: 99,
      user_id: 13,
      modal: 0,
      category: 'Hygiene',
      color: 'White',
    },
    {
      ID: 107,
      CreatedAt: '2023-03-27T14:41:32.96432+07:00',
      UpdatedAt: '2023-03-27T14:41:32.96432+07:00',
      DeletedAt: null,
      code: '8992742370683',
      name: 'Polytex Sabut Spon Regular 1 spon',
      price: 4000,
      stock: 99,
      user_id: 13,
      modal: 0,
      category: 'Other',
      color: 'Yellow',
    },
    {
      ID: 108,
      CreatedAt: '2023-03-27T14:43:43.097875+07:00',
      UpdatedAt: '2023-03-27T14:43:43.097875+07:00',
      DeletedAt: null,
      code: '8993560025236',
      name: 'Dettol Lasting Fresh 100g',
      price: 6000,
      stock: 99,
      user_id: 13,
      modal: 0,
      category: 'Hygiene',
      color: 'Green',
    },
    {
      ID: 113,
      CreatedAt: '2023-03-27T14:51:18.06874+07:00',
      UpdatedAt: '2023-03-27T14:51:18.06874+07:00',
      DeletedAt: null,
      code: '8998866602556',
      name: 'Nuvo Family Protect 72g',
      price: 3500,
      stock: 99,
      user_id: 13,
      modal: 0,
      category: 'Hygiene',
      color: 'White',
    },
    {
      ID: 115,
      CreatedAt: '2023-03-27T14:53:43.535121+07:00',
      UpdatedAt: '2023-03-27T14:53:43.535121+07:00',
      DeletedAt: null,
      code: '8998866602549',
      name: 'Nuvo Family Mild Protect 72g',
      price: 3500,
      stock: 99,
      user_id: 13,
      modal: 0,
      category: 'Hygiene',
      color: 'White',
    },
    {
      ID: 85,
      CreatedAt: '2023-03-27T13:55:32.637197+07:00',
      UpdatedAt: '2023-03-27T15:21:52.704637+07:00',
      DeletedAt: null,
      code: '8999999520885',
      name: 'Wipol isi ulang 410 ml',
      price: 10000,
      stock: 98,
      user_id: 13,
      modal: 0,
      category: 'Hygiene',
      color: 'Green',
    },
    {
      ID: 125,
      CreatedAt: '2023-03-27T15:28:50.050055+07:00',
      UpdatedAt: '2023-03-27T15:30:25.379516+07:00',
      DeletedAt: null,
      code: '8999999558.62 ',
      name: 'Rinso Bubuk  + Molto Classic Refresh 40g',
      price: 1000,
      stock: 98,
      user_id: 13,
      modal: 0,
      category: 'Hygiene',
      color: 'Green',
    },
    {
      ID: 112,
      CreatedAt: '2023-03-27T14:48:38.778046+07:00',
      UpdatedAt: '2023-03-27T15:37:23.073764+07:00',
      DeletedAt: null,
      code: '8999999059316',
      name: 'Lifebuoy Sabun Merah Mild Care 70g',
      price: 4500,
      stock: 98,
      user_id: 13,
      modal: 0,
      category: 'Hygiene',
      color: 'Red',
    },
    {
      ID: 117,
      CreatedAt: '2023-03-27T14:57:46.893546+07:00',
      UpdatedAt: '2023-03-27T15:37:50.598063+07:00',
      DeletedAt: null,
      code: '8999999059323',
      name: 'Lifebuoy Sabun Kuning Lemon Fresh 70g',
      price: 4500,
      stock: 99,
      user_id: 13,
      modal: 0,
      category: 'Hygiene',
      color: 'Yellow',
    },
    {
      ID: 111,
      CreatedAt: '2023-03-27T14:47:54.205249+07:00',
      UpdatedAt: '2023-03-27T15:38:00.623957+07:00',
      DeletedAt: null,
      code: '8999999059309',
      name: 'Lifebuoy Sabun Merah Total 10 70g',
      price: 4500,
      stock: 99,
      user_id: 13,
      modal: 0,
      category: 'Hygiene',
      color: 'Red',
    },
    {
      ID: 120,
      CreatedAt: '2023-03-27T15:20:07.624749+07:00',
      UpdatedAt: '2023-03-27T15:38:17.1116+07:00',
      DeletedAt: null,
      code: '8999999559540',
      name: 'Lifebuoy Sabun Kuning Lemon Fresh isi ulang 90ml',
      price: 5000,
      stock: 99,
      user_id: 13,
      modal: 0,
      category: 'Hygiene',
      color: 'Yellow',
    },
    {
      ID: 131,
      CreatedAt: '2023-03-27T15:48:08.896721+07:00',
      UpdatedAt: '2023-03-27T15:48:08.896721+07:00',
      DeletedAt: null,
      code: '8992772311014',
      name: 'Soffel Jeruk 6g 3pcs ',
      price: 2000,
      stock: 99,
      user_id: 13,
      modal: 0,
      category: 'Other',
      color: 'Orange',
    },
    {
      ID: 122,
      CreatedAt: '2023-03-27T15:23:43.450402+07:00',
      UpdatedAt: '2023-03-27T15:48:35.335639+07:00',
      DeletedAt: null,
      code: '8998866603850',
      name: 'So Klin Lantai Citrus Lemon 25ml',
      price: 1000,
      stock: 99,
      user_id: 13,
      modal: 0,
      category: 'Hygiene',
      color: 'Yellow',
    },
    {
      ID: 123,
      CreatedAt: '2023-03-27T15:25:21.68211+07:00',
      UpdatedAt: '2023-03-27T15:48:53.641484+07:00',
      DeletedAt: null,
      code: '8998866603881',
      name: 'So Klin Lantai Rose Boquet 25ml',
      price: 1000,
      stock: 99,
      user_id: 13,
      modal: 0,
      category: 'Hygiene',
      color: 'Red',
    },
    {
      ID: 132,
      CreatedAt: '2023-03-27T15:49:17.542946+07:00',
      UpdatedAt: '2023-03-27T15:49:17.542946+07:00',
      DeletedAt: null,
      code: '8998866603881',
      name: 'So Klin Lantai Rose Boquet 25ml 3pcs',
      price: 2000,
      stock: 99,
      user_id: 13,
      modal: 0,
      category: 'Hygiene',
      color: 'Red',
    },
    {
      ID: 133,
      CreatedAt: '2023-03-27T15:49:51.580398+07:00',
      UpdatedAt: '2023-03-27T15:49:51.580398+07:00',
      DeletedAt: null,
      code: '8998866603850',
      name: 'So Klin Lantai Citrus Lemon 25ml 3pcs',
      price: 2000,
      stock: 99,
      user_id: 13,
      modal: 0,
      category: 'Hygiene',
      color: 'Yellow',
    },
    {
      ID: 136,
      CreatedAt: '2023-03-27T15:54:33.384495+07:00',
      UpdatedAt: '2023-03-27T15:54:33.384495+07:00',
      DeletedAt: null,
      code: '8992772191180',
      name: 'Kispray Amoris 7ml',
      price: 1000,
      stock: 98,
      user_id: 13,
      modal: 0,
      category: 'Other',
      color: 'Red',
    },
    {
      ID: 134,
      CreatedAt: '2023-03-27T15:53:30.830103+07:00',
      UpdatedAt: '2023-03-27T15:55:06.09599+07:00',
      DeletedAt: null,
      code: '8992772191203',
      name: 'Kispray Violet 7ml',
      price: 1000,
      stock: 99,
      user_id: 13,
      modal: 0,
      category: 'Other',
      color: 'Purple',
    },
    {
      ID: 137,
      CreatedAt: '2023-03-27T16:40:11.809519+07:00',
      UpdatedAt: '2023-03-27T16:40:11.809519+07:00',
      DeletedAt: null,
      code: '8992772191180',
      name: 'Kispray Amoris 7ml 3ps',
      price: 2000,
      stock: 99,
      user_id: 13,
      modal: 0,
      category: 'Other',
      color: 'Red',
    },
    {
      ID: 17,
      CreatedAt: '2023-02-25T13:55:07.605507+07:00',
      UpdatedAt: '2023-03-25T20:51:46.731505+07:00',
      DeletedAt: null,
      code: '089686043433',
      name: 'Indomie Hype Abis Ayam Geprek',
      price: 3000,
      stock: 181,
      user_id: 13,
      modal: 1000,
      category: 'Food',
      color: 'Red',
    },
    {
      ID: 82,
      CreatedAt: '2023-03-27T13:47:35.195251+07:00',
      UpdatedAt: '2023-03-27T13:47:35.195251+07:00',
      DeletedAt: null,
      code: '8992727000048',
      name: 'Laurier Active Day X-TRA 8 buah',
      price: 5000,
      stock: 98,
      user_id: 13,
      modal: 0,
      category: 'Hygiene',
      color: 'Pink',
    },
    {
      ID: 86,
      CreatedAt: '2023-03-27T13:59:21.574713+07:00',
      UpdatedAt: '2023-03-27T13:59:21.574713+07:00',
      DeletedAt: null,
      code: '8999999050009',
      name: 'Sunlight Jeruk Nipis Ekonomis',
      price: 2000,
      stock: 98,
      user_id: 13,
      modal: 0,
      category: 'Hygiene',
      color: 'Green',
    },
    {
      ID: 135,
      CreatedAt: '2023-03-27T15:53:45.501893+07:00',
      UpdatedAt: '2023-03-31T16:46:19.64642+07:00',
      DeletedAt: null,
      code: '8992772191203',
      name: 'Kispray Violet 3pcs',
      price: 2000,
      stock: 98,
      user_id: 13,
      modal: 0,
      category: 'Other',
      color: 'Purple',
    },
    {
      ID: 97,
      CreatedAt: '2023-03-27T14:21:05.958991+07:00',
      UpdatedAt: '2023-03-27T14:21:05.958991+07:00',
      DeletedAt: null,
      code: '8891002103634',
      name: 'Good Day Freeze 30g',
      price: 2000,
      stock: 96,
      user_id: 13,
      modal: 0,
      category: 'Drink',
      color: 'Blue',
    },
    {
      ID: 93,
      CreatedAt: '2023-03-27T14:11:36.344758+07:00',
      UpdatedAt: '2023-03-27T14:12:33.500383+07:00',
      DeletedAt: null,
      code: '8999999195649',
      name: 'Sariwangi Kotak Teh Celup isi 25',
      price: 6500,
      stock: 97,
      user_id: 13,
      modal: 0,
      category: 'Drink',
      color: 'Blue',
    },
    {
      ID: 94,
      CreatedAt: '2023-03-27T14:13:40.84138+07:00',
      UpdatedAt: '2023-03-27T14:13:40.84138+07:00',
      DeletedAt: null,
      code: '8886007811113',
      name: 'Poci Kotak Teh Celup isi 25',
      price: 6500,
      stock: 98,
      user_id: 13,
      modal: 0,
      category: 'Drink',
      color: 'Red',
    },
    {
      ID: 84,
      CreatedAt: '2023-03-27T13:53:02.493517+07:00',
      UpdatedAt: '2023-03-27T13:53:02.493517+07:00',
      DeletedAt: null,
      code: '89931892301003',
      name: 'Charm Safe Night 10 Pads',
      price: 10000,
      stock: 96,
      user_id: 13,
      modal: 0,
      category: 'Hygiene',
      color: 'Orange',
    },
    {
      ID: 109,
      CreatedAt: '2023-03-27T14:44:08.117572+07:00',
      UpdatedAt: '2023-03-27T14:44:08.117572+07:00',
      DeletedAt: null,
      code: '8993560025227',
      name: 'Detol Cool 100g',
      price: 6000,
      stock: 98,
      user_id: 13,
      modal: 0,
      category: 'Hygiene',
      color: 'Blue',
    },
    {
      ID: 110,
      CreatedAt: '2023-03-27T14:46:28.450156+07:00',
      UpdatedAt: '2023-03-27T14:46:28.450156+07:00',
      DeletedAt: null,
      code: '8998866608305',
      name: 'Giv White 72g',
      price: 3500,
      stock: 98,
      user_id: 13,
      modal: 0,
      category: 'Hygiene',
      color: 'White',
    },
    {
      ID: 11,
      CreatedAt: '2023-02-25T13:53:25.749265+07:00',
      UpdatedAt: '2023-03-22T21:36:24.489331+07:00',
      DeletedAt: null,
      code: '089686010947',
      name: 'Indomie Goreng',
      price: 3500,
      stock: 117,
      user_id: 13,
      modal: 3050,
      category: 'Food',
      color: 'White',
    },
    {
      ID: 19,
      CreatedAt: '2023-02-25T13:55:13.255471+07:00',
      UpdatedAt: '2023-02-25T13:55:13.255471+07:00',
      DeletedAt: null,
      code: '8998866200578',
      name: 'Sedap Kari Spesial',
      price: 3500,
      stock: 82,
      user_id: 13,
      modal: 1000,
      category: 'Food',
      color: 'Red',
    },
    {
      ID: 138,
      CreatedAt: '2023-03-28T16:04:34.662477+07:00',
      UpdatedAt: '2023-03-28T16:04:34.662477+07:00',
      DeletedAt: null,
      code: '8996001302323',
      name: 'Malkist Abon 105g',
      price: 7500,
      stock: 999,
      user_id: 13,
      modal: 0,
      category: 'Food',
      color: 'Brown',
    },
    {
      ID: 139,
      CreatedAt: '2023-03-28T16:06:28.121317+07:00',
      UpdatedAt: '2023-03-28T16:06:28.121317+07:00',
      DeletedAt: null,
      code: '8996001302026',
      name: 'Malkist Crackers 135g',
      price: 6500,
      stock: 999,
      user_id: 13,
      modal: 0,
      category: 'Food',
      color: 'Red',
    },
    {
      ID: 140,
      CreatedAt: '2023-03-28T16:09:08.851585+07:00',
      UpdatedAt: '2023-03-28T16:09:08.851585+07:00',
      DeletedAt: null,
      code: '8888166336568',
      name: 'Nissin Crispy Crackers 250g',
      price: 11000,
      stock: 999,
      user_id: 13,
      modal: 0,
      category: 'Food',
      color: 'Yellow',
    },
    {
      ID: 142,
      CreatedAt: '2023-03-28T16:15:14.571456+07:00',
      UpdatedAt: '2023-03-28T16:15:14.571456+07:00',
      DeletedAt: null,
      code: '8996001440049',
      name: 'Energen Cokelat 34gr',
      price: 2000,
      stock: 999,
      user_id: 13,
      modal: 0,
      category: 'Drink',
      color: 'Brown',
    },
    {
      ID: 143,
      CreatedAt: '2023-03-28T16:16:51.03475+07:00',
      UpdatedAt: '2023-03-28T16:16:51.03475+07:00',
      DeletedAt: null,
      code: '8996001440087',
      name: 'Energen Kacang Hijau 34g',
      price: 2000,
      stock: 999,
      user_id: 13,
      modal: 0,
      category: 'Drink',
      color: 'Green',
    },
    {
      ID: 144,
      CreatedAt: '2023-03-28T16:17:56.901621+07:00',
      UpdatedAt: '2023-03-28T16:17:56.901621+07:00',
      DeletedAt: null,
      code: '8996001603376',
      name: 'Energen Kurma 30g',
      price: 2000,
      stock: 999,
      user_id: 13,
      modal: 0,
      category: 'Drink',
      color: 'Purple',
    },
    {
      ID: 145,
      CreatedAt: '2023-03-28T16:20:47.334704+07:00',
      UpdatedAt: '2023-03-28T16:20:47.334704+07:00',
      DeletedAt: null,
      code: '8991002103931',
      name: 'Drink Beng-Beng 30g',
      price: 2000,
      stock: 999,
      user_id: 13,
      modal: 0,
      category: 'Drink',
      color: 'Red',
    },
    {
      ID: 146,
      CreatedAt: '2023-03-28T16:26:46.145028+07:00',
      UpdatedAt: '2023-03-28T16:26:46.145028+07:00',
      DeletedAt: null,
      code: '8991002103931',
      name: 'GoodDay Carebiannut 20g',
      price: 1500,
      stock: 1499,
      user_id: 13,
      modal: 0,
      category: 'Drink',
      color: 'Blue',
    },
    {
      ID: 12,
      CreatedAt: '2023-02-25T13:54:40.743465+07:00',
      UpdatedAt: '2023-03-05T10:18:03.580427+07:00',
      DeletedAt: null,
      code: '089686910704',
      name: 'Indomie Goreng Rendang',
      price: 3500,
      stock: 57,
      user_id: 13,
      modal: 3000,
      category: 'Food',
      color: 'Purple',
    },
  ];
  const listItems = {
    attributes: [
      { isNumeric: false, name: 'Name', key: 'name', type: 'string' },
      {
        isNumeric: true,
        name: 'Price(Rp)',
        key: 'price',
        type: 'number',
      },
      { isNumeric: false, name: 'Category', key: 'category', type: 'string' },
      { isNumeric: true, name: 'Code', key: 'code', type: 'string' },
    ],
    listAction: {
      isNumeric: true,
      name: 'Action',
      action: 'ADD',
      actionFunction: addItemToCartList,
    },
    data: dummyListData,
  };
  const filterItems = [
    {
      name: 'Category',
      type: 'checkbox',
      items: [
        { name: 'Food', isChecked: false },
        { name: 'Drink', isChecked: false },
        { name: 'Stationery', isChecked: false },
        { name: 'Hygiene', isChecked: false },
        { name: 'Medicine', isChecked: false },
        { name: 'Electronic', isChecked: false },
        { name: 'Cosmetic', isChecked: false },
        { name: 'Other', isChecked: false },
      ],
    },
    {
      name: 'Supply Limit',
      type: 'number',
      columns: 1,
      items: [{ name: 'Supply', value: 0 }],
      hint: 'Displays the list with lower supply than the value above',
    },
    {
      name: 'Price Range',
      type: 'number',
      columns: 2,
      items: [
        { name: 'Min', value: 0 },
        { name: 'Max', value: 0 },
      ],
    },
    {
      name: 'Color',
      type: 'color',
      items: [
        { name: 'Red', isChecked: false },
        { name: 'Blue', isChecked: false },
        { name: 'Green', isChecked: false },
        { name: 'Yellow', isChecked: false },
        { name: 'Purple', isChecked: false },
        { name: 'Orange', isChecked: false },
        { name: 'Black', isChecked: false },
        { name: 'White', isChecked: false },
        { name: 'Gray', isChecked: false },
        { name: 'Brown', isChecked: false },
        { name: 'Pink', isChecked: false },
      ],
    },
  ];
  const [cartList, setCartList] = useState([]);
  const [checkoutData, setCheckoutData] = useState({
    cartList: cartList,
    total: 128000,
    paymentMethod: 'Cash',
    pay: 0,
    change: 0,
  });
  useEffect(() => {
    // console.log(cartList);
  }, [cartList]);

  // Page Functions
  function addItemToCartList(item) {
    console.log('added ' + item?.name);
    const newItem = {
      id: item?.ID,
      name: item?.name,
      code: item?.code,
      price: item?.price,
      qty: 1,
      totalPrice: 14500,
    };
    const index = cartList.findIndex(item => item.code === newItem.code);
    if (index !== -1) {
      setCartList(prevState => {
        const newState = [...prevState];
        newState[index].qty += 1;
        return newState;
      });
    } else {
      setCartList(prevState => [...prevState, newItem]);
    }
  }

  // Components
  const AddCartModal = props => {
    const { isOpen, onOpen, onClose } = useDisclosure();

    return (
      <>
        <Button
          className={'btn primaryBtn'}
          onClick={onOpen}
          leftIcon={<AddShoppingCartOutlinedIcon />}
          w={'120px'}
          h={'100%'}
        >
          ADD
        </Button>

        <Modal isOpen={isOpen} onClose={onClose} scrollBehavior="inside">
          <ModalOverlay />
          <ModalContent>
            <ModalHeader className={'modalHeader'} py={'8px !important'}>
              Products
            </ModalHeader>
            <ModalBody p={0}>
              <List
                listItems={listItems}
                searchPlaceholder={`Search by product's name or code`}
                filterItems={filterItems}
                // selectList={handleSelectList}
              />
            </ModalBody>
            <ModalFooter className={'modalFooter'}></ModalFooter>
          </ModalContent>
        </Modal>
      </>
    );
  };

  const Checkout = props => {
    // Utils
    const { isOpen, onOpen, onClose } = useDisclosure();

    // Datas
    const paymentMethodItems = [
      { name: 'Cash' },
      { name: 'QRIS' },
      { name: 'Transfer' },
    ];
    const [paymentData, setPaymentData] = useState({
      pay: 0,
      paymentMethod: 'Cash',
    });

    // Functions
    function handlePaymentOnChange(newData) {
      setPaymentData(newData);
    }
    function handleCheckOut(e) {
      setCheckoutData(prevState => ({
        ...prevState,
        ...paymentData,
        cartList: JSON.parse(JSON.stringify(cartList)),
      }));
      console.log(checkoutData);
      //do checkout api then empty checkout data
      setCartList([]);
      setCheckoutData({});
      onClose();
    }
    // function handleKeyDownOnInputPay(e) {
    //   const checkoutBtn = document.querySelector('#checkoutBtn');
    //   if (e.key === 'Enter') {
    //     checkoutBtn?.click();
    //   }
    // }

    return (
      <>
        <Button
          className={'btn primaryBtn'}
          onClick={onOpen}
          leftIcon={<ShoppingCartCheckoutOutlinedIcon />}
          w={'100%'}
          h={'100%'}
        >
          CHECKOUT
        </Button>

        <Modal
          isOpen={isOpen}
          onClose={onClose}
          size={'lg'}
          isCentered
          scrollBehavior={'inside'}
        >
          <ModalOverlay backdropFilter={'blur(5px)'} />
          <ModalContent className={'modalContent'}>
            <ModalCloseButton className={'modalCloseBtn'} />
            <ModalHeader className={'modalHeader'}>Checking Out</ModalHeader>
            <ModalBody p={0}>
              <VStack
                alignItems={'flex-start'}
                px={'16px'}
                py={'8px'}
                spacing={null}
                borderBottom={'1px solid var(--divider)'}
              >
                <Text opacity={0.5}>Total</Text>
                <Text
                  alignSelf={'flex-end'}
                  fontSize={'48px'}
                  fontWeight={'bold'}
                  color={'primary'}
                  lineHeight={'48px'}
                >
                  {fn(checkoutData?.total) || 0}
                </Text>
              </VStack>
              <VStack
                alignItems={'flex-start'}
                py={'8px'}
                px={'16px'}
                spacing={null}
                borderBottom={'1px solid var(--divider)'}
              >
                <Text opacity={0.5}>Change</Text>
                <Text
                  alignSelf={'flex-end'}
                  fontSize={'48px'}
                  fontWeight={'bold'}
                  lineHeight={'48px'}
                >
                  {fn(checkoutData?.change) || 0}
                </Text>
              </VStack>
              <HStack
                py={'8px'}
                px={'16px'}
                pb={'12px'}
                spacing={'8px'}
                borderBottom={'1px solid var(--divider)'}
              >
                <VStack alignItems={'flex-start'} w={'50%'}>
                  <Text opacity={0.5}>Pay</Text>
                  <InputData
                    item={{
                      initialData: paymentData,
                      valueType: 'number',
                      valueKey: 'pay',
                      onInput: handlePaymentOnChange,
                    }}
                  />
                </VStack>
                <VStack alignItems={'flex-start'} w={'50%'}>
                  <Text opacity={0.5}>Payment Method</Text>
                  <InputData
                    item={{
                      initialData: paymentData,
                      valueType: 'selectString',
                      valueKey: 'paymentMethod',
                      options: paymentMethodItems,
                      onInput: handlePaymentOnChange,
                    }}
                  />
                </VStack>
              </HStack>
            </ModalBody>
            <ModalFooter className={'modalFooter'}>
              <HStack w={'100%'}>
                <Button
                  id={'checkoutBtn'}
                  className={'btn primaryBtn'}
                  onClick={handleCheckOut}
                  w={'100%'}
                  h={'50px'}
                >
                  CHECKOUT
                </Button>
              </HStack>
            </ModalFooter>
          </ModalContent>
        </Modal>
      </>
    );
  };

  return (
    <HStack id={'appContainer'} pb={screenWidth < 1000 ? '56px' : null}>
      <CashierNav />
      <VStack id={'contentContainer'}>
        <TopBar />
        <HStack id={'mainContent'}>
          {/* List Section */}
          {screenWidth > 1000 && (
            <VStack
              id={'listSection'}
              w={'50%'}
              // w={'100%'}
            >
              <PageHeader title={'Products'} />
              <List
                listItems={listItems}
                searchPlaceholder={`Search by product's name or code`}
                filterItems={filterItems}
                // selectList={handleSelectList}
              />
            </VStack>
          )}

          {/* Cart List Section */}
          <VStack
            id={'cartListSection'}
            w={screenWidth < 1000 ? '100%' : '50%'}
            position={'relative'}
            overflow={'auto'}
          >
            {/* Header */}
            <HStack
              spacing={null}
              w={'100%'}
              h={'54px'}
              justifyContent={'space-between'}
              borderTop="1px solid var(--divider)"
              borderBottom={'1px solid var(--divider)'}
            >
              <Heading
                w={'100%'}
                verticalAlign={'center'}
                py={'8px'}
                px={'16px'}
              >
                Cart List
              </Heading>
              {screenWidth < 1000 && <AddCartModal />}
            </HStack>
            {/* Body */}
            <VStack
              w={'100%'}
              h={'calc(100% - 189px)'}
              spacing={null}
              overflow={'auto'}
            >
              {Object.keys(cartList).length !== 0 ? (
                cartList?.map((c, index) => {
                  // console.log(c);
                  return (
                    <HStack
                      key={index}
                      w={'100%'}
                      p={'8px 16px'}
                      alignItems={'flex-start'}
                      justifyContent={'space-between'}
                      borderBottom={'1px solid var(--divider)'}
                    >
                      <VStack alignItems={'flex-start'}>
                        <Text>{c?.name}</Text>
                        <Text opacity={0.5}>{c?.code}</Text>
                        <Text opacity={0.5}>{`@ ${fn(c?.price)}`}</Text>
                      </VStack>

                      <VStack alignItems={'flex-end'}>
                        <Text fontSize={'16px'} fontWeight={'bold'}>
                          {fn(c?.totalPrice)}
                        </Text>

                        <HStack w={'128px'} spacing={null}>
                          <Button className={'counterBtn'}>
                            <Icon
                              fontSize={'16px !important'}
                              as={RemoveOutlinedIcon}
                            />
                          </Button>

                          <Input
                            className={'input'}
                            textAlign={'right'}
                            p={'8px'}
                            // onChange={e => {
                            //   console.log(e.target.value);
                            // }}
                            //TODO buat onChange handlernyaaa
                            defaultValue={c?.qty}
                          />

                          <Button className={'counterBtn'}>
                            <Icon
                              fontSize={'16px !important'}
                              as={AddOutlinedIcon}
                            />
                          </Button>
                        </HStack>
                      </VStack>
                    </HStack>
                  );
                })
              ) : (
                <VStack h={'100%'} justifyContent={'center'} opacity={0.1}>
                  <Icon
                    fontSize={'128px'}
                    as={RemoveShoppingCartOutlinedIcon}
                  />
                  <Text fontSize={'24px'} fontWeight={800}>
                    Cart is Empty
                  </Text>
                </VStack>
              )}
            </VStack>
            {/* Footer */}
            <VStack
              w={'100%'}
              position={'absolute'}
              bottom={'0'}
              spacing={null}
              borderTop={'1px solid var(--divider)'}
            >
              <VStack
                spacing={null}
                w={'100%'}
                alignItems={'center'}
                px={'16px'}
                pt={'6px'}
                pb={'10px'}
              >
                <Text opacity={0.5}>Total</Text>
                <Text
                  fontSize={'48px'}
                  lineHeight={'48px'}
                  fontWeight={'bold'}
                  color={'primary'}
                >
                  {fn(checkoutData?.total) || 0}
                </Text>
              </VStack>
              <Checkout />
            </VStack>
          </VStack>
        </HStack>
      </VStack>
    </HStack>
  );
}
