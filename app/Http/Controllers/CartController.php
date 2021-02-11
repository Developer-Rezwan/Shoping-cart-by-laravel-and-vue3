<?php

namespace App\Http\Controllers;

use App\Models\Cart;
use Illuminate\Http\Request;

class CartController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        return Cart::with('product')
        ->orderBy('updated_at' , 'desc')
        ->get();
    }

    public function store(Request $request)
    {
        $item = Cart::where('product_id' , $request->product_id)->first();
        if(isset($item)){
            $item->quantity += $request->quantity;
            $item->save();
        }else{
           Cart::create($request->only('quantity', 'product_id'));
           return response()->json([
                'success'   => true
            ] , 200);
        }
    }

    public function destroy($product_id)
    {
        Cart::where('product_id', $product_id)
        ->delete($product_id);
        return response(null, 200);
    }

    public function destroyAll(){
        Cart::truncate();
    }
}
