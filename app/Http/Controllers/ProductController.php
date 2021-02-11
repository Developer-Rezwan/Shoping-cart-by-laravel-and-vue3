<?php

namespace App\Http\Controllers;

use App\Models\Product;


class ProductController extends Controller
{
    public function index()
    {
        return Product::all();
    }

    public function show($product)
    {
        return Product::findOrFail($product);
       //return $product;
    }
}
