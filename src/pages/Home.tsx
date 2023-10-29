import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import AddProduct from '@/components/AddProduct';
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Layout from './Layout';
import UpdateProduct from '@/components/UpdateProduct';
import DeleteProduct from '@/components/DeleteProduct';

type Product = {
  id: number;
  uuid: string;
  name: string;
  price: number;
  image_url1: string;
  image_url2: string;
};

const Home = () => {
  const [products, setProducts] = useState<Product[]>([]);

  const getProducts = async () => {
    try {
      const response = await axios.get(`http://localhost:5000/products`);
      setProducts(response.data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getProducts();
    console.log(products);
  }, []);

  return (
    <Layout>
      {/* <div className='py-10'> */}

      <div className="py-5">
        <AddProduct />
      </div>

      <div className="justify-center flex flex-wrap space-x-5">
        {products.map((product) => (
          //map
          <Card className="w-[380px]">
            <CardHeader>
              <CardTitle>{product.name}</CardTitle>
              <CardDescription>{product.price}</CardDescription>
            </CardHeader>
            <CardContent className="grid gap-4">
              <div className=" flex flex-col items-center space-x-4 rounded-md border p-4">
                {/* <BellRing /> */}
                <div className="flex-1 space-y-1">
                  <img
                    className="object-cover h-[150px] w-[300px]"
                    src={product.image_url1}
                  />
                  <img
                    className="object-cover h-[150px] w-[300px]"
                    src={product.image_url2}
                  />
                </div>

                {/* <Switch /> */}
              </div>
              <div>
                <p>Description</p>
                {/* {notifications.map((notification, index) => (
                <div
                  key={index}
                  className="mb-4 grid grid-cols-[25px_1fr] items-start pb-4 last:mb-0 last:pb-0"
                >
                  <span className="flex h-2 w-2 translate-y-1 rounded-full bg-sky-500" />
                  <div className="space-y-1">
                    <p className="text-sm font-medium leading-none">
                      {notification.title}
                    </p>
                    <p className="text-sm text-muted-foreground">
                      {notification.description}
                    </p>
                  </div>
                </div>
              ))} */}
              </div>
            </CardContent>
            <CardFooter className='justify-center space-x-5'>
              <UpdateProduct propsProduct={product} />
              <DeleteProduct propsProduct={product} />
              {/* <Button className="w-full">
                <p>lalaaa</p>
              </Button> */}
            </CardFooter>
          </Card>
          //map
        ))}
      </div>
      {/* </div> */}
    </Layout>
  );
};

export default Home;
