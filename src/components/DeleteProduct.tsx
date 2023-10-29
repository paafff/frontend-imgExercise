import React from 'react';
import { Button } from '@/components/ui/button';
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '@/components/ui/dialog';
import axios from 'axios';

type Product = {
  id: number;
  name: string;
  uuid: string;
  price: number;
};
const DeleteProduct = ({ propsProduct }: { propsProduct: Product }) => {
  const handleDeleteProduct = async (uuid: string) => {
    await axios.delete(`http://localhost:5000/product/${uuid}`);
    window.location.reload();
  };

  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button variant="destructive">Delete</Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-md">
        <DialogHeader>
          <DialogTitle>Delete Product</DialogTitle>
          {/* <DialogDescription></DialogDescription> */}
        </DialogHeader>
        <div className="flex items-center space-x-2">
          Are sure to delete {propsProduct.name}?
        </div>
        <DialogFooter className="sm:justify-end">
          <DialogClose asChild>
            <Button className="bg-gray-600 text-gray-50">Cancel</Button>
          </DialogClose>
          <DialogClose asChild>
            <Button
              className="bg-red-600 hover:bg-red-700"
              onClick={() => {
                handleDeleteProduct(propsProduct.uuid);
              }}
            >
              Delete
            </Button>
          </DialogClose>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
};

export default DeleteProduct;
