import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
  DialogClose,
} from '../../src/components/ui/dialog';
import axios from 'axios';

type Product = {
  id: number;
  uuid: string;
  name: string;
  price: number;
};

const UpdateProduct = ({ propsProduct }: { propsProduct: Product }) => {
  const [name, setName] = useState(propsProduct.name);
  const [price, setPrice] = useState(propsProduct.price);
  const [imageOne, setImageOne] = useState(null);
  const [imageTwo, setImageTwo] = useState(null);

  const uuid = propsProduct.uuid;

  const handleUpdateProduct = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    try {
      const formProductData = new FormData();
      formProductData.append('name', name);
      formProductData.append('price', price);
      formProductData.append('imageOne', imageOne);
      formProductData.append('imageTwo', imageTwo);

      await axios.patch(
        `http://localhost:5000/product/${uuid}`,
        formProductData,
        { headers: { 'Content-Type': 'multipart/form-data' } }
      );

      window.location.reload();
      console.log('produk sukses diperbarui');
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button className="bg-gray-600 text-gray-50">Update </Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[500px]">
        <DialogHeader>
          <DialogTitle>Update Product</DialogTitle>
          <DialogDescription>Update your product here</DialogDescription>
        </DialogHeader>
        <form
        // onSubmit={handleUpdateProduct}
        >
          <div className="md:flex mb-6">
            <div className="md:w-1/3">
              <label
                className="block text-gray-600 font-bold md:text-left mb-3 md:mb-0 pr-4"
                htmlFor="my-textfield"
              >
                Product Name
              </label>
            </div>
            <div className="md:w-2/3">
              <input
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500  w-full p-2 "
                placeholder="Product Name"
                required
              />
              <p className="py-2 text-sm text-gray-600">
                Write your product name for easy searching by buyers.
              </p>
            </div>
          </div>

          <div className="md:flex mb-6">
            <div className="md:w-1/3">
              <label
                className="block text-gray-600 font-bold md:text-left mb-3 md:mb-0 pr-4"
                htmlFor="my-textfield"
              >
                Product Price
              </label>
            </div>
            <div className="md:w-2/3">
              <input
                type="number"
                value={price}
                onChange={(e) => setPrice(e.target.value)}
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500  w-full p-2"
                placeholder="Rp. -"
                required
              />
              <p className="py-2 text-sm text-gray-600">
                Input the price of your product without using periods. For
                example, 1000 instead of 1.000.
              </p>
            </div>
          </div>

          <div className="md:flex mb-6">
            <div className="md:w-1/3">
              <label
                className="block text-gray-600 font-bold md:text-left mb-3 md:mb-0 pr-4"
                htmlFor="my-textfield"
              >
                Product Image 1
              </label>
            </div>
            <div className="md:w-2/3">
              <input
                type="file"
                // value={imageOne}
                onChange={(e) => setImageOne(e.target.files[0])}
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500  w-full p-2"
                placeholder="Rp. -"
                required
              />
              <p className="py-2 text-sm text-gray-600">
                Select a product image (format: JPG, PNG, or JPEG) with a 1:1
                aspect ratio.
              </p>
            </div>
          </div>

          <div className="md:flex mb-6">
            <div className="md:w-1/3">
              <label
                className="block text-gray-600 font-bold md:text-left mb-3 md:mb-0 pr-4"
                htmlFor="my-textfield"
              >
                Product Image 2
              </label>
            </div>
            <div className="md:w-2/3">
              <input
                type="file"
                // value={imageTwo}
                onChange={(e) => setImageTwo(e.target.files[0])}
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500  w-full p-2"
                placeholder="Rp. -"
                required
              />
              <p className="py-2 text-sm text-gray-600">
                Select a product image (format: JPG, PNG, or JPEG) with a 1:1
                aspect ratio.
              </p>
            </div>
          </div>

          <DialogFooter>
            <DialogClose>
              <div className="md:flex flex-row md:items-center">
                {/* <div className="md:w-1/3">aaa</div> */}
                {/* <div className="md:w-2/3 flex justify-end"> */}
                {/* button */}
                <button type="submit" onClick={handleUpdateProduct}>
                  <a
                    href="#_"
                    className="relative inline-flex items-center justify-end px-6 py-3 overflow-hidden font-medium transition-all bg-gray-500 rounded-xl group"
                  >
                    <span className="absolute top-0 right-0 inline-block w-4 h-4 transition-all duration-500 ease-in-out bg-gray-700 rounded group-hover:-mr-4 group-hover:-mt-4">
                      <span className="absolute top-0 right-0 w-5 h-5 rotate-45 translate-x-1/2 -translate-y-1/2 bg-white"></span>
                    </span>
                    <span className="absolute bottom-0 left-0 w-full h-full transition-all duration-500 ease-in-out delay-200 -translate-x-full translate-y-full bg-gray-600 rounded-2xl group-hover:mb-12 group-hover:translate-x-0"></span>
                    <span className="relative w-full text-left text-white transition-colors duration-200 ease-in-out group-hover:text-white">
                      Update Product
                    </span>
                  </a>
                </button>
                {/* button */}
                {/* </div> */}
              </div>
            </DialogClose>
          </DialogFooter>
        </form>
      </DialogContent>
    </Dialog>
  );
};

export default UpdateProduct;
